#!/usr/bin/env python3
r"""
Download deck data from topdeck.gg URLs in a players CSV file.
Scrapes mainboard and sideboard cards from each deck.
Outputs JSON file: data/topdeck/decks/{event_name}.json

Usage:
  python3 scripts/download_topdeck_decks.py <path_to_players_csv>

Example:
  python3 scripts/download_topdeck_decks.py example/Amsterdam\ Pauper\ League\ –\ 4°\ Leg\ –\ 2026.csv
"""

import json
import csv
import sys
import time
import re
from pathlib import Path
from urllib.parse import urlparse
import requests
from bs4 import BeautifulSoup
from utils import extract_event_name, extract_date_from_filename


TOPDECK_DECKS_DIR = Path("data/topdeck/decks")


def extract_deck_id_from_url(url: str) -> str:
    """Extract deck ID from topdeck URL."""
    # URL format: https://topdeck.gg/deck/{event-slug}/{deck-id}
    parts = url.rstrip('/').split('/')
    if len(parts) >= 2:
        return parts[-1]
    return None


def extract_deck_data(deck_url: str) -> dict:
    """Scrape a single deck from topdeck.gg and extract card data."""
    print(f"  Fetching: {deck_url}...", end=" ", flush=True)

    try:
        # Fetch the page with a timeout
        response = requests.get(deck_url, timeout=10)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"❌ Failed to fetch: {e}")
        return None

    try:
        soup = BeautifulSoup(response.content, 'html.parser')

        # Extract basic info from page
        title_tag = soup.find('title')
        title_text = title_tag.string if title_tag else ""

        # Parse title to extract pilot name
        # Format: "PilotName's Deck - Event Name"
        pilot_name = "Unknown"
        if title_text and "'s Deck" in title_text:
            pilot_name = title_text.split("'s Deck")[0].strip()

        # Extract mainboard and sideboard from text-view divs
        # The page has text-view sections for each deck part (mainboard, sideboard)
        mainboard = []
        sideboard = []

        text_views = soup.find_all('div', {'class': 'text-view'})

        # First text-view is mainboard, second is sideboard
        if len(text_views) >= 1:
            card_elems = text_views[0].find_all('div', {'class': 'card-name-text'})
            for card_elem in card_elems:
                spans = card_elem.find_all('span')
                if len(spans) >= 2:
                    try:
                        quantity = int(spans[0].get_text(strip=True))
                        card_name = spans[1].get_text(strip=True)
                        if card_name and quantity > 0:
                            mainboard.append({"quantity": quantity, "name": card_name})
                    except (ValueError, AttributeError):
                        continue

        if len(text_views) >= 2:
            card_elems = text_views[1].find_all('div', {'class': 'card-name-text'})
            for card_elem in card_elems:
                spans = card_elem.find_all('span')
                if len(spans) >= 2:
                    try:
                        quantity = int(spans[0].get_text(strip=True))
                        card_name = spans[1].get_text(strip=True)
                        if card_name and quantity > 0:
                            sideboard.append({"quantity": quantity, "name": card_name})
                    except (ValueError, AttributeError):
                        continue

        if not mainboard and not sideboard:
            print(f"⚠️  No cards found")
            return None

        deck_id = extract_deck_id_from_url(deck_url)

        # Calculate total card counts (sum of quantities)
        main_total = sum(card['quantity'] for card in mainboard)
        side_total = sum(card['quantity'] for card in sideboard)

        print(f"✓ ({main_total} main, {side_total} side)")

        return {
            "id": deck_id,
            "url": deck_url,
            "pilotName": pilot_name,
            "mainDeck": mainboard,
            "sideboard": sideboard,
        }

    except Exception as e:
        print(f"❌ Parse error: {e}")
        return None




def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/download_topdeck_decks.py <path_to_players_csv>")
        print("Example: python3 scripts/download_topdeck_decks.py example/Amsterdam\\ Pauper\\ League\\ –\\ 4°\\ Leg\\ –\\ 2026.csv")
        sys.exit(1)

    csv_path = Path(sys.argv[1])

    if not csv_path.exists():
        print(f"❌ File not found: {csv_path}")
        sys.exit(1)

    print(f"📂 Reading: {csv_path}")

    # Extract event name from filename
    event_name = extract_event_name(csv_path.name)
    if not event_name:
        print(f"❌ Could not extract event name from filename")
        sys.exit(1)

    print(f"📌 Event: {event_name}")

    # Create output directory if it doesn't exist
    TOPDECK_DECKS_DIR.mkdir(parents=True, exist_ok=True)
    output_file = TOPDECK_DECKS_DIR / f"{event_name}.json"

    # Read CSV and extract deck URLs
    deck_urls = []
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row.get('Decklist', '').strip()
            if url:
                deck_urls.append(url)

    print(f"🔗 Found {len(deck_urls)} deck URLs")

    if not deck_urls:
        print("⚠️  No deck URLs found in CSV")
        sys.exit(0)

    # Download each deck
    print("\n📥 Downloading decks...")
    decks = []

    for i, url in enumerate(deck_urls, 1):
        deck_data = extract_deck_data(url)
        if deck_data:
            decks.append(deck_data)

        # Rate limiting - be nice to the server
        if i < len(deck_urls):
            time.sleep(0.5)

    print(f"\n✅ Downloaded {len(decks)} decks")

    # Write output JSON
    output_data = {
        "event": event_name,
        "decks": decks,
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"💾 Saved: {output_file}")


if __name__ == "__main__":
    main()
