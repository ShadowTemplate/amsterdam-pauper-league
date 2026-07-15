#!/usr/bin/env python3
r"""
Generate src/lib/data/card-images.ts from data/scryfall/manifest.json
(built by download_card_images.py).

Usage:
  python3 scripts/generate_card_images.py
"""

import json
from pathlib import Path
from utils import js_str

MANIFEST_FILE = Path("data/scryfall/manifest.json")
OUTPUT_FILE = Path("src/lib/data/card-images.ts")


def render(manifest: dict) -> str:
    lines = [
        'import type { CardImage } from "@/types";',
        '',
        'export const CARD_IMAGES: Record<string, CardImage> = {',
    ]

    for name in sorted(manifest.keys()):
        entry = manifest[name]
        fields = [f'front: {js_str(entry["front"])}']
        if entry.get("back"):
            fields.append(f'back: {js_str(entry["back"])}')
        lines.append(f'  {js_str(name)}: {{ {", ".join(fields)} }},')

    lines.append('};')
    return "\n".join(lines) + "\n"


def main():
    print("Generating card-images.ts from data/scryfall/manifest.json...\n")

    if not MANIFEST_FILE.exists():
        print(f"❌ {MANIFEST_FILE} not found - run download_card_images.py first")
        raise SystemExit(1)

    manifest = json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
    print(f"Found {len(manifest)} card images")

    OUTPUT_FILE.write_text(render(manifest), encoding="utf-8")

    print(f"\n✅ Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
