import type { Archetype, ArchetypeDetail } from "@/types";

export const ARCHETYPES: Archetype[] = [
  { slug: "rakdos-burn", name: "Rakdos Burn", count: 76, percentage: "6.51%" },
  { slug: "mono-u-terror", name: "MonoU Terror", count: 70, percentage: "5.99%" },
  { slug: "brew", name: "Brew", count: 68, percentage: "5.82%" },
  { slug: "affinity", name: "Affinity", count: 60, percentage: "5.14%" },
  { slug: "mono-u-faeries", name: "MonoU Faeries", count: 52, percentage: "4.45%" },
  { slug: "jund-wildfire", name: "Jund Wildfire", count: 54, percentage: "4.62%" },
  { slug: "gruul-ponza", name: "Gruul Ponza", count: 44, percentage: "3.77%" },
  { slug: "burn", name: "Burn", count: 44, percentage: "3.77%" },
  { slug: "elves", name: "Elves", count: 42, percentage: "3.60%" },
  { slug: "dimir-faeries", name: "Dimir Faeries", count: 39, percentage: "3.34%" },
  { slug: "mono-r-madness", name: "MonoR Madness", count: 33, percentage: "2.83%" },
  { slug: "azorius-gates", name: "Azorius Gates", count: 33, percentage: "2.83%" },
  { slug: "mono-b-sacrifice", name: "MonoB Sacrifice", count: 31, percentage: "2.65%" },
  { slug: "familiars", name: "Familiars", count: 29, percentage: "2.48%" },
  { slug: "mono-r-kuldotha", name: "MonoR Kuldotha", count: 28, percentage: "2.40%" },
  { slug: "flicker-tron", name: "Flicker Tron", count: 26, percentage: "2.23%" },
  { slug: "bogles", name: "Bogles", count: 24, percentage: "2.05%" },
  { slug: "gruul-ramp", name: "Gruul Ramp", count: 24, percentage: "2.05%" },
  { slug: "walls", name: "Walls", count: 21, percentage: "1.80%" },
  { slug: "jeskai-ephemerate", name: "Jeskai Ephemerate", count: 21, percentage: "1.80%" },
  { slug: "white-weenie", name: "White Weenie", count: 22, percentage: "1.88%" },
  { slug: "izzet-terror", name: "Izzet Terror", count: 18, percentage: "1.54%" },
  { slug: "golgari-gardens", name: "Golgari Gardens", count: 19, percentage: "1.63%" },
  { slug: "golgari-dredge", name: "Golgari Dredge", count: 17, percentage: "1.46%" },
  { slug: "one-land-spy", name: "One Land Spy", count: 16, percentage: "1.37%" },
  { slug: "dimir-terror", name: "Dimir Terror", count: 15, percentage: "1.28%" },
  { slug: "altar-tron", name: "Altar Tron", count: 14, percentage: "1.20%" },
  { slug: "moggwarts", name: "Moggwarts", count: 12, percentage: "1.03%" },
  { slug: "boros-synth", name: "Boros Synth", count: 13, percentage: "1.11%" },
  { slug: "spy-walls", name: "Spy Walls", count: 14, percentage: "1.20%" },
  { slug: "mardu-synth", name: "Mardu Synth", count: 10, percentage: "0.86%" },
  { slug: "cycling-storm", name: "Cycling Storm", count: 10, percentage: "0.86%" },
  { slug: "mono-u-high-tide", name: "MonoU High Tide", count: 9, percentage: "0.77%" },
  { slug: "jund-gleezard", name: "Jund Gleezard", count: 9, percentage: "0.77%" },
  { slug: "boros-glitters", name: "Boros Glitters", count: 8, percentage: "0.68%" },
  { slug: "boros-bully", name: "Boros Bully", count: 7, percentage: "0.60%" },
  { slug: "orzhov-blade", name: "Orzhov Blade", count: 9, percentage: "0.77%" },
  { slug: "esper-blade", name: "Esper Blade", count: 7, percentage: "0.60%" },
  { slug: "monster-tron", name: "Monster Tron", count: 7, percentage: "0.60%" },
  { slug: "mono-r-rally", name: "MonoR Rally", count: 6, percentage: "0.51%" },
  { slug: "poison-storm", name: "Poison Storm", count: 6, percentage: "0.51%" },
  { slug: "azorius-glitters", name: "Azorius Glitters", count: 6, percentage: "0.51%" },
  { slug: "mono-w-heroic", name: "MonoW Heroic", count: 5, percentage: "0.43%" },
  { slug: "fangren-tron", name: "Fangren Tron", count: 5, percentage: "0.43%" },
  { slug: "golgari-gleezard", name: "Golgari Gleezard", count: 4, percentage: "0.34%" },
  { slug: "jeskai-glitters", name: "Jeskai Glitters", count: 4, percentage: "0.34%" },
  { slug: "eldrazi-spawn", name: "Eldrazi Spawn", count: 3, percentage: "0.26%" },
  { slug: "goblins", name: "Goblins", count: 3, percentage: "0.26%" },
  { slug: "brew-golgari", name: "Brew Golgari", count: 3, percentage: "0.26%" },
  { slug: "slivers", name: "Slivers", count: 3, percentage: "0.26%" },
  { slug: "turbofog", name: "Turbofog", count: 4, percentage: "0.34%" },
  { slug: "inside-out", name: "Inside Out", count: 3, percentage: "0.26%" },
  { slug: "mono-r-tron", name: "MonoR Tron", count: 3, percentage: "0.26%" },
  { slug: "temur-ponza", name: "Temur Ponza", count: 3, percentage: "0.26%" },
  { slug: "boros-tribe", name: "Boros Tribe", count: 4, percentage: "0.34%" },
  { slug: "mono-r-blitz", name: "MonoR Blitz", count: 2, percentage: "0.17%" },
  { slug: "selesnya-gates", name: "Selesnya Gates", count: 3, percentage: "0.26%" },
  { slug: "esper-affinity", name: "Esper Affinity", count: 2, percentage: "0.17%" },
  { slug: "petitioners-mill", name: "Petitioners Mill", count: 2, percentage: "0.17%" },
  { slug: "ruby-storm", name: "Ruby Storm", count: 5, percentage: "0.43%" },
  { slug: "mono-r-dredge", name: "MonoR Dredge", count: 2, percentage: "0.17%" },
  { slug: "infect", name: "Infect", count: 2, percentage: "0.17%" },
  { slug: "jund-cascade", name: "Jund Cascade", count: 2, percentage: "0.17%" },
  { slug: "stompy", name: "Stompy", count: 2, percentage: "0.17%" },
  { slug: "jund-gardens", name: "Jund Gardens", count: 2, percentage: "0.17%" },
  { slug: "rakdos-ally", name: "Rakdos Ally", count: 1, percentage: "0.09%" },
  { slug: "boros-moxite", name: "Boros Moxite", count: 1, percentage: "0.09%" },
  { slug: "dimir-control", name: "Dimir Control", count: 1, percentage: "0.09%" },
  { slug: "mono-b-control", name: "MonoB Control", count: 1, percentage: "0.09%" },
  { slug: "mono-g-tron", name: "MonoG Tron", count: 1, percentage: "0.09%" },
  { slug: "naya-gates", name: "Naya Gates", count: 1, percentage: "0.09%" },
  { slug: "mono-b-ponza", name: "MonoB Ponza", count: 1, percentage: "0.09%" },
  { slug: "golgari-tort-ex", name: "Golgari TortEx", count: 1, percentage: "0.09%" },
  { slug: "naya-turbo-emblem", name: "Naya Turbo Emblem", count: 1, percentage: "0.09%" },
];

