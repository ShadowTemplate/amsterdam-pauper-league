import seasonsInfo from "../../data/seasons_info.json";

type SeasonsInfo = Record<string, { status: "ongoing" | "completed" }>;

const info = seasonsInfo as SeasonsInfo;

// data/seasons_info.json can list a year (e.g. "ongoing") before its first leg
// has been played and generate_seasons.py has produced a season file for it -
// only count years with actual generated data, so a newly-added season entry
// doesn't crash pages before real data exists.
const seasonModules = import.meta.glob("./data/seasons/*.ts");
const generatedYears = new Set(
  Object.keys(seasonModules)
    .map((p) => p.match(/(\d{4})\.ts$/)?.[1])
    .filter((y): y is string => y != null)
);

// Descending, e.g. [2026, 2025, 2024]
export const AVAILABLE_YEARS: number[] = Object.keys(info)
  .filter((year) => generatedYears.has(year))
  .map(Number)
  .sort((a, b) => b - a);

if (AVAILABLE_YEARS.length === 0) {
  throw new Error("No generated season data found under src/lib/data/seasons/");
}

const ongoingYear = Object.entries(info).find(([, s]) => s.status === "ongoing")?.[0];

// Fall back to the most recent season with generated data if the "ongoing"
// season hasn't been generated yet (e.g. no legs played there yet).
export const CURRENT_SEASON_YEAR: number =
  ongoingYear && generatedYears.has(ongoingYear) ? Number(ongoingYear) : AVAILABLE_YEARS[0];
