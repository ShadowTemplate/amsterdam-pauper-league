import type { Deck } from "@/types";
import { getEventDetail } from "@/lib/data-layer";

// Import all deck files
import { decks as decks20240302 } from "@/lib/data/decks/2024-03-02";
import { decks as decks20240413 } from "@/lib/data/decks/2024-04-13";
import { decks as decks20240504 } from "@/lib/data/decks/2024-05-04";
import { decks as decks20240531 } from "@/lib/data/decks/2024-05-31";
import { decks as decks20240706 } from "@/lib/data/decks/2024-07-06";
import { decks as decks20240803 } from "@/lib/data/decks/2024-08-03";
import { decks as decks20240907 } from "@/lib/data/decks/2024-09-07";
import { decks as decks20241005 } from "@/lib/data/decks/2024-10-05";
import { decks as decks20241102 } from "@/lib/data/decks/2024-11-02";
import { decks as decks20241207 } from "@/lib/data/decks/2024-12-07";
import { decks as decks20250412 } from "@/lib/data/decks/2025-04-12";
import { decks as decks20250503 } from "@/lib/data/decks/2025-05-03";
import { decks as decks20250614 } from "@/lib/data/decks/2025-06-14";
import { decks as decks20250705 } from "@/lib/data/decks/2025-07-05";
import { decks as decks20250802 } from "@/lib/data/decks/2025-08-02";
import { decks as decks20250906 } from "@/lib/data/decks/2025-09-06";
import { decks as decks20251004 } from "@/lib/data/decks/2025-10-04";
import { decks as decks20251101 } from "@/lib/data/decks/2025-11-01";
import { decks as decks20251213 } from "@/lib/data/decks/2025-12-13";
import { decks as decks20260117 } from "@/lib/data/decks/2026-01-17";
import { decks as decks20260411 } from "@/lib/data/decks/2026-04-11";
import { decks as decks20260502 } from "@/lib/data/decks/2026-05-02";
import { decks as decks20260606 } from "@/lib/data/decks/2026-06-06";
import { decks as decks20260704 } from "@/lib/data/decks/2026-07-04";

const allDeckArrays = [
  { eventSlug: "2024-03-02", decks: decks20240302 },
  { eventSlug: "2024-04-13", decks: decks20240413 },
  { eventSlug: "2024-05-04", decks: decks20240504 },
  { eventSlug: "2024-05-31", decks: decks20240531 },
  { eventSlug: "2024-07-06", decks: decks20240706 },
  { eventSlug: "2024-08-03", decks: decks20240803 },
  { eventSlug: "2024-09-07", decks: decks20240907 },
  { eventSlug: "2024-10-05", decks: decks20241005 },
  { eventSlug: "2024-11-02", decks: decks20241102 },
  { eventSlug: "2024-12-07", decks: decks20241207 },
  { eventSlug: "2025-04-12", decks: decks20250412 },
  { eventSlug: "2025-05-03", decks: decks20250503 },
  { eventSlug: "2025-06-14", decks: decks20250614 },
  { eventSlug: "2025-07-05", decks: decks20250705 },
  { eventSlug: "2025-08-02", decks: decks20250802 },
  { eventSlug: "2025-09-06", decks: decks20250906 },
  { eventSlug: "2025-10-04", decks: decks20251004 },
  { eventSlug: "2025-11-01", decks: decks20251101 },
  { eventSlug: "2025-12-13", decks: decks20251213 },
  { eventSlug: "2026-01-17", decks: decks20260117 },
  { eventSlug: "2026-04-11", decks: decks20260411 },
  { eventSlug: "2026-05-02", decks: decks20260502 },
  { eventSlug: "2026-06-06", decks: decks20260606 },
  { eventSlug: "2026-07-04", decks: decks20260704 },
];

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
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

export function getDecksByArchetype(archetypeSlug: string): DeckWithEvent[] {
  return allDecks.filter(d => toArchetypeSlug(d.archetype) === archetypeSlug);
}
