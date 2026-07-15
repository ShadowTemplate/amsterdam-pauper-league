#!/usr/bin/env python3
"""
Generate players.ts from round CSV files and archetype data.
Reconstructs player match history from round-by-round data.
Run from project root: python3 scripts/generate_players.py
"""

import json
import csv
import re
from pathlib import Path
from collections import defaultdict
from utils import (
    normalize_slug, js_str, extract_event_name, extract_date_from_filename,
    load_archetypes_json, load_players_csv, load_standings_csv
)

TOPDECK_DIR = Path("data/topdeck")
STANDINGS_DIR = TOPDECK_DIR / "standings"
PLAYERS_DIR = TOPDECK_DIR / "players"
ROUNDS_DIR = TOPDECK_DIR / "rounds"
ARCHETYPES_DIR = Path("data/archetypes")
OUTPUT_FILE = Path("src/lib/data/players.ts")


def find_round_files_for_event(event_name: str) -> dict:
    """Find and load all round data for an event by matching leg number and year.
    Handles formats like:
    - "Dutch Pauper League – 2° Leg – 2026"
    - "Amsterdam Pauper League – 4° Leg – 2026"
    - "Stroopwafel IPT"
    """
    rounds_data = {}  # round_num -> list of matches

    # Extract organization name and check for leg format
    # E.g., "Dutch Pauper League – 2° Leg – 2026" -> org="Dutch Pauper League", leg=2, year=2026
    org_name = event_name.split('–')[0].strip()
    # Escape org name: spaces and special chars to underscores
    org_name_escaped = org_name.replace(' ', '_').replace('–', '_').replace('°', '_')

    leg_match = re.search(r'(\d+)°\s+Leg\s+–\s+(\d{4})', event_name)

    if leg_match:
        leg_num = leg_match.group(1)
        year = leg_match.group(2)
        # Match files like: Dutch_Pauper_League___2__Leg___2026_Round*.csv
        # or: Amsterdam_Pauper_League___4__Leg___2026_Round*.csv
        # The leg number must be bounded by "_...__Leg" on both sides - a bare
        # "*{leg_num}*Leg*" wildcard would let leg "1" match inside leg "10"
        # too (both contain the digit "1"), silently blending two legs'
        # rounds together for whichever round numbers only one of them has.
        pattern = f"*_{leg_num}__Leg_*{year}*Round*.csv"
        round_files = sorted(ROUNDS_DIR.glob(pattern))
    else:
        # For events without leg format (like Stroopwafel IPT), match by organization name
        pattern = f"{org_name_escaped}*Round*.csv"
        round_files = sorted(ROUNDS_DIR.glob(pattern))

    # Find all round files that might match this event
    for round_file in round_files:

        match = re.search(r'_Round(\d+)\.csv$', round_file.name)
        if not match:
            continue

        round_num = int(match.group(1))
        matches = []

        with open(round_file, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                table = row.get('Table', '').strip()
                player1 = row.get('Player 1', '').strip()
                p1_wins = row.get('P1 Wins', '').strip()
                player2 = row.get('Player 2', '').strip()
                p2_wins = row.get('P2 Wins', '').strip()

                if not table or not player1:
                    continue

                matches.append({
                    'table': table,
                    'player1': player1,
                    'p1_wins': p1_wins,
                    'player2': player2,
                    'p2_wins': p2_wins,
                })

        rounds_data[round_num] = matches

    return rounds_data


def get_match_result(p1_wins: str, p2_wins: str, is_player1: bool) -> str:
    """Determine match result (Win/Loss/Draw/Bye) based on win counts."""
    # Handle byes (both scores are "-")
    if p1_wins == "-" and p2_wins == "-":
        return "Bye"

    # Try to convert to int
    try:
        p1 = int(p1_wins) if p1_wins != "-" else None
        p2 = int(p2_wins) if p2_wins != "-" else None
    except ValueError:
        return "Unknown"

    if p1 is None or p2 is None:
        return "Unknown"

    if is_player1:
        if p1 > p2:
            return "Win"
        elif p1 < p2:
            return "Loss"
        else:
            return "Draw"
    else:
        if p2 > p1:
            return "Win"
        elif p2 < p1:
            return "Loss"
        else:
            return "Draw"


def build_player_details(events_data: dict) -> dict:
    """Build PLAYER_DETAILS from rounds and standings data."""
    player_details = defaultdict(lambda: {
        'name': '',
        'slug': '',
        'stats': {'wins': 0, 'losses': 0, 'draws': 0, 'byes': 0},
        'results': []
    })

    # Process each event
    for event_key, event_info in events_data.items():
        event_slug = event_info['event_slug']
        event_name = event_info['event_name']
        standings = event_info['standings']
        rounds_data = event_info['rounds_data']
        archetypes = event_info['archetypes']
        player_to_deck_id = event_info['player_to_deck_id']

        # Build a map of player -> standing info (position) from standings CSV
        standing_map = {}
        for standing in standings:
            player = standing.get('Player', '').strip()
            position = standing.get('Rank', '').strip()

            if player and position:
                standing_map[player] = {
                    'position': int(position),
                    'deck': '',  # Will be filled from archetypes mapping
                    'deck_slug': '',
                }

        # Process rounds to build player results
        for round_num, matches in sorted(rounds_data.items()):
            for match in matches:
                player1 = match['player1']
                player2 = match['player2']
                p1_wins = match['p1_wins']
                p2_wins = match['p2_wins']

                # Process player 1
                if player1 != "-" and player1 in standing_map:
                    player_slug = normalize_slug(player1)
                    player_details[player_slug]['name'] = player1
                    player_details[player_slug]['slug'] = player_slug

                    result = get_match_result(p1_wins, p2_wins, True)

                    # Store match for later processing
                    if 'event_matches' not in player_details[player_slug]:
                        player_details[player_slug]['event_matches'] = defaultdict(list)

                    player_details[player_slug]['event_matches'][event_slug].append({
                        'round': round_num,
                        'opponent': player2,
                        'opponent_deck': '',
                        'result': result,
                    })

                # Process player 2
                if player2 != "-" and player2 in standing_map:
                    player_slug = normalize_slug(player2)
                    player_details[player_slug]['name'] = player2
                    player_details[player_slug]['slug'] = player_slug

                    result = get_match_result(p1_wins, p2_wins, False)

                    if 'event_matches' not in player_details[player_slug]:
                        player_details[player_slug]['event_matches'] = defaultdict(list)

                    player_details[player_slug]['event_matches'][event_slug].append({
                        'round': round_num,
                        'opponent': player1,
                        'opponent_deck': '',
                        'result': result,
                    })

        # Now fill in event details and opponent decks
        for player_slug, player_info in player_details.items():
            if event_slug not in player_info.get('event_matches', {}):
                continue

            player_name = player_info['name']
            if player_name not in standing_map:
                continue

            standing = standing_map[player_name]
            position = standing['position']

            # Get player's deck from archetype mapping via deck_id
            player_deck_id = player_to_deck_id.get(player_name)
            deck = "Unknown"
            deck_slug = "unknown"
            if player_deck_id and player_deck_id in archetypes:
                deck = archetypes[player_deck_id]
                deck_slug = normalize_slug(deck)

            # Build round results with opponent decks
            rounds = []
            for match in player_info['event_matches'][event_slug]:
                opponent = match['opponent']
                result = match['result']

                opponent_deck = "-"
                opponent_deck_slug = ""
                if opponent != "-" and opponent in standing_map:
                    opp_standing = standing_map[opponent]
                    opponent_deck = opp_standing['deck']
                    opponent_deck_slug = opp_standing['deck_slug']

                    # Try to get opponent's archetype
                    opp_deck_id = player_to_deck_id.get(opponent)
                    if opp_deck_id and opp_deck_id in archetypes:
                        opponent_deck = archetypes[opp_deck_id]
                        opponent_deck_slug = normalize_slug(opponent_deck)

                opponent_slug = normalize_slug(opponent) if opponent != "-" else ""

                rounds.append({
                    'round': match['round'],
                    'opponentDeck': opponent_deck,
                    'opponentDeckSlug': opponent_deck_slug,
                    'opponentPilot': opponent,
                    'opponentPilotSlug': opponent_slug,
                    'result': result,
                })

            # Sort by round number in reverse order (latest round first)
            rounds.sort(key=lambda r: r['round'], reverse=True)

            # Add event result
            if 'results' not in player_info:
                player_info['results'] = []

            # Get deck_id for this player
            deck_id = player_to_deck_id.get(player_name, '')

            player_info['results'].append({
                'eventSlug': event_slug,
                'eventName': event_name,
                'position': position,
                'deckId': deck_id,
                'deck': deck,
                'deckSlug': deck_slug,
                'rounds': rounds,
            })

            # Update stats
            for round_data in rounds:
                result = round_data['result']
                if result == "Win":
                    player_info['stats']['wins'] += 1
                elif result == "Loss":
                    player_info['stats']['losses'] += 1
                elif result == "Draw":
                    player_info['stats']['draws'] += 1
                elif result == "Bye":
                    player_info['stats']['byes'] += 1

    return player_details


def main():
    print("Generating player details from round data...")

    # Find all standing files
    standings_files = sorted((STANDINGS_DIR).glob("*.csv"))
    print(f"Found {len(standings_files)} events")

    events_data = {}

    # Load data for each event
    for standings_file in standings_files:
        event_name = extract_event_name(standings_file.name)
        event_slug = extract_date_from_filename(standings_file.name)

        if not event_slug:
            print(f"  ⚠️  Skipping {event_name} (no date)")
            continue

        # Load standings
        standings = load_standings_csv(standings_file)

        # Find matching archetype and player files
        date_suffix = f"_{event_slug}"
        archetypes_file = ARCHETYPES_DIR / f"{event_name}.json"
        players_file = PLAYERS_DIR / f"{event_name}{date_suffix}.csv"

        if not archetypes_file.exists() or not players_file.exists():
            print(f"  ⚠️  Skipping {event_name} (missing files)")
            continue

        # Load data
        archetypes = load_archetypes_json(archetypes_file)
        player_to_deck_id = load_players_csv(players_file)
        rounds_data = find_round_files_for_event(event_name)

        if not rounds_data:
            print(f"  ⚠️  Skipping {event_name} (no round data)")
            continue

        events_data[event_slug] = {
            'event_slug': event_slug,
            'event_name': event_name,
            'standings': standings,
            'rounds_data': rounds_data,
            'archetypes': archetypes,
            'player_to_deck_id': player_to_deck_id,
        }

        print(f"  ✓ {event_name}")

    if not events_data:
        print("❌ No events found")
        return

    print(f"\nBuilding player details from {len(events_data)} events...")
    player_details = build_player_details(events_data)

    # Convert to list of player slugs
    players_list = sorted([
        {'slug': slug, 'name': info['name']}
        for slug, info in player_details.items()
        if info['name']
    ], key=lambda p: p['name'].lower())

    # Generate TypeScript output
    output_lines = [
        "import type { Player, PlayerDetail } from \"@/types\";",
        "",
        "export const PLAYERS: Player[] = [",
    ]

    for player in players_list:
        output_lines.append(
            f"  {{ slug: {js_str(player['slug'])}, name: {js_str(player['name'])} }},"
        )

    output_lines.append("];")
    output_lines.append("")
    output_lines.append("export const PLAYER_DETAILS: Record<string, PlayerDetail> = {")

    for player in players_list:
        slug = player['slug']
        info = player_details[slug]

        output_lines.append(f"  {js_str(slug)}: {{")
        output_lines.append(f"    slug: {js_str(slug)},")
        output_lines.append(f"    name: {js_str(info['name'])},")
        output_lines.append(f"    stats: {{ wins: {info['stats']['wins']}, losses: {info['stats']['losses']}, draws: {info['stats']['draws']}, byes: {info['stats']['byes']} }},")
        output_lines.append(f"    results: [")

        # Sort results by event date in reverse chronological order (newest first)
        sorted_results = sorted(info.get('results', []), key=lambda r: r['eventSlug'], reverse=True)

        for result in sorted_results:
            output_lines.append(f"      {{")
            output_lines.append(f"        eventSlug: {js_str(result['eventSlug'])},")
            output_lines.append(f"        eventName: {js_str(result['eventName'])},")
            output_lines.append(f"        position: {result['position']},")
            output_lines.append(f"        deckId: {js_str(result['deckId'])},")
            output_lines.append(f"        deck: {js_str(result['deck'])},")
            output_lines.append(f"        deckSlug: {js_str(result['deckSlug'])},")
            output_lines.append(f"        rounds: [")

            for round_data in result['rounds']:
                output_lines.append(f"          {{ round: {round_data['round']}, opponentDeck: {js_str(round_data['opponentDeck'])}, opponentDeckSlug: {js_str(round_data['opponentDeckSlug'])}, opponentPilot: {js_str(round_data['opponentPilot'])}, opponentPilotSlug: {js_str(round_data['opponentPilotSlug'])}, result: {js_str(round_data['result'])} }},")

            output_lines.append(f"        ],")
            output_lines.append(f"      }},")

        output_lines.append(f"    ],")
        output_lines.append(f"  }},")

    output_lines.append("};")

    output_content = "\n".join(output_lines)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(output_content)

    print(f"\n✅ Generated {OUTPUT_FILE}")
    print(f"   - {len(players_list)} players")
    print(f"   - {sum(len(p.get('results', [])) for p in player_details.values())} event participations")


if __name__ == "__main__":
    main()
