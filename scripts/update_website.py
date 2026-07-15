#!/usr/bin/env python3
r"""
Run the full data-generation pipeline in dependency order, turning raw
data/ input into everything under src/lib/data/ and src/lib/data-layer.ts.

Pipeline (each step's output feeds later steps - order matters):
  1. download_topdeck_decks.py   (only if --decks-csv is passed)
  2. generate_events.py
  3. generate_players.py
  4. generate_archetypes.py
  5. generate_decks.py           (needs events/ from step 2)
  6. generate_decks_lib.py       (needs src/lib/data/decks/ from step 5)
  7. generate_seasons.py         (needs events/ from step 2)
  8. generate_data_layer.py      (needs events/ from step 2, seasons/ from step 7)

Not part of this pipeline:
  - convert_past_event_decks.py is a one-off backfill script for historical
    events (already run once) - it isn't part of the regular per-event flow.

Usage:
  python3 scripts/update_website.py
  python3 scripts/update_website.py --decks-csv "data/topdeck/players/Amsterdam Pauper League – 4° Leg – 2026_2026-07-04.csv"

--decks-csv scrapes that event's decklists from topdeck.gg first. Omit it if
data/topdeck/decks/{EventName}.json already exists for the new event.
"""

import argparse
import subprocess
import sys
from pathlib import Path

SCRIPTS_DIR = Path(__file__).parent

STEPS = [
    "generate_events.py",
    "generate_players.py",
    "generate_archetypes.py",
    "generate_decks.py",
    "generate_decks_lib.py",
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
    parser = argparse.ArgumentParser(description="Run the full site data-generation pipeline.")
    parser.add_argument(
        "--decks-csv",
        help="Path to the new event's players CSV (with topdeck.gg decklist URLs) - "
             "scrapes that event's decks before running the rest of the pipeline.",
    )
    args = parser.parse_args()

    if args.decks_csv:
        run("download_topdeck_decks.py", [args.decks_csv])

    for script in STEPS:
        run(script, [])

    print(f"\n{'=' * 70}\n✅ Pipeline complete\n{'=' * 70}")


if __name__ == "__main__":
    main()
