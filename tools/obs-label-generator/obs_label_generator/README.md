# OBS Label Generator

Generates the text files OBS reads live while streaming a Pauper league event
(player names, archetypes, round number, event name), by pulling data straight
from the topdeck.gg API. No manual copy-pasting between rounds.

## What it produces

Six text files in `obs_apl/`, meant to be added to OBS as Text (GDI+) sources
pointing at these files (OBS auto-reloads a text source when its file changes):

- `gen_event.txt` — tournament name (`Dutch Pauper League` is shortened to `DPL`)
- `gen_round.txt` — `Round N`
- `gen_p1_name.txt` / `gen_p2_name.txt` — the two players at the streamed table
- `gen_p1_archetype.txt` / `gen_p2_archetype.txt` — their deck archetypes

## One-time setup

1. Python 3 with `requests` installed.
2. `obs_apl/system_key.txt` — a single line containing your topdeck.gg API key
   (from the topdeck.gg developer portal, for the account that organizes the
   event).
3. `obs_apl/system_config.json`:

   ```json
   {
     "Stream Table": 1,
     "Invert Names": false,
     "Override Player1 Archetype": "",
     "Override Player2 Archetype": "",
     "Override Event TID": ""
   }
   ```

   | Field | Meaning |
   |---|---|
   | `Stream Table` | Which physical table number to feature (1-indexed) — set this to whatever table your camera/stream is actually pointed at. |
   | `Invert Names` | Swaps which of the two players at that table is "Player 1" vs "Player 2". |
   | `Override Player1/2 Archetype` | If non-empty, use this text as that player's archetype instead of asking the classifier. Leave empty to auto-classify. |
   | `Override Event TID` | If non-empty, skip auto-detecting the ongoing event and target this tournament ID directly (mainly useful for testing). Leave empty for normal use. |

   This file is re-read every poll cycle, so you can edit it (e.g. change
   `Stream Table` as the stream moves between tables) while the script is
   already running — no restart needed.

## Running it

```
cd obs_label_generator
python3 obs_label_generator.py
```

### What happens

1. **Event detection** — it calls the topdeck.gg API and finds whichever one
   of your tournaments currently has status `Ongoing`. Only one tournament
   should ever be ongoing at a time:
   - If none are ongoing, it prints a message and waits — press Enter to
     retry once the event has started.
   - If more than one is ongoing, that's a data problem on the topdeck.gg
     dashboard side; the script prints all matches and exits so you can fix
     it there.

2. **Deck capture (once per tournament)** — decklists are only visible via
   the API while the organizer's "Show Decks" setting is on. Since you
   probably don't want decks public for the whole event, the script walks
   you through a short one-time exchange the first time it sees a given
   tournament:
   - *"Enable 'Show Decks' for '\<event name\>' in the topdeck.gg dashboard,
     then press Enter to continue..."* — go flip it on, then press Enter.
   - It checks the API and downloads every player's decklist.
   - *"Disable 'Show Decks' now, then press Enter to continue..."* — flip it
     back off, then press Enter. It re-checks the API to confirm decks are
     actually hidden again before moving on.
   - Any player with no decklist on file (didn't submit yet) silently gets a
     placeholder 60 Forest / 15 Forest deck instead — no prompt, it just
     proceeds.
   - The captured decks are cached to
     `obs_apl/decks_cache/<tournament-id>.json`. On every future run (or if
     the script restarts mid-event), this cache is found and the whole
     enable/disable dance is skipped entirely — decks are only ever exposed
     once per tournament. Delete that file if you ever want to force a
     fresh capture.

3. **Polling loop** — every 30 seconds it:
   - Fetches the live round and table data.
   - Looks up the two players currently seated at `Stream Table`.
   - Gets each player's archetype — from a local cache
     (`obs_apl/decks_cache/<tournament-id>-archetypes.json`) if already
     known, otherwise from the archetype classifier (which is then cached
     for the rest of the event, so it's asked at most once per player).
     Delete that file to force reclassification.
   - Writes all six `gen_*.txt` files.

   If the streamed table currently has a bye or isn't paired yet, that cycle
   is skipped and the previous labels are left as-is. If the classifier is
   temporarily unreachable, names still update and archetypes fall back to
   whatever was last known.

Stop it any time with `Ctrl+C`. Restarting is always safe — cached decks and
archetypes are reused, so nothing needs to be re-entered mid-event.
