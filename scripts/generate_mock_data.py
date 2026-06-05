#!/usr/bin/env python3
"""
Generate ARCHETYPE_DETAILS and PLAYER_DETAILS TypeScript for mock-data.ts.
Run from project root: python3 scripts/generate_mock_data.py
"""

import json
import re
import sys

EXTENDED_FILE = "dump_dashboard_pages/scraped_data_extended.json"
SOURCE_FILE = "dump_dashboard_pages/scraped_data.json"
MOCK_FILE = "src/lib/mock-data.ts"


def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def js_str(s):
    if s is None:
        return '""'
    return json.dumps(str(s), ensure_ascii=False)


# ---------------------------------------------------------------------------
# Build archetype slug → display name from existing ARCHETYPES in mock-data.ts
# ---------------------------------------------------------------------------
def build_slug_to_name(mock_content: str) -> dict[str, str]:
    pattern = r'\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)"'
    return {m.group(1): m.group(2) for m in re.finditer(pattern, mock_content)}


# ---------------------------------------------------------------------------
# Build deck display name → archetype slug from event meta data
# ---------------------------------------------------------------------------
def build_deck_name_to_slug(source: dict) -> dict[str, str]:
    mapping: dict[str, str] = {}
    for event_data in source.get("eventDetails", {}).values():
        for m in event_data.get("meta", []):
            name = m.get("archetype", "")
            slug = m.get("archetypeSlug", "")
            if name and slug and slug != "unknown":
                mapping[name] = slug
    return mapping


# ---------------------------------------------------------------------------
# Generate ARCHETYPE_DETAILS
# ---------------------------------------------------------------------------
def generate_archetype_details(
    extended: dict,
    source: dict,
    slug_to_name: dict[str, str],
) -> str:
    archetype_details = extended.get("archetypeDetails", {})

    # Build count + percentage from existing ARCHETYPES data (already in source)
    arch_meta: dict[str, dict] = {}
    for event_data in source.get("eventDetails", {}).values():
        for m in event_data.get("meta", []):
            s = m.get("archetypeSlug", "")
            if not s or s == "unknown":
                continue
            if s not in arch_meta:
                arch_meta[s] = {"count": 0, "name": m.get("archetype", s)}
            arch_meta[s]["count"] += m.get("count", 0)

    # Compute total for percentages
    total = sum(v["count"] for v in arch_meta.values())

    lines = ["export const ARCHETYPE_DETAILS: Record<string, ArchetypeDetail> = {"]

    for slug, data in sorted(archetype_details.items()):
        if not data:
            continue
        display_name = slug_to_name.get(slug, arch_meta.get(slug, {}).get("name", slug))
        count = arch_meta.get(slug, {}).get("count", 0)
        pct = f"{count / total * 100:.2f}%" if total > 0 else "0%"

        lines.append(f"  {js_str(slug)}: {{")
        lines.append(f"    slug: {js_str(slug)},")
        lines.append(f"    name: {js_str(display_name)},")
        lines.append(f"    count: {count},")
        lines.append(f"    percentage: {js_str(pct)},")
        lines.append(f"    byEvent: [")

        for event in data.get("events", []):
            event_slug = event.get("eventSlug") or ""
            event_name = event.get("eventName") or ""
            entries = event.get("entries", [])
            if not entries:
                continue
            lines.append(f"      {{")
            lines.append(f"        eventSlug: {js_str(event_slug)},")
            lines.append(f"        eventName: {js_str(event_name)},")
            lines.append(f"        appearances: [")
            for entry in entries:
                pos = entry.get("position", 0)
                pilot = entry.get("pilotName", "")
                pilot_slug = entry.get("pilotSlug", "")
                lines.append(
                    f"          {{ position: {pos}, pilot: {js_str(pilot)}, pilotSlug: {js_str(pilot_slug)}, "
                    f"eventSlug: {js_str(event_slug)}, eventName: {js_str(event_name)} }},"
                )
            lines.append(f"        ],")
            lines.append(f"      }},")

        lines.append(f"    ],")
        lines.append(f"  }},")

    lines.append("};")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Generate PLAYER_DETAILS
