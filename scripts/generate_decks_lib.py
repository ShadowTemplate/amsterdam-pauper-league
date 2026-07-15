#!/usr/bin/env python3
r"""
Generate src/lib/decks.ts by scanning src/lib/data/decks/*.ts.
Replaces the manual import-and-wire-up step that was previously needed
every time a deck file was added/removed (same problem generate_data_layer.py
solves for data-layer.ts).

The lookup helpers (getAllDecks, getDeck, findDeckByEventAndPilot, ...) are
static logic, not derived from scanned data - they're baked into this
script's output template unchanged.

Usage:
  python3 scripts/generate_decks_lib.py
"""

from pathlib import Path

DECKS_DIR = Path("src/lib/data/decks")
OUTPUT_FILE = Path("src/lib/decks.ts")

HELPERS_TEMPLATE = '''
type DeckWithEvent = Deck & { eventSlug: string; archetype: string };

// Deck files no longer store archetype (it's derived, not source data) - look it up
// from the event's standings, matched by pilot name, so every deck ends up with one.
function archetypeFor(eventSlug: string, pilotName: string): string {
  const standing = getEventDetail(eventSlug)?.standings.find(
    s => s.player.toLowerCase() === pilotName.toLowerCase()
  );
  return standing?.deck ?? "Unknown";
}

// Flatten all decks with event information
const allDecks: DeckWithEvent[] = allDeckArrays.flatMap(({ eventSlug, decks }) =>
  decks.map(d => ({ ...d, eventSlug, archetype: archetypeFor(eventSlug, d.pilotName) }))
);

export function getAllDecks(): DeckWithEvent[] {
  return allDecks;
}

export function getDeck(id: string): DeckWithEvent | undefined {
  return allDecks.find(d => d.id === id);
}

export function getStaticDeckPaths() {
  return allDecks.map(d => ({
    params: { id: d.id }
  }));
}

export function findDeckByEventAndPilot(eventSlug: string, pilotName: string, archetypeName: string): DeckWithEvent | undefined {
  return allDecks.find(
    d => d.eventSlug === eventSlug &&
         d.pilotName.toLowerCase() === pilotName.toLowerCase() &&
         d.archetype.toLowerCase() === archetypeName.toLowerCase()
  );
}

// Mirrors normalize_slug() in scripts/utils.py (underscore slugs) - must match
// so a deck's archetype name resolves to the same slug ARCHETYPES.slug uses.
function toArchetypeSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, '')
    .replace(/[\\s-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

export function getDecksByArchetype(archetypeSlug: string): DeckWithEvent[] {
  return allDecks.filter(d => toArchetypeSlug(d.archetype) === archetypeSlug);
}
'''


def var_name(date: str) -> str:
    """'2024-03-02' -> 'decks20240302'"""
    return "decks" + date.replace("-", "")


def scan_decks() -> list:
    """Return deck-file dates, sorted chronologically (oldest first)."""
    return sorted(f.stem for f in DECKS_DIR.glob("*.ts"))


def render(dates: list) -> str:
    lines = [
        'import type { Deck } from "@/types";',
        'import { getEventDetail } from "@/lib/data-layer";',
        '',
        '// Import all deck files',
    ]

    for date in dates:
        lines.append(f'import {{ decks as {var_name(date)} }} from "@/lib/data/decks/{date}";')

    lines.append('')
    lines.append('const allDeckArrays = [')
    for date in dates:
        lines.append(f'  {{ eventSlug: "{date}", decks: {var_name(date)} }},')
    lines.append('];')

    return "\n".join(lines) + "\n" + HELPERS_TEMPLATE


def main():
    print("Generating decks.ts from src/lib/data/decks/...\n")

    dates = scan_decks()
    print(f"Found {len(dates)} deck files")

    OUTPUT_FILE.write_text(render(dates), encoding="utf-8")

    print(f"\n✅ Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
