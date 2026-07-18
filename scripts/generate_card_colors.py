#!/usr/bin/env python3
r"""
Generate src/lib/data/card-colors.ts from data/scryfall/colors_manifest.json
(built by fetch_card_colors.py).

Usage:
  python3 scripts/generate_card_colors.py
"""

import json
from pathlib import Path
from utils import js_str

MANIFEST_FILE = Path("data/scryfall/colors_manifest.json")
OUTPUT_FILE = Path("src/lib/data/card-colors.ts")


def render(manifest: dict) -> str:
    lines = [
        'import type { ManaColor } from "@/types";',
        '',
        'export const CARD_COLORS: Record<string, ManaColor[]> = {',
    ]

    for name in sorted(manifest.keys()):
        colors = ", ".join(js_str(c) for c in manifest[name])
        lines.append(f'  {js_str(name)}: [{colors}],')

    lines.append('};')
    return "\n".join(lines) + "\n"


def main():
    print("Generating card-colors.ts from data/scryfall/colors_manifest.json...\n")

    if not MANIFEST_FILE.exists():
        print(f"❌ {MANIFEST_FILE} not found - run fetch_card_colors.py first")
        raise SystemExit(1)

    manifest = json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
    print(f"Found {len(manifest)} cards")

    OUTPUT_FILE.write_text(render(manifest), encoding="utf-8")

    print(f"\n✅ Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
