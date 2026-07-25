import csv
import json
import requests
from collections import defaultdict

from pauperformance_bot.entity.deck.playable import (
    parse_playable_deck_from_lines,
)
from pauperformance_bot.service.pauperformance.pauperformance import \
    PauperformanceService
from pauperformance_bot.service.pauperformance.archive.local import LocalArchiveService
from pauperformance_bot.service.pauperformance.storage.local import LocalStorageService

DEV_DIR = "/home/gianvito/personal/pauperformance-bot/dev/"

def meta_recap(meta_file=f"{DEV_DIR}dpl_latest_meta.json"):
    leg_decks = defaultdict(int)
    with open(meta_file) as f:
        dpl_decks = json.load(f)
        dpl_decks = dpl_decks['dpl_decks']
        for deck in dpl_decks:
            leg_decks[deck['archetype']] += 1
    for i in reversed(range(len(dpl_decks))):
        archetypes = []
        for k, v in leg_decks.items():
            if v == i:
                archetypes.append(k)
        archetypes.sort()
        for a in archetypes:
            print(f"{i} {a}")
    print("---------------------------------------------")
    print(f"Total number of players: {len(dpl_decks)}")
    print(f"Number of different archetypes: {len(leg_decks)}")
    print("\nMetagame breakdown")
    storage = LocalStorageService()
    archive = LocalArchiveService()
    pauperformance = PauperformanceService(storage, archive)
    archetypes = pauperformance.config_reader.list_archetypes()
    total_count = 0
    inspected = set()
    for deck_type in ["Aggro", "Midrange", "Control", "Tempo", "Combo"]:
        count = 0
        for played_archetype in leg_decks:
            if played_archetype == "Brew":
                continue
            for a in archetypes:
                if a.name == played_archetype and deck_type == a.game_type[0]:
                    count += leg_decks[played_archetype]
                    total_count += leg_decks[played_archetype]
                    # print(f"{played_archetype} +{count}")
                    inspected.add(played_archetype)
        print(f"\t{deck_type}: {count}")
    if total_count != len(dpl_decks):
        print(f"ERROR: double-check numbers... {total_count} vs {len(dpl_decks)}")
        print(f"Unclassified: {set(l for l in leg_decks) - inspected}")



def from_topdeck_csv_to_dpl_json(leg_file, dpl_json_output_file):
    dpl_json_output = []
    with open(leg_file, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        next(reader, None)
        for row in reader:
            name, email, deck = row[0:3]
            response = requests.get(deck)
            start_list = response.text.index("~~Mainboard~~")
            end_list = response.text[start_list:].index("`;")
            deck = response.text[start_list:start_list+end_list]
            cards = deck.split("\n")
            sb_start = cards.index('')
            # need to remove ~~Mainboard~~ and ~~Sideboard~~ items
            playable_deck = parse_playable_deck_from_lines(
                cards[1:sb_start+1] + cards[sb_start+2:], raise_error_if_invalid=False
            )
            dpl_deck = {"id": email}
            mainboard = []
            for pc in playable_deck.mainboard:
                mainboard.append({
                    "name": pc.card_name,
                    "quantity": pc.quantity
                })
            sideboard = []
            for pc in playable_deck.sideboard:
                sideboard.append({
                    "name": pc.card_name,
                    "quantity": pc.quantity
                })
            dpl_deck["cards"] = {
                "mainboard": mainboard,
                "sideboard": sideboard
            }
            dpl_json_output.append(dpl_deck)

    with open(dpl_json_output_file, 'w') as f:
        f.write(json.dumps(dpl_json_output))


if __name__ == '__main__':
    # meta_recap(f"{RESOURCES_DIR}geddon-classified-076.json")
    # from_topdeck_csv_to_dpl_json(
    #     f"{RESOURCES_DIR}players_Dutch Pauper League – 9° Leg.csv",
        # f"{RESOURCES_DIR}players_Stroopwafel.csv",
        # f"{RESOURCES_DIR}stroopwafel.json"
    # )
    # meta_recap(f"{RESOURCES_DIR}dpl_5_meta_test.json")
    pass
