import type { Deck, ManaColor } from "@/types";
import { CARD_COLORS } from "@/lib/data/card-colors";

const COLOR_ORDER: ManaColor[] = ["W", "U", "B", "R", "G"];

/** Colors played by a deck's main deck, derived from each card's color identity. */
export function getDeckColors(deck: Pick<Deck, "mainDeck">): ManaColor[] {
  const colors = new Set<ManaColor>();
  for (const card of deck.mainDeck) {
    for (const c of CARD_COLORS[card.name] ?? []) {
      colors.add(c);
    }
  }
  return COLOR_ORDER.filter(c => colors.has(c));
}
