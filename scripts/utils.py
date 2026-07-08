#!/usr/bin/env python3
"""
Shared utilities for TopDeck data generation scripts.
"""

import json
import csv
import re
from pathlib import Path


def normalize_slug(text: str) -> str:
    """Convert text to pauperformance.com-compatible slug format (ASCII-only).
    Examples: "MonoR Madness" -> "monor_madness", "Jund Wildfire" -> "jund_wildfire"
    Special chars: ä->a, ö->o, ü->u, é->e, ß->ss, etc.
    Pattern: lowercase, remove/replace special chars, replace spaces with underscores
    """
    text = text.lower()
    # Replace common special characters with ASCII equivalents
    replacements = {
        'ä': 'a', 'ö': 'o', 'ü': 'u', 'ß': 'ss',
        'á': 'a', 'à': 'a', 'â': 'a', 'ã': 'a',
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
        'ó': 'o', 'ò': 'o', 'ô': 'o', 'õ': 'o',
        'ú': 'u', 'ù': 'u', 'û': 'u',
        'ç': 'c', 'ñ': 'n',
    }
    for char, replacement in replacements.items():
        text = text.replace(char, replacement)
    # Remove any remaining non-ASCII alphanumeric characters (keep only a-z, 0-9, spaces, hyphens)
    text = re.sub(r'[^a-z0-9\s\-]', '', text)
    # Replace spaces and hyphens with underscores
    text = re.sub(r'[\s\-]+', '_', text)
    # Collapse multiple underscores into one
    text = re.sub(r'_+', '_', text)
    return text.strip('_')


def js_str(s) -> str:
    """Convert Python string to JS string literal."""
    if s is None:
        return '""'
    return json.dumps(str(s), ensure_ascii=False)


def extract_event_name(filename: str) -> str:
    """Extract event name from filename.
    E.g., 'archetypes_Dutch Pauper League – 1° Leg – 2024.json' -> 'Dutch Pauper League – 1° Leg – 2024'
    E.g., 'standings_Dutch Pauper League – 1° Leg – 2024_2024-03-02.csv' -> 'Dutch Pauper League – 1° Leg – 2024'
    Removes prefix (archetypes_, standings_, players_), suffix (.json, .csv), and date suffix (_YYYY-MM-DD)
    """
    # Remove prefix (archetypes_, standings_, players_) and suffix (.json, .csv)
    name = re.sub(r'^(archetypes_|standings_|players_)', '', filename)
    name = re.sub(r'\.(json|csv)$', '', name)
    # Remove date suffix (e.g., _YYYY-MM-DD) if present
    name = re.sub(r'_\d{4}-\d{2}-\d{2}$', '', name)
    return name


def extract_date_from_filename(filename: str) -> str:
    """Extract date from filename suffix (e.g., standings_EventName_YYYY-MM-DD.csv -> YYYY-MM-DD)."""
    match = re.search(r'_(\d{4}-\d{2}-\d{2})\.(csv|json)$', filename)
    if match:
        return match.group(1)
    return None


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
