# Updating the website after a TopDeck event

This describes the full process to get a newly-played league leg (or any
TopDeck.gg event) from raw export data onto the live site. It's a mix of a
few manual steps (exporting from TopDeck, tagging archetypes) and a fully
scripted pipeline for everything else.

## 1. Manual steps

These have to happen before any script runs - nothing in `scripts/`
generates this input, it's sourced from TopDeck.gg / curated by hand.

### 1.1 Export CSVs from TopDeck.gg

For the event, export three CSVs from TopDeck.gg and save them with the
naming convention `{Event Name}_{YYYY-MM-DD}.csv` (rounds use
`{Event_Name_With_Underscores}_Round{N}.csv` instead):

| CSV | Save to |
|---|---|
| Standings | `data/topdeck/standings/` |
| Players (with decklist URLs) | `data/topdeck/players/` |
| Round-by-round results (one per round) | `data/topdeck/rounds/` |

Match the filename style already in those folders exactly, e.g.:
`Amsterdam Pauper League – 4° Leg – 2026_2026-07-04.csv`

### 1.2 Tag archetypes

Create `data/archetypes/archetypes_{Event Name}_{YYYY-MM-DD}.json`, mapping
each deck ID (from the players CSV's decklist URL) to its archetype name:

```json
{
  "a5e4xgeuxs2gixvxy2ql9qv8": "Familiars",
  "a83351vzx9d7bqn9adpzx35w": "MonoU Terror"
}
```

No script infers archetypes from decklists - this is a manual read-and-tag
step over that event's decks.

### 1.3 (Season end only) Update byes/flights

If this leg concludes a season, or you're otherwise updating who won a
flight/bye, edit `data/seasons_info.json` for that year:

```json
{
  "2026": {
    "awards": [
      { "playerSlug": "bram_deppenbroek", "flight": true, "bye": true }
    ]
  }
}
```

`playerSlug` must match the underscore-slug format from `players.ts`
(`generate_players.py` / `normalize_slug()` in `scripts/utils.py`). The
*number* of byes unlocked (`stats.byesUnlocked`) is computed automatically
from attendance by `generate_seasons.py` - this file only says *who* gets
them, not how many are available.

## 2. Run the pipeline

Once the manual inputs above are in place, run everything with one command
from the project root:

```bash
python3 scripts/update_website.py
```

If the event has real decklist URLs on TopDeck.gg (true for any event run
after the switch away from dutchpauperleague.nl), pass the players CSV so
decks get scraped first:

```bash
python3 scripts/update_website.py --decks-csv "data/topdeck/players/Amsterdam Pauper League – 4° Leg – 2026_2026-07-04.csv"
```

This runs, in order:

1. **`download_topdeck_decks.py`** *(only with `--decks-csv`)* - scrapes
   mainboard/sideboard for every deck URL in that CSV, writes
   `data/topdeck/decks/{Event Name}.json`.
2. **`generate_events.py`** - builds `src/lib/data/events/{date}.ts` from
   the standings/players/archetypes files.
3. **`generate_players.py`** - rebuilds `src/lib/data/players.ts` (match
   history for every player, across all events).
4. **`generate_archetypes.py`** - rebuilds `src/lib/data/archetypes.ts`.
5. **`generate_decks.py`** - converts every JSON in `data/topdeck/decks/`
   into `src/lib/data/decks/{date}.ts` (needs step 2's event names to map
   a deck JSON file to the right date - fails loudly on a duplicate event
   name instead of silently mis-mapping).
6. **`generate_decks_lib.py`** - rebuilds `src/lib/decks.ts`, wiring up
   every deck-file import automatically.
7. **`generate_seasons.py`** - rebuilds `src/lib/data/seasons/{year}.ts`
   (points, stats, byesUnlocked) from events + `seasons_info.json`.
8. **`generate_data_layer.py`** - rebuilds `src/lib/data-layer.ts`, wiring up
   every event/season import automatically.

Each step reads the *current state* of `data/` and `src/lib/data/`, so
re-running the whole pipeline any time is always safe and idempotent.

## 3. Verify and commit

```bash
npm run build
```

Confirm it completes with no errors, spot-check the new event/season/deck
pages locally (`npm run dev`), then commit the changes.

## What's not part of this flow

- **`convert_past_event_decks.py`** is a one-off backfill script that was
  used once to migrate historical (pre-TopDeck-URL) deck data from
  hand-maintained TS files into the same JSON format the scraper produces.
  It has no reason to run again for new events.
