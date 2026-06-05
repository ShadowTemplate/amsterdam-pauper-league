import type {
  Event,
  EventDetail,
  LeagueSeason,
  Archetype,
  ArchetypeDetail,
  Player,
  PlayerDetail,
} from "@/types";

// ── Event imports ─────────────────────────────────────────────────────────────
import { event as e20261212Event } from "@/lib/data/events/2026-12-12";
import { event as e20261107Event } from "@/lib/data/events/2026-11-07";
import { event as e20261003Event } from "@/lib/data/events/2026-10-03";
import { event as e20260905Event } from "@/lib/data/events/2026-09-05";
import { event as e20260808Event } from "@/lib/data/events/2026-08-08";
import { event as e20260704Event } from "@/lib/data/events/2026-07-04";
import { event as e20260606Event } from "@/lib/data/events/2026-06-06";
import { event as e20260502Event, eventDetail as e20260502Detail } from "@/lib/data/events/2026-05-02";
import { event as e20260411Event, eventDetail as e20260411Detail } from "@/lib/data/events/2026-04-11";
import { event as e20260117Event, eventDetail as e20260117Detail } from "@/lib/data/events/2026-01-17";
import { event as e20251213Event, eventDetail as e20251213Detail } from "@/lib/data/events/2025-12-13";
import { event as e20251101Event, eventDetail as e20251101Detail } from "@/lib/data/events/2025-11-01";
import { event as e20251004Event, eventDetail as e20251004Detail } from "@/lib/data/events/2025-10-04";
import { event as e20250906Event, eventDetail as e20250906Detail } from "@/lib/data/events/2025-09-06";
import { event as e20250802Event, eventDetail as e20250802Detail } from "@/lib/data/events/2025-08-02";
import { event as e20250705Event, eventDetail as e20250705Detail } from "@/lib/data/events/2025-07-05";
import { event as e20250614Event, eventDetail as e20250614Detail } from "@/lib/data/events/2025-06-14";
import { event as e20250503Event, eventDetail as e20250503Detail } from "@/lib/data/events/2025-05-03";
import { event as e20250412Event, eventDetail as e20250412Detail } from "@/lib/data/events/2025-04-12";
import { event as e20241207Event, eventDetail as e20241207Detail } from "@/lib/data/events/2024-12-07";
import { event as e20241102Event, eventDetail as e20241102Detail } from "@/lib/data/events/2024-11-02";
import { event as e20241005Event, eventDetail as e20241005Detail } from "@/lib/data/events/2024-10-05";
import { event as e20240907Event, eventDetail as e20240907Detail } from "@/lib/data/events/2024-09-07";
import { event as e20240803Event, eventDetail as e20240803Detail } from "@/lib/data/events/2024-08-03";
import { event as e20240706Event, eventDetail as e20240706Detail } from "@/lib/data/events/2024-07-06";
import { event as e20240531Event, eventDetail as e20240531Detail } from "@/lib/data/events/2024-05-31";
import { event as e20240504Event, eventDetail as e20240504Detail } from "@/lib/data/events/2024-05-04";
import { event as e20240413Event, eventDetail as e20240413Detail } from "@/lib/data/events/2024-04-13";
import { event as e20240302Event, eventDetail as e20240302Detail } from "@/lib/data/events/2024-03-02";

// ── Season imports ────────────────────────────────────────────────────────────
import { season2026 } from "@/lib/data/seasons/2026";
import { season2025 } from "@/lib/data/seasons/2025";
import { season2024 } from "@/lib/data/seasons/2024";

// ── Archetype + Player imports (also re-exported below) ───────────────────────
import { ARCHETYPES as _ARCHETYPES, ARCHETYPE_DETAILS as _ARCHETYPE_DETAILS } from "@/lib/data/archetypes";
import { PLAYERS as _PLAYERS, PLAYER_DETAILS as _PLAYER_DETAILS } from "@/lib/data/players";

export { _ARCHETYPES as ARCHETYPES, _ARCHETYPE_DETAILS as ARCHETYPE_DETAILS };
export { _PLAYERS as PLAYERS, _PLAYER_DETAILS as PLAYER_DETAILS };

// ── Assembled arrays ──────────────────────────────────────────────────────────

export const EVENTS: Event[] = [
  e20261212Event,
  e20261107Event,
  e20261003Event,
  e20260905Event,
  e20260808Event,
  e20260704Event,
  e20260606Event,
  e20260502Event,
  e20260411Event,
  e20260117Event,
  e20251213Event,
  e20251101Event,
  e20251004Event,
  e20250906Event,
  e20250802Event,
  e20250705Event,
  e20250614Event,
  e20250503Event,
  e20250412Event,
  e20241207Event,
  e20241102Event,
  e20241005Event,
  e20240907Event,
  e20240803Event,
  e20240706Event,
  e20240531Event,
  e20240504Event,
  e20240413Event,
  e20240302Event,
];

export const EVENT_DETAILS: Record<string, EventDetail> = {
  "2026-05-02": e20260502Detail,
  "2026-04-11": e20260411Detail,
  "2026-01-17": e20260117Detail,
  "2025-12-13": e20251213Detail,
  "2025-11-01": e20251101Detail,
  "2025-10-04": e20251004Detail,
  "2025-09-06": e20250906Detail,
  "2025-08-02": e20250802Detail,
  "2025-07-05": e20250705Detail,
  "2025-06-14": e20250614Detail,
  "2025-05-03": e20250503Detail,
  "2025-04-12": e20250412Detail,
  "2024-12-07": e20241207Detail,
  "2024-11-02": e20241102Detail,
  "2024-10-05": e20241005Detail,
  "2024-09-07": e20240907Detail,
  "2024-08-03": e20240803Detail,
  "2024-07-06": e20240706Detail,
  "2024-05-31": e20240531Detail,
  "2024-05-04": e20240504Detail,
  "2024-04-13": e20240413Detail,
  "2024-03-02": e20240302Detail,
};

// ── Seasons ───────────────────────────────────────────────────────────────────

export const LEAGUE_2026 = season2026;
export const LEAGUE_2025 = season2025;
export const LEAGUE_2024 = season2024;

// ── Lookup helpers ────────────────────────────────────────────────────────────

export function getLeagueSeason(year: number): LeagueSeason | null {
  if (year === 2026) return LEAGUE_2026;
  if (year === 2025) return LEAGUE_2025;
  if (year === 2024) return LEAGUE_2024;
  return null;
}

export function getEvent(slug: string): Event | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

export function getEventDetail(slug: string): EventDetail | undefined {
  return EVENT_DETAILS[slug];
}

export function getArchetypeDetail(slug: string): ArchetypeDetail | undefined {
  return _ARCHETYPE_DETAILS[slug];
}

export function getPlayerDetail(slug: string): PlayerDetail | undefined {
  return _PLAYER_DETAILS[slug];
}