export const ARCHETYPE_DETAILS: Record<string, ArchetypeDetail> = {
  "affinity": {
    slug: "affinity",
    name: "Affinity",
    count: 55,
    percentage: "4.97%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 21, pilot: "Aartos Locos", pilotSlug: "aartos-locos", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 34, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 35, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 43, pilot: "Marco Giocondo Mignone", pilotSlug: "marco-giocondo-mignone", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 45, pilot: "Vitaly Svetlov", pilotSlug: "vitaly-svetlov", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 24, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 47, pilot: "Stefan Gussenhoven", pilotSlug: "stefan-gussenhoven", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 50, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 54, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 63, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 66, pilot: "Jack Schuurbiers", pilotSlug: "jack-schuurbiers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 68, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 69, pilot: "Davide Caviglia", pilotSlug: "davide-caviglia", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 11, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 22, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 27, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 61, pilot: "Alessio Viali", pilotSlug: "alessio-viali", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 65, pilot: "Marco Giocondo Mignone", pilotSlug: "marco-giocondo-mignone", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 5, pilot: "Ernesto Jacopo Varriale", pilotSlug: "ernesto-jacopo-varriale", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 11, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 52, pilot: "Alexander Boon", pilotSlug: "alexander-boon", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 74, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 92, pilot: "Katie Berlin", pilotSlug: "katie-berlin", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 113, pilot: "Marco Giocondo Mignone", pilotSlug: "marco-giocondo-mignone", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 12, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 50, pilot: "Joris Dral", pilotSlug: "joris-dral", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 21, pilot: "Ramsey Zdiri", pilotSlug: "ramsey-zdiri", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 42, pilot: "Marco Giocondo Mignone", pilotSlug: "marco-giocondo-mignone", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 25, pilot: "Ramsey Zdiri", pilotSlug: "ramsey-zdiri", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 32, pilot: "Ramon Facchin", pilotSlug: "ramon-facchin", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 34, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 39, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 46, pilot: "Rufus Ang", pilotSlug: "rufus-ang", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 32, pilot: "Jort Bakker", pilotSlug: "jort-bakker", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Jort Bakker", pilotSlug: "jort-bakker", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 22, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 32, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 49, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 7, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 29, pilot: "Max Bosma", pilotSlug: "max-bosma", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Jonathan", pilotSlug: "jonathan", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 18, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 21, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 30, pilot: "Arne Klarenberg", pilotSlug: "arne-klarenberg", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 33, pilot: "Julius Siemes", pilotSlug: "julius-siemes", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 28, pilot: "Gino De Guzman", pilotSlug: "gino-de-guzman", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 30, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 31, pilot: "Mattia Paglino", pilotSlug: "mattia-paglino", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 37, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 40, pilot: "Laurent Paardekooper", pilotSlug: "laurent-paardekooper", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Jort Bakker", pilotSlug: "jort-bakker", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "altar-tron": {
    slug: "altar-tron",
    name: "Altar Tron",
    count: 14,
    percentage: "1.26%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 51, pilot: "Marvin Schippmann", pilotSlug: "marvin-schippmann", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 66, pilot: "Felipe Martins", pilotSlug: "felipe-martins", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 51, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 36, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 44, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 41, pilot: "Sjef van Schie", pilotSlug: "sjef-van-schie", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      }
    ],
  },
  "azorius-gates": {
    slug: "azorius-gates",
    name: "Azorius Gates",
    count: 32,
    percentage: "2.89%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 29, pilot: "Michael Joseph Purcell", pilotSlug: "michael-joseph-purcell", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 9, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 35, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 12, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 22, pilot: "PotestasNecis", pilotSlug: "potestas-necis", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 26, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 51, pilot: "Koen Zuidberg", pilotSlug: "koen-zuidberg", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 53, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 60, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 83, pilot: "Luka Pasalic", pilotSlug: "luka-pasalic", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 96, pilot: "Stefan Vlijm", pilotSlug: "stefan-vlijm", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 117, pilot: "Morgan Privitera", pilotSlug: "morgan-privitera", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 13, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 20, pilot: "Koen Zuidberg", pilotSlug: "koen-zuidberg", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 21, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 24, pilot: "Stefan Vlijm", pilotSlug: "stefan-vlijm", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 36, pilot: "Koen Zuidberg", pilotSlug: "koen-zuidberg", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 10, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 12, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 14, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 35, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 36, pilot: "Morgan Privitera", pilotSlug: "morgan-privitera", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "azorius-glitters": {
    slug: "azorius-glitters",
    name: "Azorius Glitters",
    count: 6,
    percentage: "0.54%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 5, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 36, pilot: "Gino De Guzman", pilotSlug: "gino-de-guzman", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 14, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 24, pilot: "Gino De Guzman", pilotSlug: "gino-de-guzman", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      }
    ],
  },
  "bogles": {
    slug: "bogles",
    name: "Bogles",
    count: 24,
    percentage: "2.17%",
    byEvent: [
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 43, pilot: "tijn mercx", pilotSlug: "tijn-mercx", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 44, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 47, pilot: "Fedde Vlietstra", pilotSlug: "fedde-vlietstra", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 48, pilot: "Yasmin Saciri", pilotSlug: "yasmin-saciri", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Renee Zwolle", pilotSlug: "renee-zwolle", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 35, pilot: "Lorenzo Vitale", pilotSlug: "lorenzo-vitale", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 49, pilot: "Yannic van Heereveld", pilotSlug: "yannic-van-heereveld", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 26, pilot: "Yannic van Heereveld", pilotSlug: "yannic-van-heereveld", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 31, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 36, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 11, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 31, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 15, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Yasmin Saciri", pilotSlug: "yasmin-saciri", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 27, pilot: "Guus Hinrichs", pilotSlug: "guus-hinrichs", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 38, pilot: "Abby", pilotSlug: "abby", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 27, pilot: "Yasmin Saciri", pilotSlug: "yasmin-saciri", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 20, pilot: "Francesco Bernardi", pilotSlug: "francesco-bernardi", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "boros-bully": {
    slug: "boros-bully",
    name: "Boros Bully",
    count: 7,
    percentage: "0.63%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 31, pilot: "Leonardo Paternotte", pilotSlug: "leonardo-paternotte", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 34, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 48, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 60, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      }
    ],
  },
  "boros-glitters": {
    slug: "boros-glitters",
    name: "Boros Glitters",
    count: 8,
    percentage: "0.72%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 11, pilot: "Nicola Gnasso", pilotSlug: "nicola-gnasso", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 14, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 19, pilot: "Panagiotis Lantavos-Stratigakis", pilotSlug: "panagiotis-lantavos-stratigakis", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 20, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 19, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 31, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      }
    ],
  },
  "boros-moxite": {
    slug: "boros-moxite",
    name: "Boros Moxite",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 15, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      }
    ],
  },
  "boros-synth": {
    slug: "boros-synth",
    name: "Boros Synth",
    count: 11,
    percentage: "0.99%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 24, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 31, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 56, pilot: "Koen Zuidberg", pilotSlug: "koen-zuidberg", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 60, pilot: "IJsbrand", pilotSlug: "ijsbrand", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 54, pilot: "IJsbrand", pilotSlug: "ijsbrand", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Koen de Vos", pilotSlug: "koen-de-vos", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 39, pilot: "Koen Zuidberg", pilotSlug: "koen-zuidberg", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 30, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 23, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 35, pilot: "Francesco Bernardi", pilotSlug: "francesco-bernardi", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      }
    ],
  },
  "boros-tribe": {
    slug: "boros-tribe",
    name: "Boros Tribe",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 51, pilot: "Alexander Hamilton", pilotSlug: "alexander-hamilton", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 55, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 2, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      }
    ],
  },
  "brew": {
    slug: "brew",
    name: "Brew",
    count: 68,
    percentage: "6.14%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 57, pilot: "Lotte Klomp", pilotSlug: "lotte-klomp", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 67, pilot: "Tim Swillens", pilotSlug: "tim-swillens", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 19, pilot: "Haron Tuin", pilotSlug: "haron-tuin", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 36, pilot: "Marius Bergwerff", pilotSlug: "marius-bergwerff", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 49, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 68, pilot: "Vince kors", pilotSlug: "vince-kors", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 78, pilot: "Erik de Waard", pilotSlug: "erik-de-waard", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 79, pilot: "Floris Stapel", pilotSlug: "floris-stapel", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 90, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 97, pilot: "Ivan Kors", pilotSlug: "ivan-kors", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 103, pilot: "F.C Jonkman", pilotSlug: "f-c-jonkman", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 105, pilot: "Frank Kortsmit", pilotSlug: "frank", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 109, pilot: "Thijs Deckers", pilotSlug: "thijs-deckers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 111, pilot: "Jasper jonkman", pilotSlug: "jasper-jonkman", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 32, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 33, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 35, pilot: "Alessio Viali", pilotSlug: "alessio-viali", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 39, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 45, pilot: "Rowan Groen", pilotSlug: "rowan-groen", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 54, pilot: "Lisa-Marie van Barneveld", pilotSlug: "lisa-marie-van-barneveld", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 55, pilot: "Lot Rossmark", pilotSlug: "lot-rossmark", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 57, pilot: "Jeff Wade", pilotSlug: "jeff-wade", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 44, pilot: "Lotte Klomp", pilotSlug: "lotte-klomp", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 48, pilot: "Lotte Klomp", pilotSlug: "lotte-klomp", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 49, pilot: "Jeff Wade", pilotSlug: "jeff-wade", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 50, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 55, pilot: "Quinten Brouwer", pilotSlug: "quinten-brouwer", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 5, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 21, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 29, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 47, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 49, pilot: "Elles Dijkhuizen", pilotSlug: "elles-dijkhuizen", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 58, pilot: "Marvin Schippmann", pilotSlug: "marvin-schippmann", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 55, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 32, pilot: "Michele Violin", pilotSlug: "michele-violin", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 40, pilot: "Morgan Privitera", pilotSlug: "morgan-privitera", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 48, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 60, pilot: "Leonidas Faliagkas", pilotSlug: "leonidas-faliagkas", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 26, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 28, pilot: "Frank Kortsmit", pilotSlug: "frank", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 43, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 46, pilot: "Blom Bezemer", pilotSlug: "blom-bezemer", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 42, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 46, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 52, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 32, pilot: "Thomas Tates", pilotSlug: "thomas-tates", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Jona Dijksterhuis", pilotSlug: "jona-dijksterhuis", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 19, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 30, pilot: "Arne Klarenberg", pilotSlug: "arne-klarenberg", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 14, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 22, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 23, pilot: "Max Moriette-Sala", pilotSlug: "max-moriette-sala", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 25, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 30, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 33, pilot: "Arne Klarenberg", pilotSlug: "arne-klarenberg", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 35, pilot: "Thomas Tates", pilotSlug: "thomas-tates", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 42, pilot: "Rizi", pilotSlug: "rizi", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 35, pilot: "Thomas Tates", pilotSlug: "thomas-tates", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      }
    ],
  },
  "brew-golgari": {
    slug: "brew-golgari",
    name: "Brew Golgari",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 118, pilot: "Camille Paquay", pilotSlug: "camille-paquay", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Martijn Siemes", pilotSlug: "martijn-siemes", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      }
    ],
  },
  "burn": {
    slug: "burn",
    name: "Burn",
    count: 43,
    percentage: "3.88%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 19, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 27, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 2, pilot: "phillip drage", pilotSlug: "phillip-drage", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 31, pilot: "Julian Dornebusch", pilotSlug: "julian-dornebusch", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 43, pilot: "Tomas Gonzalez", pilotSlug: "tomas-gonzalez", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 50, pilot: "Marcel Hogewoning", pilotSlug: "marcel-hogewoning", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 58, pilot: "Karl Niklas", pilotSlug: "karl-niklas", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 62, pilot: "Luiz Francisco Scudelari de Macedo", pilotSlug: "luiz-francisco-scudelari-de-macedo", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 93, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 108, pilot: "Jerwin Pouwelse", pilotSlug: "jerwin-pouwelse", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 11, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 56, pilot: "Vanessa Weber", pilotSlug: "vanessa-weber", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 2, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 6, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 41, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 12, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 17, pilot: "Francesco Agnesi", pilotSlug: "francesco-agnesi", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 23, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 26, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 44, pilot: "Max Moriette-Sala", pilotSlug: "max-moriette-sala", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 15, pilot: "Francesco Agnesi", pilotSlug: "francesco-agnesi", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 33, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 45, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 57, pilot: "Max Moriette-Sala", pilotSlug: "max-moriette-sala", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 26, pilot: "Marcel Hogewoning", pilotSlug: "marcel-hogewoning", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 30, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 41, pilot: "Roberto Schiavone", pilotSlug: "roberto-schiavone", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 10, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 41, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 23, pilot: "Max Moriette-Sala", pilotSlug: "max-moriette-sala", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 25, pilot: "Teun Fekkes", pilotSlug: "teun-fekkes", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 28, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 45, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 25, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Thomas Tates", pilotSlug: "thomas-tates", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "cycling-storm": {
    slug: "cycling-storm",
    name: "Cycling Storm",
    count: 9,
    percentage: "0.81%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 10, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 61, pilot: "Floris Stapel", pilotSlug: "floris-stapel", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 115, pilot: "Dennis Puetz", pilotSlug: "dennis-puetz", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Rob Vermaas", pilotSlug: "rob", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 48, pilot: "Floris Stapel", pilotSlug: "floris-stapel", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Mathieu Zwaan", pilotSlug: "mathieu-zwaan", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Guus Hinrichs", pilotSlug: "guus-hinrichs", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Guus Hinrichs", pilotSlug: "guus-hinrichs", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      }
    ],
  },
  "dimir-control": {
    slug: "dimir-control",
    name: "Dimir Control",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      }
    ],
  },
  "dimir-faeries": {
    slug: "dimir-faeries",
    name: "Dimir Faeries",
    count: 35,
    percentage: "3.16%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 16, pilot: "vinicius duarte", pilotSlug: "vinicius-duarte", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 22, pilot: "Rob Vermaas", pilotSlug: "rob-vermaas", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 26, pilot: "Jamie March", pilotSlug: "jamie-march", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 60, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 6, pilot: "vinicius duarte", pilotSlug: "vinicius-duarte", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 25, pilot: "Jamie March", pilotSlug: "jamie-march", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 29, pilot: "Johan Boesveld", pilotSlug: "johan-boesveld", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 5, pilot: "vinicius duarte", pilotSlug: "vinicius-duarte", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 8, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 23, pilot: "Rob Vermaas", pilotSlug: "rob", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 28, pilot: "Jamie March", pilotSlug: "jamie-march", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 45, pilot: "vinicius duarte", pilotSlug: "vinicius-duarte", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 52, pilot: "Maarten", pilotSlug: "maarten", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 19, pilot: "Felipe Inza", pilotSlug: "felipe-inza", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 46, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 27, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 44, pilot: "Roberto Schiavone", pilotSlug: "roberto-schiavone", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 35, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 24, pilot: "Fedor Manukovskii", pilotSlug: "fedor-manukovskii", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 26, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 31, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 27, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 20, pilot: "Ingo van den Bersselaar", pilotSlug: "ingo-van-den-bersselaar", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 23, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo-rodrigo-heran-balbuena", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 9, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 10, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "dimir-terror": {
    slug: "dimir-terror",
    name: "Dimir Terror",
    count: 15,
    percentage: "1.36%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 18, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 36, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 44, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 53, pilot: "soufian hriz", pilotSlug: "soufian-hriz", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 25, pilot: "Wilson", pilotSlug: "wilson", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 57, pilot: "Youri van der Zee", pilotSlug: "youri-van-der-zee", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 84, pilot: "Johannes Theiß", pilotSlug: "johannes-theiß", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 53, pilot: "Maeve Powlick", pilotSlug: "maeve-powlick", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 31, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 32, pilot: "Thomas Gates", pilotSlug: "thomas-gates", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Pim Rutgers", pilotSlug: "pim-rutgers", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 39, pilot: "Andrey Petukhov", pilotSlug: "andrey-petukhov", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Pim Rutgers", pilotSlug: "pim-rutgers", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "eldrazi-spawn": {
    slug: "eldrazi-spawn",
    name: "Eldrazi Spawn",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 58, pilot: "tijn mercx", pilotSlug: "tijn-mercx", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 20, pilot: "Frides van de Ven", pilotSlug: "frides-van-de-ven", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 68, pilot: "tijn mercx", pilotSlug: "tijn-mercx", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      }
    ],
  },
  "elves": {
    slug: "elves",
    name: "Elves",
    count: 41,
    percentage: "3.70%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 9, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 23, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 48, pilot: "Emmanuel Blazquez", pilotSlug: "emmanuel-blazquez", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 29, pilot: "Emmanuel Blazquez", pilotSlug: "emmanuel-blazquez", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 30, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 7, pilot: "Mattia Paglino", pilotSlug: "mattia-paglino", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 9, pilot: "Kieran Edwards", pilotSlug: "kieran-edwards", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 13, pilot: "Morgan Fussell", pilotSlug: "morgan-fussell", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 45, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 46, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 112, pilot: "Robert Kropholler", pilotSlug: "robert-kropholler", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 114, pilot: "Ben Luis Hack", pilotSlug: "ben-luis-hack", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 36, pilot: "boris romero", pilotSlug: "boris-romero", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 51, pilot: "Giacco", pilotSlug: "giacco", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 32, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 20, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 57, pilot: "Fernando Tong", pilotSlug: "fernando-tong", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 13, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 32, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 21, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 27, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 44, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 52, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 53, pilot: "Roberto Schiavone", pilotSlug: "roberto-schiavone", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 30, pilot: "Nigel Stikker", pilotSlug: "nigel-stikker", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 35, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 39, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 27, pilot: "Roald Landheer", pilotSlug: "roald-landheer", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 28, pilot: "Giovanni Allovio", pilotSlug: "giovanni-allovio", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 11, pilot: "Nigel Stikker", pilotSlug: "nigel-stikker", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Nigel Stikker", pilotSlug: "nigel-stikker", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 32, pilot: "Nigel Stikker", pilotSlug: "nigel-stikker", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      }
    ],
  },
  "esper-affinity": {
    slug: "esper-affinity",
    name: "Esper Affinity",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 58, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 81, pilot: "Yuri Stevens van Swaay", pilotSlug: "yuri-stevens-van-swaay", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      }
    ],
  },
  "esper-blade": {
    slug: "esper-blade",
    name: "Esper Blade",
    count: 7,
    percentage: "0.63%",
    byEvent: [
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 30, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 47, pilot: "Alessio Viali", pilotSlug: "alessio-viali", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 32, pilot: "Alessio Viali", pilotSlug: "alessio-viali", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 34, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 41, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      }
    ],
  },
  "familiars": {
    slug: "familiars",
    name: "Familiars",
    count: 29,
    percentage: "2.62%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 22, pilot: "Michele Papucci", pilotSlug: "michele-papucci", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 24, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 37, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 106, pilot: "boris romero", pilotSlug: "boris-romero", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 11, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 38, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 48, pilot: "Stefan Vlijm", pilotSlug: "stefan-vlijm", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 54, pilot: "Rufus Ang", pilotSlug: "rufus-ang", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 34, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 53, pilot: "Johan", pilotSlug: "johan", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 14, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 22, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 26, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 14, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 21, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "fangren-tron": {
    slug: "fangren-tron",
    name: "Fangren Tron",
    count: 5,
    percentage: "0.45%",
    byEvent: [
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 21, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      }
    ],
  },
  "flicker-tron": {
    slug: "flicker-tron",
    name: "Flicker Tron",
    count: 24,
    percentage: "2.17%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 33, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 52, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 50, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 62, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak-2", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 61, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 116, pilot: "Leo Weiler", pilotSlug: "leo-weiler", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 33, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 37, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 43, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak-2", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 52, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak-2", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 49, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 12, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 13, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 21, pilot: "Noah Westerweel", pilotSlug: "noah-westerweel", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 36, pilot: "Sven van Dijk", pilotSlug: "sven-van-dijk", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 50, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 39, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "goblins": {
    slug: "goblins",
    name: "Goblins",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 11, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 23, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 27, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      }
    ],
  },
  "golgari-dredge": {
    slug: "golgari-dredge",
    name: "Golgari Dredge",
    count: 16,
    percentage: "1.45%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 39, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas-jan-gorter", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 36, pilot: "rasjied sloot", pilotSlug: "rasjied-sloot", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 25, pilot: "rasjied sloot", pilotSlug: "rasjied-sloot", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 33, pilot: "Mikhail Kulikov", pilotSlug: "mikhail-kulikov", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 42, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 42, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 14, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 15, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 15, pilot: "Jari Van Schaik", pilotSlug: "jari-van-schaik", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "golgari-gardens": {
    slug: "golgari-gardens",
    name: "Golgari Gardens",
    count: 17,
    percentage: "1.54%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 36, pilot: "Thomas Wood", pilotSlug: "thomas-wood", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 59, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 70, pilot: "Max Power", pilotSlug: "max-power", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 17, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 64, pilot: "Yannic van Heereveld", pilotSlug: "yannic-van-heereveld", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 20, pilot: "Guus Hinrichs", pilotSlug: "guus-hinrichs", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 31, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 32, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 7, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 27, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "golgari-gleezard": {
    slug: "golgari-gleezard",
    name: "Golgari Gleezard",
    count: 4,
    percentage: "0.36%",
    byEvent: [
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 9, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Tim Laros", pilotSlug: "tim-laros", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 35, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      }
    ],
  },
  "golgari-tort-ex": {
    slug: "golgari-tort-ex",
    name: "Golgari TortEx",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 30, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      }
    ],
  },
  "gruul-ponza": {
    slug: "gruul-ponza",
    name: "Gruul Ponza",
    count: 44,
    percentage: "3.97%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 3, pilot: "Mikhail Kulikov", pilotSlug: "mikhail-kulikov", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 40, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 19, pilot: "Jelle Schneider", pilotSlug: "jelle-schneider", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 16, pilot: "Stefan Gussenhoven", pilotSlug: "stefan-gussenhoven", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 67, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Jelle Schneider", pilotSlug: "jelle-schneider", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 26, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Thomas Isphording", pilotSlug: "thomas-isphording", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Stefan Gussenhoven", pilotSlug: "stefan-gussenhoven", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 11, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 12, pilot: "Iskander Waldorp", pilotSlug: "iskander-waldorp", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 23, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 38, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 6, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 7, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 12, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 38, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 44, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 13, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 25, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 8, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 12, pilot: "Catalin Apostol", pilotSlug: "catalin-apostol", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 13, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 19, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 27, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 13, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 12, pilot: "Tim Zemack", pilotSlug: "tim-zemack", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 17, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 18, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 20, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 21, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 14, pilot: "Simone Gottardi", pilotSlug: "simone-gottardi", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 29, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Tim Zemack", pilotSlug: "tim-zemack", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Ingo van den Bersselaar", pilotSlug: "ingo-van-den-bersselaar", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "gruul-ramp": {
    slug: "gruul-ramp",
    name: "Gruul Ramp",
    count: 23,
    percentage: "2.08%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 7, pilot: "Jelle Schneider", pilotSlug: "jelle-schneider", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 15, pilot: "J van T", pilotSlug: "j-van-t", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 9, pilot: "Thomas Isphording", pilotSlug: "thomas-isphording", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 24, pilot: "Jelle Schneider", pilotSlug: "jelle-schneider", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 29, pilot: "Vitaly Svetlov", pilotSlug: "vitaly-svetlov", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 35, pilot: "ruben drabbels", pilotSlug: "ruben-drabbels-1", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 47, pilot: "Neil", pilotSlug: "neil", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 71, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 76, pilot: "Axel Quasten", pilotSlug: "axel-quasten", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Jelle Schneider", pilotSlug: "jelle-schneider", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 17, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 59, pilot: "Vitaly Svetlov", pilotSlug: "vitaly-svetlov", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Jelle Schneider", pilotSlug: "jelle-schneider", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 51, pilot: "Quinten Hogenes", pilotSlug: "quinten-hogenes", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 29, pilot: "Quinten Hogenes", pilotSlug: "quinten-hogenes", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 38, pilot: "Ido levy", pilotSlug: "ido-levy", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 44, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 26, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 9, pilot: "Ruben Drabbels", pilotSlug: "ruben-drabbels", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 48, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Stefan Pouwelse", pilotSlug: "stefan-pouwelse", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      }
    ],
  },
  "infect": {
    slug: "infect",
    name: "Infect",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 54, pilot: "Evert", pilotSlug: "evert", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 58, pilot: "Matis Violin", pilotSlug: "matis-violin", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      }
    ],
  },
  "inside-out": {
    slug: "inside-out",
    name: "Inside Out",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Toon de Vet", pilotSlug: "toon-de-vet", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      }
    ],
  },
  "izzet-terror": {
    slug: "izzet-terror",
    name: "Izzet Terror",
    count: 18,
    percentage: "1.63%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 13, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 67, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 6, pilot: "Kai Schäfer", pilotSlug: "kai-schafer", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 88, pilot: "Donato Bliek", pilotSlug: "donato-bliek", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 47, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 53, pilot: "Teun Sprikkelman", pilotSlug: "teun-sprikkelman", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 23, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 35, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 42, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 23, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 34, pilot: "Andrey Petukhov", pilotSlug: "andrey-petukhov", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 19, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "jeskai-ephemerate": {
    slug: "jeskai-ephemerate",
    name: "Jeskai Ephemerate",
    count: 20,
    percentage: "1.81%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 61, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 5, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 38, pilot: "Simon Isphording", pilotSlug: "simon-isphording", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 65, pilot: "Alessio Viali", pilotSlug: "alessio-viali", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 35, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 4, pilot: "Hayden Dubock", pilotSlug: "hayden-dubock", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 80, pilot: "Lars Broekhof", pilotSlug: "lars-broekhof", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Rufus Ang", pilotSlug: "rufus-ang", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 28, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 4, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 13, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 17, pilot: "Rufus Ang", pilotSlug: "rufus-ang", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 13, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 10, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "jeskai-glitters": {
    slug: "jeskai-glitters",
    name: "Jeskai Glitters",
    count: 4,
    percentage: "0.36%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Francesco Bernardi", pilotSlug: "francesco-bernardi", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 18, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "jund-cascade": {
    slug: "jund-cascade",
    name: "Jund Cascade",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 20, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 36, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      }
    ],
  },
  "jund-gardens": {
    slug: "jund-gardens",
    name: "Jund Gardens",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 16, pilot: "L.S. Driessen", pilotSlug: "l-s--driessen", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      }
    ],
  },
  "jund-gleezard": {
    slug: "jund-gleezard",
    name: "Jund Gleezard",
    count: 9,
    percentage: "0.81%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 12, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 20, pilot: "Yasmin Saciri", pilotSlug: "yasmin-saciri", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 27, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Francesco Bernardi", pilotSlug: "francesco-bernardi", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      }
    ],
  },
  "jund-wildfire": {
    slug: "jund-wildfire",
    name: "Jund Wildfire",
    count: 48,
    percentage: "4.34%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 6, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 25, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 28, pilot: "Matteo Bellante", pilotSlug: "matteo-bellante", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 38, pilot: "Collin Bos", pilotSlug: "collin-bos", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 41, pilot: "Emmanuel Blazquez", pilotSlug: "emmanuel-blazquez", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 44, pilot: "Giacco", pilotSlug: "giacco", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 42, pilot: "Matteo Bellante", pilotSlug: "matteo-bellante", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 46, pilot: "Collin Bos", pilotSlug: "collin-bos", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 20, pilot: "Jonathan", pilotSlug: "jonathan", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 23, pilot: "Benjamin Mul", pilotSlug: "benjamin-mul", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 40, pilot: "jarno polhuijs", pilotSlug: "jarno-polhuijs", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 54, pilot: "Patrick Heijna", pilotSlug: "patrick-heijna", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 55, pilot: "Timo Vogelfänger", pilotSlug: "timo-vogelfanger", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 82, pilot: "Matteo Bellante", pilotSlug: "matteo-bellante", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 38, pilot: "Mathieu Zwaan", pilotSlug: "mathieu-zwaan", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 49, pilot: "Max Mercx", pilotSlug: "max-mercx", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 8, pilot: "jarno polhuijs", pilotSlug: "jarno-polhuijs", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 16, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 27, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 39, pilot: "Max Mercx", pilotSlug: "max-mercx", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 56, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 10, pilot: "jarno polhuijs", pilotSlug: "jarno-polhuijs", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 18, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 22, pilot: "Nigel Stikker", pilotSlug: "nigel-stikker", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 26, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 37, pilot: "Wesley Choong", pilotSlug: "wesley-choong", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 50, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 53, pilot: "Francesco Bernardi", pilotSlug: "francesco-bernardi", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 7, pilot: "jarno polhuijs", pilotSlug: "jarno-polhuijs", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 13, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 17, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 20, pilot: "Jort Bakker", pilotSlug: "jort-bakker", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 45, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 53, pilot: "luka strganac", pilotSlug: "luka-strganac", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 7, pilot: "Jort Bakker", pilotSlug: "jort-bakker", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 8, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 32, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 14, pilot: "Nigel Stikker", pilotSlug: "nigel-stikker", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 15, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 18, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 30, pilot: "Jort Bakker", pilotSlug: "jort-bakker", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 36, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 51, pilot: "Francesco Bernardi", pilotSlug: "francesco-bernardi", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 55, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 21, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 25, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 40, pilot: "Lucas Feliciano", pilotSlug: "lucas-feliciano", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      }
    ],
  },
  "mardu-synth": {
    slug: "mardu-synth",
    name: "Mardu Synth",
    count: 10,
    percentage: "0.90%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 19, pilot: "Max Mercx", pilotSlug: "max-mercx", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 43, pilot: "Max Mercx", pilotSlug: "max-mercx", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 41, pilot: "Oscar Francisco", pilotSlug: "oscar-francisco", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 25, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 28, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 35, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 50, pilot: "Jaron Polhuijs", pilotSlug: "jaron-polhuijs", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      }
    ],
  },
  "moggwarts": {
    slug: "moggwarts",
    name: "Moggwarts",
    count: 12,
    percentage: "1.08%",
    byEvent: [
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 38, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 45, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 19, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 32, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 32, pilot: "Job Ortmans", pilotSlug: "job-ortmans", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "mono-b-control": {
    slug: "mono-b-control",
    name: "MonoB Control",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 41, pilot: "Annemarije Boersma", pilotSlug: "annemarije-boersma", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      }
    ],
  },
  "mono-b-ponza": {
    slug: "mono-b-ponza",
    name: "MonoB Ponza",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Mart Wessel Ordelmans", pilotSlug: "mart-wessel-ordelmans", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      }
    ],
  },
  "mono-b-sacrifice": {
    slug: "mono-b-sacrifice",
    name: "MonoB Sacrifice",
    count: 31,
    percentage: "2.80%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 44, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 52, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 10, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 47, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 60, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 75, pilot: "Tiff Kraan", pilotSlug: "tiff-kraan", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 85, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 98, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 14, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 26, pilot: "Guus Hinrichs", pilotSlug: "guus-hinrichs", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas-jan-gorter", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 12, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 23, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 21, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 24, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 16, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 54, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 5, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 24, pilot: "Yuri Stevens van Swaay", pilotSlug: "yuri-stevens-van-swaay", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 42, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 33, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 14, pilot: "Harm steenbakkers", pilotSlug: "harm-steenbakkers", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 49, pilot: "Yuri Stevens van Swaay", pilotSlug: "yuri-stevens-van-swaay", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 11, pilot: "Sebastian Diaz", pilotSlug: "sebastian-diaz", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      }
    ],
  },
  "mono-g-tron": {
    slug: "mono-g-tron",
    name: "MonoG Tron",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 38, pilot: "Manas weesing", pilotSlug: "manas-weesing", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      }
    ],
  },
  "mono-r-blitz": {
    slug: "mono-r-blitz",
    name: "MonoR Blitz",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 10, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas-jan-gorter", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 77, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas-jan-gorter", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      }
    ],
  },
  "mono-r-dredge": {
    slug: "mono-r-dredge",
    name: "MonoR Dredge",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 69, pilot: "Gianluca Ramaccia", pilotSlug: "gianluca-ramaccia", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 11, pilot: "Fernando Gómez-Acebo", pilotSlug: "fernando-gomez-acebo", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      }
    ],
  },
  "mono-r-kuldotha": {
    slug: "mono-r-kuldotha",
    name: "MonoR Kuldotha",
    count: 28,
    percentage: "2.53%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 15, pilot: "Mirco Bonati", pilotSlug: "mirco-bonati", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 30, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 37, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 19, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 11, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 18, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 31, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 34, pilot: "Tim Zemack", pilotSlug: "tim-zemack", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 14, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 19, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 3, pilot: "Clemens Gerteiser", pilotSlug: "clemens-gerteiser", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Roberto Schiavone", pilotSlug: "roberto-schiavone", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 7, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 9, pilot: "Kasper Zijl", pilotSlug: "kasper-zijl", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 12, pilot: "Tim Zemack", pilotSlug: "tim-zemack", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 8, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 10, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 29, pilot: "Zephyr", pilotSlug: "zephyr", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 37, pilot: "Thomas Gates", pilotSlug: "thomas-gates", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 30, pilot: "Samuel Schumacher", pilotSlug: "samuel-schumacher", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Tim Zemack", pilotSlug: "tim-zemack", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "mono-r-madness": {
    slug: "mono-r-madness",
    name: "MonoR Madness",
    count: 33,
    percentage: "2.98%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 7, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 12, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 43, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 45, pilot: "Irshaad", pilotSlug: "irshaad", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 49, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 55, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 57, pilot: "Blom Bezemer", pilotSlug: "blom-bezemer", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 59, pilot: "Pablo Pirata", pilotSlug: "pablo-pirata", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 6, pilot: "Quint Marcelis", pilotSlug: "quinten-marcelis", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 21, pilot: "Kevin van Hengst", pilotSlug: "kevin-van-hengst", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 40, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 49, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 70, pilot: "Maeve Powlick", pilotSlug: "maeve-powlick", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 1, pilot: "Ross McKendrick", pilotSlug: "ross-mc-kendrick", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 34, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 38, pilot: "Mario Giordano", pilotSlug: "mario-giordano", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 42, pilot: "Francesco Agnesi", pilotSlug: "francesco-agnesi", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 64, pilot: "Benjamin Haude", pilotSlug: "benjamin-haude", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 70, pilot: "Max Moriette-Sala", pilotSlug: "max-moriette-sala", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 73, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 95, pilot: "Jaron Polhuijs", pilotSlug: "jaron-polhuijs", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 104, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 110, pilot: "Maeve Powlick", pilotSlug: "maeve-powlick", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Quint Marcelis", pilotSlug: "quinten-marcelis", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 15, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 19, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 25, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 28, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 30, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 40, pilot: "Maarten Van der weide", pilotSlug: "maarten-van-der-weide", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 41, pilot: "Francesco Agnesi", pilotSlug: "francesco-agnesi", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      }
    ],
  },
  "mono-r-rally": {
    slug: "mono-r-rally",
    name: "MonoR Rally",
    count: 6,
    percentage: "0.54%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 8, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 41, pilot: "Marcel Hogewoning", pilotSlug: "marcel-hogewoning", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 4, pilot: "Marcel Hogewoning", pilotSlug: "marcel-hogewoning", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 38, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 39, pilot: "Jerwin Pouwelse", pilotSlug: "jerwin-pouwelse", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      }
    ],
  },
  "mono-r-tron": {
    slug: "mono-r-tron",
    name: "MonoR Tron",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 40, pilot: "Michael Joseph Purcell", pilotSlug: "michael-joseph-purcell", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 26, pilot: "Michael Joseph Purcell", pilotSlug: "michael-joseph-purcell", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 19, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      }
    ],
  },
  "mono-u-faeries": {
    slug: "mono-u-faeries",
    name: "MonoU Faeries",
    count: 52,
    percentage: "4.70%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 26, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 51, pilot: "Johan Boesveld", pilotSlug: "johan-boesveld", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 52, pilot: "Tristan Tai", pilotSlug: "tristan-tai", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 12, pilot: "Oscar Jocqué", pilotSlug: "oscar-jocque", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 14, pilot: "Marco Lazzari", pilotSlug: "marco-lazzari", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 30, pilot: "David Horvath", pilotSlug: "david-horvath", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 56, pilot: "Kai Schutte", pilotSlug: "kai-schutte", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 59, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 91, pilot: "soufian hriz", pilotSlug: "soufian-hriz-1", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 18, pilot: "David Horvath", pilotSlug: "david-horvath", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 11, pilot: "Vilius Peteraitis", pilotSlug: "vilius-peteraitis", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 14, pilot: "Natalie Zuidberg", pilotSlug: "natalie-zuidberg", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 40, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 2, pilot: "soufian hriz", pilotSlug: "soufian-hriz", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 19, pilot: "David Horvath", pilotSlug: "david-horvath", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 30, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 28, pilot: "soufian hriz", pilotSlug: "soufian-hriz", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 31, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 41, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 44, pilot: "Rob Vermaas", pilotSlug: "rob", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 56, pilot: "Antonio Liguori", pilotSlug: "antonio-liguori", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 3, pilot: "soufian hriz", pilotSlug: "soufian-hriz", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 14, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 21, pilot: "Rob Vermaas", pilotSlug: "rob", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 25, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 47, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Rob Vermaas", pilotSlug: "rob", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 11, pilot: "soufian hriz", pilotSlug: "soufian-hriz", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 12, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 28, pilot: "Youri Bakker", pilotSlug: "youri-bakker", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 30, pilot: "vinicius duarte", pilotSlug: "vinicius-duarte", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 40, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 18, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 37, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 47, pilot: "Roberto Schiavone", pilotSlug: "roberto-schiavone", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 48, pilot: "Romke Postma", pilotSlug: "romke-postma", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 17, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 5, pilot: "Jan Rijnbeek", pilotSlug: "jan-rijnbeek", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 13, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Michael smit", pilotSlug: "michael-smit", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 8, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "mono-u-high-tide": {
    slug: "mono-u-high-tide",
    name: "MonoU High Tide",
    count: 9,
    percentage: "0.81%",
    byEvent: [
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Rob Vermaas", pilotSlug: "rob", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 7, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 37, pilot: "Stefan Gussenhoven", pilotSlug: "stefan-gussenhoven", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Rob Vermaas", pilotSlug: "rob", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 13, pilot: "Stefan Gussenhoven", pilotSlug: "stefan-gussenhoven", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 50, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 45, pilot: "Douwe Kasemier", pilotSlug: "douwe-kasemier", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 47, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      }
    ],
  },
  "mono-u-terror": {
    slug: "mono-u-terror",
    name: "MonoU Terror",
    count: 70,
    percentage: "6.32%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 16, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 20, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 32, pilot: "Noah van Duren", pilotSlug: "noah-van-duren", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 32, pilot: "Roald Landheer", pilotSlug: "roald-landheer", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 37, pilot: "Michael Joseph Purcell", pilotSlug: "michael-joseph-purcell", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 56, pilot: "Noah van Duren", pilotSlug: "noah-van-duren", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 8, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 10, pilot: "Dylan van Gelder", pilotSlug: "dylan-van-gelder", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 17, pilot: "Felix Watermann", pilotSlug: "felix-watermann", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 18, pilot: "Michael Joseph Purcell", pilotSlug: "michael-joseph-purcell", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 21, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 27, pilot: "Jörg Vondenhoff", pilotSlug: "jorg-vondenhoff", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 39, pilot: "OwenP", pilotSlug: "owen-p", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 44, pilot: "Stefan Pouwelse", pilotSlug: "stefan-pouwelse", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 63, pilot: "Mick", pilotSlug: "mick", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 65, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 107, pilot: "Yannic van Heereveld", pilotSlug: "yannic-van-heereveld", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 2, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 4, pilot: "Yannic van Heereveld", pilotSlug: "yannic-van-heereveld", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 23, pilot: "Nicola Gnasso", pilotSlug: "nicola-gnasso", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 58, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 22, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 34, pilot: "Gabriele Maria Giardino", pilotSlug: "gabriele-maria-giardino", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 14, pilot: "Bram Deppenbroek", pilotSlug: "bram-deppenbroek", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 22, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 38, pilot: "Mark", pilotSlug: "mark", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 46, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Raven de Bruin", pilotSlug: "raven-de-bruin", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 25, pilot: "Yannic van Heereveld", pilotSlug: "yannic-van-heereveld", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 30, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 28, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 33, pilot: "Juan Ascanio", pilotSlug: "juan-ascanio", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 35, pilot: "Collin Bos", pilotSlug: "collin-bos", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Collin Bos", pilotSlug: "collin-bos", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 14, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 27, pilot: "Rob Nolle", pilotSlug: "rob-nolle", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 33, pilot: "Michael Joseph Purcell", pilotSlug: "michael-joseph-purcell", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 37, pilot: "Natalie Zuidberg", pilotSlug: "natalie-zuidberg", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Michael Joseph Purcell", pilotSlug: "michael-joseph-purcell", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 12, pilot: "Mattia Paglino", pilotSlug: "mattia-paglino", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 17, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 22, pilot: "soufian hriz", pilotSlug: "soufian-hriz", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 59, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 10, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 18, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 19, pilot: "Derin Ünver", pilotSlug: "derin-unver", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 23, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 26, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 28, pilot: "Edwin bouwer", pilotSlug: "edwin-bouwer", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 34, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 22, pilot: "Koen de Vos", pilotSlug: "koen-de-vos", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Koen de Vos", pilotSlug: "koen-de-vos", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 10, pilot: "Ashley Bits", pilotSlug: "ashley-bits", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Koen de Vos", pilotSlug: "koen-de-vos", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 26, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 27, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 28, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Iain Ligthart", pilotSlug: "iain-ligthart", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 34, pilot: "Yasmin Saciri", pilotSlug: "yasmin-saciri", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Ben van Wijk", pilotSlug: "ben-van-wijk", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "mono-w-heroic": {
    slug: "mono-w-heroic",
    name: "MonoW Heroic",
    count: 5,
    percentage: "0.45%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 17, pilot: "Odile Strik", pilotSlug: "odile-strik", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 13, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 48, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 52, pilot: "Fernando Tong", pilotSlug: "fernando-tong", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Fernando Tong", pilotSlug: "fernando-tong", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      }
    ],
  },
  "monster-tron": {
    slug: "monster-tron",
    name: "Monster Tron",
    count: 6,
    percentage: "0.54%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 15, pilot: "Stefan van der List", pilotSlug: "stefan-van-der-list", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 4, pilot: "Stefan van der List", pilotSlug: "stefan-van-der-list", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 53, pilot: "Aartos Locos", pilotSlug: "aartos-locos", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 64, pilot: "Luiz Francisco Scudelari de Macedo", pilotSlug: "luiz-francisco-scudelari-de-macedo", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 3, pilot: "Stefan van der List", pilotSlug: "stefan-van-der-list", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 16, pilot: "Leonardo Paternotte", pilotSlug: "leonardo-paternotte", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 46, pilot: "Thomas Tates", pilotSlug: "thomas-tates", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      }
    ],
  },
  "naya-gates": {
    slug: "naya-gates",
    name: "Naya Gates",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 20, pilot: "Davy Baardink", pilotSlug: "davy-baardink", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      }
    ],
  },
  "naya-turbo-emblem": {
    slug: "naya-turbo-emblem",
    name: "Naya Turbo Emblem",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Laurent Paardekooper", pilotSlug: "laurent-paardekooper", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      }
    ],
  },
  "one-land-spy": {
    slug: "one-land-spy",
    name: "One Land Spy",
    count: 16,
    percentage: "1.45%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 102, pilot: "Ravi Breugom", pilotSlug: "ravi-breugom", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 46, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Elles Dijkhuizen", pilotSlug: "elles-dijkhuizen", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 15, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 28, pilot: "Abe Mulder", pilotSlug: "abe-mulder", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 35, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 48, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 36, pilot: "Elles Dijkhuizen", pilotSlug: "elles-dijkhuizen", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 40, pilot: "Vincent Zwinkels", pilotSlug: "vincent-zwinkels", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 40, pilot: "Sebastian Diaz", pilotSlug: "sebastian-diaz", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Tom de Ruiter", pilotSlug: "tom-de-ruiter", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 33, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 38, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      }
    ],
  },
  "orzhov-blade": {
    slug: "orzhov-blade",
    name: "Orzhov Blade",
    count: 7,
    percentage: "0.63%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 27, pilot: "Ramon Facchin", pilotSlug: "ramon-facchin", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 47, pilot: "Nicola Gnasso", pilotSlug: "nicola-gnasso", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Mathijs de Wilde", pilotSlug: "mathijs-de-wilde", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 43, pilot: "Marc Van Doorn", pilotSlug: "marc-van-doorn", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Marc Van Doorn", pilotSlug: "marc-van-doorn", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Nicola Gnasso", pilotSlug: "nicola-gnasso", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "petitioners-mill": {
    slug: "petitioners-mill",
    name: "Petitioners Mill",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 55, pilot: "Jasper vd Hammen", pilotSlug: "jasper-vd-hammen", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      }
    ],
  },
  "poison-storm": {
    slug: "poison-storm",
    name: "Poison Storm",
    count: 6,
    percentage: "0.54%",
    byEvent: [
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 52, pilot: "Teun Fekkes", pilotSlug: "teun-fekkes", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 47, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 57, pilot: "Jinja Kinyak", pilotSlug: "jinja-kinyak", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 50, pilot: "Teun Fekkes", pilotSlug: "teun-fekkes", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Michael smit", pilotSlug: "michael-smit", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 38, pilot: "Gino De Guzman", pilotSlug: "gino-de-guzman", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      }
    ],
  },
  "rakdos-ally": {
    slug: "rakdos-ally",
    name: "Rakdos Ally",
    count: 1,
    percentage: "0.09%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 63, pilot: "Jeff Wade", pilotSlug: "jeff-wade", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      }
    ],
  },
  "rakdos-burn": {
    slug: "rakdos-burn",
    name: "Rakdos Burn",
    count: 75,
    percentage: "6.78%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 54, pilot: "Javier Carrillo Delgado", pilotSlug: "javier-carrillo-delgado", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 26, pilot: "Marvin Schippmann", pilotSlug: "marvin-schippmann", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 69, pilot: "Irshaad", pilotSlug: "irshaad", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 28, pilot: "Gus Vanpoucke", pilotSlug: "gus-vanpoucke", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 66, pilot: "Lisa-Marie Bliek", pilotSlug: "lisa-marie-bliek", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 72, pilot: "Cameron Sidhu", pilotSlug: "cameron-sidhu", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 86, pilot: "Diego Orlandini", pilotSlug: "diego-orlandini", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 87, pilot: "Jasper Roelfsema", pilotSlug: "jasper-roelfsema", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 89, pilot: "Mitch van der Heijden", pilotSlug: "mitch-van-der-heijden", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 99, pilot: "Arne De Greef", pilotSlug: "arne-de-greef", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 100, pilot: "Emanuele Rolando", pilotSlug: "emanuele-rolando", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 101, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 42, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 46, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Stefan Vlijm", pilotSlug: "stefan-vlijm", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 42, pilot: "Jasper Roelfsema", pilotSlug: "jasper-roelfsema", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 45, pilot: "Quint Marcelis", pilotSlug: "quinten-marcelis", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 40, pilot: "Mark Bosma", pilotSlug: "mark-bosma", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 46, pilot: "Aurora Polak", pilotSlug: "aurora-polak", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 55, pilot: "Roberto Schiavone", pilotSlug: "roberto-schiavone", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 36, pilot: "Arne Klarenberg", pilotSlug: "arne-klarenberg", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 42, pilot: "Dalilla Bezoen", pilotSlug: "dalilla-bezoen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 25, pilot: "Nicolas Komanski", pilotSlug: "nicolas-komanski", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 34, pilot: "Dalilla Bezoen", pilotSlug: "dalilla-bezoen", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 35, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 38, pilot: "Koen Zuidberg", pilotSlug: "koen-zuidberg", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 45, pilot: "Wouter Hordijk", pilotSlug: "wouter-hordijk", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 24, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 31, pilot: "Francesco Simonetto", pilotSlug: "francesco", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 41, pilot: "Dalilla Bezoen", pilotSlug: "dalilla-bezoen", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 43, pilot: "Jurre Berkhout", pilotSlug: "jurre-berkhout", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 56, pilot: "Arne Klarenberg", pilotSlug: "arne-klarenberg", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Jasper Roelfsema", pilotSlug: "jasper-roelfsema", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 20, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 24, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 36, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 41, pilot: "Arne Klarenberg", pilotSlug: "arne-klarenberg", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 42, pilot: "Mark Coehoorn", pilotSlug: "mark-coehoorn", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 4, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 5, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 23, pilot: "Jasper Roelfsema", pilotSlug: "jasper-roelfsema", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 33, pilot: "Francesco Bernardi", pilotSlug: "francesco-bernardi", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 51, pilot: "Arne Klarenberg", pilotSlug: "arne-klarenberg", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 40, pilot: "Moss", pilotSlug: "moss", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 7, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde-van-'t-verlaat", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 27, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 16, pilot: "Bauke Ham", pilotSlug: "bauke-ham", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 20, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 21, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Bauke Ham", pilotSlug: "bauke-ham", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 6, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 14, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 17, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 9, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 15, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 16, pilot: "Fernando Gómez-Acebo", pilotSlug: "fernando-gomez-acebo", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 20, pilot: "Stefan Vlijm", pilotSlug: "stefan-vlijm", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 25, pilot: "Gino De Guzman", pilotSlug: "gino-de-guzman", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 11, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 14, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 22, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 29, pilot: "Tim Bunnik", pilotSlug: "tim-bunnik", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 34, pilot: "Simone Gottardi", pilotSlug: "simone-gottardi", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Dylan Holly", pilotSlug: "dylan-holly", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Eef vV", pilotSlug: "eef-v-v", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
  "ruby-storm": {
    slug: "ruby-storm",
    name: "Ruby Storm",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 3, pilot: "Floris Stapel", pilotSlug: "floris-stapel", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 11, pilot: "Thijs Deckers", pilotSlug: "thijs-deckers", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 42, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 15, pilot: "Floris Stapel", pilotSlug: "floris-stapel", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 3, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      }
    ],
  },
  "selesnya-gates": {
    slug: "selesnya-gates",
    name: "Selesnya Gates",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 32, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 1, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 2, pilot: "Jelle Zwaan", pilotSlug: "jelle-zwaan", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      }
    ],
  },
  "slivers": {
    slug: "slivers",
    name: "Slivers",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Phil Kalter", pilotSlug: "phil-kalter", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 43, pilot: "Liam Wyatt", pilotSlug: "liam-wyatt", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Marcos Garcia", pilotSlug: "marcos-garcia", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" }
        ],
      }
    ],
  },
  "spy-walls": {
    slug: "spy-walls",
    name: "Spy Walls",
    count: 10,
    percentage: "0.90%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 2, pilot: "Leonardo Paternotte", pilotSlug: "leonardo-paternotte", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 5, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 12, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 37, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas-bordenabe", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 21, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 28, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 14, pilot: "Thijs Deckers", pilotSlug: "thijs-deckers", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 31, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito-taneburgo", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 34, pilot: "Ettore Cerracchio", pilotSlug: "ettore-cerracchio", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 41, pilot: "Stefan Pouwelse", pilotSlug: "stefan-pouwelse", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 45, pilot: "Collin Bos", pilotSlug: "collin-bos", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 33, pilot: "Leonardo Paternotte", pilotSlug: "leonardo-paternotte", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      }
    ],
  },
  "stompy": {
    slug: "stompy",
    name: "Stompy",
    count: 2,
    percentage: "0.18%",
    byEvent: [
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 34, pilot: "Pablo Pirata", pilotSlug: "pablo-pirata", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 32, pilot: "Pablo Pirata", pilotSlug: "pablo-pirata", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      }
    ],
  },
  "temur-ponza": {
    slug: "temur-ponza",
    name: "Temur Ponza",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" }
        ],
      }
    ],
  },
  "turbofog": {
    slug: "turbofog",
    name: "Turbofog",
    count: 3,
    percentage: "0.27%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 23, pilot: "Stefan Vlijm", pilotSlug: "stefan-vlijm", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 46, pilot: "John Buckley", pilotSlug: "john-buckley", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 14, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 30, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen-van-der-kamp", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" }
        ],
      }
    ],
  },
  "walls": {
    slug: "walls",
    name: "Walls",
    count: 21,
    percentage: "1.90%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 37, pilot: "Andrea Passaro", pilotSlug: "andrea-passaro", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 7, pilot: "Andrea Passaro", pilotSlug: "andrea-passaro", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Andrea Passaro", pilotSlug: "andrea-passaro", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 31, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 33, pilot: "Andrea Passaro", pilotSlug: "andrea-passaro", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 54, pilot: "Thomas Gates", pilotSlug: "thomas-gates", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 23, pilot: "Elles Dijkhuizen", pilotSlug: "elles-dijkhuizen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Yaro Kraneveld", pilotSlug: "yaro-kraneveld", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Leonardo Paternotte", pilotSlug: "leonardo-paternotte", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 47, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 11, pilot: "Andrea Passaro", pilotSlug: "andrea-passaro", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad-alexandru-negara", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Floris Heins", pilotSlug: "floris-heins", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Max Roovers", pilotSlug: "max-roovers", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" }
        ],
      }
    ],
  },
  "white-weenie": {
    slug: "white-weenie",
    name: "White Weenie",
    count: 19,
    percentage: "1.72%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 8, pilot: "Roberto van den Elzen", pilotSlug: "roberto-van-den-elzen", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 20, pilot: "Fernando Tong", pilotSlug: "fernando-tong", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 48, pilot: "Jeff Wade", pilotSlug: "jeff-wade", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 14, pilot: "Jelle Schneider", pilotSlug: "jelle-schneider", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 33, pilot: "Fernando Tong", pilotSlug: "fernando-tong", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 39, pilot: "Thomas Wood", pilotSlug: "thomas-wood", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 71, pilot: "Tim Swillens", pilotSlug: "tim-swillens", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 59, pilot: "Fernando Tong", pilotSlug: "fernando-tong", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" }
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 32, pilot: "Thomas Wood", pilotSlug: "thomas-wood", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 94, pilot: "Marc Bosserhoff", pilotSlug: "marc-bosserhoff", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" }
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Thomas Wood", pilotSlug: "thomas-wood", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 51, pilot: "Thomas Wood", pilotSlug: "thomas-wood", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" }
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Tobias van Kersbergen", pilotSlug: "tobias-van-kersbergen", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 28, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Sam Ye", pilotSlug: "sam-ye", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 26, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Raymond Anderson", pilotSlug: "raymond-anderson", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 24, pilot: "Rob Lamers", pilotSlug: "rob-lamers", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" }
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Diego Cath", pilotSlug: "diego-cath", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" }
        ],
      }
    ],
  },
};

