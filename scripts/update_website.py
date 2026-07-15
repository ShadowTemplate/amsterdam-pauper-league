#!/usr/bin/env python3
r"""
Run the full data-generation pipeline in dependency order, turning raw
data/ input into everything under src/lib/data/ and src/lib/data-layer.ts.

Pipeline (each step's output feeds later steps - order matters):
  1. fetch_topdeck_data.py       (fetches any new completed event from the topdeck.gg API -
                                   auto-discovers, skips events already in data/topdeck/)
  2. generate_events.py
  3. generate_players.py
  4. generate_archetypes.py
  5. generate_decks.py           (needs events/ from step 2)
  6. generate_decks_lib.py       (needs src/lib/data/decks/ from step 5)
  7. download_card_images.py     (needs src/lib/data/decks/ from step 5, hits the Scryfall API)
  8. generate_card_images.py     (needs data/scryfall/manifest.json from step 7)
  9. generate_seasons.py         (needs events/ from step 2)
  10. generate_data_layer.py     (needs events/ from step 2, seasons/ from step 9)

Note: step 1 auto-creates a placeholder data/archetypes/{Event Name}.json (every
deck mapped to "Unknown") for any newly-fetched event that doesn't have one yet,
so a brand new event will get published with "Unknown" archetypes until someone
tags it by hand and re-runs this pipeline.

Not part of this pipeline:
  - convert_past_event_decks.py is a one-off backfill script for historical
    events (already run once) - it isn't part of the regular per-event flow.

Usage:
  python3 scripts/update_website.py
"""

import subprocess
import sys
from pathlib import Path

SCRIPTS_DIR = Path(__file__).parent

STEPS = [
    "fetch_topdeck_data.py",
    "generate_events.py",
    "generate_players.py",
    "generate_archetypes.py",
    "generate_decks.py",
    "generate_decks_lib.py",
    "download_card_images.py",
    "generate_card_images.py",
    "generate_seasons.py",
    "generate_data_layer.py",
]


def run(script: str, args: list):
    print(f"\n{'=' * 70}\n▶ {script} {' '.join(args)}\n{'=' * 70}")
    result = subprocess.run([sys.executable, str(SCRIPTS_DIR / script), *args])
    if result.returncode != 0:
        print(f"\n❌ {script} failed (exit {result.returncode}) - stopping pipeline")
        sys.exit(result.returncode)


def main():
    for script in STEPS:
        run(script, [])

    print(f"\n{'=' * 70}\n✅ Pipeline complete\n{'=' * 70}")


if __name__ == "__main__":
    main()
