#!/usr/bin/env python3
r"""
Fetch tournament data from the topdeck.gg API (see https://topdeck.gg/docs/tournaments-v2)
and write it into data/topdeck/{standings,players,rounds,decks}/, in the exact format the
generate_*.py pipeline (see update_website.py) already expects - so the manual "export 3
CSVs from topdeck.gg, paste them into data/, scrape decklists separately" step can be
skipped entirely for any event this league runs on topdeck.gg.

Usage:
  python3 scripts/fetch_topdeck_data.py
      Auto-discover: fetch every completed tournament owned by this API key that doesn't
      already have a standings CSV in data/topdeck/standings/.

  python3 scripts/fetch_topdeck_data.py <TID>
      Fetch one tournament by ID. Standings, rounds and decklists are all public - this
      works for ANY topdeck.gg tournament, not just ones this API key organizes, so it
      also works to backfill historical events. (Find a TID from a topdeck.gg tournament
      URL, e.g. topdeck.gg/t/<TID>, or from the auto-discover output above.)

  python3 scripts/fetch_topdeck_data.py <TID> --force
      Overwrite existing files for that tournament.

Notes:
  - Standings, rounds and decklists all come from public API endpoints and work for any
    TID. The standings endpoint returns each player's full decklist (deckObj) alongside
    their placement - verified card-for-card, quantity-for-quantity identical to what
    download_topdeck_decks.py used to scrape from individual deck pages, so there's no
    need to hit topdeck.gg per-deck at all.
  - Player names are run through utils.strip_pronoun_suffix (the same helper
    generate_players.py already relies on) before being written anywhere - some players
    type a pronoun tag straight into the topdeck.gg "Name" field (e.g. "Max Roovers
    He/They"), and leaving that in would make the players CSV disagree with the
    standings CSV / decks.json / archetypes.json, which all key off the same name.
  - The players CSV's Email/Tags columns come from the staff-only /attendees endpoint,
    which only succeeds (200) for tournaments this API key organizes - it 403s for
    others. When it's unavailable, the players CSV is still written correctly (Player
    name + Decklist URL from standings), just with Email/Tags left blank. Neither
    field is actually read by the generate_*.py scripts (only Player and Decklist are),
    so this never blocks the pipeline.
  - Draws are reported by the API with no game score (winner_games/loser_games are
    null) - historically 236/237 draws in this league were played out 1-1, so that's
    the default assumed here. A warning is only printed for last-round draws, since
    that's where an intentional draw (an "ID" - players agreeing to draw without
    playing, e.g. 0-0) is actually plausible: even there it's been the real score
    only once ever (out of 42), and never in an earlier round. Fix the score by hand
    if a warned draw turns out to be one - compare against topdeck.gg.
  - Archetype tagging (data/archetypes/{Event Name}.json) is NOT handled here anymore -
    run scripts/fetch_archetypes_data.py afterwards to seed/classify archetypes for any
    newly-written decks.json.
"""

import argparse
import csv
import json
import sys
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

import requests

from utils import strip_pronoun_suffix

API_BASE = "https://topdeck.gg/api/v2"
SECRETS_FILE = Path("data/secrets.json")
TOPDECK_DIR = Path("data/topdeck")
TZ = ZoneInfo("Europe/Amsterdam")


def load_api_key() -> str:
    with open(SECRETS_FILE) as f:
        return json.load(f)["topdeck_api_key"]


def api_get(session, path):
    resp = session.get(f"{API_BASE}{path}")
    if resp.status_code in (403, 404):
        return None
    resp.raise_for_status()
    return resp.json()


def fmt_pct(value) -> str:
    """Match topdeck.gg's own display formatting: round to 2 decimals, no trailing zeros."""
    pct = round(value * 100, 2)
    if pct == int(pct):
        return f"{int(pct)}%"
    return f"{pct:.2f}".rstrip('0').rstrip('.') + "%"


def round_csv_filename(event_name: str, round_num: int) -> str:
    escaped = event_name.replace(' ', '_').replace('–', '_').replace('°', '_')
    return f"{escaped}_Round{round_num}.csv"


def deck_section_to_list(section):
    return [{"quantity": info["count"], "name": name} for name, info in (section or {}).items()]


def write_csv(path: Path, header, rows, *, bom: bool, crlf: bool, quote_all: bool):
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8-sig' if bom else 'utf-8', newline='') as f:
        writer = csv.writer(f, lineterminator='\r\n' if crlf else '\n',
                             quoting=csv.QUOTE_ALL if quote_all else csv.QUOTE_MINIMAL)
        writer.writerow(header)
        writer.writerows(rows)


def resolve_winner(table, p0, p1, event_name, round_num, table_idx, is_last_round):
    winner_id = table.get("winner_id")
    winner_name = table.get("winner")
    winner_games, loser_games = table.get("winner_games"), table.get("loser_games")

    if winner_name == "Draw" or winner_id == "Draw":
        if is_last_round:
            print(f"  ⚠️  Round {round_num} Table {table_idx}: draw between "
                  f"{p0['name'].strip()} and {p1['name'].strip()} - the API doesn't report a "
                  f"game score for draws, defaulting to 1-1. This is the last round, where an "
                  f"intentional draw (ID) is most likely - if this was one, fix the score by hand.")
        return 1, 1

    if winner_id == p0.get("id"):
        return winner_games, loser_games
    if winner_id == p1.get("id"):
        return loser_games, winner_games
    if winner_name == p0["name"]:
        return winner_games, loser_games
    if winner_name == p1["name"]:
        return loser_games, winner_games

    raise ValueError(f"{event_name} Round {round_num} Table {table_idx}: "
                      f"could not resolve winner from {table}")


