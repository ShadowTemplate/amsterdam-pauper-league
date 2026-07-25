import csv
import glob
import re
from pauperformance_bot.util.path import posix_path

PLAYERS_DIR = posix_path("..", "..", "..", "data", "topdeck", "players")
LEG_FILE_PATTERN = re.compile(r"(\d+)° Leg – (\d{4})_")
UPCOMING_LEG_NUMBER = 5
UPCOMING_LEG_YEAR = 2026

# these people have explicitly asked to not receive emails anymore
BCC_WHITELIST = [
    "leanderdriessen@gmail.com",
    "gabripo93@gmail.com",
    "diegoc@uc.cl",
    "vincentdzv@gmail.com",
    "peteraitis.vilius@gmail.com",
    "mart.w.ordelmans@gmail.com"
]

def get_leg_files():
    leg_files = {}
    for filepath in glob.glob(posix_path(PLAYERS_DIR, "*.csv")):
        match = LEG_FILE_PATTERN.search(filepath)
        if match:
            leg, year = int(match.group(1)), int(match.group(2))
            leg_files[(leg, year)] = filepath
    return leg_files


def get_players_db():
    players = {}
    for leg_file in get_leg_files().values():
        with open(leg_file, newline='', encoding='utf-8-sig') as csvfile:
            print(f"Processing {leg_file}...")
            reader = csv.reader(csvfile, delimiter=',')
            next(reader, None)
            for row in reader:
                name, email, deck = row[0:3]
                players[email] = name
    return players


def get_upcoming_leg_bccs():
    players = get_players_db()
    print("\nREMEMBER TO SET RECIPIENTS AS BCC!")
    registered_for_upcoming_leg = set()
    registered_for_upcoming_leg_without_decklist = set()
    all_legs = get_leg_files()
    print(f"Detected {len(all_legs)} legs.")
    leg_file = all_legs[(UPCOMING_LEG_NUMBER, UPCOMING_LEG_YEAR)]
    with open(leg_file, newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        next(reader, None)
        for row in reader:
            name, email, deck = row[0:3]
            registered_for_upcoming_leg.add(email)
            if deck == '':
                registered_for_upcoming_leg_without_decklist.add(email)
    print(f"Total number of players (since inception): {len(players)}")
    print(", ".join(players))
    print(f"Number of players for upcoming leg: {len(registered_for_upcoming_leg)}")
    # print(", ".join(registered_for_upcoming_leg))
    print()
    missing = players.keys() - registered_for_upcoming_leg - set(BCC_WHITELIST)
    for whitelisted in BCC_WHITELIST:
        try:
            missing.remove(whitelisted)
        except KeyError:
            pass
    print(f"Missing {len(missing)} players for upcoming leg:")
    print(f"APL - {UPCOMING_LEG_NUMBER}° leg - {UPCOMING_LEG_YEAR} - Registration reminder")
    print(", ".join(missing))
    print()
    print(f"APL - {UPCOMING_LEG_NUMBER}° leg - {UPCOMING_LEG_YEAR} - Decklist submission reminder + Food note")
    print(", ".join(registered_for_upcoming_leg))
    print("\nREMEMBER TO SET RECIPIENTS AS BCC!")


if __name__ == '__main__':
    get_upcoming_leg_bccs()
