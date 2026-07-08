#!/usr/bin/env python3
"""
Generate event TS files from data/topdeck/ CSV files.
Creates src/lib/data/events/YYYY-MM-DD.ts for each event.
Run from project root: python3 scripts/generate_events.py
"""

import json
import csv
import re
from pathlib import Path
from collections import defaultdict
from datetime import datetime

TOPDECK_DIR = Path("data/topdeck")
ARCHETYPES_DIR = Path("data/archetypes")
EVENTS_DIR = Path("src/lib/data/events")

# Default event metadata
VENUE = "Pondok"
FORMAT_TYPE = "paper"
STATUS = "past"
REGISTRATION_URL = "https://topdeck.gg"


def extract_date_from_filename(filename: str) -> str:
    """Extract date from filename suffix (e.g., standings_EventName_YYYY-MM-DD.csv -> YYYY-MM-DD)."""
    match = re.search(r'_(\d{4}-\d{2}-\d{2})\.(csv|json)$', filename)
    if match:
        return match.group(1)
    return None


def extract_event_name(filename: str) -> str:
    """Extract event name from filename (remove prefix, date suffix, and file extension).
    E.g., 'standings_Dutch Pauper League – 1° Leg – 2024_2024-03-02.csv' -> 'Dutch Pauper League – 1° Leg – 2024'
    """
    name = re.sub(r'^(standings_|players_|archetypes_)', '', filename)
    # Remove file extension
    name = re.sub(r'\.(csv|json)$', '', name)
    # Remove date suffix (e.g., _YYYY-MM-DD)
    name = re.sub(r'_\d{4}-\d{2}-\d{2}$', '', name)
    return name


def normalize_slug(text: str) -> str:
    """Convert text to pauperformance.com-compatible slug format with underscores.
    Examples: "MonoR Madness" -> "monor_madness", "Jund Wildfire" -> "jund_wildfire"
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


def load_archetypes_json(filepath: Path) -> dict:
    """Load archetype mapping from JSON file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


def load_standings_csv(filepath: Path) -> list:
    """Load standings CSV."""
    standings = []
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            standings.append(row)
    return standings


def load_players_csv(filepath: Path) -> dict:
    """Load players CSV and extract Player -> deck_id mapping."""
    player_to_deck_id = {}
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            player = row.get('Player', '').strip()
            decklist_url = row.get('Decklist', '').strip()
            if player and decklist_url:
                # Extract deck_id from last path component
                path = decklist_url.split('?')[0]
                last_component = path.rstrip('/').split('/')[-1]
                if last_component:
                    player_to_deck_id[player] = last_component
    return player_to_deck_id


