#!/usr/bin/env python3
r"""
Run the full data-generation pipeline in dependency order, turning raw
data/ input into everything under src/lib/data/ and src/lib/data-layer.ts.

Pipeline (each step's output feeds later steps - order matters):
  1. fetch_topdeck_data.py       (fetches any new completed event from the topdeck.gg API -
                                   auto-discovers, skips events already in data/topdeck/)
  2. fetch_archetypes_data.py    (seeds/classifies data/archetypes/{Event Name}.json for any
                                   decks.json from step 1 that doesn't have one yet)
  3. generate_events.py
  4. generate_players.py
  5. generate_archetypes.py
  6. generate_decks.py           (needs events/ from step 3)
  7. generate_decks_lib.py       (needs src/lib/data/decks/ from step 6)
  8. download_card_images.py     (needs src/lib/data/decks/ from step 6, hits the Scryfall API)
  9. generate_card_images.py     (needs data/scryfall/manifest.json from step 8)
  10. fetch_card_colors.py       (needs src/lib/data/decks/ from step 6, hits the Scryfall API)
  11. generate_card_colors.py    (needs data/scryfall/colors_manifest.json from step 10)
  12. fetch_card_types.py        (needs src/lib/data/decks/ from step 6, hits the Scryfall API)
  13. generate_card_types.py     (needs data/scryfall/types_manifest.json from step 12)
  14. generate_seasons.py        (needs events/ from step 3)
  15. generate_data_layer.py     (needs events/ from step 3, seasons/ from step 14)
  16. audit_player_identity.py   (read-only recap of the player identities the pipeline
                                   merged into one slug - never fails the pipeline)

Note: step 2 seeds every deck as "Unknown" and tries the (unreliable) archetype
classifier to improve on that; whatever's left "Unknown" needs hand-tagging and a
pipeline re-run to pick up the correction - it's never overwritten automatically.

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
    "fetch_archetypes_data.py",
    "generate_events.py",
    "generate_players.py",
    "generate_archetypes.py",
    "generate_decks.py",
    "generate_decks_lib.py",
    "download_card_images.py",
    "generate_card_images.py",
    "fetch_card_colors.py",
    "generate_card_colors.py",
    "fetch_card_types.py",
    "generate_card_types.py",
    "generate_seasons.py",
    "generate_data_layer.py",
    "audit_player_identity.py",
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
