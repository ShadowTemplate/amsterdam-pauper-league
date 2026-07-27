import type { CardType, DeckCard } from "@/types";
import { CARD_TYPES } from "@/lib/data/card-types";

// Display order for grouped deck lists (creatures/spells first, lands last -
// the conventional decklist layout).
const TYPE_ORDER: CardType[] = [
  "Creature",
  "Planeswalker",
  "Battle",
  "Instant",
  "Sorcery",
  "Artifact",
  "Enchantment",
  "Land",
  "Other",
];

export interface CardTypeGroup {
  type: CardType;
  cards: DeckCard[];
  count: number;
}

/** Groups a deck section (main deck or sideboard) by card type, in display order. */
export function groupCardsByType(cards: DeckCard[]): CardTypeGroup[] {
  const byType = new Map<CardType, DeckCard[]>();
  for (const card of cards) {
    const type = CARD_TYPES[card.name] ?? "Other";
    if (!byType.has(type)) byType.set(type, []);
    byType.get(type)!.push(card);
  }

  return TYPE_ORDER.filter(type => byType.has(type)).map(type => {
    const groupCards = byType.get(type)!;
    return {
      type,
      cards: groupCards,
      count: groupCards.reduce((sum, card) => sum + card.quantity, 0),
    };
  });
}