def main():
    print("Scanning for event data...")

    # Find all standings files and match with archetypes and players
    standings_files = sorted(TOPDECK_DIR.glob("standings_*.csv"))
    print(f"Found {len(standings_files)} events")

    for standings_file in standings_files:
        event_name = extract_event_name(standings_file.name)
        event_slug = extract_date_from_filename(standings_file.name)

        print(f"\nProcessing: {event_name}...", end=' ', flush=True)

        if not event_slug:
            print(f"❌ Could not extract date from filename")
            continue

        # Find corresponding files - need to find the matching files with same date
        date_suffix = f"_{event_slug}"
        archetypes_file = ARCHETYPES_DIR / f"archetypes_{event_name}{date_suffix}.json"
        players_file = TOPDECK_DIR / f"players_{event_name}{date_suffix}.csv"

        if not archetypes_file.exists():
            print(f"⚠️  Missing archetypes JSON")
            continue

        if not players_file.exists():
            print(f"⚠️  Missing players CSV")
            continue

        # Load data
        standings = load_standings_csv(standings_file)
        archetypes_map = load_archetypes_json(archetypes_file)
        player_to_deck_id = load_players_csv(players_file)

        if not standings:
            print(f"❌ No standings data")
            continue


        # Build standings with archetype info
        standings_detail = []
        archetype_counter = defaultdict(lambda: {'name': '', 'count': 0})

        for standing in standings:
            position = standing.get('Rank', '').strip()
            player = standing.get('Player', '').strip()
            deck_name = standing.get('Deck', '').strip()
            deck_slug = standing.get('DeckSlug', '').strip()
            omw_pct = standing.get('OW%', '').strip()
            match_pts = standing.get('Pts', '').strip()

            if not position or not player:
                continue

            try:
                position_int = int(position)
                match_pts_int = int(match_pts) if match_pts else 0
            except ValueError:
                continue

            # Get archetype info
            deck_id = player_to_deck_id.get(player)
            archetype_name = "Unknown"
            archetype_slug = "unknown"
            if deck_id and deck_id in archetypes_map:
                archetype_name = archetypes_map[deck_id]
                archetype_slug = normalize_slug(archetype_name)
                archetype_counter[archetype_slug]['name'] = archetype_name
                archetype_counter[archetype_slug]['count'] += 1

            # Generate player slug
            player_slug = normalize_slug(player)

            # Note: deck_name and deck_slug from standings CSV are typically empty.
            # They would need to be populated from a separate source or manually.
            # For now, we use the archetype name as a fallback.
            final_deck_name = deck_name if deck_name else archetype_name
            final_deck_slug = deck_slug if deck_slug else archetype_slug

            standings_detail.append({
                'position': position_int,
                'player': player,
                'playerSlug': player_slug,
                'deck': final_deck_name,
                'deckSlug': final_deck_slug,
                'archetype': archetype_name,
                'omwPercentage': omw_pct,
                'matchPoints': match_pts_int,
            })

        if not standings_detail:
            print(f"❌ No standings entries")
            continue

        # Calculate total for percentages
        total = len(standings_detail)

        # Build meta (archetype summary)
        meta = []
        for arch_slug in sorted(archetype_counter.keys(), key=lambda x: archetype_counter[x]['count'], reverse=True):
            arch_info = archetype_counter[arch_slug]
            count = arch_info['count']
            pct = f"{count / total * 100:.2f}%" if total > 0 else "0%"
            meta.append({
                'archetype': arch_info['name'],
                'archetypeSlug': arch_slug,
                'count': count,
                'percentage': pct,
            })

        # Get winner (first place)
        winner = standings_detail[0]['player'] if standings_detail else "Unknown"

        # Generate event TS file
        output_lines = [
            "import type { Event, EventDetail } from \"@/types\";",
            "",
            "export const event: Event = {",
            f"  slug: {js_str(event_slug)},",
            f"  name: {js_str(event_name)},",
            f"  date: {js_str(event_slug)},",
            f"  venue: {js_str(VENUE)},",
            f"  format: {js_str(FORMAT_TYPE)},",
            f"  status: {js_str(STATUS)},",
            f"  winner: {js_str(winner)},",
            f"  playerCount: {total},",
            f"  registrationUrl: {js_str(REGISTRATION_URL)},",
            "};",
            "",
            "export const eventDetail: EventDetail = {",
            "  ...event,",
            "  standings: [",
        ]

        for standing in standings_detail:
            output_lines.append(
                f"    {{ position: {standing['position']}, player: {js_str(standing['player'])}, "
                f"playerSlug: {js_str(standing['playerSlug'])}, deck: {js_str(standing['deck'])}, "
                f"deckSlug: {js_str(standing['deckSlug'])}, omwPercentage: {js_str(standing['omwPercentage'])}, "
                f"matchPoints: {standing['matchPoints']} }},"
            )

        output_lines.append("  ],")
        output_lines.append("  meta: [")

        for meta_item in meta:
            output_lines.append(
                f"    {{ archetype: {js_str(meta_item['archetype'])}, "
                f"archetypeSlug: {js_str(meta_item['archetypeSlug'])}, "
                f"count: {meta_item['count']}, percentage: {js_str(meta_item['percentage'])} }},"
            )

        output_lines.append("  ],")
        output_lines.append("};")

        output_content = "\n".join(output_lines)

        # Write event file
        output_file = EVENTS_DIR / f"{event_slug}.ts"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(output_content)

        print(f"✓ ({total} players, {len(meta)} archetypes)")

    print(f"\n✅ Done")


if __name__ == "__main__":
    main()
