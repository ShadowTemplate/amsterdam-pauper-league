#!/usr/bin/env python3
r"""
Download card preview images from Scryfall for every unique card name that
appears in src/lib/data/decks/*.ts, writing:
  - images to public/scryfall/{scryfall_print_id}[_back].jpg
  - a manifest to data/scryfall/manifest.json mapping the exact card-name
    string used in deck data to its image path(s)

Always uses the card's first (oldest) printing, and downloads both faces for
double-faced cards (e.g. "Delver of Secrets // Insectile Aberration") - split/
adventure/aftermath/flip layouts have a single image showing both halves and
are downloaded as one file, same as any normal card.

Idempotent: a name already in the manifest with its image file(s) present on
disk is skipped without any network call, so re-running after a new event
only fetches the handful of newly-added cards.

Usage:
  python3 scripts/download_card_images.py
"""

import json
import re
import sys
import time
from pathlib import Path

import requests

DECKS_DIR = Path("src/lib/data/decks")
IMAGES_DIR = Path("public/scryfall")
MANIFEST_FILE = Path("data/scryfall/manifest.json")

API_BASE = "https://api.scryfall.com"
HEADERS = {
    "User-Agent": "AmsterdamPauperLeagueSite/1.0 (+https://amsterdampauperleague.nl)",
    "Accept": "application/json",
}
# Scryfall etiquette: keep requests to ~10/sec, so pause a bit between calls.
REQUEST_DELAY = 0.1

NAME_RE = re.compile(r'"name":\s*"((?:[^"\\]|\\.)*)"')


def scan_card_names() -> set:
    """Every unique card name string used across all deck files."""
    names = set()
    for f in sorted(DECKS_DIR.glob("*.ts")):
        content = f.read_text(encoding="utf-8")
        for m in NAME_RE.finditer(content):
            names.add(json.loads('"' + m.group(1) + '"'))
    return names


def api_get(url: str, params: dict = None) -> requests.Response:
    time.sleep(REQUEST_DELAY)
    return requests.get(url, headers=HEADERS, params=params, timeout=15)


def error_detail(resp: requests.Response) -> str:
    try:
        return resp.json().get("details", resp.text)
    except ValueError:
        return resp.text


def fetch_card_by_name(name: str) -> dict:
    """Fuzzy-resolve a deck-list name to its canonical Scryfall card object."""
    resp = api_get(f"{API_BASE}/cards/named", params={"fuzzy": name})
    if resp.status_code != 200:
        raise LookupError(error_detail(resp))
    return resp.json()


def has_images(print_obj: dict) -> bool:
    if "image_uris" in print_obj:
        return True
    faces = print_obj.get("card_faces", [])
    return len(faces) >= 2 and all("image_uris" in f for f in faces)


def fetch_first_printing(card: dict) -> dict:
    """All English prints of `card`, sorted by release date ascending - the
    first entry with usable images is the card's first English printing.
    Prefers a paper printing over a digital-only (Arena/MTGO) one when both
    exist. Some old cards were originally sold in several languages at once
    and Scryfall indexes each language as its own printing, so without a
    language filter the "first" print by release date can be a non-English
    one (e.g. Italian) - restricting to lang:en avoids that."""
    resp = api_get(f"{API_BASE}/cards/search", params={
        "q": f'!"{card["name"]}" lang:en',
        "unique": "prints",
        "order": "released",
        "dir": "asc",
    })
    if resp.status_code != 200:
        raise LookupError(error_detail(resp))

    prints = resp.json().get("data", [])
    candidates = [p for p in prints if has_images(p)]
    if not candidates:
        raise LookupError(f"no English printing with images found for {card['name']!r}")

    paper = [p for p in candidates if not p.get("digital")]
    return paper[0] if paper else candidates[0]


def download_image(url: str, dest: Path):
    if dest.exists():
        return
    resp = api_get(url)
    resp.raise_for_status()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(resp.content)


def resolve_print(print_obj: dict) -> dict:
    """Download this printing's image(s) and return its manifest entry."""
    print_id = print_obj["id"]
    front_dest = IMAGES_DIR / f"{print_id}.jpg"
    entry = {
        "id": print_id,
        "set": print_obj.get("set"),
        "released_at": print_obj.get("released_at"),
        "front": f"/scryfall/{print_id}.jpg",
    }

    if "image_uris" in print_obj:
        download_image(print_obj["image_uris"]["large"], front_dest)
    else:
        faces = print_obj["card_faces"]
        back_dest = IMAGES_DIR / f"{print_id}_back.jpg"
        download_image(faces[0]["image_uris"]["large"], front_dest)
        download_image(faces[1]["image_uris"]["large"], back_dest)
        entry["back"] = f"/scryfall/{print_id}_back.jpg"

    return entry


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


def is_cached(name: str, manifest: dict) -> bool:
    entry = manifest.get(name)
    if not entry:
        return False
    if not (Path("public") / entry["front"].lstrip("/")).exists():
        return False
    if entry.get("back") and not (Path("public") / entry["back"].lstrip("/")).exists():
        return False
    return True


def main():
    print("Scanning deck files for card names...")
    names = sorted(scan_card_names())
    print(f"Found {len(names)} unique card names\n")

    manifest = load_manifest()
    print_cache = {}  # canonical Scryfall name -> entry, dedupes shared prints this run
    failures = []
    fetched = 0
    skipped = 0

    for i, name in enumerate(names, 1):
        if is_cached(name, manifest):
            skipped += 1
            continue

        print(f"[{i}/{len(names)}] {name}...", end=" ", flush=True)
        try:
            card = fetch_card_by_name(name)
            canonical = card["name"]
            if canonical in print_cache:
                entry = print_cache[canonical]
            else:
                print_obj = fetch_first_printing(card)
                entry = resolve_print(print_obj)
                print_cache[canonical] = entry

            manifest[name] = entry
            save_manifest(manifest)
            fetched += 1
            print(f"✓ ({entry.get('set')} {entry.get('released_at')})")
        except Exception as e:
            print(f"❌ {e}")
            failures.append((name, str(e)))

    print(f"\n✅ {fetched} fetched, {skipped} already cached, {len(failures)} failed")

    if failures:
        print("\n❌ Failed to resolve the following card names (check for typos in deck data):")
        for name, err in failures:
            print(f"  - {name}: {err}")
        sys.exit(1)


if __name__ == "__main__":
    main()
