#!/usr/bin/env python3
r"""
Generate src/lib/data/card-types.ts from data/scryfall/types_manifest.json
(built by fetch_card_types.py).

Usage:
  python3 scripts/generate_card_types.py
"""

import json
from pathlib import Path
from utils import js_str

MANIFEST_FILE = Path("data/scryfall/types_manifest.json")
OUTPUT_FILE = Path("src/lib/data/card-types.ts")


def render(manifest: dict) -> str:
    lines = [
        'import type { CardType } from "@/types";',
        '',
        'export const CARD_TYPES: Record<string, CardType> = {',
    ]

    for name in sorted(manifest.keys()):
        lines.append(f'  {js_str(name)}: {js_str(manifest[name])},')

    lines.append('};')
    return "\n".join(lines) + "\n"


def main():
    print("Generating card-types.ts from data/scryfall/types_manifest.json...\n")

    if not MANIFEST_FILE.exists():
        print(f"❌ {MANIFEST_FILE} not found - run fetch_card_types.py first")
        raise SystemExit(1)

    manifest = json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
    print(f"Found {len(manifest)} cards")

    OUTPUT_FILE.write_text(render(manifest), encoding="utf-8")

    print(f"\n✅ Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
