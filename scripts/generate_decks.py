#!/usr/bin/env python3
r"""
Generate TypeScript deck files from JSON deck data.
Reads from data/topdeck/decks/ and outputs to src/lib/data/decks/

Usage:
  python3 scripts/generate_decks_from_json.py
"""

import json
import re
from pathlib import Path
from utils import js_str, extract_date_from_filename


DECKS_JSON_DIR = Path("data/topdeck/decks")
DECKS_TS_DIR = Path("src/lib/data/decks")
EVENTS_DIR = Path("src/lib/data/events")


def build_event_name_to_date_mapping() -> dict:
    """Build mapping from event name to date by reading events directory.
    Raises if two event files share the same name - that's a data error
    (an event name must uniquely identify one date) and silently picking
    one would corrupt deck output for the other.
    """
    mapping = {}

    for event_file in sorted(EVENTS_DIR.glob("*.ts")):
        date = event_file.stem  # e.g., "2024-03-02"

        # Read the event file to extract event name
        with open(event_file, 'r', encoding='utf-8-sig') as f:
            content = f.read()

        # Extract event name from: name: "Event Name",
        match = re.search(r'name:\s*"([^"]+)"', content)
        if match:
            event_name = match.group(1)
            if event_name in mapping:
                raise ValueError(
                    f"Duplicate event name {event_name!r}: "
                    f"{mapping[event_name]}.ts and {date}.ts both use it"
                )
            mapping[event_name] = date

    return mapping


def main():
    print("Generating TypeScript deck files from JSON...\n")

    # Create output directory if it doesn't exist
    DECKS_TS_DIR.mkdir(parents=True, exist_ok=True)

    # Build event name to date mapping
    print("📚 Building event name to date mapping...", end=" ", flush=True)
    event_mapping = build_event_name_to_date_mapping()
    print(f"✓ ({len(event_mapping)} events)\n")

    # Get all JSON files
    json_files = sorted(DECKS_JSON_DIR.glob("*.json"))
    print(f"Found {len(json_files)} JSON deck files\n")

    for json_file in json_files:
        event_name_from_file = json_file.stem
        print(f"📄 {event_name_from_file}...", end=" ", flush=True)

        # Read JSON
        with open(json_file, 'r', encoding='utf-8-sig') as f:
            data = json.load(f)

        if 'decks' not in data:
            print("❌ Invalid JSON structure (missing 'decks' key)")
            continue

        decks = data['decks']

        # Get event name from JSON and map to date
        event_name = data.get('event', event_name_from_file)

        if event_name not in event_mapping:
            print(f"⏭️  Skipping - event not found in events: {event_name}")
            continue

        event_date = event_mapping[event_name]
        output_file = DECKS_TS_DIR / f"{event_date}.ts"

        # Generate TypeScript content
        output_lines = [
            'import type { Deck } from "@/types";',
            '',
            'export const decks: Deck[] = [',
        ]

        for deck in decks:
            # Build deck object
            output_lines.append('  {')
            output_lines.append(f'    "id": {js_str(deck.get("id"))},')
            output_lines.append(f'    "url": {js_str(deck.get("url"))},')
            output_lines.append(f'    "pilotName": {js_str(deck.get("pilotName"))},')

            # Format mainDeck
            output_lines.append('    "mainDeck": [')
            for card in deck.get('mainDeck', []):
                output_lines.append(
                    f'      {{"quantity": {card.get("quantity", 0)}, "name": {js_str(card.get("name"))}}},')
            output_lines.append('    ],')

            # Format sideboard
            output_lines.append('    "sideboard": [')
            for card in deck.get('sideboard', []):
                output_lines.append(
                    f'      {{"quantity": {card.get("quantity", 0)}, "name": {js_str(card.get("name"))}}},')
            output_lines.append('    ],')

            output_lines.append('  },')

        output_lines.append('];')

        output_content = '\n'.join(output_lines)

        # Write output file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(output_content)

        print(f"✓ ({len(decks)} decks) → {output_file.name}")

    print(f"\n✅ Done")


if __name__ == "__main__":
    main()
