import json
import os
import sys
from time import sleep

import requests

from deck_cache import (
    archetypes_cache_path,
    cache_path,
    ensure_decks_captured,
    load_cached_archetypes,
    load_cached_decks,
    placeholder_deck,
    save_cached_archetypes,
)
from topdeck_client import (
    AmbiguousTournamentError,
    NoOngoingTournamentError,
    TopdeckApiError,
    TopdeckClient,
)

RELOAD_TIMEOUT = 30  # seconds
OBS_DIR = "obs_apl"
CONFIG_FILE = "system_config.json"
CLASSIFIER_URL = "http://masadora.ddns.net:8913"


class ClassifierError(Exception):
    pass


def load_api_key():
    with open(os.path.join(OBS_DIR, "system_key.txt"), "r") as key_file:
        return key_file.readlines()[0].rstrip("\n")


def load_config():
    with open(os.path.join(OBS_DIR, CONFIG_FILE), "r") as config_f:
        return json.loads(config_f.read())


def main():
    config = load_config()
    client = TopdeckClient(api_key=load_api_key())

    override_tid = config.get("Override Event TID")
    if override_tid:
        tid = override_tid
        name = client.get_tournament(tid)["data"]["name"]
        print(f"Using overridden event TID '{tid}' ({name}).")
    else:
        tournament = resolve_ongoing_tournament(client)
        tid, name = tournament["tid"], tournament["name"]

    decks = load_cached_decks(tid)
    if decks is None:
        decks = ensure_decks_captured(client, tid, name)
    else:
        print(
            f"Using cached decks for '{name}' ({len(decks)} players) from "
            f"{cache_path(tid)} — delete that file to force re-capture."
        )

    archetypes = load_cached_archetypes(tid)
    print(
        f"Archetypes cache: {archetypes_cache_path(tid)} ({len(archetypes)} cached) "
        "— delete that file to force reclassification."
    )

    poll_loop(client, tid, decks, archetypes)


def resolve_ongoing_tournament(client):
    while True:
        try:
            return client.get_ongoing_tournament()
        except NoOngoingTournamentError:
            input("No ongoing tournament found. Press Enter to retry...")
        except AmbiguousTournamentError as exc:
            print(exc)
            print("Please resolve this on the topdeck.gg dashboard before continuing.")
            sys.exit(1)


def poll_loop(client, tid, decks, archetypes):
    config = load_config()
    while True:
        try:
            config = load_config()
        except (OSError, json.JSONDecodeError) as exc:
            print(f"Could not reload {CONFIG_FILE} ({exc}), reusing last known config.")
        try:
            generate_obs_label(client, tid, config, decks, archetypes)
        except TopdeckApiError as exc:
            print(exc)
            print("Retrying immediately...")
            sleep(1)
            continue
        print("Waiting to refresh OBS labels...\n")
        sleep(RELOAD_TIMEOUT)


def generate_obs_label(client, tid, config, decks, archetypes):
    print("Loading live tournament information...")
    data = client.get_tournament(tid)
    tournament_name = data["data"]["name"]
    tournament_name = tournament_name.replace("Dutch Pauper League", "DPL")
    print(f"Tournament name: {tournament_name}")
    with open(os.path.join(OBS_DIR, "gen_event.txt"), "w") as out_f:
        out_f.write(tournament_name)
    curr_round = len(data["rounds"])
    print(f"Round in progress: {curr_round}")
    with open(os.path.join(OBS_DIR, "gen_round.txt"), "w") as out_f:
        out_f.write("Round " + str(curr_round))
    round_data = data["rounds"][curr_round - 1]
    print()

    stream_table = config["Stream Table"]
    print(f"Showing table {stream_table}...")
    table_data = round_data["tables"][stream_table - 1]
    table_players = table_data["players"]
    if len(table_players) < 2:
        print(
            f"Table {stream_table} has {len(table_players)} player(s) "
            "(bye or not yet paired) — skipping this cycle."
        )
        return

    p1_index = 0 if not config["Invert Names"] else 1
    p2_index = 1 - p1_index
    p1_name = table_players[p1_index]["name"]
    p1_id = table_players[p1_index]["id"]
    p2_name = table_players[p2_index]["name"]
    p2_id = table_players[p2_index]["id"]

    print(f"Player 1: {p1_name} ({p1_id})")
    with open(os.path.join(OBS_DIR, "gen_p1_name.txt"), "w") as out_f:
        out_f.write(p1_name)
    print(f"Player 2: {p2_name} ({p2_id})")
    with open(os.path.join(OBS_DIR, "gen_p2_name.txt"), "w") as out_f:
        out_f.write(p2_name)

    p1_deck = decks.get(p1_id) or placeholder_deck(tid, p1_id, p1_name)
    p2_deck = decks.get(p2_id) or placeholder_deck(tid, p2_id, p2_name)

    override_p1_archetype = config["Override Player1 Archetype"]
    override_p2_archetype = config["Override Player2 Archetype"]

    needs_p1 = not override_p1_archetype and p1_id not in archetypes
    needs_p2 = not override_p2_archetype and p2_id not in archetypes
    if needs_p1 or needs_p2:
        try:
            classified = classify_decks(tournament_name, p1_deck, p2_deck)
        except ClassifierError as exc:
            print(exc)
            print("Archetype classifier unavailable — using whatever archetype is already known this cycle.")
            with open(os.path.join(OBS_DIR, "gen_p1_archetype.txt"), "w") as out_f:
                out_f.write(override_p1_archetype or archetypes.get(p1_id, ""))
            with open(os.path.join(OBS_DIR, "gen_p2_archetype.txt"), "w") as out_f:
                out_f.write(override_p2_archetype or archetypes.get(p2_id, ""))
            return
        archetypes.update({player_id: archetype for player_id, archetype in classified.items() if archetype})
        save_cached_archetypes(tid, archetypes)
    else:
        print("Archetypes already cached — skipping classifier request this cycle.")

    p1_deck_archetype = override_p1_archetype or archetypes.get(p1_id) or ""
    p2_deck_archetype = override_p2_archetype or archetypes.get(p2_id) or ""

    print(f"Archetype 1: {p1_deck_archetype}")
    with open(os.path.join(OBS_DIR, "gen_p1_archetype.txt"), "w") as out_f:
        out_f.write(p1_deck_archetype)
    print(f"Archetype 2: {p2_deck_archetype}")
    with open(os.path.join(OBS_DIR, "gen_p2_archetype.txt"), "w") as out_f:
        out_f.write(p2_deck_archetype)


CLASSIFIER_TIMEOUT = 30  # seconds - unreliable home server, don't hang the polling loop on it


def classify_decks(event_name, p1_deck, p2_deck):
    print("Classifying decks...")
    try:
        response = requests.post(
            CLASSIFIER_URL,
            json={"event": event_name, "decks": [p1_deck, p2_deck]},
            timeout=CLASSIFIER_TIMEOUT,
        )
        response.raise_for_status()
        data = response.json()
    except (requests.exceptions.RequestException, ValueError) as exc:
        raise ClassifierError(f"Classifier request failed: {exc}") from exc
    if not isinstance(data, dict) or "error" in data:
        raise ClassifierError(f"Classifier returned an error: {data}")
    return data


if __name__ == "__main__":
    main()
