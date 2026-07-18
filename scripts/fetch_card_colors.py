#!/usr/bin/env python3
r"""
Fetch each card's color identity (W/U/B/R/G) from Scryfall for every unique
card name that appears in src/lib/data/decks/*.ts, writing:
  data/scryfall/colors_manifest.json - maps the exact deck-list name string to
  its color identity, e.g. "Lightning Bolt" -> ["R"].

Uses Scryfall's /cards/collection endpoint (up to 75 exact names per request)
for speed, falling back to a fuzzy /cards/named lookup for any name that
doesn't match exactly (typos, alternate formatting).

Idempotent: a name already present in the manifest is skipped, so re-running
after a new event only fetches the handful of newly-added cards.

Usage:
  python3 scripts/fetch_card_colors.py
"""

import json
import re
import sys
import time
from pathlib import Path

import requests

DECKS_DIR = Path("src/lib/data/decks")
MANIFEST_FILE = Path("data/scryfall/colors_manifest.json")

API_BASE = "https://api.scryfall.com"
HEADERS = {
    "User-Agent": "AmsterdamPauperLeagueSite/1.0 (+https://amsterdampauperleague.nl)",
    "Accept": "application/json",
}
# Scryfall etiquette: keep requests to ~10/sec, so pause a bit between calls.
REQUEST_DELAY = 0.1
BATCH_SIZE = 75
COLOR_ORDER = ["W", "U", "B", "R", "G"]

NAME_RE = re.compile(r'"name":\s*"((?:[^"\\]|\\.)*)"')


def scan_card_names() -> set:
    """Every unique card name string used across all deck files."""
    names = set()
    for f in sorted(DECKS_DIR.glob("*.ts")):
        content = f.read_text(encoding="utf-8")
        for m in NAME_RE.finditer(content):
            names.add(json.loads('"' + m.group(1) + '"'))
    return names


def api_post(url: str, payload: dict) -> requests.Response:
    time.sleep(REQUEST_DELAY)
    return requests.post(url, headers=HEADERS, json=payload, timeout=15)


def api_get(url: str, params: dict = None) -> requests.Response:
    time.sleep(REQUEST_DELAY)
    return requests.get(url, headers=HEADERS, params=params, timeout=15)


def error_detail(resp: requests.Response) -> str:
    try:
        return resp.json().get("details", resp.text)
    except ValueError:
        return resp.text


def color_identity(card: dict) -> list:
    return [c for c in COLOR_ORDER if c in card.get("color_identity", [])]


def fetch_collection(names: list) -> tuple:
    """Exact-name lookup in batches of 75. Returns (name -> colors, not_found names)."""
    found = {}
    not_found = []
    for i in range(0, len(names), BATCH_SIZE):
        batch = names[i:i + BATCH_SIZE]
        resp = api_post(f"{API_BASE}/cards/collection", {
            "identifiers": [{"name": n} for n in batch]
        })
        if resp.status_code != 200:
            raise LookupError(error_detail(resp))
        data = resp.json()
        by_name = {c["name"].lower(): c for c in data.get("data", [])}
        for n in batch:
            card = by_name.get(n.lower())
            if card:
                found[n] = color_identity(card)
            else:
                not_found.append(n)
    return found, not_found


def fetch_fuzzy(name: str) -> list:
    resp = api_get(f"{API_BASE}/cards/named", params={"fuzzy": name})
    if resp.status_code != 200:
        raise LookupError(error_detail(resp))
    return color_identity(resp.json())


def load_manifest() -> dict:
    if MANIFEST_FILE.exists():
        return json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
    return {}


def save_manifest(manifest: dict):
    MANIFEST_FILE.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST_FILE.write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False, sort_keys=True),
        encoding="utf-8",
    )


def main():
    print("Scanning deck files for card names...")
    all_names = sorted(scan_card_names())
    print(f"Found {len(all_names)} unique card names\n")

    manifest = load_manifest()
    names = [n for n in all_names if n not in manifest]
    print(f"{len(all_names) - len(names)} already cached, {len(names)} to fetch\n")

    if not names:
        print("✅ Nothing to do")
        return

    failures = []

    print(f"Looking up {len(names)} names via /cards/collection...")
    found, not_found = fetch_collection(names)
    manifest.update(found)
    save_manifest(manifest)
    print(f"  ✓ {len(found)} resolved, {len(not_found)} need a fuzzy lookup\n")

    for i, name in enumerate(not_found, 1):
        print(f"[{i}/{len(not_found)}] {name}...", end=" ", flush=True)
        try:
            manifest[name] = fetch_fuzzy(name)
            save_manifest(manifest)
            print("✓")
        except Exception as e:
            print(f"❌ {e}")
            failures.append((name, str(e)))

    print(f"\n✅ {len(names) - len(failures)} fetched, {len(failures)} failed")

    if failures:
        print("\n❌ Failed to resolve the following card names (check for typos in deck data):")
        for name, err in failures:
            print(f"  - {name}: {err}")
        sys.exit(1)


if __name__ == "__main__":
    main()
