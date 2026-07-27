# Updating the website after a TopDeck event

This describes the full process to get a newly-played league leg (or any
TopDeck.gg event) from raw export data onto the live site. It's a single
scripted pipeline plus one manual step (tagging archetypes) that happens
*between* two runs of that pipeline.

## 1. Run the pipeline

```bash
python3 scripts/update_website.py
```

This runs, in order:

1. **`fetch_topdeck_data.py`** - auto-discovers every completed tournament
   owned by the API key in `data/secrets.json` that isn't already in
   `data/topdeck/standings/`, and fetches standings, players, round-by-round
   results, and decklists for each from the topdeck.gg API, writing:

   | Data | Saved to |
   |---|---|
   | Standings | `data/topdeck/standings/{Event Name}_{YYYY-MM-DD}.csv` |
   | Players (with decklist URLs) | `data/topdeck/players/{Event Name}_{YYYY-MM-DD}.csv` |
   | Round-by-round results (one per round) | `data/topdeck/rounds/{Event_Name_With_Underscores}_Round{N}.csv` |
   | Decklists | `data/topdeck/decks/{Event Name}.json` |

   To fetch a specific tournament instead (e.g. to backfill a historical
   event not owned by this API key - standings/rounds/decklists are public
   data and work for any tournament ID), run
   `python3 scripts/fetch_topdeck_data.py <TID>` directly rather than the
   full pipeline. `--force` re-fetches topdeck.gg data for a tournament that
   already has files. See the script's docstring for more (draw-score
   handling, what's public vs. staff-only).
2. **`fetch_archetypes_data.py`** - for every event with a
   `data/topdeck/decks/{Event Name}.json` but no archetypes file yet, seeds
   `data/archetypes/{Event Name}.json` with every deck ID mapped to
   `"Unknown"`, then tries the (unreliable) archetype classifier to improve
   on that. Never overwrites an existing archetypes file, hand-tagged or
   not - can be re-run independently of fetching topdeck.gg data.
3. **`generate_events.py`** - builds `src/lib/data/events/{date}.ts` from
   the standings/players/archetypes files.
4. **`generate_players.py`** - rebuilds `src/lib/data/players.ts` (match
   history for every player, across all events).
5. **`generate_archetypes.py`** - rebuilds `src/lib/data/archetypes.ts`.
6. **`generate_decks.py`** - converts every JSON in `data/topdeck/decks/`
   into `src/lib/data/decks/{date}.ts` (needs step 3's event names to map
   a deck JSON file to the right date - fails loudly on a duplicate event
   name instead of silently mis-mapping).
7. **`generate_decks_lib.py`** - rebuilds `src/lib/decks.ts`, wiring up
   every deck-file import automatically.
8. **`download_card_images.py`** - resolves every unique card name across all
   decks against the Scryfall API (first/oldest printing), downloading
   preview images to `public/scryfall/` and recording them in
   `data/scryfall/manifest.json`. Idempotent - only newly-seen card names
   hit the network on a re-run.
9. **`generate_card_images.py`** - rebuilds `src/lib/data/card-images.ts`
   from `data/scryfall/manifest.json`.
10. **`fetch_card_colors.py`** - resolves every unique card name across all
    decks against the Scryfall API, recording each card's casting-cost
    colors (W/U/B/R/G) in `data/scryfall/colors_manifest.json`. Idempotent,
    same as step 8.
11. **`generate_card_colors.py`** - rebuilds `src/lib/data/card-colors.ts`
    from `data/scryfall/colors_manifest.json`.
12. **`fetch_card_types.py`** - resolves every unique card name across all
    decks against the Scryfall API, recording each card's primary type
    (Creature/Instant/Sorcery/Artifact/Enchantment/Planeswalker/Battle/Land)
    in `data/scryfall/types_manifest.json`. Idempotent, same as step 8. This
    is what lets deck pages group the main deck/sideboard by card type.
13. **`generate_card_types.py`** - rebuilds `src/lib/data/card-types.ts`
    from `data/scryfall/types_manifest.json`.
14. **`generate_seasons.py`** - rebuilds `src/lib/data/seasons/{year}.ts`
    (points, stats, byesUnlocked) from events + `seasons_info.json`.
15. **`generate_data_layer.py`** - rebuilds `src/lib/data-layer.ts`, wiring up
    every event/season import automatically.

Card preview images (`public/scryfall/`) and their manifest
(`data/scryfall/manifest.json`) are committed to the repo, since the GitHub
Pages deploy workflow only runs `npm run build` - it never calls Python or
hits the Scryfall API.

Each step reads the *current state* of `data/` and `src/lib/data/`, so
re-running the whole pipeline any time is always safe and idempotent.

**Important:** because step 2 auto-creates the archetypes placeholder for any
new event, the *first* run after a brand new event will generate and publish
that event with every archetype showing `"Unknown"`. Don't stop there -
continue to section 2 below, then re-run the pipeline before shipping.

## 2. Tag archetypes

Open `data/archetypes/{Event Name}.json` (created as a placeholder by step 2
above, every deck ID mapped to `"Unknown"`) and edit each value in place to
the real archetype name:

```json
{
  "a5e4xgeuxs2gixvxy2ql9qv8": "Familiars",
  "a83351vzx9d7bqn9adpzx35w": "MonoU Terror"
}
```

No script infers archetypes from decklists - this is a manual read-and-tag
step over that event's decks. Once tagged, re-run `python3
scripts/update_website.py` to regenerate everything with the real archetype
data (nothing re-fetches from topdeck.gg since that event's files already
exist).

## 3. (Season end only) Update byes/flights

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
them, not how many are available. Re-run the pipeline after editing this too.

## 4. Verify and commit

```bash
npm run build
```

Confirm it completes with no errors, spot-check the new event/season/deck
pages locally (`npm run dev`), then commit the changes.
