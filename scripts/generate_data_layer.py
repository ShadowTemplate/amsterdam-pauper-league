#!/usr/bin/env python3
r"""
Generate src/lib/data-layer.ts by scanning src/lib/data/events/*.ts and
reading data/seasons_info.json. Replaces the manual import-and-wire-up step
that was previously needed every time an event or season file was
added/removed.

data/seasons_info.json is the canonical list of season years (same file
src/lib/current-season.ts reads on the website side) - not a directory
scan of src/lib/data/seasons/, so both sides always agree on which years
exist. A year listed there without a generated src/lib/data/seasons/{year}.ts
(e.g. seasons_info.json already mentions a season before its first leg has
been played/generated) is skipped with a warning rather than emitting an
import that would fail to resolve.

archetypes.ts and players.ts are not scanned - there's always exactly one of
each, so those imports/re-exports are fixed.

Usage:
  python3 scripts/generate_data_layer.py
"""

import json
from pathlib import Path


EVENTS_DIR = Path("src/lib/data/events")
SEASONS_DIR = Path("src/lib/data/seasons")
SEASONS_INFO_FILE = Path("data/seasons_info.json")
OUTPUT_FILE = Path("src/lib/data-layer.ts")


def var_prefix(date: str) -> str:
    """'2026-06-06' -> 'e20260606'"""
    return "e" + date.replace("-", "")


def scan_events() -> list:
    """Return event dicts sorted most-recent-first: {date, has_detail}."""
    events = []
    for f in sorted(EVENTS_DIR.glob("*.ts")):
        date = f.stem
        content = f.read_text(encoding="utf-8-sig")
        has_detail = "export const eventDetail" in content
        events.append({"date": date, "has_detail": has_detail})
    events.sort(key=lambda e: e["date"], reverse=True)
    return events


def scan_seasons() -> list:
    """Return years sorted most-recent-first, e.g. [2026, 2025, 2024].
    Sourced from data/seasons_info.json (the canonical season list), not a
    directory scan - falls back to an empty list if the file is missing.
    Skips (with a warning) any year that doesn't have a generated
    src/lib/data/seasons/{year}.ts yet.
    """
    if not SEASONS_INFO_FILE.exists():
        print(f"⚠️  {SEASONS_INFO_FILE} not found - no seasons will be included")
        return []

    with open(SEASONS_INFO_FILE, 'r', encoding='utf-8-sig') as f:
        seasons_info = json.load(f)

    years = []
    for year_str in seasons_info:
        if not (SEASONS_DIR / f"{year_str}.ts").exists():
            print(f"⚠️  {year_str} is in {SEASONS_INFO_FILE} but has no "
                  f"{SEASONS_DIR / f'{year_str}.ts'} yet - skipping "
                  f"(run generate_seasons.py first)")
            continue
        years.append(int(year_str))

    years.sort(reverse=True)
    return years


