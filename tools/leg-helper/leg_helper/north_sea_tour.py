import csv
from collections import defaultdict

from pauperformance_bot.util.path import posix_path

RESOURCES_DIR = posix_path("..", "resources")
LONDON_SIPT_FILE = posix_path(RESOURCES_DIR, "sipt_2026_london.csv")
AMSTERDAM_SIPT_FILE = posix_path(RESOURCES_DIR, "sipt_2026_amsterdam.csv")
NORTH_SEA_TOUR_FILE = posix_path(RESOURCES_DIR, "north_sea_tour_merged.csv")
SIPT_PLAYED = 2

RECONCILIATION_MAP = {
    "Phill Drage": "Phillip Drage",
}


def main():
    unified_results = defaultdict(list)
    london_players = set()
    print("Loading Amsterdam results...")
    with open(AMSTERDAM_SIPT_FILE) as file:
        reader = csv.reader(file, delimiter=',')
        _ = next(reader)  # skip header
        for row in reader:
            _, player, points, _, _, _ = row
            player = player.title()
            if player in RECONCILIATION_MAP:
                player = RECONCILIATION_MAP[player]
            london_players.add(player)
            unified_results[player].append(points)

    print("Loading London results...")
    amsterdam_players = set()
    with open(LONDON_SIPT_FILE) as file:
        reader = csv.reader(file, delimiter=',')
        _ = next(reader)  # skip header
        for row in reader:
            player, points = row
            player = player.title()
            if player in RECONCILIATION_MAP:
                player = RECONCILIATION_MAP[player]
            amsterdam_players.add(player)
            unified_results[player].append(points)

    print("Writing final results...")
    result_lines = []
    for player, points in unified_results.items():
        if player in london_players and player not in amsterdam_players:
            points.append('0')
        if player in amsterdam_players and player not in london_players:
            points = ['0'] + points
        assert len(points) == SIPT_PLAYED
        total_points = sum(int(p) for p in points)
        if total_points > 0:  # skipped dropped players
            result_lines.append(
               f"{player},"
               f"{','.join(points)}"
               f",{total_points}\n"
            )
    result_lines = sorted(
        result_lines,
        key=lambda x: int(x.split(",")[-1]),
        reverse=True,
    )
    with open(NORTH_SEA_TOUR_FILE, "w") as file:
        file.write("player_name,points_amsterdam,points_london,points_total\n")
        for line in result_lines:
            file.write(line)


if __name__ == '__main__':
    main()
