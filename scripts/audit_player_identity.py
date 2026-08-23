#!/usr/bin/env python3
"""
Audit the player identities that the pipeline merges into a single slug.

Players are keyed by normalize_slug(name) everywhere - standing_slug() in
generate_seasons.py, playerSlug in generate_events.py, the player pages. That
means any two spellings of a name collapse into one player. Usually that is
exactly what we want (someone edits their topdeck.gg profile: case, accents, a
pronoun tag). Occasionally it hides a real problem, so this reports every merge
and flags the ones that don't look clean.

Checks, over every raw event CSV in data/topdeck/:
  A. one slug, several spellings           -> the merges themselves (the recap)
  B. one slug, several emails              -> a row may carry the wrong address
  C. one email, several slugs              -> two people sharing an address
  D. same event, same email, diff. names   -> a mis-keyed registration row
  E. same slug twice in one event          -> two people merged, no email needed
  F. same slug, diff. decklists in one event
  G. missingplayer.com placeholders        -> excluded from B-D by design

C/D/E/F are hard conflicts: one person cannot hold two rows in one event, so a
hit there means two different people are being scored as one. A/B are advisory.

This runs last in update_website.py and never fails the pipeline - by then
everything is already generated, so a non-zero exit would only obscure the
report. Use --strict (e.g. in CI) to exit 1 when a hard conflict is found.

Known blind spot: two genuinely different people with the same name who never
attend the same event merge silently and leave no evidence in these files.
Only a stable topdeck uid could catch that, and it is available solely for
events fetched through the API (see fetch_topdeck_data.py).

Usage:
  python3 scripts/audit_player_identity.py [--verbose] [--strict]
"""

import argparse
import csv
import glob
import sys
from collections import defaultdict
from pathlib import Path

from utils import normalize_slug, strip_pronoun_suffix, extract_event_name

ROOT = Path(__file__).resolve().parent.parent
PLAYERS_GLOB = str(ROOT / "data/topdeck/players/*.csv")
STANDINGS_GLOB = str(ROOT / "data/topdeck/standings/*.csv")

# Synthesised for players who never registered; they encode the name itself,
# so they carry no identity signal. email_generator.py skips them too.
PLACEHOLDER_DOMAIN = "missingplayer.com"