def render(events: list, years: list) -> str:
    lines = [
        'import type {',
        '  Event,',
        '  EventDetail,',
        '  EventMetaEntry,',
        '  LeagueSeason,',
        '  Archetype,',
        '  ArchetypeDetail,',
        '  Player,',
        '  PlayerDetail,',
        '} from "@/types";',
        '',
        '// ── Event imports ─────────────────────────────────────────────────────────────',
    ]

    for e in events:
        prefix = var_prefix(e["date"])
        if e["has_detail"]:
            lines.append(
                f'import {{ event as {prefix}Event, eventDetail as {prefix}Detail }} '
                f'from "@/lib/data/events/{e["date"]}";'
            )
        else:
            lines.append(f'import {{ event as {prefix}Event }} from "@/lib/data/events/{e["date"]}";')

    lines.append('')
    lines.append('// ── Season imports ────────────────────────────────────────────────────────────')
    for year in years:
        lines.append(f'import {{ season{year} }} from "@/lib/data/seasons/{year}";')

    lines += [
        '',
        '// ── Archetype + Player imports (also re-exported below) ───────────────────────',
        'import { ARCHETYPES as _ARCHETYPES, ARCHETYPE_DETAILS as _ARCHETYPE_DETAILS } from "@/lib/data/archetypes";',
        'import { PLAYERS as _PLAYERS, PLAYER_DETAILS as _PLAYER_DETAILS } from "@/lib/data/players";',
        '',
        'export { _ARCHETYPES as ARCHETYPES, _ARCHETYPE_DETAILS as ARCHETYPE_DETAILS };',
        'export { _PLAYERS as PLAYERS, _PLAYER_DETAILS as PLAYER_DETAILS };',
        '',
        '// ── Assembled arrays ──────────────────────────────────────────────────────────',
        '',
        'export const EVENTS: Event[] = [',
    ]

    for e in events:
        lines.append(f'  {var_prefix(e["date"])}Event,')
    lines.append('];')

    lines += [
        '',
        'export const EVENT_DETAILS: Record<string, EventDetail> = {',
    ]
    for e in events:
        if e["has_detail"]:
            prefix = var_prefix(e["date"])
            lines.append(f'  "{e["date"]}": {prefix}Detail,')
    lines.append('};')

    lines += [
        '',
        '// ── Seasons ───────────────────────────────────────────────────────────────────',
        '',
        'const SEASONS: Record<number, LeagueSeason> = {',
    ]
    for year in years:
        lines.append(f'  {year}: season{year},')
    lines.append('};')

    lines += [
        '',
        '// ── Lookup helpers ────────────────────────────────────────────────────────────',
        '',
        'export function getLeagueSeason(year: number): LeagueSeason | null {',
        '  return SEASONS[year] ?? null;',
        '}',
        '',
        'export function getEvent(slug: string): Event | undefined {',
        '  return EVENTS.find((e) => e.slug === slug);',
        '}',
        '',
        'export function getEventDetail(slug: string): EventDetail | undefined {',
        '  return EVENT_DETAILS[slug];',
        '}',
        '',
        'export function getSeasonMeta(year: number): EventMetaEntry[] {',
        '  const prefix = `${year}-`;',
        '  const counts = new Map<string, { archetype: string; count: number }>();',
        '',
        '  for (const [slug, detail] of Object.entries(EVENT_DETAILS)) {',
        '    if (!slug.startsWith(prefix)) continue;',
        '    for (const m of detail.meta) {',
        '      const existing = counts.get(m.archetypeSlug);',
        '      if (existing) existing.count += m.count;',
        '      else counts.set(m.archetypeSlug, { archetype: m.archetype, count: m.count });',
        '    }',
        '  }',
        '',
        '  const total = [...counts.values()].reduce((sum, c) => sum + c.count, 0);',
        '  return [...counts.entries()].map(([archetypeSlug, { archetype, count }]) => ({',
        '    archetype,',
        '    archetypeSlug,',
        '    count,',
        '    percentage: total > 0 ? `${((count / total) * 100).toFixed(2)}%` : "0.00%",',
        '  }));',
        '}',
        '',
        'export function getArchetypeDetail(slug: string): ArchetypeDetail | undefined {',
        '  return _ARCHETYPE_DETAILS[slug];',
        '}',
        '',
        'export function getPlayerDetail(slug: string): PlayerDetail | undefined {',
        '  return _PLAYER_DETAILS[slug];',
        '}',
    ]

    return "\n".join(lines) + "\n"


def main():
    print("Generating data-layer.ts from events/ and seasons/...\n")

    events = scan_events()
    years = scan_seasons()

    print(f"Found {len(events)} events ({sum(1 for e in events if e['has_detail'])} with details)")
    print(f"Found {len(years)} seasons: {years}")

    OUTPUT_FILE.write_text(render(events, years), encoding="utf-8")

    print(f"\n✅ Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
