#!/usr/bin/env python3
r"""
Create data/archetypes/{Event Name}.json for every event that has a
data/topdeck/decks/{Event Name}.json but no archetype file yet. Split out of
fetch_topdeck_data.py so archetype tagging can be (re)run independently of
fetching topdeck.gg data - this script only touches local files plus the
archetype classifier, it needs no topdeck API key.

For each such event, every deck id from decks.json is seeded as "Unknown",
then the deck list is POSTed to the archetype classifier at
masadora.ddns.net:8913 (same endpoint/payload shape as the old manual curl
workflow) to fill in real labels where possible. Building the placeholder
from decks.json - rather than the tournament's full standings roster, which
can include players with no decklist on file - guarantees decks.json and
archetypes.json stay in exact 1:1 id parity.

Usage:
  python3 scripts/fetch_archetypes_data.py
      Process every data/topdeck/decks/*.json that doesn't already have a
      matching data/archetypes/*.json.

  python3 scripts/fetch_archetypes_data.py "<Event Name>"
      Process just one event by name (must match a
      data/topdeck/decks/{Event Name}.json file).

Notes:
  - Never overwrites an existing data/archetypes/{Event Name}.json - once a
    file exists (whether hand-tagged or classifier-seeded) it's left alone,
    since archetype tagging is hand-curated work.
  - The classifier is unreliable (a home server, can be offline or error).
    Any failure - timeout, connection error, non-200, unexpected response
    shape - is caught and just falls back to leaving decks as "Unknown"; it
    never blocks the rest of this script or the wider pipeline. Only
    classified deck ids overwrite their placeholder entry, so a partial
    response still improves on all-Unknown.
"""

import argparse
import json
from pathlib import Path

import requests

CLASSIFIER_URL = "http://masadora.ddns.net:8913"
CLASSIFIER_TIMEOUT = 60  # seconds - unreliable home server, don't hang the pipeline on it
DECKS_DIR = Path("data/topdeck/decks")
ARCHETYPES_DIR = Path("data/archetypes")


def classify_archetypes(event_name: str, deck_entries: list) -> dict | None:
    """POST decks to the (unreliable) archetype classifier. Returns {deck_id: archetype}
    on success, or None on any failure - network error, timeout, non-200, or a response
    that isn't the expected {id: archetype} mapping (e.g. the classifier's own
    {"error": "..."} shape). Callers should fall back to the "Unknown" placeholder."""
    payload = {"event": event_name, "decks": deck_entries}
    try:
        resp = requests.post(CLASSIFIER_URL, json=payload, timeout=CLASSIFIER_TIMEOUT)
        resp.raise_for_status()
        data = resp.json()
    except (requests.RequestException, ValueError) as e:
        print(f"  ⚠️  Archetype classifier unavailable ({e}) - leaving placeholder Unknowns")
        return None

    if not isinstance(data, dict) or "error" in data:
        print(f"  ⚠️  Archetype classifier returned an error ({data}) - leaving placeholder Unknowns")
        return None

    return data


def fetch_archetypes(decks_path: Path):
    with open(decks_path, encoding='utf-8') as f:
        decks_data = json.load(f)
    event_name = decks_data["event"]
    deck_entries = decks_data["decks"]

    archetypes_path = ARCHETYPES_DIR / decks_path.name
    if archetypes_path.exists():
        print(f"  ⏭  {archetypes_path} already exists, leaving it alone")
        return

    archetypes = {d["id"]: "Unknown" for d in deck_entries}
    classified = classify_archetypes(event_name, deck_entries)
    if classified:
        for deck_id, archetype in classified.items():
            if deck_id in archetypes and archetype:
                archetypes[deck_id] = archetype

    archetypes_path.parent.mkdir(parents=True, exist_ok=True)
    with open(archetypes_path, 'w', encoding='utf-8') as f:
        json.dump(archetypes, f, indent=2, sort_keys=True)

    classified_count = sum(1 for v in archetypes.values() if v != "Unknown")
    if classified_count:
        print(f"  ✅ {archetypes_path} ({classified_count}/{len(archetypes)} classified"
              f"{', rest left as Unknown - tag by hand' if classified_count < len(archetypes) else ''})")
    else:
        print(f"  ✅ {archetypes_path} (placeholder, {len(archetypes)} decks - tag archetypes by hand)")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("event", nargs="?",
                         help="Event name to process (must match a data/topdeck/decks/{Event Name}.json "
                              "file). Omit to process every event missing an archetypes file.")
    args = parser.parse_args()

    if args.event:
        decks_path = DECKS_DIR / f"{args.event}.json"
        if not decks_path.exists():
            print(f"❌ {decks_path} not found")
            return
        targets = [decks_path]
    else:
        targets = sorted(DECKS_DIR.glob("*.json"))

    for decks_path in targets:
        print(f"\n{decks_path.stem}")
        fetch_archetypes(decks_path)


if __name__ == "__main__":
    main()
