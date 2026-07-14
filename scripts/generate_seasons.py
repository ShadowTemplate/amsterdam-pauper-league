#!/usr/bin/env python3
r"""
Generate season summary files from event data.
Reads from src/lib/data/events/ and outputs to src/lib/data/seasons/{year}.ts

Only events whose name contains "° Leg" count towards a season's stats and
standings - one-off/special events (Stroopwafel IPT, Invitational, ...) are
excluded, matching how the league has always scored these.

Standings points are a player's best `bestOfCap` leg results (per FAQ, for
2026+: "best 7 of 8 events"; a season can run more than 8 legs, so this is
applied as "best N of however many a player played"). Players with
`bestOfCap` or fewer results have all of them counted. `bestOfCap` is
per-season, manually-curated in data/seasons_info.json (see below) - past
seasons (2024, 2025) set it to null/absent, meaning uncapped, matching how
they were originally scored.

Byes/flights (LeagueStanding.flight/.bye) cannot be derived from match
results - there's no discoverable rule in the data (see project memory).
They're sourced from a manually-curated file: data/seasons_info.json
  {
    "2024": {
      "awards": [
        {"playerSlug": "bram_deppenbroek", "flight": true, "bye": true}
      ],
      "status": "completed",
      "bestOfCap": null
    }
  }
If a year is absent from that file, no standing gets flight/bye for it,
and its standings are uncapped (every leg result counts). This script
reads "awards" and "bestOfCap" - "status" ("ongoing"/"completed") is read
by the website (src/lib/current-season.ts) to pick the current season and
build the list of years with pages; it plays no role in generation here.

stats.byesUnlocked is computed from attendance (see compute_byes_unlocked)
- it is NOT who receives the byes, only how many are unlocked for the
season. Who actually gets them is still manual, via seasons_info.json above.

Usage:
  python3 scripts/generate_seasons.py
"""

import json
import math
import re
from collections import defaultdict
from pathlib import Path
from utils import normalize_slug, js_str, extract_json_from_ts


EVENTS_DIR = Path("src/lib/data/events")
SEASONS_DIR = Path("src/lib/data/seasons")
SEASONS_INFO_FILE = Path("data/seasons_info.json")


def load_leg_events_for_year(year: int) -> list:
    """Load every numbered-leg event file for a year, parsed into dicts.
    Excludes special events (anything without "° Leg" in its name).
    """
    events = []

    for event_file in sorted(EVENTS_DIR.glob(f"{year}-*.ts")):
        content = event_file.read_text(encoding='utf-8-sig')

        event = extract_json_from_ts(content, 'event')
        if not event or "° Leg" not in event.get('name', ''):
            continue

        parsed = {
            'date': event_file.stem,
            'name': event['name'],
            'status': event.get('status'),
            'playerCount': event.get('playerCount'),
            'standings': [],
        }

        if event.get('status') == 'past':
            detail = extract_json_from_ts(content, 'eventDetail')
            if detail:
                parsed['standings'] = detail.get('standings', [])

        events.append(parsed)

    return events


def load_seasons_info() -> dict:
    """Load the manually-curated byes/flights file, keyed by year string."""
    if not SEASONS_INFO_FILE.exists():
        return {}

    with open(SEASONS_INFO_FILE, 'r', encoding='utf-8-sig') as f:
        return json.load(f)


def load_awards(year: int, seasons_info: dict) -> list:
    """Get this year's manually-curated awards list, if any."""
    return seasons_info.get(str(year), {}).get('awards', [])


def load_best_of_cap(year: int, seasons_info: dict):
    """Get this year's manually-curated bestOfCap, if any. None (absent or
    explicit null) means uncapped - every leg result counts."""
    return seasons_info.get(str(year), {}).get('bestOfCap')


def compute_capped_points(events: list, cap: int = None) -> dict:
    """Return {player_name: points}, where points is the sum of a player's
    best `cap` matchPoints across the given events. Players with `cap` or
    fewer results have all of them counted. cap=None means uncapped (every
    result counts)."""
    points_per_event = defaultdict(list)
    for event in events:
        for standing in event['standings']:
            points_per_event[standing['player']].append(standing['matchPoints'])

    return {
        player: sum(sorted(points, reverse=True)[:cap])
        for player, points in points_per_event.items()
    }


def rank_players(events: list, cap: int = None) -> dict:
    """Return {player_name: position} for the standings these events alone
    would produce (same points rule + tie-break rule as the real
    standings)."""
    points_by_player = compute_capped_points(events, cap)
    ranked = sorted(points_by_player.items(), key=lambda kv: (-kv[1], kv[0].lower()))
    return {player: i for i, (player, _) in enumerate(ranked, start=1)}


