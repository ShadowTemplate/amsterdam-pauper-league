#!/usr/bin/env python3
r"""
Generate TypeScript deck files from JSON deck data.
Reads from data/topdeck/decks/ and outputs to src/lib/data/decks/

Usage:
  python3 scripts/generate_decks_from_json.py
"""

import hashlib
import json
import re
from pathlib import Path
from utils import js_str, extract_date_from_filename


DECKS_JSON_DIR = Path("data/topdeck/decks")
DECKS_TS_DIR = Path("src/lib/data/decks")
EVENTS_DIR = Path("src/lib/data/events")

# Deck ids are minted (see mint_deck_id) from this event onwards - the first one fetched
# from the topdeck.gg API, and so the first whose source ids are player uids rather than
# per-deck ids. Everything before it was imported from the old dutchpauperleague.nl site,
# which had real deck ids, so those are left exactly as the source has them.
MINT_IDS_FROM_DATE = "2026-07-04"
ID_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz"
ID_LENGTH = 24


def mint_deck_id(event_date: str, deck: dict) -> str:
    """Derive a deck id from the deck itself: its cards, its pilot and the event date.

    The topdeck.gg API has no per-deck id - the id it reports alongside a decklist is
    the player's *account* uid, identical across every event that player attends (a
    deck page there is topdeck.gg/deck/{tournament}/{player uid}). Deck ids key the
    /decks/ route, so they have to be unique site-wide: hash what actually identifies
    the deck instead, shaped like the ids of the decks imported from the old
    dutchpauperleague.nl site so both eras of deck URL look the same.

    Cards are sorted so the id doesn't depend on the order the source happens to list
    them in, but it does depend on their contents - correcting a decklist afterwards
    mints a new id, and so changes that deck's URL.
    """
    cards = "|".join(
        ",".join(sorted(f'{c.get("quantity", 0)} {c.get("name")}' for c in deck.get(section, [])))
        for section in ("mainDeck", "sideboard")
    )
    payload = f'{event_date}:{deck.get("pilotName")}:{cards}'
    digest = int(hashlib.sha256(payload.encode()).hexdigest(), 16)
    chars = []
    for _ in range(ID_LENGTH):
        digest, remainder = divmod(digest, len(ID_ALPHABET))
        chars.append(ID_ALPHABET[remainder])
    return "".join(chars)


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

    # Deck ids key the /decks/ route, so a repeat would silently point two decks at
    # one page - track them all to catch it (see mint_deck_id).
    seen_ids = {}

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
            deck_id = deck.get("id")
            if event_date >= MINT_IDS_FROM_DATE:
                deck_id = mint_deck_id(event_date, deck)
            if deck_id in seen_ids:
                raise ValueError(
                    f"Duplicate deck id {deck_id!r}: {deck.get('pilotName')} in "
                    f"{event_name} and {seen_ids[deck_id]} already use it"
                )
            seen_ids[deck_id] = f"{deck.get('pilotName')} in {event_name}"

            # Build deck object
            output_lines.append('  {')
            output_lines.append(f'    "id": {js_str(deck_id)},')
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