def read_csv(path: str) -> list:
    with open(path, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def player_name(row: dict) -> str:
    """Name as the rest of the pipeline sees it (pronoun tag stripped)."""
    return strip_pronoun_suffix((row.get("Player") or "").strip())


class Index:
    """Every identity relation we need, built in one pass over the CSVs."""

    def __init__(self):
        self.player_files = sorted(glob.glob(PLAYERS_GLOB))
        self.standings_files = sorted(glob.glob(STANDINGS_GLOB))
        self.rows = 0
        self.slug_names = defaultdict(lambda: defaultdict(set))
        self.slug_emails = defaultdict(lambda: defaultdict(set))
        self.email_slugs = defaultdict(lambda: defaultdict(set))
        self.event_email_names = defaultdict(lambda: defaultdict(set))
        self.placeholders = []

        for path in self.player_files:
            event = extract_event_name(Path(path).name)
            for row in read_csv(path):
                name = player_name(row)
                if not name:
                    continue
                self.rows += 1
                slug = normalize_slug(name)
                self.slug_names[slug][name].add(event)
                email = (row.get("Email") or "").strip().lower()
                if not email:
                    continue
                if PLACEHOLDER_DOMAIN in email:
                    self.placeholders.append((event, name, email))
                    continue
                self.slug_emails[slug][email].add(event)
                self.email_slugs[email][slug].add(event)
                self.event_email_names[event][email].add(name)

        # Standings carry no email, but they are the names that actually score
        # points - a spelling can appear there and nowhere else.
        for path in self.standings_files:
            event = extract_event_name(Path(path).name)
            for row in read_csv(path):
                name = player_name(row)
                if name:
                    self.rows += 1
                    self.slug_names[normalize_slug(name)][name].add(event)

    def merges(self) -> dict:
        """Slugs joining more than one spelling: {slug: {name: {events}}}."""
        return {s: n for s, n in self.slug_names.items() if len(n) > 1}

    def multi_email_slugs(self) -> dict:
        return {s: m for s, m in self.slug_emails.items() if len(m) > 1}

    def shared_emails(self) -> dict:
        return {e: s for e, s in self.email_slugs.items() if len(s) > 1}

    def same_event_email_clashes(self) -> list:
        return [(ev, email, sorted(names))
                for ev in sorted(self.event_email_names)
                for email, names in sorted(self.event_email_names[ev].items())
                if len(names) > 1]

    def duplicate_slug_in_event(self) -> list:
        """(kind, event, slug, rows) where one slug holds >1 row in one event."""
        hits = []
        for kind, paths in (("players", self.player_files),
                            ("standings", self.standings_files)):
            for path in paths:
                event = extract_event_name(Path(path).name)
                seen = defaultdict(list)
                for row in read_csv(path):
                    name = player_name(row)
                    if name:
                        seen[normalize_slug(name)].append(row)
                hits += [(kind, event, slug, rows)
                         for slug, rows in sorted(seen.items()) if len(rows) > 1]
        return hits

    def conflicting_decklists(self) -> list:
        hits = []
        for path in self.player_files:
            event = extract_event_name(Path(path).name)
            seen = defaultdict(set)
            for row in read_csv(path):
                name = player_name(row)
                if name:
                    seen[normalize_slug(name)].add((row.get("Decklist") or "").strip())
            hits += [(event, slug, sorted(urls))
                     for slug, urls in sorted(seen.items()) if len(urls) > 1]
        return hits


def print_recap(idx: Index) -> None:
    merges = idx.merges()
    print(f"Scanned {len(idx.player_files)} player CSVs + "
          f"{len(idx.standings_files)} standings CSVs -> {idx.rows} rows, "
          f"{len(idx.slug_names)} distinct player slugs.")

    if not merges:
        print("\nNo merged identities - every slug has exactly one spelling.")
        return

    print(f"\nMerged identities ({len(merges)}) - these spellings score as one player:")
    for slug, names in sorted(merges.items()):
        emails = idx.slug_emails.get(slug, {})
        if len(emails) == 1:
            note = "one email behind all spellings"
        elif not emails:
            note = "no email on file"
        else:
            note = f"CHECK: {len(emails)} different emails"
        print(f"\n  {slug}  ({note})")
        for name, events in sorted(names.items(), key=lambda kv: -len(kv[1])):
            print(f"      {name!r}  x{len(events)}")


def print_warnings(idx: Index, verbose: bool) -> int:
    """Print every anomaly. Returns the number of hard conflicts."""
    def block(title, empty="none"):
        print(f"\n  {title}")
        return empty

    multi = idx.multi_email_slugs()
    if multi:
        print(f"\n  Advisory - {len(multi)} slug(s) with more than one email "
              f"(usually a re-registration, but check the odd one out):")
        for slug, emails in sorted(multi.items()):
            ranked = sorted(emails.items(), key=lambda kv: -len(kv[1]))
            for i, (email, events) in enumerate(ranked):
                tag = "dominant" if i == 0 else f"minority ({len(events)})"
                others = [s for s in idx.email_slugs[email] if s != slug]
                flag = f"  <-- ALSO USED BY {others}" if others else ""
                print(f"      {slug:<22} {email:<34} x{len(events):<3} {tag}{flag}")
                if verbose:
                    for event in sorted(events):
                        print(f"          {event}")

    conflicts = 0

    shared = idx.shared_emails()
    if shared:
        conflicts += len(shared)
        print(f"\n  ❌ {len(shared)} email(s) shared by more than one player:")
        for email, slugs in sorted(shared.items()):
            print(f"      {email}")
            for slug, events in sorted(slugs.items()):
                print(f"          {slug:<24} x{len(events)}  ({', '.join(sorted(events))})")

    clashes = idx.same_event_email_clashes()
    if clashes:
        conflicts += len(clashes)
        print(f"\n  ❌ {len(clashes)} event(s) where one email covers two names "
              f"(likely a mis-keyed registration row):")
        for event, email, names in clashes:
            print(f"      {event}\n          {email} -> {names}")

    dupes = idx.duplicate_slug_in_event()
    if dupes:
        conflicts += len(dupes)
        print(f"\n  ❌ {len(dupes)} case(s) of one slug holding two rows in a "
              f"single event - two different people scored as one:")
        for kind, event, slug, rows in dupes:
            print(f"      [{kind}] {event}  slug={slug}")
            for row in rows:
                print(f"          {dict(list(row.items())[:3])}")

    decks = idx.conflicting_decklists()
    if decks:
        conflicts += len(decks)
        print(f"\n  ❌ {len(decks)} case(s) of one slug with two decklists in a "
              f"single event:")
        for event, slug, urls in decks:
            print(f"      {event}  slug={slug}")
            for url in urls:
                print(f"          {url}")

    if idx.placeholders and verbose:
        print(f"\n  {len(idx.placeholders)} placeholder "
              f"@{PLACEHOLDER_DOMAIN} row(s) (excluded from the email checks):")
        for event, name, email in idx.placeholders:
            print(f"      {event:<42} {name!r:<28} {email}")
    elif idx.placeholders:
        print(f"\n  {len(idx.placeholders)} placeholder @{PLACEHOLDER_DOMAIN} "
              f"row(s) excluded from the email checks (--verbose to list).")

    return conflicts


def main():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--verbose", action="store_true",
                        help="list every event behind each finding")
    parser.add_argument("--strict", action="store_true",
                        help="exit 1 if a hard conflict is found")
    args = parser.parse_args()

    idx = Index()
    if not idx.player_files:
        print("⚠️  No player CSVs found - nothing to audit.")
        return

    print_recap(idx)
    conflicts = print_warnings(idx, args.verbose)

    if conflicts:
        print(f"\n⚠️  {conflicts} identity conflict(s) need a look - see above.")
        if args.strict:
            sys.exit(1)
    else:
        print("\n✅ No identity conflicts: no shared emails, no duplicated slugs.")


if __name__ == "__main__":
    main()
