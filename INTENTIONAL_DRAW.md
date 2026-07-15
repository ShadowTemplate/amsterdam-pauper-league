# Intentional draws and the topdeck.gg API

`scripts/fetch_topdeck_data.py` fetches round-by-round results from the
topdeck.gg API (`GET /v2/tournaments/{TID}/rounds`). For a drawn match, the
API always reports `winner: "Draw"` (or `winner_id: "Draw"`) with
`winner_games` and `loser_games` both `null` - it tells you *that* two
players drew, never the actual game score.

## Why that's a problem

Almost every draw is a normal 1-1 result: a best-of-3 match where each player
won one game and time (or the match structure) was called before a third.
But occasionally two players intentionally agree to draw without finishing
games out - an "ID" (intentional draw), usually between top-standing players
in the final round, to lock in placement without risking an upset. That
shows up in the historical data as something other than 1-1 (e.g. 0-0).

Since the API gives no way to distinguish the two cases, the script has to
guess.

## What the data says

Scanned every round CSV across all 24 completed events (237 total draws,
as of 2026-07):

| Draw score | Count |
|---|---|
| 1-1 | 236 |
| 0-0 | 1 |

Narrowing to just the *last round* of each event (the only place an ID is
remotely plausible): 41 of 42 draws were still played out 1-1. The single
0-0 exception is Amsterdam Pauper League – 4° Leg – 2026, Round 6, Table 1:
Jelle Zwaan vs. Jelle Schneider, the two eventual co-leaders (16 points
each) - drawing in the final round to secure a shared 1st/2nd finish.

## Script behavior

`fetch_topdeck_data.py` defaults every draw to `1-1` (right ~99.6% of the
time). It only prints a warning for draws in an event's **last round** -
never for earlier rounds, since an ID has never once been observed there:

```
⚠️  Round 6 Table 1: draw between Jelle Zwaan and Jelle Schneider - the API
    doesn't report a game score for draws, defaulting to 1-1. This is the
    last round, where an intentional draw (ID) is most likely - if this was
    one, fix the score by hand.
```

## What to do when you see this warning

Check topdeck.gg (or your own memory of the event) for whether the two
players actually played it out or agreed to an ID. If it was an ID, edit the
round's CSV by hand in `data/topdeck/rounds/{Event_Name}_Round{N}.csv` and
change both win counts to `0`:

```diff
-1,Jelle Zwaan,1,Jelle Schneider,1
+1,Jelle Zwaan,0,Jelle Schneider,0
```

Note this is purely a historical-accuracy fix, not something that changes
the generated site: `generate_players.py`'s `get_match_result` only compares
which side won more games to record win/draw/loss, so `0-0` and `1-1` both
register identically as a draw in `players.ts` either way.
