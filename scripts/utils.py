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


# Pronoun options from the website's account settings ("account-pronouns"
# select). Some players type their pronoun choice straight into the
# topdeck.gg sign-up "Name" field (e.g. "Max Roovers He/They"), which only
# shows up in the players CSV export - the standings and round CSVs always
# have the plain name. Stripped so player_to_deck_id keys match those.
PRONOUN_SUFFIXES = ["He/Him", "He/They", "She/Her", "She/They", "They/Them", "Ask Me"]
PRONOUN_SUFFIX_RE = re.compile(
    r'\s+(?:' + '|'.join(re.escape(p) for p in PRONOUN_SUFFIXES) + r')$',
    re.IGNORECASE,
)


def strip_pronoun_suffix(name: str) -> str:
    """Strip a trailing pronoun tag (from the website's pronoun options) off
    a player name, if present. E.g. "Max Roovers He/They" -> "Max Roovers"."""
    return PRONOUN_SUFFIX_RE.sub('', name).strip()


def js_str(s) -> str:
    """Convert Python string to JS string literal."""
    if s is None:
        return '""'
    return json.dumps(str(s), ensure_ascii=False)


def extract_event_name(filename: str) -> str:
    """Extract event name from filename.
    E.g., 'Dutch Pauper League – 1° Leg – 2024.json' (archetypes) -> 'Dutch Pauper League – 1° Leg – 2024'
    E.g., 'standings_Dutch Pauper League – 1° Leg – 2024_2024-03-02.csv' -> 'Dutch Pauper League – 1° Leg – 2024'
    Removes prefix (archetypes_, standings_, players_ - no-op if absent), suffix
    (.json, .csv), and date suffix (_YYYY-MM-DD - no-op if absent)
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
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        return json.load(f)


def load_players_csv(filepath: Path) -> dict:
    """Load players CSV and extract Player -> deck_id mapping."""
    player_to_deck_id = {}
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            player = strip_pronoun_suffix(row.get('Player', '').strip())
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
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            standings.append(row)
    return standings


def extract_json_from_ts(ts_content: str, export_name: str) -> dict:
    """Extract JSON data from a TypeScript export statement using regex-based parsing.
    Handles unquoted property names and trailing commas. Strips spread operators
    (e.g. `...event`) - fields only present via a spread won't be in the result,
    so parse the export that literally contains the field you need.
    """
    # Look for pattern: export const <export_name>: ... = { ... } or [ ... ];
    pattern = rf'export const {export_name}:\s*\w+(?:\[\])?\s*=\s*([\[\{{].*?[\]\}}]);'
    match = re.search(pattern, ts_content, re.DOTALL)

    if not match:
        return None

    json_str = match.group(1)

    # Convert TypeScript object to valid JSON:
    # 1. Add quotes around unquoted property names (only at line start or after { or ,)
    json_str = re.sub(r'([,{]\s*)([a-zA-Z_]\w*):', r'\1"\2":', json_str)
    json_str = re.sub(r'^(\s*)([a-zA-Z_]\w*):', r'\1"\2":', json_str, flags=re.MULTILINE)
    # 2. Remove spread operator (...) or other TypeScript-only syntax
    json_str = re.sub(r'\.\.\.\w+,?', '', json_str)
    # 3. Remove trailing/leading commas left behind (incl. by spread removal)
    json_str = re.sub(r',(\s*[}\]])', r'\1', json_str)
    json_str = re.sub(r'([{\[]\s*),', r'\1', json_str)

    try:
        return json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"  ❌ Failed to parse JSON: {e}")
        return None


def get_venue(event_name: str) -> str:
    """Determine venue based on event name.
    Rule: Stroopwafel IPT events are at StayOkay Oost Hostel, all others at Pondok.
    """
    if "Stroopwafel IPT" in event_name:
        return "StayOkay Oost Hostel"
    return "Pondok"