def fetch_tournament(session, tid: str, event_name: str, date_str: str, force: bool):
    standings_path = TOPDECK_DIR / "standings" / f"{event_name}_{date_str}.csv"
    players_path = TOPDECK_DIR / "players" / f"{event_name}_{date_str}.csv"

    if standings_path.exists() and not force:
        print(f"  ⏭  {standings_path} already exists, skipping (use --force to overwrite)")
        return

    standings = api_get(session, f"/tournaments/{tid}/standings")
    if not standings:
        print(f"  ❌ No standings data for {tid}")
        return

    standings_rows = []
    players_rows = []
    row_by_id = {}
    deck_entries = []
    for s in standings:
        name = strip_pronoun_suffix(s["name"].strip())
        standings_rows.append([
            str(s["standing"]), name, str(s["points"]),
            fmt_pct(s["opponentWinRate"]), fmt_pct(s["gameWinRate"]), fmt_pct(s["opponentGameWinRate"]),
        ])
        deck_url = f"https://topdeck.gg/deck/{tid}/{s['id']}"
        row = [name, "", deck_url, ""]
        players_rows.append(row)
        row_by_id[s["id"]] = row

        deck_obj = s.get("deckObj")
        if deck_obj:
            main_deck = deck_section_to_list(deck_obj.get("Mainboard"))
            sideboard = deck_section_to_list(deck_obj.get("Sideboard"))
            if main_deck or sideboard:
                deck_entries.append({
                    "id": s["id"], "url": deck_url, "pilotName": name,
                    "mainDeck": main_deck, "sideboard": sideboard,
                })

    # Staff-only endpoint - only succeeds for tournaments this API key organizes.
    # Fills in real Email/Tags; harmless to skip since neither is read downstream.
    attendees = api_get(session, f"/tournaments/{tid}/attendees")
    if attendees:
        for a in attendees:
            row = row_by_id.get(a["uid"])
            if row:
                row[1] = a.get("email") or ""
                row[3] = a.get("status") or ""

    write_csv(standings_path, ["Rank", "Player", "Pts", "OW%", "GW%", "OGW%"], standings_rows,
              bom=True, crlf=True, quote_all=True)
    write_csv(players_path, ["Player", "Email", "Decklist", "Tags"], players_rows,
              bom=True, crlf=True, quote_all=True)
    print(f"  ✅ {standings_path}")
    print(f"  ✅ {players_path}")

    decks_path = TOPDECK_DIR / "decks" / f"{event_name}.json"
    decks_path.parent.mkdir(parents=True, exist_ok=True)
    with open(decks_path, 'w', encoding='utf-8') as f:
        json.dump({"event": event_name, "decks": deck_entries}, f, indent=2, ensure_ascii=False)
    print(f"  ✅ {decks_path} ({len(deck_entries)} decks)")

    rounds = api_get(session, f"/tournaments/{tid}/rounds") or []
    last_round_num = max((r["round"] for r in rounds), default=None)
    for round_obj in rounds:
        round_num = round_obj["round"]
        is_last_round = round_num == last_round_num
        rows = []
        for idx, table in enumerate(round_obj["tables"], start=1):
            players = table["players"]
            p0 = players[0]
            if table.get("status") == "Bye" or len(players) == 1:
                rows.append([str(idx), p0["name"].strip(), "-", "-", "-"])
                continue
            p1 = players[1]
            p0_wins, p1_wins = resolve_winner(table, p0, p1, event_name, round_num, idx, is_last_round)
            rows.append([str(idx), p0["name"].strip(), str(p0_wins), p1["name"].strip(), str(p1_wins)])

        round_path = TOPDECK_DIR / "rounds" / round_csv_filename(event_name, round_num)
        write_csv(round_path, ["Table", "Player 1", "P1 Wins", "Player 2", "P2 Wins"], rows,
                  bom=False, crlf=False, quote_all=False)
        print(f"  ✅ {round_path}")


def discover_tournaments(session):
    tournaments = api_get(session, "/me/tournaments?filter=all") or []
    return [t for t in tournaments if t.get("status") == "Complete"]


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("tid", nargs="?",
                         help="Tournament ID to fetch. Omit to auto-discover completed "
                              "tournaments owned by this API key.")
    parser.add_argument("--force", action="store_true", help="Overwrite existing CSV files.")
    args = parser.parse_args()

    session = requests.Session()
    session.headers.update({"Authorization": load_api_key(), "Content-Type": "application/json"})

    if args.tid:
        info = api_get(session, f"/tournaments/{args.tid}/info")
        if not info:
            print(f"❌ Tournament {args.tid} not found")
            sys.exit(1)
        targets = [info]
    else:
        targets = discover_tournaments(session)
        if not targets:
            print("No completed tournaments found for this API key.")
            return

    for info in targets:
        tid = info["tid"]
        event_name = info["name"]
        date_str = datetime.fromtimestamp(info["startDate"], TZ).strftime("%Y-%m-%d")
        print(f"\n{event_name} ({tid})")
        fetch_tournament(session, tid, event_name, date_str, args.force)


if __name__ == "__main__":
    main()