# ---------------------------------------------------------------------------
def generate_player_details(
    extended: dict,
    deck_name_to_slug: dict[str, str],
) -> str:
    player_details = extended.get("playerDetails", {})

    lines = ["export const PLAYER_DETAILS: Record<string, PlayerDetail> = {"]

    for slug, data in sorted(player_details.items()):
        if not data:
            continue
        name = data.get("name", slug)
        stats = data.get("stats", {})
        wins = stats.get("wins", 0)
        losses = stats.get("losses", 0)
        draws = stats.get("draws", 0)
        byes = stats.get("byes", 0)

        lines.append(f"  {js_str(slug)}: {{")
        lines.append(f"    slug: {js_str(slug)},")
        lines.append(f"    name: {js_str(name)},")
        lines.append(f"    stats: {{ wins: {wins}, losses: {losses}, draws: {draws}, byes: {byes} }},")
        lines.append(f"    results: [")

        for event in data.get("events", []):
            event_slug = event.get("eventSlug") or ""
            event_name = event.get("eventName") or ""
            position = event.get("placement") or 0
            deck = event.get("deck") or ""
            deck_slug_raw = event.get("deckSlug") or ""
            rounds = event.get("rounds", [])

            lines.append(f"      {{")
            lines.append(f"        eventSlug: {js_str(event_slug)},")
            lines.append(f"        eventName: {js_str(event_name)},")
            lines.append(f"        position: {position},")
            lines.append(f"        deck: {js_str(deck)},")
            lines.append(f"        deckSlug: {js_str(deck_slug_raw)},")
            lines.append(f"        rounds: [")

            for r in rounds:
                rnd = r.get("round", 0)
                opp_deck = r.get("opponentDeck", "")
                opp_deck_slug = deck_name_to_slug.get(opp_deck, "")
                opp_pilot = r.get("opponentName", "")
                opp_slug = r.get("opponentSlug") or ""
                result = r.get("result", "")
                # Normalize result to match union type
                if result not in ("Win", "Loss", "Draw", "Bye"):
                    result = result.capitalize() if result else ""
                lines.append(
                    f"          {{ round: {rnd}, opponentDeck: {js_str(opp_deck)}, "
                    f"opponentDeckSlug: {js_str(opp_deck_slug)}, opponentPilot: {js_str(opp_pilot)}, "
                    f"opponentPilotSlug: {js_str(opp_slug)}, result: {js_str(result)} }},"
                )

            lines.append(f"        ],")
            lines.append(f"      }},")

        lines.append(f"    ],")
        lines.append(f"  }},")

    lines.append("};")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Patch mock-data.ts in place
# ---------------------------------------------------------------------------
def patch_file(mock_content: str, old_stub: str, new_content: str) -> str:
    if old_stub not in mock_content:
        print(f"ERROR: could not find stub: {old_stub!r}", file=sys.stderr)
        sys.exit(1)
    return mock_content.replace(old_stub, new_content, 1)


def main():
    extended = load_json(EXTENDED_FILE)
    source = load_json(SOURCE_FILE)

    with open(MOCK_FILE, encoding="utf-8") as f:
        mock_content = f.read()

    slug_to_name = build_slug_to_name(mock_content)
    deck_name_to_slug = build_deck_name_to_slug(source)

    print(f"Archetype slug→name mappings: {len(slug_to_name)}")
    print(f"Deck name→slug mappings: {len(deck_name_to_slug)}")

    # Check how many round opponent decks we can map
    all_opp_decks: set[str] = set()
    for pdata in extended.get("playerDetails", {}).values():
        for event in pdata.get("events", []):
            for r in event.get("rounds", []):
                all_opp_decks.add(r.get("opponentDeck", ""))
    unmapped = {d for d in all_opp_decks if d and d not in deck_name_to_slug}
    print(f"Opponent decks: {len(all_opp_decks)} unique, {len(unmapped)} unmapped")
    if unmapped:
        print(f"  Unmapped: {sorted(unmapped)[:20]}")

    print("Generating ARCHETYPE_DETAILS...")
    arch_ts = generate_archetype_details(extended, source, slug_to_name)

    print("Generating PLAYER_DETAILS...")
    player_ts = generate_player_details(extended, deck_name_to_slug)

    print("Patching mock-data.ts...")
    patched = patch_file(
        mock_content,
        "export const ARCHETYPE_DETAILS: Record<string, ArchetypeDetail> = {};",
        arch_ts,
    )
    patched = patch_file(
        patched,
        "export const PLAYER_DETAILS: Record<string, PlayerDetail> = {};",
        player_ts,
    )

    with open(MOCK_FILE, "w", encoding="utf-8") as f:
        f.write(patched)

    lines = patched.count("\n") + 1
    print(f"Done. mock-data.ts is now {lines} lines.")


if __name__ == "__main__":
    main()