def compute_byes_unlocked(player_counts: list) -> int:
    """Byes unlocked for a season, based on average leg attendance.
    If 8+ legs have been played, the least-attended leg is dropped first
    (so one anomalously small leg can't drag the average down). If fewer
    than 8 legs have been played, the average needs at least 7 values, so
    it's zero-filled up to 7 (this pulls the average down early in a
    season, which is intentional - byes shouldn't unlock off 1-2 big legs).
    avg >= 64 -> 3 byes, >= 32 -> 2 byes, >= 16 -> 1 bye, else 0.
    """
    counts = list(player_counts)
    if len(counts) >= 8:
        counts.remove(min(counts))
    elif len(counts) < 7:
        counts += [0] * (7 - len(counts))

    average = math.floor(sum(counts) / len(counts)) if counts else 0

    if average >= 64:
        return 3
    if average >= 32:
        return 2
    if average >= 16:
        return 1
    return 0


def build_season(year: int, seasons_info: dict) -> dict:
    events = load_leg_events_for_year(year)
    past_events = [e for e in events if e['status'] == 'past']
    cap = load_best_of_cap(year, seasons_info)

    # ── Standings: best `cap` leg results per player (all of them if no cap
    # or <= cap results) ─────────────────────────────────────────────────
    points_by_player = compute_capped_points(past_events, cap)

    awards = load_awards(year, seasons_info)
    award_by_slug = {a['playerSlug']: a for a in awards}

    standings = []
    for player, points in points_by_player.items():
        slug = normalize_slug(player)
        entry = {'player': player, 'playerSlug': slug, 'points': points}
        award = award_by_slug.get(slug)
        if award:
            if award.get('flight'):
                entry['flight'] = True
            if award.get('bye'):
                entry['bye'] = True
        standings.append(entry)

    # Rank by points descending; ties broken alphabetically for determinism.
    standings.sort(key=lambda s: (-s['points'], s['player'].lower()))

    # positionChange: how a player's rank moved after the most recently
    # played leg, vs. where they stood on points from every leg before it.
    # Positive = moved up (better), negative = moved down, 0 = held.
    # Omitted entirely for a player with no previous ranking (their first
    # leg, or a season with 0-1 legs played so far - nothing to compare to).
    previous_positions = rank_players(past_events[:-1], cap) if past_events else {}

    for i, entry in enumerate(standings, start=1):
        entry['position'] = i
        prev_position = previous_positions.get(entry['player'])
        if prev_position is not None:
            entry['positionChange'] = prev_position - i

    # ── Stats ─────────────────────────────────────────────────────────────
    player_counts = [e['playerCount'] for e in past_events]
    latest_event = max(past_events, key=lambda e: e['date']) if past_events else None

    stats = {
        'uniquePlayers': len(points_by_player),
        'averagePlayers': math.floor(sum(player_counts) / len(player_counts)) if player_counts else 0,
        'eventsCompleted': len(past_events),
        'totalEvents': len(events),
        'latestAttendance': latest_event['playerCount'] if latest_event else 0,
        'byesUnlocked': compute_byes_unlocked(player_counts),
    }

    return {'year': year, 'stats': stats, 'standings': standings}


def render_season_ts(season: dict) -> str:
    year = season['year']
    stats = season['stats']

    lines = [
        'import type { LeagueSeason } from "@/types";',
        '',
        f'export const season{year}: LeagueSeason = {{',
        f'  year: {year},',
        '  stats: {',
        f'    uniquePlayers: {stats["uniquePlayers"]},',
        f'    averagePlayers: {stats["averagePlayers"]},',
        f'    eventsCompleted: {stats["eventsCompleted"]},',
        f'    totalEvents: {stats["totalEvents"]},',
        f'    latestAttendance: {stats["latestAttendance"]},',
        f'    byesUnlocked: {stats["byesUnlocked"]},',
        '  },',
        '  standings: [',
    ]

    for s in season['standings']:
        parts = [
            f'position: {s["position"]}',
            f'player: {js_str(s["player"])}',
            f'playerSlug: {js_str(s["playerSlug"])}',
            f'points: {s["points"]}',
        ]
        if s.get('flight'):
            parts.append('flight: true')
        if s.get('bye'):
            parts.append('bye: true')
        if 'positionChange' in s:
            parts.append(f'positionChange: {s["positionChange"]}')
        lines.append(f'    {{ {", ".join(parts)} }},')

    lines.append('  ],')
    lines.append('};')

    return '\n'.join(lines) + '\n'


def main():
    print("Generating season files from event data...\n")

    SEASONS_DIR.mkdir(parents=True, exist_ok=True)
    seasons_info = load_seasons_info()

    years = sorted({int(m.group(1)) for f in EVENTS_DIR.glob("*.ts")
                     if (m := re.match(r'(\d{4})-', f.stem))})

    for year in years:
        print(f"📅 {year}...", end=" ", flush=True)
        season = build_season(year, seasons_info)

        if not season['standings']:
            print("⏭️  Skipping - no completed leg events")
            continue

        output_file = SEASONS_DIR / f"{year}.ts"
        output_file.write_text(render_season_ts(season), encoding='utf-8')

        awards_note = "" if str(year) in seasons_info else " (no awards entry - no flight/bye)"
        print(f"✓ ({season['stats']['eventsCompleted']}/{season['stats']['totalEvents']} legs, "
              f"{len(season['standings'])} players){awards_note}")

    print(f"\n✅ Done")


if __name__ == "__main__":
    main()
