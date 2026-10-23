#!/usr/bin/env python3
r"""
Generate src/lib/data/card-oracle.ts from data/scryfall/oracle_manifest.json
(built by fetch_card_oracle.py).

Usage:
  python3 scripts/generate_card_oracle.py
"""

import json
from pathlib import Path
from utils import js_str

MANIFEST_FILE = Path("data/scryfall/oracle_manifest.json")
OUTPUT_FILE = Path("src/lib/data/card-oracle.ts")


def render(manifest: dict) -> str:
    lines = [
        'import type { OracleFace } from "@/types";',
        '',
        'export const CARD_ORACLE: Record<string, OracleFace[]> = {',
    ]

    for name in sorted(manifest.keys()):
        faces = json.dumps(manifest[name], ensure_ascii=False)
        lines.append(f'  {js_str(name)}: {faces},')

    lines.append('};')
    return "\n".join(lines) + "\n"


def main():
    print("Generating card-oracle.ts from data/scryfall/oracle_manifest.json...\n")

    if not MANIFEST_FILE.exists():
        print(f"❌ {MANIFEST_FILE} not found - run fetch_card_oracle.py first")
        raise SystemExit(1)

    manifest = json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
    print(f"Found {len(manifest)} cards")

    OUTPUT_FILE.write_text(render(manifest), encoding="utf-8")

    print(f"\n✅ Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
