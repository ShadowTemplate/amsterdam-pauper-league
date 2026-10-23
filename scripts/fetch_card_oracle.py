#!/usr/bin/env python3
r"""
Fetch each card's current Oracle wording from Scryfall for every unique card
name that appears in src/lib/data/decks/*.ts, writing:
  data/scryfall/oracle_manifest.json - maps the exact deck-list name string to
  a list of faces, each {name, manaCost, typeLine, text, stats?}, e.g.
  "Lightning Bolt" -> [{"name": "Lightning Bolt", "manaCost": "{R}",
  "typeLine": "Instant", "text": "Lightning Bolt deals 3 damage to any target."}].

The text printed on a card image can be outdated (errata, templating
updates), so the preview popup shows this Oracle text next to the image.

Single-faced cards have one face. Double-faced, split, adventure and flip
cards have one entry per face (from Scryfall's "card_faces"), in the same
order Scryfall lists them. "stats" is power/toughness, loyalty or defense,
when the face has one.

Uses Scryfall's /cards/collection endpoint (up to 75 exact names per request)
for speed, falling back to a fuzzy /cards/named lookup for any name that
doesn't match exactly (typos, alternate formatting).

Also downloads the SVG of every mana/tap symbol ({T}, {1}{U}, {W/P}, ...)
used in that text to public/scryfall/symbols/, named after the symbol with
braces and slashes dropped ({W/U} -> WU.svg), which is how the popup finds
them. Already-downloaded symbols are skipped.

Idempotent: a name already present in the manifest is skipped, so re-running
after a new event only fetches the handful of newly-added cards. Pass
--refresh to re-fetch every card (e.g. after a round of Oracle errata).

Usage:
  python3 scripts/fetch_card_oracle.py [--refresh]
"""

import json
import re
import sys
import time
from pathlib import Path

import requests

DECKS_DIR = Path("src/lib/data/decks")
MANIFEST_FILE = Path("data/scryfall/oracle_manifest.json")
SYMBOLS_DIR = Path("public/scryfall/symbols")

API_BASE = "https://api.scryfall.com"
HEADERS = {
    "User-Agent": "AmsterdamPauperLeagueSite/1.0 (+https://amsterdampauperleague.nl)",
    "Accept": "application/json",
}
# Scryfall etiquette: keep requests to ~10/sec, so pause a bit between calls.
REQUEST_DELAY = 0.1
BATCH_SIZE = 75

NAME_RE = re.compile(r'"name":\s*"((?:[^"\\]|\\.)*)"')
SYMBOL_RE = re.compile(r"\{[^}]+\}")


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


def face_stats(face: dict) -> str:
    if "power" in face and "toughness" in face:
        return f"{face['power']}/{face['toughness']}"
    if "loyalty" in face:
        return f"Loyalty: {face['loyalty']}"
    if "defense" in face:
        return f"Defense: {face['defense']}"
    return ""


def oracle_face(face: dict) -> dict:
    out = {
        "name": face.get("name", ""),
        "manaCost": face.get("mana_cost", ""),
        "typeLine": face.get("type_line", ""),
        "text": face.get("oracle_text", ""),
    }
    stats = face_stats(face)
    if stats:
        out["stats"] = stats
    return out


def card_oracle(card: dict) -> list:
    faces = card.get("card_faces")
    if faces:
        return [oracle_face(f) for f in faces]
    return [oracle_face(card)]


def fetch_collection(names: list) -> tuple:
    """Exact-name lookup in batches of 75. Returns (name -> faces, not_found names)."""
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
                found[n] = card_oracle(card)
            else:
                not_found.append(n)
    return found, not_found


def fetch_fuzzy(name: str) -> list:
    resp = api_get(f"{API_BASE}/cards/named", params={"fuzzy": name})
    if resp.status_code != 200:
        raise LookupError(error_detail(resp))
    return card_oracle(resp.json())


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


def symbol_filename(symbol: str) -> str:
    # Must match symbolSrc() in src/components/CardPreviewPopup.astro.
    return symbol.strip("{}").replace("/", "") + ".svg"


def download_symbols(manifest: dict) -> list:
    """Download any missing symbol SVG used in the manifest. Returns failures."""
    used = set()
    for faces in manifest.values():
        for face in faces:
            used.update(SYMBOL_RE.findall(face["manaCost"] + face["text"]))
    missing = sorted(s for s in used if not (SYMBOLS_DIR / symbol_filename(s)).exists())
    print(f"{len(used)} symbols used, {len(missing)} to download")
    if not missing:
        return []

    resp = api_get(f"{API_BASE}/symbology")
    if resp.status_code != 200:
        raise LookupError(error_detail(resp))
    svg_uris = {s["symbol"]: s.get("svg_uri") for s in resp.json().get("data", [])}

    SYMBOLS_DIR.mkdir(parents=True, exist_ok=True)
    failures = []
    for symbol in missing:
        uri = svg_uris.get(symbol)
        if not uri:
            failures.append((symbol, "not in Scryfall symbology"))
            continue
        svg = api_get(uri)
        if svg.status_code != 200:
            failures.append((symbol, f"HTTP {svg.status_code}"))
            continue
        (SYMBOLS_DIR / symbol_filename(symbol)).write_bytes(svg.content)
        print(f"  ✓ {symbol}")
    return failures


def main():
    refresh = "--refresh" in sys.argv[1:]

    print("Scanning deck files for card names...")
    all_names = sorted(scan_card_names())
    print(f"Found {len(all_names)} unique card names\n")

    manifest = {} if refresh else load_manifest()
    names = [n for n in all_names if n not in manifest]
    print(f"{len(all_names) - len(names)} already cached, {len(names)} to fetch\n")

    failures = []

    if not names:
        print("Nothing to fetch")

    else:
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

        print(f"\n✅ {len(names) - len(failures)} fetched, {len(failures)} failed\n")

    failures += download_symbols(manifest)

    if failures:
        print("\n❌ Failed to resolve the following card names/symbols (check for typos in deck data):")
        for name, err in failures:
            print(f"  - {name}: {err}")
        sys.exit(1)


if __name__ == "__main__":
    main()
