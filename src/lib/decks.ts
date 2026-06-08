import type { Deck } from "@/types";

// Import all deck files
import { decks as decks20260117 } from "@/lib/data/decks/2026-01-17";
import { decks as decks20260409 } from "@/lib/data/decks/2026-04-09";
import { decks as decks20260411 } from "@/lib/data/decks/2026-04-11";
import { decks as decks20260430 } from "@/lib/data/decks/2026-04-30";
import { decks as decks20260502 } from "@/lib/data/decks/2026-05-02";
import { decks as decks20260604 } from "@/lib/data/decks/2026-06-04";
import { decks as decks20260606 } from "@/lib/data/decks/2026-06-06";

const allDeckArrays = [
  { eventSlug: "2026-01-17", decks: decks20260117 },
  { eventSlug: "2026-04-09", decks: decks20260409 },
  { eventSlug: "2026-04-11", decks: decks20260411 },
  { eventSlug: "2026-04-30", decks: decks20260430 },
  { eventSlug: "2026-05-02", decks: decks20260502 },
  { eventSlug: "2026-06-04", decks: decks20260604 },
  { eventSlug: "2026-06-06", decks: decks20260606 },
];

// Flatten all decks with event information
const allDecks = allDeckArrays.flatMap(({ eventSlug, decks }) =>
  decks.map(d => ({ ...d, eventSlug }))
);

export function getAllDecks(): (Deck & { eventSlug: string })[] {
  return allDecks;
}

export function getDeck(id: string): (Deck & { eventSlug: string }) | undefined {
  return allDecks.find(d => d.id === id);
}

export function getStaticDeckPaths() {
  return allDecks.map(d => ({
    params: { id: d.id }
  }));
}

export function findDeckByEventAndPilot(eventSlug: string, pilotName: string, archetypeName: string): (Deck & { eventSlug: string }) | undefined {
  return allDecks.find(
    d => d.eventSlug === eventSlug &&
         d.pilotName.toLowerCase() === pilotName.toLowerCase() &&
         d.archetype.toLowerCase() === archetypeName.toLowerCase()
  );
}

export function getDecksByArchetype(archetypeSlug: string): (Deck & { eventSlug: string })[] {
  // Convert slug to archetype name (e.g., "mono-r-madness" -> find decks with "MonoR Madness")
  return allDecks.filter(d => {
    const deckSlug = d.archetype
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return deckSlug === archetypeSlug;
  });
}
