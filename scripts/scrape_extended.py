#!/usr/bin/env python3
"""
Scrape dutchpauperleague.nl for extended data:
1. Upcoming events (registration links)
2. Individual player pages (event results + per-round match results)
3. Individual archetype pages (by-event appearances with pilot slugs)

Saves progress incrementally to dump_dashboard_pages/scraped_data_extended.json
Run from the project root: python3 scripts/scrape_extended.py
"""

import json
import subprocess
import sys
import time
import urllib.parse
from pathlib import Path

from bs4 import BeautifulSoup

BASE_URL = "https://dutchpauperleague.nl"
CHROME = ["google-chrome", "--headless=new", "--dump-dom"]
OUTPUT_FILE = Path("dump_dashboard_pages/scraped_data_extended.json")
SOURCE_FILE = Path("dump_dashboard_pages/scraped_data.json")


def scrape(url: str, virtual_time: int = 5000) -> str:
    result = subprocess.run(
        CHROME + [f"--virtual-time-budget={virtual_time}", url],
        capture_output=True,
        text=True,
    )
    return result.stdout


def has_next_page(soup: BeautifulSoup) -> bool:
    for a in soup.find_all("a", href=True):
        text = a.get_text(strip=True).lower()
        if text == "next":
            return True
    return False


def slug_to_url(slug: str) -> str:
    """URL-encode special characters in slugs (e.g. apostrophes)."""
    return urllib.parse.quote(slug, safe="-")


def load_progress() -> dict:
    if OUTPUT_FILE.exists():
        with open(OUTPUT_FILE) as f:
            return json.load(f)
    return {"upcomingEvents": [], "playerDetails": {}, "archetypeDetails": {}}


