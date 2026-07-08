#!/usr/bin/env python3
"""
Generate archetypes.ts from data/archetypes/*.json and data/topdeck/*.csv files.
Run from project root: python3 scripts/generate_archetypes.py
"""

import json
import csv
import re
from pathlib import Path
from collections import defaultdict
from urllib.parse import urlparse

ARCHETYPES_DIR = Path("data/archetypes")
TOPDECK_DIR = Path("data/topdeck")
OUTPUT_FILE = Path("src/lib/data/archetypes.ts")


def extract_event_name(filename: str) -> str:
    """Extract event name from filename.
    E.g., 'archetypes_Dutch Pauper League – 1° Leg – 2024.json' -> 'Dutch Pauper League – 1° Leg – 2024'
    """
    # Remove prefix (archetypes_, standings_, players_) and suffix (.json, .csv)
    name = re.sub(r'^(archetypes_|standings_|players_)', '', filename)
    name = re.sub(r'\.(json|csv)$', '', name)
    return name


def load_archetypes_json(filepath: Path) -> dict:
    """Load archetype mapping from JSON file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


def load_players_csv(filepath: Path) -> dict:
    """Load players CSV and extract Player -> deck_id mapping."""
    player_to_deck_id = {}
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            player = row.get('Player', '').strip()
            decklist_url = row.get('Decklist', '').strip()
            if player and decklist_url:
                # Extract deck_id from URLs like:
                # - https://dutchpauperleague.nl/decks/DECK_ID
                # - https://topdeck.gg/deck/DECK_SLUG/DECK_ID
                # - https://topdeck.gg/deck/DECK_ID
                # Strategy: extract the last non-empty path component
                path = decklist_url.split('?')[0]  # Remove query params
                last_component = path.rstrip('/').split('/')[-1]
                if last_component:
                    player_to_deck_id[player] = last_component
    return player_to_deck_id


def load_standings_csv(filepath: Path) -> list:
    """Load standings CSV."""
    standings = []
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            standings.append(row)
    return standings


def find_event_ts_file(event_name: str) -> tuple:
    """Find the corresponding event TS file by event name."""
    events_dir = Path("src/lib/data/events")

    # Read event TS files to find matching event name
    for event_file in events_dir.glob("*.ts"):
        with open(event_file, 'r', encoding='utf-8') as f:
            content = f.read()
            if event_name in content:
                # Extract date from filename (YYYY-MM-DD)
                date_match = re.search(r'(\d{4}-\d{2}-\d{2})', event_file.name)
                if date_match:
                    return event_file, date_match.group(1)

    return None, None


def build_player_to_deck_slug_map(events_dir: Path = Path("src/lib/data/events")) -> dict:
    """Build a mapping of player -> deck_slug by reading event TS files."""
    player_to_deck_slug = {}
    for event_file in events_dir.glob("*.ts"):
        with open(event_file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Extract standing entries: player: "Player Name", ... deckSlug: "deck-slug"
            for match in re.finditer(r'player:\s*"([^"]+)".*?deckSlug:\s*"([^"]+)"', content, re.DOTALL):
                player = match.group(1)
                deck_slug = match.group(2)
                if player not in player_to_deck_slug:
                    player_to_deck_slug[player] = deck_slug
    return player_to_deck_slug


def normalize_slug(text: str) -> str:
    """Convert text to pauperformance.com-compatible slug format.
    Examples: "MonoR Madness" -> "monor_madness", "Jund Wildfire" -> "jund_wildfire"
    Pattern: lowercase, remove non-word chars except spaces, replace spaces with underscores
    """
    text = text.lower()
    # Remove non-word characters (keep only alphanumeric and spaces)
    text = re.sub(r'[^\w\s]', '', text)
    # Replace one or more spaces with a single underscore
    text = re.sub(r'\s+', '_', text)
    # Collapse multiple underscores into one
    text = re.sub(r'_+', '_', text)
    return text.strip('_')


def js_str(s) -> str:
    """Convert Python string to JS string literal."""
    if s is None:
        return '""'
    return json.dumps(str(s), ensure_ascii=False)


def main():
    print("Scanning for archetype and standings data...")

    # Find all archetype JSON files and match with standings CSVs
    archetype_files = sorted(ARCHETYPES_DIR.glob("*.json"))
    standings_files = sorted(TOPDECK_DIR.glob("standings_*.csv"))
    players_files = sorted(TOPDECK_DIR.glob("players_*.csv"))

    print(f"Found {len(archetype_files)} archetype files")
    print(f"Found {len(standings_files)} standings files")
    print(f"Found {len(players_files)} players files")

    # Build a mapping of event name to file paths
    event_data = {}  # event_name -> {archetypes, standings, players, event_slug}

    for arch_file in archetype_files:
        event_name = extract_event_name(arch_file.name)
        if event_name:
            if event_name not in event_data:
                event_data[event_name] = {}
            event_data[event_name]['archetypes'] = arch_file

    for standings_file in standings_files:
        event_name = extract_event_name(standings_file.name)
        if event_name:
            if event_name not in event_data:
                event_data[event_name] = {}
            event_data[event_name]['standings'] = standings_file

    for players_file in players_files:
        event_name = extract_event_name(players_file.name)
        if event_name:
            if event_name not in event_data:
                event_data[event_name] = {}
            event_data[event_name]['players'] = players_file

    # For each event, find the event TS file to get event_slug and exact event_name
    for event_name in list(event_data.keys()):
        event_file, event_slug = find_event_ts_file(event_name)
        if event_file:
            event_data[event_name]['event_slug'] = event_slug
            event_data[event_name]['event_file'] = event_file
            # Read event name from TS file
            with open(event_file, 'r', encoding='utf-8') as f:
                name_match = re.search(r'name:\s*"([^"]+)"', f.read())
                if name_match:
                    event_data[event_name]['event_name'] = name_match.group(1)

    # Note: We generate pauperformance.com-compatible slugs from archetype names

    # Aggregate archetype data
    archetype_stats = defaultdict(lambda: {'count': 0, 'appearances': []})
    all_archetypes_for_summary = set()

    print("\nProcessing event data...")
    for event_key, files in sorted(event_data.items()):
        if 'archetypes' not in files or 'standings' not in files or 'players' not in files:
            print(f"  Skipping {event_key} (missing files)")
            continue

        print(f"  Processing {event_key}...", end=' ', flush=True)

        arch_mapping = load_archetypes_json(files['archetypes'])
        standings = load_standings_csv(files['standings'])
        player_to_deck_id = load_players_csv(files['players'])

        event_slug = files.get('event_slug', event_key)
        event_name = files.get('event_name', event_key)

        # Link standing position + player to archetype via deck_id
        for standing in standings:
            player = standing.get('Player', '').strip()
            position = standing.get('Rank', '').strip()
            deck_name = standing.get('Deck', '')
            deck_slug_val = standing.get('DeckSlug', '')

            if not position or not player:
                continue

            try:
                position_int = int(position)
            except ValueError:
                continue

            # Find archetype by matching player to deck_id
            deck_id = player_to_deck_id.get(player)
            if not deck_id or deck_id not in arch_mapping:
                continue

            archetype_name = arch_mapping[deck_id]
            all_archetypes_for_summary.add(archetype_name)

            # Generate pauperformance.com-compatible slug from archetype name
            arch_slug = normalize_slug(archetype_name)

            archetype_stats[arch_slug]['count'] += 1
            archetype_stats[arch_slug]['name'] = archetype_name
            archetype_stats[arch_slug]['appearances'].append({
                'eventSlug': event_slug,
                'eventName': event_name,
                'position': position_int,
                'player': player,
                'playerSlug': normalize_slug(player),
            })

        print("✓")

    # Calculate total for percentages
    total_count = sum(stats['count'] for stats in archetype_stats.values())
    print(f"\nAggregated {len(archetype_stats)} unique archetypes across {total_count} total appearances")

    # Generate ARCHETYPES array (summary list, sorted by count desc)
    archetypes_list = []
    for slug, stats in sorted(archetype_stats.items(), key=lambda x: x[1]['count'], reverse=True):
        count = stats['count']
        pct = f"{count / total_count * 100:.2f}%" if total_count > 0 else "0%"
        archetypes_list.append({
            'slug': slug,
            'name': stats['name'],
            'count': count,
            'percentage': pct,
        })

    # Generate ARCHETYPES export
    arch_lines = ["export const ARCHETYPES: Archetype[] = ["]
    for arch in archetypes_list:
        arch_lines.append(
            f'  {{ slug: {js_str(arch["slug"])}, name: {js_str(arch["name"])}, '
            f'count: {arch["count"]}, percentage: {js_str(arch["percentage"])} }},'
        )
    arch_lines.append("];")
    archetypes_export = "\n".join(arch_lines)

    # Generate ARCHETYPE_DETAILS export
    details_lines = ["export const ARCHETYPE_DETAILS: Record<string, ArchetypeDetail> = {"]
    for arch in archetypes_list:
        slug = arch['slug']
        name = arch['name']
        count = arch['count']
        percentage = arch['percentage']

        details_lines.append(f"  {js_str(slug)}: {{")
        details_lines.append(f"    slug: {js_str(slug)},")
        details_lines.append(f"    name: {js_str(name)},")
        details_lines.append(f"    count: {count},")
        details_lines.append(f"    percentage: {js_str(percentage)},")
        details_lines.append(f"    byEvent: [")

        # Group appearances by event
        appearances_by_event = defaultdict(list)
        for app in archetype_stats[slug]['appearances']:
            event_key = app['eventSlug']
            appearances_by_event[event_key].append(app)

        for event_slug in sorted(appearances_by_event.keys()):
            appearances = appearances_by_event[event_slug]
            event_name = appearances[0]['eventName'] if appearances else ''

            details_lines.append(f"      {{")
            details_lines.append(f"        eventSlug: {js_str(event_slug)},")
            details_lines.append(f"        eventName: {js_str(event_name)},")
            details_lines.append(f"        appearances: [")

            for app in sorted(appearances, key=lambda x: x['position']):
                details_lines.append(
                    f"          {{ position: {app['position']}, pilot: {js_str(app['player'])}, "
                    f"pilotSlug: {js_str(app['playerSlug'])}, eventSlug: {js_str(event_slug)}, "
                    f"eventName: {js_str(event_name)} }},"
                )

            details_lines.append(f"        ],")
            details_lines.append(f"      }},")

        details_lines.append(f"    ],")
        details_lines.append(f"  }},")

    details_lines.append("};")
    details_export = "\n".join(details_lines)

    # Write output file
    output_content = f"""import type {{ Archetype, ArchetypeDetail }} from "@/types";

{archetypes_export}

{details_export}
"""

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(output_content)

    print(f"\n✅ Generated {OUTPUT_FILE}")
    print(f"   - {len(archetypes_list)} archetypes")
    print(f"   - {total_count} total appearances")


if __name__ == "__main__":
    main()
