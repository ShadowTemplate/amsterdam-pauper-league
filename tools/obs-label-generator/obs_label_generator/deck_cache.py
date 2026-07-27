import json
import os

from topdeck_client import TopdeckApiError

OBS_DIR = "obs_apl"
DECKS_CACHE_DIR = os.path.join(OBS_DIR, "decks_cache")


def cache_path(tid):
    return os.path.join(DECKS_CACHE_DIR, f"{tid}.json")


def load_cached_decks(tid):
    path = cache_path(tid)
    if not os.path.exists(path):
        return None
    try:
        with open(path, "r") as cache_f:
            cached = json.loads(cache_f.read())
        return cached["decks"]
    except (json.JSONDecodeError, KeyError) as exc:
        print(f"Cache file {path} is corrupted ({exc}), ignoring it.")
        return None


def save_cached_decks(tid, decks):
    os.makedirs(DECKS_CACHE_DIR, exist_ok=True)
    path = cache_path(tid)
    tmp_path = path + ".tmp"
    with open(tmp_path, "w") as cache_f:
        cache_f.write(json.dumps({"tid": tid, "decks": decks}))
    os.replace(tmp_path, path)


def archetypes_cache_path(tid):
    return os.path.join(DECKS_CACHE_DIR, f"{tid}-archetypes.json")


def load_cached_archetypes(tid):
    path = archetypes_cache_path(tid)
    if not os.path.exists(path):
        return {}
    try:
        with open(path, "r") as cache_f:
            return json.loads(cache_f.read())
    except json.JSONDecodeError as exc:
        print(f"Archetypes cache file {path} is corrupted ({exc}), ignoring it.")
        return {}


def save_cached_archetypes(tid, archetypes):
    os.makedirs(DECKS_CACHE_DIR, exist_ok=True)
    path = archetypes_cache_path(tid)
    tmp_path = path + ".tmp"
    with open(tmp_path, "w") as cache_f:
        cache_f.write(json.dumps(archetypes))
    os.replace(tmp_path, path)


def _deck_section_to_list(section):
    return [{"quantity": info["count"], "name": name} for name, info in (section or {}).items()]


def player_to_classifier_deck(tid, player):
    """Build the {id, url, pilotName, mainDeck, sideboard} shape the archetype
    classifier expects (verified live against masadora.ddns.net:8913 - the older
    {id, cards: {mainboard, sideboard}} shape this used to send now gets a 500),
    straight from a /attendees player entry's structured deckObj."""
    deck_obj = player["deckObj"]
    return {
        "id": player["uid"],
        "url": f"https://topdeck.gg/deck/{tid}/{player['uid']}",
        "pilotName": player["name"],
        "mainDeck": _deck_section_to_list(deck_obj.get("Mainboard")),
        "sideboard": _deck_section_to_list(deck_obj.get("Sideboard")),
    }


def placeholder_deck(tid, player_id, player_name):
    """Stand-in for a player with no decklist on file (didn't submit before
    capture, or missing from the cache for any other reason) - a legal 60/15
    mono-Forest deck, so the rest of the pipeline never has to special-case
    "no deck" and can always feed something real to the classifier."""
    return {
        "id": player_id,
        "url": f"https://topdeck.gg/deck/{tid}/{player_id}",
        "pilotName": player_name,
        "mainDeck": [{"quantity": 60, "name": "Forest"}],
        "sideboard": [{"quantity": 15, "name": "Forest"}],
    }


def ensure_decks_captured(client, tid, tournament_name):
    while True:
        try:
            attendees = client.get_attendees(tid)
        except TopdeckApiError as exc:
            print(exc)
            input("Retry fetching attendees? Press Enter to retry...")
            continue
        break

    decks = {}
    missing_names = []
    for player in attendees:
        if player.get("deckObj"):
            try:
                decks[player["uid"]] = player_to_classifier_deck(tid, player)
                continue
            except (KeyError, TypeError) as exc:
                print(f"Could not parse decklist for {player['name']}: {exc}")
        missing_names.append(player["name"])
        decks[player["uid"]] = placeholder_deck(tid, player["uid"], player["name"])

    if missing_names:
        print(
            f"No decklist for: {', '.join(missing_names)} — "
            "using a 60 Forest / 15 Forest placeholder for them."
        )

    save_cached_decks(tid, decks)
    print(f"Captured {len(decks)} decks for '{tournament_name}'.")
    return decks