def save_progress(data: dict) -> None:
    with open(OUTPUT_FILE, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def load_source_slugs() -> tuple[list[str], list[str]]:
    with open(SOURCE_FILE) as f:
        source = json.load(f)

    player_slugs: set[str] = set()
    for year_data in source["league"].values():
        for p in year_data["standings"]:
            player_slugs.add(p["playerSlug"])
    for event_data in source["eventDetails"].values():
        for p in event_data.get("standings", []):
            player_slugs.add(p["playerSlug"])

    archetype_slugs: set[str] = set()
    for event_data in source["eventDetails"].values():
        for m in event_data.get("meta", []):
            slug = m.get("archetypeSlug")
            if slug and slug != "unknown":
                archetype_slugs.add(slug)

    return sorted(player_slugs), sorted(archetype_slugs)


# ---------------------------------------------------------------------------
# Upcoming events
# ---------------------------------------------------------------------------

def scrape_upcoming_events() -> list[dict]:
    print("Checking for upcoming events...")
    upcoming = []

    for path in ["/events", "/"]:
        html = scrape(BASE_URL + path, virtual_time=8000)
        soup = BeautifulSoup(html, "html.parser")
        for a in soup.find_all("a", href=True):
            href = a["href"]
            if "topdeck" in href or ("register" in href and "dutchpauperleague" not in href):
                text = a.get_text(strip=True)
                if href not in [e.get("registrationUrl") for e in upcoming]:
                    upcoming.append({"registrationUrl": href, "linkText": text})
                    print(f"  Found registration link: {href}")

    if not upcoming:
        print("  No upcoming events found.")
    return upcoming


# ---------------------------------------------------------------------------
# Player pages
# ---------------------------------------------------------------------------

def parse_player_page(soup: BeautifulSoup) -> dict:
    """Parse a single player page (one page of results)."""
    # Stats: <span class="text-3xl font-bold">35</span> followed by <p ...>wins</p>
    stats = {}
    for span in soup.find_all("span", class_=lambda c: c and "text-3xl" in c and "font-bold" in c):
        label_el = span.find_next_sibling("p")
        if label_el:
            label = label_el.get_text(strip=True).lower()
            try:
                stats[label] = int(span.get_text(strip=True))
            except ValueError:
                pass

    # Event blocks: each event is inside a container div with an h2 + a sibling div for placement/deck
    events = []
    content = soup.find("main") or soup.find("body")
    if not content:
        return {"stats": stats, "events": []}

    for h2 in content.find_all("h2"):
        event_link = h2.find("a", href=True)
        event_slug = None
        if event_link and "/events/" in event_link["href"]:
            event_slug = event_link["href"].split("/events/")[-1]

        event = {
            "eventName": h2.get_text(strip=True),
            "eventSlug": event_slug,
            "placement": None,
            "deck": None,
            "deckSlug": None,
            "rounds": [],
        }

        # Placement + deck are in a sibling div after h2, inside the same parent div
        parent = h2.parent
        if parent:
            # Find span with "• " for placement, and link to /decks/ for deck
            placement_span = parent.find("span", class_=lambda c: c and "muted" in c)
            if placement_span:
                text = placement_span.get_text(strip=True)
                digits = "".join(c for c in text if c.isdigit())
                if digits:
                    event["placement"] = int(digits)

            deck_link = parent.find("a", href=lambda h: h and "/decks/" in h)
            if deck_link:
                event["deck"] = deck_link.get_text(strip=True)
                event["deckSlug"] = deck_link["href"].split("/decks/")[-1]

        # Find the table in the next sibling container
        # The table is a sibling of h2's parent, or a child of the grandparent
        grandparent = parent.parent if parent else None
        table = grandparent.find("table") if grandparent else None
        if not table:
            # Try direct sibling search
            table = h2.find_next("table")

        if table:
            for tr in table.find_all("tr")[1:]:  # skip header
                cells = tr.find_all("td")
                if len(cells) < 4:
                    continue
                try:
                    round_num = int(cells[0].get_text(strip=True))
                    opp_deck = cells[1].get_text(strip=True)
                    # Opponent may have a player slug link
                    opp_link = cells[2].find("a", href=lambda h: h and "/players/" in h)
                    opp_slug = opp_link["href"].split("/players/")[-1] if opp_link else None
                    opp_name = cells[2].get_text(strip=True)
                    result = cells[3].get_text(strip=True)
                    event["rounds"].append({
                        "round": round_num,
                        "opponentDeck": opp_deck,
                        "opponentName": opp_name,
                        "opponentSlug": opp_slug,
                        "result": result,
                    })
                except (ValueError, IndexError):
                    pass

        events.append(event)

    return {"stats": stats, "events": events}


def scrape_player(slug: str) -> dict:
    url_slug = slug_to_url(slug)
    all_events = []
    stats = {}
    page = 1

    while True:
        url = f"{BASE_URL}/players/{url_slug}"
        if page > 1:
            url += f"?page={page}"

        html = scrape(url, virtual_time=6000)
        soup = BeautifulSoup(html, "html.parser")

        body_text = soup.get_text()
        if "404" in body_text and "Return Home" in body_text:
            if page == 1:
                print(f"  WARNING: 404 for slug '{slug}'")
                return {}
            else:
                # No more pages — normal end of pagination
                break

        parsed = parse_player_page(soup)
        if page == 1:
            stats = parsed.get("stats", {})

        events = parsed.get("events", [])
        if not events:
            break

        all_events.extend(events)

        if has_next_page(soup):
            page += 1
            time.sleep(0.5)
        else:
            break

    # Get display name from page title or h1
    name = slug
    h_el = soup.find("h1")
    if h_el:
        name = h_el.get_text(strip=True)

    return {"name": name, "stats": stats, "events": all_events}


# ---------------------------------------------------------------------------
# Archetype pages
# ---------------------------------------------------------------------------

def parse_archetype_page(soup: BeautifulSoup) -> list[dict]:
    """Parse event sections from one archetype page. Returns list of event dicts."""
    events = []
    current_event = None
    current_entries = []

    content = soup.find("main") or soup.find("body")
    if not content:
        return []

    for el in content.find_all(["h2", "tr"]):
        tag = el.name

        if tag == "h2":
            if current_event:
                current_event["entries"] = current_entries
                events.append(current_event)
            event_link = el.find("a", href=True)
            event_slug = None
            if event_link and "/events/" in event_link["href"]:
                event_slug = event_link["href"].split("/events/")[-1]
            current_event = {
                "eventName": el.get_text(strip=True),
                "eventSlug": event_slug,
                "entries": [],
            }
            current_entries = []

        elif tag == "tr" and current_event:
            cells = el.find_all(["td", "th"])
            if len(cells) >= 3:
                pos_text = cells[0].get_text(strip=True)
                pilot_cell = cells[2]
                pilot_link = pilot_cell.find("a", href=True)
                pilot_slug = None
                if pilot_link and "/players/" in pilot_link["href"]:
                    pilot_slug = pilot_link["href"].split("/players/")[-1]
                pilot_name = pilot_cell.get_text(strip=True)
                try:
                    position = int(pos_text)
                    current_entries.append({
                        "position": position,
                        "pilotName": pilot_name,
                        "pilotSlug": pilot_slug,
                    })
                except ValueError:
                    pass  # header row

    if current_event:
        current_event["entries"] = current_entries
        events.append(current_event)

    return events


def scrape_archetype(slug: str) -> dict:
    url_slug = slug_to_url(slug)
    all_events = []
    page = 1

    while True:
        url = f"{BASE_URL}/archetypes/{url_slug}"
        if page > 1:
            url += f"?page={page}"

        html = scrape(url, virtual_time=6000)
        soup = BeautifulSoup(html, "html.parser")

        body_text = soup.get_text()
        if "404" in body_text and "Return Home" in body_text:
            if page == 1:
                print(f"  WARNING: 404 for archetype '{slug}'")
                return {}
            else:
                break

        events = parse_archetype_page(soup)
        if not events:
            break

        all_events.extend(events)

        if has_next_page(soup):
            page += 1
            time.sleep(0.5)
        else:
            break

    h_el = soup.find("h1")
    name = h_el.get_text(strip=True) if h_el else slug

    return {"name": name, "events": all_events}


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    player_slugs, archetype_slugs = load_source_slugs()
    data = load_progress()

    # 1. Upcoming events
    if not data.get("upcomingEvents"):
        data["upcomingEvents"] = scrape_upcoming_events()
        save_progress(data)
    else:
        print(f"Skipping upcoming events (already done, {len(data['upcomingEvents'])} found)")

    # 2 & 3. Player pages (include per-round match results)
    total_players = len(player_slugs)
    done_players = len(data["playerDetails"])
    print(f"\nScraping player pages ({done_players}/{total_players} already done)...")

    for i, slug in enumerate(player_slugs):
        if slug in data["playerDetails"]:
            continue
        print(f"  [{i+1}/{total_players}] {slug}", end="", flush=True)
        result = scrape_player(slug)
        if result:
            data["playerDetails"][slug] = result
            event_count = len(result.get("events", []))
            print(f" — {event_count} events")
        else:
            data["playerDetails"][slug] = {}
            print(" — FAILED")
        save_progress(data)
        time.sleep(0.3)

    # 4. Archetype pages
    total_archetypes = len(archetype_slugs)
    done_archetypes = len(data["archetypeDetails"])
    print(f"\nScraping archetype pages ({done_archetypes}/{total_archetypes} already done)...")

    for i, slug in enumerate(archetype_slugs):
        if slug in data["archetypeDetails"]:
            continue
        print(f"  [{i+1}/{total_archetypes}] {slug}", end="", flush=True)
        result = scrape_archetype(slug)
        if result:
            data["archetypeDetails"][slug] = result
            event_count = len(result.get("events", []))
            print(f" — {event_count} events")
        else:
            data["archetypeDetails"][slug] = {}
            print(" — FAILED")
        save_progress(data)
        time.sleep(0.3)

    print(f"\nDone. Output: {OUTPUT_FILE}")
    print(f"  Players: {len(data['playerDetails'])}")
    print(f"  Archetypes: {len(data['archetypeDetails'])}")
    print(f"  Upcoming events: {len(data['upcomingEvents'])}")


if __name__ == "__main__":
    main()
