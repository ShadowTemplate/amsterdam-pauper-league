import type { Archetype, ArchetypeDetail } from "@/types";

export const ARCHETYPES: Archetype[] = [
  { slug: "brew", name: "Brew", count: 87, percentage: "7.26%" },
  { slug: "rakdos_burn", name: "Rakdos Burn", count: 75, percentage: "6.26%" },
  { slug: "monou_terror", name: "MonoU Terror", count: 74, percentage: "6.18%" },
  { slug: "affinity", name: "Affinity", count: 64, percentage: "5.34%" },
  { slug: "monou_faeries", name: "MonoU Faeries", count: 59, percentage: "4.92%" },
  { slug: "jund_wildfire", name: "Jund Wildfire", count: 55, percentage: "4.59%" },
  { slug: "burn", name: "Burn", count: 47, percentage: "3.92%" },
  { slug: "gruul_ponza", name: "Gruul Ponza", count: 44, percentage: "3.67%" },
  { slug: "elves", name: "Elves", count: 41, percentage: "3.42%" },
  { slug: "dimir_faeries", name: "Dimir Faeries", count: 40, percentage: "3.34%" },
  { slug: "monor_madness", name: "MonoR Madness", count: 36, percentage: "3.01%" },
  { slug: "azorius_gates", name: "Azorius Gates", count: 33, percentage: "2.75%" },
  { slug: "familiars", name: "Familiars", count: 31, percentage: "2.59%" },
  { slug: "monob_sacrifice", name: "MonoB Sacrifice", count: 31, percentage: "2.59%" },
  { slug: "monor_kuldotha", name: "MonoR Kuldotha", count: 28, percentage: "2.34%" },
  { slug: "gruul_ramp", name: "Gruul Ramp", count: 26, percentage: "2.17%" },
  { slug: "flicker_tron", name: "Flicker Tron", count: 26, percentage: "2.17%" },
  { slug: "bogles", name: "Bogles", count: 25, percentage: "2.09%" },
  { slug: "white_weenie", name: "White Weenie", count: 23, percentage: "1.92%" },
  { slug: "jeskai_ephemerate", name: "Jeskai Ephemerate", count: 22, percentage: "1.84%" },
  { slug: "walls", name: "Walls", count: 19, percentage: "1.59%" },
  { slug: "golgari_gardens", name: "Golgari Gardens", count: 19, percentage: "1.59%" },
  { slug: "izzet_terror", name: "Izzet Terror", count: 18, percentage: "1.50%" },
  { slug: "dimir_terror", name: "Dimir Terror", count: 16, percentage: "1.34%" },
  { slug: "one_land_spy", name: "One Land Spy", count: 16, percentage: "1.34%" },
  { slug: "golgari_dredge", name: "Golgari Dredge", count: 15, percentage: "1.25%" },
  { slug: "altar_tron", name: "Altar Tron", count: 14, percentage: "1.17%" },
  { slug: "spy_walls", name: "Spy Walls", count: 13, percentage: "1.09%" },
  { slug: "boros_synth", name: "Boros Synth", count: 13, percentage: "1.09%" },
  { slug: "moggwarts", name: "Moggwarts", count: 12, percentage: "1.00%" },
  { slug: "cycling_storm", name: "Cycling Storm", count: 10, percentage: "0.83%" },
  { slug: "mardu_synth", name: "Mardu Synth", count: 10, percentage: "0.83%" },
  { slug: "jund_gleezard", name: "Jund Gleezard", count: 9, percentage: "0.75%" },
  { slug: "monou_high_tide", name: "MonoU High Tide", count: 9, percentage: "0.75%" },
  { slug: "orzhov_blade", name: "Orzhov Blade", count: 8, percentage: "0.67%" },
  { slug: "boros_glitters", name: "Boros Glitters", count: 8, percentage: "0.67%" },
  { slug: "ruby_storm", name: "Ruby Storm", count: 7, percentage: "0.58%" },
  { slug: "monster_tron", name: "Monster Tron", count: 7, percentage: "0.58%" },
  { slug: "monor_rally", name: "MonoR Rally", count: 7, percentage: "0.58%" },
  { slug: "boros_bully", name: "Boros Bully", count: 7, percentage: "0.58%" },
  { slug: "esper_blade", name: "Esper Blade", count: 7, percentage: "0.58%" },
  { slug: "azorius_glitters", name: "Azorius Glitters", count: 6, percentage: "0.50%" },
  { slug: "poison_storm", name: "Poison Storm", count: 6, percentage: "0.50%" },
  { slug: "monow_heroic", name: "MonoW Heroic", count: 5, percentage: "0.42%" },
  { slug: "fangren_tron", name: "Fangren Tron", count: 5, percentage: "0.42%" },
  { slug: "jeskai_glitters", name: "Jeskai Glitters", count: 4, percentage: "0.33%" },
  { slug: "turbofog", name: "Turbofog", count: 4, percentage: "0.33%" },
  { slug: "golgari_gleezard", name: "Golgari Gleezard", count: 4, percentage: "0.33%" },
  { slug: "temur_ponza", name: "Temur Ponza", count: 3, percentage: "0.25%" },
  { slug: "monor_tron", name: "MonoR Tron", count: 3, percentage: "0.25%" },
  { slug: "selesnya_gates", name: "Selesnya Gates", count: 3, percentage: "0.25%" },
  { slug: "eldrazi_spawn", name: "Eldrazi Spawn", count: 3, percentage: "0.25%" },
  { slug: "goblins", name: "Goblins", count: 3, percentage: "0.25%" },
  { slug: "boros_tribe", name: "Boros Tribe", count: 3, percentage: "0.25%" },
  { slug: "inside_out", name: "Inside Out", count: 3, percentage: "0.25%" },
  { slug: "brew_golgari", name: "Brew Golgari", count: 3, percentage: "0.25%" },
  { slug: "slivers", name: "Slivers", count: 3, percentage: "0.25%" },
  { slug: "petitioners_mill", name: "Petitioners Mill", count: 2, percentage: "0.17%" },
  { slug: "esper_affinity", name: "Esper Affinity", count: 2, percentage: "0.17%" },
  { slug: "jund_gardens", name: "Jund Gardens", count: 2, percentage: "0.17%" },
  { slug: "stompy", name: "Stompy", count: 2, percentage: "0.17%" },
  { slug: "monor_blitz", name: "MonoR Blitz", count: 2, percentage: "0.17%" },
  { slug: "infect", name: "Infect", count: 2, percentage: "0.17%" },
  { slug: "jund_cascade", name: "Jund Cascade", count: 2, percentage: "0.17%" },
  { slug: "monor_dredge", name: "MonoR Dredge", count: 2, percentage: "0.17%" },
  { slug: "golgari_food_pestilence", name: "Golgari Food Pestilence", count: 1, percentage: "0.08%" },
  { slug: "monog_tron", name: "MonoG Tron", count: 1, percentage: "0.08%" },
  { slug: "monob_control", name: "MonoB Control", count: 1, percentage: "0.08%" },
  { slug: "rakdos_ally", name: "Rakdos Ally", count: 1, percentage: "0.08%" },
  { slug: "naya_turbo_emblem", name: "Naya Turbo Emblem", count: 1, percentage: "0.08%" },
  { slug: "golgari_tortex", name: "Golgari TortEx", count: 1, percentage: "0.08%" },
  { slug: "monob_ponza", name: "MonoB Ponza", count: 1, percentage: "0.08%" },
  { slug: "dimir_control", name: "Dimir Control", count: 1, percentage: "0.08%" },
  { slug: "naya_gates", name: "Naya Gates", count: 1, percentage: "0.08%" },
  { slug: "boros_moxite", name: "Boros Moxite", count: 1, percentage: "0.08%" },
];

export const ARCHETYPE_DETAILS: Record<string, ArchetypeDetail> = {
  "brew": {
    slug: "brew",
    name: "Brew",
    count: 87,
    percentage: "7.26%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 1, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 9, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 12, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 19, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 21, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 23, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 25, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 26, pilot: "Alexander Hamilton", pilotSlug: "alexander_hamilton", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 27, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 34, pilot: "vinicius duarte", pilotSlug: "vinicius_duarte", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 39, pilot: "Collin Bos", pilotSlug: "collin_bos", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 42, pilot: "Leonardo Paternotte", pilotSlug: "leonardo_paternotte", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 45, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 46, pilot: "Tim Swillens", pilotSlug: "tim_swillens", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 49, pilot: "Lotte Klomp", pilotSlug: "lotte_klomp", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 53, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 18, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 30, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 62, pilot: "Lotte Klomp", pilotSlug: "lotte_klomp", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 72, pilot: "Jeff Wade", pilotSlug: "jeff_wade", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 57, pilot: "Lotte Klomp", pilotSlug: "lotte_klomp", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 67, pilot: "Tim Swillens", pilotSlug: "tim_swillens", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 19, pilot: "Haron Tuin", pilotSlug: "haron_tuin", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 36, pilot: "Marius Bergwerff", pilotSlug: "marius_bergwerff", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 49, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 68, pilot: "Vince kors", pilotSlug: "vince_kors", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 78, pilot: "Erik de Waard", pilotSlug: "erik_de_waard", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 79, pilot: "Floris Stapel", pilotSlug: "floris_stapel", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 90, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 97, pilot: "Ivan Kors", pilotSlug: "ivan_kors", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 103, pilot: "F.C Jonkman", pilotSlug: "fc_jonkman", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 105, pilot: "Frank Kortsmit", pilotSlug: "frank_kortsmit", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 109, pilot: "Thijs Deckers", pilotSlug: "thijs_deckers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 111, pilot: "Jasper jonkman", pilotSlug: "jasper_jonkman", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 32, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 33, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 35, pilot: "Alessio Viali", pilotSlug: "alessio_viali", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 39, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 45, pilot: "Rowan Groen", pilotSlug: "rowan_groen", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 54, pilot: "Lisa-Marie van Barneveld", pilotSlug: "lisa_marie_van_barneveld", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 55, pilot: "Lot Rossmark", pilotSlug: "lot_rossmark", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 57, pilot: "Jeff Wade", pilotSlug: "jeff_wade", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 44, pilot: "Lotte Klomp", pilotSlug: "lotte_klomp", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 48, pilot: "Lotte Klomp", pilotSlug: "lotte_klomp", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 49, pilot: "Jeff Wade", pilotSlug: "jeff_wade", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 50, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 55, pilot: "Quinten Brouwer", pilotSlug: "quinten_brouwer", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 5, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 21, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 29, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 47, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 49, pilot: "Elles Dijkhuizen", pilotSlug: "elles_dijkhuizen", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 58, pilot: "Marvin Schippmann", pilotSlug: "marvin_schippmann", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 55, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 32, pilot: "Michele Violin", pilotSlug: "michele_violin", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 40, pilot: "Morgan Privitera", pilotSlug: "morgan_privitera", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 48, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 60, pilot: "Leonidas Faliagkas", pilotSlug: "leonidas_faliagkas", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 26, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 28, pilot: "Frank Kortsmit", pilotSlug: "frank_kortsmit", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 43, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 46, pilot: "Blom Bezemer", pilotSlug: "blom_bezemer", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 42, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 46, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 52, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 32, pilot: "Thomas Tates", pilotSlug: "thomas_tates", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Jona Dijksterhuis", pilotSlug: "jona_dijksterhuis", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 19, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 30, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 14, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 22, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 23, pilot: "Max Moriette-Sala", pilotSlug: "max_moriette_sala", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 25, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 30, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 33, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 35, pilot: "Thomas Tates", pilotSlug: "thomas_tates", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 42, pilot: "Rizi", pilotSlug: "rizi", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 35, pilot: "Thomas Tates", pilotSlug: "thomas_tates", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
    ],
  },
  "rakdos_burn": {
    slug: "rakdos_burn",
    name: "Rakdos Burn",
    count: 75,
    percentage: "6.26%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 54, pilot: "Javier Carrillo Delgado", pilotSlug: "javier_carrillo_delgado", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 26, pilot: "Marvin Schippmann", pilotSlug: "marvin_schippmann", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 69, pilot: "Irshaad", pilotSlug: "irshaad", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 28, pilot: "Gus Vanpoucke", pilotSlug: "gus_vanpoucke", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 66, pilot: "Lisa-Marie Bliek", pilotSlug: "lisa_marie_bliek", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 72, pilot: "Cameron Sidhu", pilotSlug: "cameron_sidhu", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 86, pilot: "Diego Orlandini", pilotSlug: "diego_orlandini", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 87, pilot: "Jasper Roelfsema", pilotSlug: "jasper_roelfsema", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 89, pilot: "Mitch van der Heijden", pilotSlug: "mitch_van_der_heijden", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 99, pilot: "Arne De Greef", pilotSlug: "arne_de_greef", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 100, pilot: "Emanuele Rolando", pilotSlug: "emanuele_rolando", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 101, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 42, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 46, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Stefan Vlijm", pilotSlug: "stefan_vlijm", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 42, pilot: "Jasper Roelfsema", pilotSlug: "jasper_roelfsema", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 45, pilot: "Quint Marcelis", pilotSlug: "quint_marcelis", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 40, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 46, pilot: "Aurora Polak", pilotSlug: "aurora_polak", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 55, pilot: "Roberto Schiavone", pilotSlug: "roberto_schiavone", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 36, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 42, pilot: "Dalilla Bezoen", pilotSlug: "dalilla_bezoen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 25, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 34, pilot: "Dalilla Bezoen", pilotSlug: "dalilla_bezoen", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 35, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 38, pilot: "Koen Zuidberg", pilotSlug: "koen_zuidberg", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 45, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 24, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 31, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 41, pilot: "Dalilla Bezoen", pilotSlug: "dalilla_bezoen", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 43, pilot: "Jurre Berkhout", pilotSlug: "jurre_berkhout", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 56, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Jasper Roelfsema", pilotSlug: "jasper_roelfsema", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 20, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 24, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 36, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 41, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 42, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 4, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 5, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 23, pilot: "Jasper Roelfsema", pilotSlug: "jasper_roelfsema", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 33, pilot: "Francesco Bernardi", pilotSlug: "francesco_bernardi", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 51, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 40, pilot: "Moss", pilotSlug: "moss", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 7, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 27, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 16, pilot: "Bauke Ham", pilotSlug: "bauke_ham", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 20, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 21, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Bauke Ham", pilotSlug: "bauke_ham", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 6, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 14, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 17, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 9, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 15, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 16, pilot: "Fernando Gómez-Acebo", pilotSlug: "fernando_gomez_acebo", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 20, pilot: "Stefan Vlijm", pilotSlug: "stefan_vlijm", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 25, pilot: "Gino De Guzman", pilotSlug: "gino_de_guzman", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 11, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 14, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 22, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 29, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 34, pilot: "Simone Gottardi", pilotSlug: "simone_gottardi", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "monou_terror": {
    slug: "monou_terror",
    name: "MonoU Terror",
    count: 74,
    percentage: "6.18%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 20, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 32, pilot: "Jose Jiménez Guerrero", pilotSlug: "jose_jimenez_guerrero", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 18, pilot: "Blom Bezemer", pilotSlug: "blom_bezemer", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 30, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 56, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 16, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 20, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 32, pilot: "Noah van Duren", pilotSlug: "noah_van_duren", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 32, pilot: "Roald Landheer", pilotSlug: "roald_landheer", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 37, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 56, pilot: "Noah van Duren", pilotSlug: "noah_van_duren", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 8, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 10, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 17, pilot: "Felix Watermann", pilotSlug: "felix_watermann", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 18, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 21, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 27, pilot: "Jörg Vondenhoff", pilotSlug: "jorg_vondenhoff", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 39, pilot: "OwenP", pilotSlug: "owenp", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 44, pilot: "Stefan Pouwelse", pilotSlug: "stefan_pouwelse", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 63, pilot: "Mick", pilotSlug: "mick", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 65, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 107, pilot: "Yannic van Heereveld", pilotSlug: "yannic_van_heereveld", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 2, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 4, pilot: "Yannic van Heereveld", pilotSlug: "yannic_van_heereveld", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 23, pilot: "Nicola Gnasso", pilotSlug: "nicola_gnasso", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 58, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 22, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 34, pilot: "Gabriele Maria Giardino", pilotSlug: "gabriele_maria_giardino", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 14, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 22, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 38, pilot: "Mark", pilotSlug: "mark", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 46, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 25, pilot: "Yannic van Heereveld", pilotSlug: "yannic_van_heereveld", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 30, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 28, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 33, pilot: "Juan Ascanio", pilotSlug: "juan_ascanio", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 35, pilot: "Collin Bos", pilotSlug: "collin_bos", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Collin Bos", pilotSlug: "collin_bos", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 14, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 27, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 33, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 37, pilot: "Natalie Zuidberg", pilotSlug: "natalie_zuidberg", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 12, pilot: "Mattia Paglino", pilotSlug: "mattia_paglino", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 17, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 22, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 59, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 10, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 18, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 19, pilot: "Derin Ünver", pilotSlug: "derin_unver", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 23, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 26, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 28, pilot: "Edwin bouwer", pilotSlug: "edwin_bouwer", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 34, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 22, pilot: "Koen de Vos", pilotSlug: "koen_de_vos", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Koen de Vos", pilotSlug: "koen_de_vos", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 10, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Koen de Vos", pilotSlug: "koen_de_vos", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 26, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 27, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 28, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Iain Ligthart", pilotSlug: "iain_ligthart", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 34, pilot: "Yasmin Saciri", pilotSlug: "yasmin_saciri", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "affinity": {
    slug: "affinity",
    name: "Affinity",
    count: 64,
    percentage: "5.34%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 8, pilot: "Jerryt Boersen", pilotSlug: "jerryt_boersen", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 16, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 18, pilot: "Alice Lenting", pilotSlug: "alice_lenting", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 31, pilot: "Aartos Locos", pilotSlug: "aartos_locos", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 21, pilot: "Aartos Locos", pilotSlug: "aartos_locos", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 34, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 35, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 43, pilot: "Marco Giocondo Mignone", pilotSlug: "marco_giocondo_mignone", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 45, pilot: "Vitaly Svetlov", pilotSlug: "vitaly_svetlov", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 24, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 47, pilot: "Stefan Gussenhoven", pilotSlug: "stefan_gussenhoven", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 50, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 54, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 63, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 66, pilot: "Jack Schuurbiers", pilotSlug: "jack_schuurbiers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 68, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 69, pilot: "Davide Caviglia", pilotSlug: "davide_caviglia", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 11, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 22, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 27, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 61, pilot: "Alessio Viali", pilotSlug: "alessio_viali", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 65, pilot: "Marco Giocondo Mignone", pilotSlug: "marco_giocondo_mignone", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 5, pilot: "Ernesto Jacopo Varriale", pilotSlug: "ernesto_jacopo_varriale", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 11, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 52, pilot: "Alexander Boon", pilotSlug: "alexander_boon", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 74, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 92, pilot: "Katie Berlin", pilotSlug: "katie_berlin", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 113, pilot: "Marco Giocondo Mignone", pilotSlug: "marco_giocondo_mignone", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 12, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 50, pilot: "Joris Dral", pilotSlug: "joris_dral", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 21, pilot: "Ramsey Zdiri", pilotSlug: "ramsey_zdiri", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 42, pilot: "Marco Giocondo Mignone", pilotSlug: "marco_giocondo_mignone", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 25, pilot: "Ramsey Zdiri", pilotSlug: "ramsey_zdiri", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 32, pilot: "Ramon Facchin", pilotSlug: "ramon_facchin", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 34, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 39, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 46, pilot: "Rufus Ang", pilotSlug: "rufus_ang", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 32, pilot: "Jort Bakker", pilotSlug: "jort_bakker", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Jort Bakker", pilotSlug: "jort_bakker", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 22, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 32, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 49, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 7, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 29, pilot: "Max Bosma", pilotSlug: "max_bosma", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Jonathan", pilotSlug: "jonathan", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 18, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 21, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 30, pilot: "Arne Klarenberg", pilotSlug: "arne_klarenberg", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 33, pilot: "Julius Siemes", pilotSlug: "julius_siemes", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 28, pilot: "Gino De Guzman", pilotSlug: "gino_de_guzman", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 30, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 31, pilot: "Mattia Paglino", pilotSlug: "mattia_paglino", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 37, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 40, pilot: "Laurent Paardekooper", pilotSlug: "laurent_paardekooper", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Jort Bakker", pilotSlug: "jort_bakker", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "monou_faeries": {
    slug: "monou_faeries",
    name: "MonoU Faeries",
    count: 59,
    percentage: "4.92%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 3, pilot: "Jamie March", pilotSlug: "jamie_march", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 7, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 11, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 36, pilot: "Stefan Pouwelse", pilotSlug: "stefan_pouwelse", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 13, pilot: "Dylan Holly", pilotSlug: "dylan_holly", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 40, pilot: "Johan Boesveld", pilotSlug: "johan_boesveld", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 58, pilot: "Marvin Schippmann", pilotSlug: "marvin_schippmann", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 26, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 51, pilot: "Johan Boesveld", pilotSlug: "johan_boesveld", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 52, pilot: "Tristan Tai", pilotSlug: "tristan_tai", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 12, pilot: "Oscar Jocqué", pilotSlug: "oscar_jocque", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 14, pilot: "Marco Lazzari", pilotSlug: "marco_lazzari", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 30, pilot: "David Horvath", pilotSlug: "david_horvath", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 56, pilot: "Kai Schutte", pilotSlug: "kai_schutte", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 59, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 91, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 18, pilot: "David Horvath", pilotSlug: "david_horvath", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 11, pilot: "Vilius Peteraitis", pilotSlug: "vilius_peteraitis", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 14, pilot: "Natalie Zuidberg", pilotSlug: "natalie_zuidberg", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 40, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 2, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 19, pilot: "David Horvath", pilotSlug: "david_horvath", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 30, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 28, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 31, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 41, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 44, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 56, pilot: "Antonio Liguori", pilotSlug: "antonio_liguori", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 3, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 14, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 21, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 25, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 47, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 11, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 12, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 28, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 30, pilot: "vinicius duarte", pilotSlug: "vinicius_duarte", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 40, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 18, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 37, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 47, pilot: "Roberto Schiavone", pilotSlug: "roberto_schiavone", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 48, pilot: "Romke Postma", pilotSlug: "romke_postma", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 17, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 5, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 13, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Michael smit", pilotSlug: "michael_smit", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 8, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "jund_wildfire": {
    slug: "jund_wildfire",
    name: "Jund Wildfire",
    count: 55,
    percentage: "4.59%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 30, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 40, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 6, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 25, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 28, pilot: "Matteo Bellante", pilotSlug: "matteo_bellante", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 38, pilot: "Collin Bos", pilotSlug: "collin_bos", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 41, pilot: "Emmanuel Blazquez", pilotSlug: "emmanuel_blazquez", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 44, pilot: "Giacco", pilotSlug: "giacco", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 42, pilot: "Matteo Bellante", pilotSlug: "matteo_bellante", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 46, pilot: "Collin Bos", pilotSlug: "collin_bos", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 1, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 20, pilot: "Jonathan", pilotSlug: "jonathan", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 23, pilot: "Benjamin Mul", pilotSlug: "benjamin_mul", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 40, pilot: "jarno polhuijs", pilotSlug: "jarno_polhuijs", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 54, pilot: "Patrick Heijna", pilotSlug: "patrick_heijna", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 55, pilot: "Timo Vogelfänger", pilotSlug: "timo_vogelfanger", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 82, pilot: "Matteo Bellante", pilotSlug: "matteo_bellante", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 38, pilot: "Mathieu Zwaan", pilotSlug: "mathieu_zwaan", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 49, pilot: "Max Mercx", pilotSlug: "max_mercx", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 8, pilot: "jarno polhuijs", pilotSlug: "jarno_polhuijs", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 16, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 27, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 39, pilot: "Max Mercx", pilotSlug: "max_mercx", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 56, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 10, pilot: "jarno polhuijs", pilotSlug: "jarno_polhuijs", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 18, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 22, pilot: "Nigel Stikker", pilotSlug: "nigel_stikker", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 26, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 37, pilot: "Wesley Choong", pilotSlug: "wesley_choong", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 50, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 53, pilot: "Francesco Bernardi", pilotSlug: "francesco_bernardi", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 7, pilot: "jarno polhuijs", pilotSlug: "jarno_polhuijs", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 13, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 17, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 20, pilot: "Jort Bakker", pilotSlug: "jort_bakker", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 45, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 53, pilot: "luka strganac", pilotSlug: "luka_strganac", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 7, pilot: "Jort Bakker", pilotSlug: "jort_bakker", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 8, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 32, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 14, pilot: "Nigel Stikker", pilotSlug: "nigel_stikker", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 15, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 18, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 30, pilot: "Jort Bakker", pilotSlug: "jort_bakker", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 36, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 51, pilot: "Francesco Bernardi", pilotSlug: "francesco_bernardi", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 55, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 21, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 25, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 40, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
    ],
  },
  "burn": {
    slug: "burn",
    name: "Burn",
    count: 47,
    percentage: "3.92%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 10, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 35, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 38, pilot: "Vanessa Weber", pilotSlug: "vanessa_weber", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 19, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 27, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 2, pilot: "phillip drage", pilotSlug: "phillip_drage", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 31, pilot: "Julian Dornebusch", pilotSlug: "julian_dornebusch", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 43, pilot: "Tomas Gonzalez", pilotSlug: "tomas_gonzalez", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 50, pilot: "Marcel Hogewoning", pilotSlug: "marcel_hogewoning", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 58, pilot: "Karl Niklas", pilotSlug: "karl_niklas", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 62, pilot: "Luiz Francisco Scudelari de Macedo", pilotSlug: "luiz_francisco_scudelari_de_macedo", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 93, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 108, pilot: "Jerwin Pouwelse", pilotSlug: "jerwin_pouwelse", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 11, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 56, pilot: "Vanessa Weber", pilotSlug: "vanessa_weber", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 2, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 6, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 41, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 12, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 17, pilot: "Francesco Agnesi", pilotSlug: "francesco_agnesi", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 23, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 26, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 44, pilot: "Max Moriette-Sala", pilotSlug: "max_moriette_sala", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 15, pilot: "Francesco Agnesi", pilotSlug: "francesco_agnesi", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 33, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 45, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 57, pilot: "Max Moriette-Sala", pilotSlug: "max_moriette_sala", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 26, pilot: "Marcel Hogewoning", pilotSlug: "marcel_hogewoning", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 30, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 41, pilot: "Roberto Schiavone", pilotSlug: "roberto_schiavone", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 10, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 41, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 23, pilot: "Max Moriette-Sala", pilotSlug: "max_moriette_sala", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 25, pilot: "Teun Fekkes", pilotSlug: "teun_fekkes", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 28, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 45, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 25, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Thomas Tates", pilotSlug: "thomas_tates", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "gruul_ponza": {
    slug: "gruul_ponza",
    name: "Gruul Ponza",
    count: 44,
    percentage: "3.67%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 3, pilot: "Mikhail Kulikov", pilotSlug: "mikhail_kulikov", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 40, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 19, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 16, pilot: "Stefan Gussenhoven", pilotSlug: "stefan_gussenhoven", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 67, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 26, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Thomas Isphording", pilotSlug: "thomas_isphording", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Stefan Gussenhoven", pilotSlug: "stefan_gussenhoven", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 11, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 12, pilot: "Iskander Waldorp", pilotSlug: "iskander_waldorp", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 23, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 38, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 6, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 7, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 12, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 38, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 44, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 13, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 25, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 8, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 12, pilot: "Catalin Apostol", pilotSlug: "catalin_apostol", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 13, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 19, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 27, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 13, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 12, pilot: "Tim Zemack", pilotSlug: "tim_zemack", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 17, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 18, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 20, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 21, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 14, pilot: "Simone Gottardi", pilotSlug: "simone_gottardi", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 29, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Tim Zemack", pilotSlug: "tim_zemack", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Ingo van den Bersselaar", pilotSlug: "ingo_van_den_bersselaar", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "elves": {
    slug: "elves",
    name: "Elves",
    count: 41,
    percentage: "3.42%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 9, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 23, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 48, pilot: "Emmanuel Blazquez", pilotSlug: "emmanuel_blazquez", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 29, pilot: "Emmanuel Blazquez", pilotSlug: "emmanuel_blazquez", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 30, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 7, pilot: "Mattia Paglino", pilotSlug: "mattia_paglino", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 9, pilot: "Kieran Edwards", pilotSlug: "kieran_edwards", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 13, pilot: "Morgan Fussell", pilotSlug: "morgan_fussell", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 45, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 46, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 112, pilot: "Robert Kropholler", pilotSlug: "robert_kropholler", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 114, pilot: "Ben Luis Hack", pilotSlug: "ben_luis_hack", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 36, pilot: "boris romero", pilotSlug: "boris_romero", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 51, pilot: "Giacco", pilotSlug: "giacco", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 32, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 20, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 57, pilot: "Fernando Tong", pilotSlug: "fernando_tong", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 13, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 32, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 21, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 2, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 27, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 44, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 52, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 53, pilot: "Roberto Schiavone", pilotSlug: "roberto_schiavone", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 30, pilot: "Nigel Stikker", pilotSlug: "nigel_stikker", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 35, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 39, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Ben van Wijk", pilotSlug: "ben_van_wijk", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 27, pilot: "Roald Landheer", pilotSlug: "roald_landheer", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 28, pilot: "Giovanni Allovio", pilotSlug: "giovanni_allovio", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 11, pilot: "Nigel Stikker", pilotSlug: "nigel_stikker", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Nigel Stikker", pilotSlug: "nigel_stikker", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 32, pilot: "Nigel Stikker", pilotSlug: "nigel_stikker", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
    ],
  },
  "dimir_faeries": {
    slug: "dimir_faeries",
    name: "Dimir Faeries",
    count: 40,
    percentage: "3.34%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 17, pilot: "Stefan van der List", pilotSlug: "stefan_van_der_list", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 22, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 16, pilot: "vinicius duarte", pilotSlug: "vinicius_duarte", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 22, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 26, pilot: "Jamie March", pilotSlug: "jamie_march", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 60, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 6, pilot: "vinicius duarte", pilotSlug: "vinicius_duarte", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 25, pilot: "Jamie March", pilotSlug: "jamie_march", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 29, pilot: "Johan Boesveld", pilotSlug: "johan_boesveld", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 5, pilot: "vinicius duarte", pilotSlug: "vinicius_duarte", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 8, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 23, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 28, pilot: "Jamie March", pilotSlug: "jamie_march", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 45, pilot: "vinicius duarte", pilotSlug: "vinicius_duarte", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 52, pilot: "Maarten", pilotSlug: "maarten", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 19, pilot: "Felipe Inza", pilotSlug: "felipe_inza", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 46, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 27, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 44, pilot: "Roberto Schiavone", pilotSlug: "roberto_schiavone", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 35, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 24, pilot: "Fedor Manukovskii", pilotSlug: "fedor_manukovskii", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 26, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 31, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 27, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 20, pilot: "Ingo van den Bersselaar", pilotSlug: "ingo_van_den_bersselaar", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 23, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 9, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 10, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "monor_madness": {
    slug: "monor_madness",
    name: "MonoR Madness",
    count: 36,
    percentage: "3.01%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 4, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 44, pilot: "Irshaad", pilotSlug: "irshaad", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 14, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 46, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 50, pilot: "Irshaad", pilotSlug: "irshaad", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 7, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 12, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 43, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 45, pilot: "Irshaad", pilotSlug: "irshaad", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 49, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 55, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 57, pilot: "Blom Bezemer", pilotSlug: "blom_bezemer", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 59, pilot: "Pablo Pirata", pilotSlug: "pablo_pirata", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 6, pilot: "Quint Marcelis", pilotSlug: "quint_marcelis", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 21, pilot: "Kevin van Hengst", pilotSlug: "kevin_van_hengst", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 40, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 49, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 70, pilot: "Maeve Powlick", pilotSlug: "maeve_powlick", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 1, pilot: "Ross McKendrick", pilotSlug: "ross_mckendrick", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 34, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 38, pilot: "Mario Giordano", pilotSlug: "mario_giordano", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 42, pilot: "Francesco Agnesi", pilotSlug: "francesco_agnesi", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 64, pilot: "Benjamin Haude", pilotSlug: "benjamin_haude", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 70, pilot: "Max Moriette-Sala", pilotSlug: "max_moriette_sala", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 73, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 95, pilot: "Jaron Polhuijs", pilotSlug: "jaron_polhuijs", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 104, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 110, pilot: "Maeve Powlick", pilotSlug: "maeve_powlick", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Quint Marcelis", pilotSlug: "quint_marcelis", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 15, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 19, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 25, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 28, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 30, pilot: "Francesco Simonetto", pilotSlug: "francesco_simonetto", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 40, pilot: "Maarten Van der weide", pilotSlug: "maarten_van_der_weide", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 41, pilot: "Francesco Agnesi", pilotSlug: "francesco_agnesi", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
    ],
  },
  "azorius_gates": {
    slug: "azorius_gates",
    name: "Azorius Gates",
    count: 33,
    percentage: "2.75%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 29, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 9, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 35, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 12, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 22, pilot: "PotestasNecis", pilotSlug: "potestasnecis", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 26, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 51, pilot: "Koen Zuidberg", pilotSlug: "koen_zuidberg", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 53, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 60, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 83, pilot: "Luka Pasalic", pilotSlug: "luka_pasalic", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 96, pilot: "Stefan Vlijm", pilotSlug: "stefan_vlijm", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 117, pilot: "Morgan Privitera", pilotSlug: "morgan_privitera", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 13, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 20, pilot: "Koen Zuidberg", pilotSlug: "koen_zuidberg", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 21, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 24, pilot: "Stefan Vlijm", pilotSlug: "stefan_vlijm", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 36, pilot: "Koen Zuidberg", pilotSlug: "koen_zuidberg", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 10, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 12, pilot: "Hidde van 't Verlaat", pilotSlug: "hidde_van_t_verlaat", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 14, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 35, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 36, pilot: "Morgan Privitera", pilotSlug: "morgan_privitera", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "familiars": {
    slug: "familiars",
    name: "Familiars",
    count: 31,
    percentage: "2.59%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 29, pilot: "Davey Barendregt", pilotSlug: "davey_barendregt", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 37, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 22, pilot: "Michele Papucci", pilotSlug: "michele_papucci", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 24, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 37, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 106, pilot: "boris romero", pilotSlug: "boris_romero", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 11, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 38, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 48, pilot: "Stefan Vlijm", pilotSlug: "stefan_vlijm", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 54, pilot: "Rufus Ang", pilotSlug: "rufus_ang", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 34, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 53, pilot: "Johan", pilotSlug: "johan", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 14, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 22, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 26, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 14, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 21, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "monob_sacrifice": {
    slug: "monob_sacrifice",
    name: "MonoB Sacrifice",
    count: 31,
    percentage: "2.59%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 17, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 57, pilot: "Tim Swillens", pilotSlug: "tim_swillens", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 44, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 52, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 10, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 47, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 60, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 75, pilot: "Tiff Kraan", pilotSlug: "tiff_kraan", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 85, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 98, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 14, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 26, pilot: "Guus Hinrichs", pilotSlug: "guus_hinrichs", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas_jan_gorter", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 12, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 23, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 21, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 24, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 16, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 54, pilot: "Wouter Hordijk", pilotSlug: "wouter_hordijk", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 5, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 24, pilot: "Yuri Stevens van Swaay", pilotSlug: "yuri_stevens_van_swaay", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 42, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 33, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 14, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 49, pilot: "Yuri Stevens van Swaay", pilotSlug: "yuri_stevens_van_swaay", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 11, pilot: "Sebastian Diaz", pilotSlug: "sebastian_diaz", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
    ],
  },
  "monor_kuldotha": {
    slug: "monor_kuldotha",
    name: "MonoR Kuldotha",
    count: 28,
    percentage: "2.34%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 15, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 30, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 37, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 19, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 11, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 18, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 31, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 34, pilot: "Tim Zemack", pilotSlug: "tim_zemack", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 14, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 19, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 3, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Roberto Schiavone", pilotSlug: "roberto_schiavone", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 7, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 9, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 12, pilot: "Tim Zemack", pilotSlug: "tim_zemack", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 8, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 10, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 29, pilot: "Zephyr", pilotSlug: "zephyr", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 37, pilot: "Thomas Gates", pilotSlug: "thomas_gates", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 30, pilot: "Samuel Schumacher", pilotSlug: "samuel_schumacher", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Tim Zemack", pilotSlug: "tim_zemack", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "gruul_ramp": {
    slug: "gruul_ramp",
    name: "Gruul Ramp",
    count: 26,
    percentage: "2.17%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 2, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 41, pilot: "Rob Kerlin", pilotSlug: "rob_kerlin", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 7, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 15, pilot: "J van T", pilotSlug: "j_van_t", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 9, pilot: "Thomas Isphording", pilotSlug: "thomas_isphording", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 24, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 29, pilot: "Vitaly Svetlov", pilotSlug: "vitaly_svetlov", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 35, pilot: "ruben drabbels", pilotSlug: "ruben_drabbels", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 47, pilot: "Neil", pilotSlug: "neil", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 71, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 76, pilot: "Axel Quasten", pilotSlug: "axel_quasten", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 3, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 17, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 59, pilot: "Vitaly Svetlov", pilotSlug: "vitaly_svetlov", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 51, pilot: "Quinten Hogenes", pilotSlug: "quinten_hogenes", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 29, pilot: "Quinten Hogenes", pilotSlug: "quinten_hogenes", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 38, pilot: "Ido levy", pilotSlug: "ido_levy", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 44, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 26, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 9, pilot: "Ruben Drabbels", pilotSlug: "ruben_drabbels", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 48, pilot: "Thijs", pilotSlug: "thijs", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Stefan Pouwelse", pilotSlug: "stefan_pouwelse", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
    ],
  },
  "flicker_tron": {
    slug: "flicker_tron",
    name: "Flicker Tron",
    count: 26,
    percentage: "2.17%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 33, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 52, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 50, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 62, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 61, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 116, pilot: "Leo Weiler", pilotSlug: "leo_weiler", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 33, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 37, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 43, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 52, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 49, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 12, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 13, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 21, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 36, pilot: "Sven van Dijk", pilotSlug: "sven_van_dijk", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 50, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 39, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Tim Bunnik", pilotSlug: "tim_bunnik", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "bogles": {
    slug: "bogles",
    name: "Bogles",
    count: 25,
    percentage: "2.09%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 5, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 43, pilot: "tijn mercx", pilotSlug: "tijn_mercx", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 44, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 47, pilot: "Fedde Vlietstra", pilotSlug: "fedde_vlietstra", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 48, pilot: "Yasmin Saciri", pilotSlug: "yasmin_saciri", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Renee Zwolle", pilotSlug: "renee_zwolle", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 35, pilot: "Lorenzo Vitale", pilotSlug: "lorenzo_vitale", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 24, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 49, pilot: "Yannic van Heereveld", pilotSlug: "yannic_van_heereveld", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 26, pilot: "Yannic van Heereveld", pilotSlug: "yannic_van_heereveld", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 31, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
          { position: 36, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 11, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 31, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Harm steenbakkers", pilotSlug: "harm_steenbakkers", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 15, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Yasmin Saciri", pilotSlug: "yasmin_saciri", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 27, pilot: "Guus Hinrichs", pilotSlug: "guus_hinrichs", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 38, pilot: "Abby", pilotSlug: "abby", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 27, pilot: "Yasmin Saciri", pilotSlug: "yasmin_saciri", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 20, pilot: "Francesco Bernardi", pilotSlug: "francesco_bernardi", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "white_weenie": {
    slug: "white_weenie",
    name: "White Weenie",
    count: 23,
    percentage: "1.92%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 14, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 33, pilot: "Fernando Tong", pilotSlug: "fernando_tong", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 8, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 20, pilot: "Fernando Tong", pilotSlug: "fernando_tong", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 48, pilot: "Jeff Wade", pilotSlug: "jeff_wade", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 14, pilot: "Jelle Schneider", pilotSlug: "jelle_schneider", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 33, pilot: "Fernando Tong", pilotSlug: "fernando_tong", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 39, pilot: "Thomas Wood", pilotSlug: "thomas_wood", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 71, pilot: "Tim Swillens", pilotSlug: "tim_swillens", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 59, pilot: "Fernando Tong", pilotSlug: "fernando_tong", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 32, pilot: "Thomas Wood", pilotSlug: "thomas_wood", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 94, pilot: "Marc Bosserhoff", pilotSlug: "marc_bosserhoff", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Thomas Wood", pilotSlug: "thomas_wood", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 51, pilot: "Thomas Wood", pilotSlug: "thomas_wood", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 28, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
          { position: 26, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 24, pilot: "Rob Lamers", pilotSlug: "rob_lamers", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Diego Cath", pilotSlug: "diego_cath", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "jeskai_ephemerate": {
    slug: "jeskai_ephemerate",
    name: "Jeskai Ephemerate",
    count: 22,
    percentage: "1.84%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 28, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 61, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 5, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 38, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 65, pilot: "Alessio Viali", pilotSlug: "alessio_viali", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 35, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 4, pilot: "Hayden Dubock", pilotSlug: "hayden_dubock", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 80, pilot: "Lars Broekhof", pilotSlug: "lars_broekhof", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 31, pilot: "Rufus Ang", pilotSlug: "rufus_ang", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
          { position: 28, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 4, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 13, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 17, pilot: "Rufus Ang", pilotSlug: "rufus_ang", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 13, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 10, pilot: "Danila", pilotSlug: "danila", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "walls": {
    slug: "walls",
    name: "Walls",
    count: 19,
    percentage: "1.59%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 37, pilot: "Andrea Passaro", pilotSlug: "andrea_passaro", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 7, pilot: "Andrea Passaro", pilotSlug: "andrea_passaro", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Andrea Passaro", pilotSlug: "andrea_passaro", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 31, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 33, pilot: "Andrea Passaro", pilotSlug: "andrea_passaro", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 54, pilot: "Thomas Gates", pilotSlug: "thomas_gates", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 23, pilot: "Elles Dijkhuizen", pilotSlug: "elles_dijkhuizen", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Yaro Kraneveld", pilotSlug: "yaro_kraneveld", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Leonardo Paternotte", pilotSlug: "leonardo_paternotte", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 47, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 4, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 11, pilot: "Andrea Passaro", pilotSlug: "andrea_passaro", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 1, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
    ],
  },
  "golgari_gardens": {
    slug: "golgari_gardens",
    name: "Golgari Gardens",
    count: 19,
    percentage: "1.59%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 36, pilot: "Thomas Wood", pilotSlug: "thomas_wood", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 59, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 70, pilot: "Max Power", pilotSlug: "max_power", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 17, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 64, pilot: "Yannic van Heereveld", pilotSlug: "yannic_van_heereveld", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 24, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 20, pilot: "Guus Hinrichs", pilotSlug: "guus_hinrichs", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 31, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 32, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 1, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 7, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 27, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "izzet_terror": {
    slug: "izzet_terror",
    name: "Izzet Terror",
    count: 18,
    percentage: "1.50%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 13, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 67, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 6, pilot: "Kai Schäfer", pilotSlug: "kai_schafer", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 88, pilot: "Donato Bliek", pilotSlug: "donato_bliek", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 47, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 53, pilot: "Teun Sprikkelman", pilotSlug: "teun_sprikkelman", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 23, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 35, pilot: "Rob Nolle", pilotSlug: "rob_nolle", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 42, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 16, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Clemens Gerteiser", pilotSlug: "clemens_gerteiser", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 23, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 34, pilot: "Andrey Petukhov", pilotSlug: "andrey_petukhov", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 19, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "dimir_terror": {
    slug: "dimir_terror",
    name: "Dimir Terror",
    count: 16,
    percentage: "1.34%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 47, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 18, pilot: "Raven de Bruin", pilotSlug: "raven_de_bruin", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 36, pilot: "Dylan van Gelder", pilotSlug: "dylan_van_gelder", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 44, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 53, pilot: "soufian hriz", pilotSlug: "soufian_hriz", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 25, pilot: "Wilson", pilotSlug: "wilson", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 57, pilot: "Youri van der Zee", pilotSlug: "youri_van_der_zee", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
          { position: 84, pilot: "Johannes Theiß", pilotSlug: "johannes_theiss", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 53, pilot: "Maeve Powlick", pilotSlug: "maeve_powlick", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 31, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 32, pilot: "Thomas Gates", pilotSlug: "thomas_gates", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Pim Rutgers", pilotSlug: "pim_rutgers", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 39, pilot: "Andrey Petukhov", pilotSlug: "andrey_petukhov", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Pim Rutgers", pilotSlug: "pim_rutgers", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "one_land_spy": {
    slug: "one_land_spy",
    name: "One Land Spy",
    count: 16,
    percentage: "1.34%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 102, pilot: "Ravi Breugom", pilotSlug: "ravi_breugom", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
          { position: 46, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 13, pilot: "Elles Dijkhuizen", pilotSlug: "elles_dijkhuizen", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 15, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 28, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 35, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 48, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Nicolas Komanski", pilotSlug: "nicolas_komanski", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 36, pilot: "Elles Dijkhuizen", pilotSlug: "elles_dijkhuizen", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 40, pilot: "Vincent Zwinkels", pilotSlug: "vincent_zwinkels", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 40, pilot: "Sebastian Diaz", pilotSlug: "sebastian_diaz", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 33, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 38, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 10, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
    ],
  },
  "golgari_dredge": {
    slug: "golgari_dredge",
    name: "Golgari Dredge",
    count: 15,
    percentage: "1.25%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 39, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas_jan_gorter", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 36, pilot: "rasjied sloot", pilotSlug: "rasjied_sloot", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 25, pilot: "rasjied sloot", pilotSlug: "rasjied_sloot", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 33, pilot: "Mikhail Kulikov", pilotSlug: "mikhail_kulikov", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 42, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 42, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 22, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 14, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 15, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Raaayyyyyyyyyy", pilotSlug: "raaayyyyyyyyyy", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 15, pilot: "Jari Van Schaik", pilotSlug: "jari_van_schaik", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "altar_tron": {
    slug: "altar_tron",
    name: "Altar Tron",
    count: 14,
    percentage: "1.17%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 51, pilot: "Marvin Schippmann", pilotSlug: "marvin_schippmann", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 66, pilot: "Felipe Martins", pilotSlug: "felipe_martins", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 51, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 36, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 44, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 17, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 29, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 3, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 23, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 41, pilot: "Sjef van Schie", pilotSlug: "sjef_van_schie", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Youri Bakker", pilotSlug: "youri_bakker", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
    ],
  },
  "spy_walls": {
    slug: "spy_walls",
    name: "Spy Walls",
    count: 13,
    percentage: "1.09%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 6, pilot: "Bas Hendriks", pilotSlug: "bas_hendriks", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 2, pilot: "Leonardo Paternotte", pilotSlug: "leonardo_paternotte", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 5, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 12, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 37, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 21, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 28, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 14, pilot: "Thijs Deckers", pilotSlug: "thijs_deckers", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 31, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 34, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 41, pilot: "Stefan Pouwelse", pilotSlug: "stefan_pouwelse", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 45, pilot: "Collin Bos", pilotSlug: "collin_bos", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 33, pilot: "Leonardo Paternotte", pilotSlug: "leonardo_paternotte", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
    ],
  },
  "boros_synth": {
    slug: "boros_synth",
    name: "Boros Synth",
    count: 13,
    percentage: "1.09%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 24, pilot: "Noah Westerweel", pilotSlug: "noah_westerweel", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 31, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 56, pilot: "Koen Zuidberg", pilotSlug: "koen_zuidberg", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 60, pilot: "IJsbrand", pilotSlug: "ijsbrand", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 54, pilot: "IJsbrand", pilotSlug: "ijsbrand", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 20, pilot: "Koen de Vos", pilotSlug: "koen_de_vos", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
          { position: 39, pilot: "Koen Zuidberg", pilotSlug: "koen_zuidberg", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 9, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 30, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 10, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 23, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 35, pilot: "Francesco Bernardi", pilotSlug: "francesco_bernardi", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
    ],
  },
  "moggwarts": {
    slug: "moggwarts",
    name: "Moggwarts",
    count: 12,
    percentage: "1.00%",
    byEvent: [
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 38, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
          { position: 45, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 8, pilot: "Bram Deppenbroek", pilotSlug: "bram_deppenbroek", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 19, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
          { position: 32, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Vlad-Alexandru Negară", pilotSlug: "vlad_alexandru_negar", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
          { position: 32, pilot: "Job Ortmans", pilotSlug: "job_ortmans", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 16, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "cycling_storm": {
    slug: "cycling_storm",
    name: "Cycling Storm",
    count: 10,
    percentage: "0.83%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 24, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 10, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 61, pilot: "Floris Stapel", pilotSlug: "floris_stapel", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 115, pilot: "Dennis Puetz", pilotSlug: "dennis_puetz", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 34, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 27, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 48, pilot: "Floris Stapel", pilotSlug: "floris_stapel", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Mathieu Zwaan", pilotSlug: "mathieu_zwaan", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Guus Hinrichs", pilotSlug: "guus_hinrichs", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Guus Hinrichs", pilotSlug: "guus_hinrichs", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
    ],
  },
  "mardu_synth": {
    slug: "mardu_synth",
    name: "Mardu Synth",
    count: 10,
    percentage: "0.83%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 19, pilot: "Max Mercx", pilotSlug: "max_mercx", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 43, pilot: "Max Mercx", pilotSlug: "max_mercx", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 41, pilot: "Oscar Francisco", pilotSlug: "oscar_francisco", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 25, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 28, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 35, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 50, pilot: "Jaron Polhuijs", pilotSlug: "jaron_polhuijs", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 18, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
    ],
  },
  "jund_gleezard": {
    slug: "jund_gleezard",
    name: "Jund Gleezard",
    count: 9,
    percentage: "0.75%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 12, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 20, pilot: "Yasmin Saciri", pilotSlug: "yasmin_saciri", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
          { position: 27, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 17, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 7, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Francesco Bernardi", pilotSlug: "francesco_bernardi", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 13, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
    ],
  },
  "monou_high_tide": {
    slug: "monou_high_tide",
    name: "MonoU High Tide",
    count: 9,
    percentage: "0.75%",
    byEvent: [
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 5, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 7, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 37, pilot: "Stefan Gussenhoven", pilotSlug: "stefan_gussenhoven", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Rob Vermaas", pilotSlug: "rob_vermaas", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 13, pilot: "Stefan Gussenhoven", pilotSlug: "stefan_gussenhoven", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 50, pilot: "Ashley Bits", pilotSlug: "ashley_bits", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 45, pilot: "Douwe Kasemier", pilotSlug: "douwe_kasemier", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
          { position: 47, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
    ],
  },
  "orzhov_blade": {
    slug: "orzhov_blade",
    name: "Orzhov Blade",
    count: 8,
    percentage: "0.67%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 27, pilot: "Ramon Facchin", pilotSlug: "ramon_facchin", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 47, pilot: "Nicola Gnasso", pilotSlug: "nicola_gnasso", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Mathijs de Wilde", pilotSlug: "mathijs_de_wilde", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 43, pilot: "Marc Van Doorn", pilotSlug: "marc_van_doorn", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Marc Van Doorn", pilotSlug: "marc_van_doorn", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 18, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Nicola Gnasso", pilotSlug: "nicola_gnasso", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "boros_glitters": {
    slug: "boros_glitters",
    name: "Boros Glitters",
    count: 8,
    percentage: "0.67%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 11, pilot: "Nicola Gnasso", pilotSlug: "nicola_gnasso", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 14, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 19, pilot: "Panagiotis Lantavos-Stratigakis", pilotSlug: "panagiotis_lantavos_stratigakis", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 20, pilot: "Leo Rodrigo Heran Balbuena", pilotSlug: "leo_rodrigo_heran_balbuena", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 19, pilot: "Mark Coehoorn", pilotSlug: "mark_coehoorn", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 31, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
    ],
  },
  "ruby_storm": {
    slug: "ruby_storm",
    name: "Ruby Storm",
    count: 7,
    percentage: "0.58%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 13, pilot: "Thijs Deckers", pilotSlug: "thijs_deckers", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
          { position: 43, pilot: "Floris Stapel", pilotSlug: "floris_stapel", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 3, pilot: "Floris Stapel", pilotSlug: "floris_stapel", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 11, pilot: "Thijs Deckers", pilotSlug: "thijs_deckers", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 42, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 15, pilot: "Floris Stapel", pilotSlug: "floris_stapel", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 3, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
    ],
  },
  "monster_tron": {
    slug: "monster_tron",
    name: "Monster Tron",
    count: 7,
    percentage: "0.58%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 15, pilot: "Stefan van der List", pilotSlug: "stefan_van_der_list", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 4, pilot: "Stefan van der List", pilotSlug: "stefan_van_der_list", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 53, pilot: "Aartos Locos", pilotSlug: "aartos_locos", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 64, pilot: "Luiz Francisco Scudelari de Macedo", pilotSlug: "luiz_francisco_scudelari_de_macedo", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 3, pilot: "Stefan van der List", pilotSlug: "stefan_van_der_list", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 16, pilot: "Leonardo Paternotte", pilotSlug: "leonardo_paternotte", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 46, pilot: "Thomas Tates", pilotSlug: "thomas_tates", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
    ],
  },
  "monor_rally": {
    slug: "monor_rally",
    name: "MonoR Rally",
    count: 7,
    percentage: "0.58%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 1, pilot: "Eef vV", pilotSlug: "eef_vv", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 4, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 8, pilot: "Floris Heins", pilotSlug: "floris_heins", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 41, pilot: "Marcel Hogewoning", pilotSlug: "marcel_hogewoning", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 4, pilot: "Marcel Hogewoning", pilotSlug: "marcel_hogewoning", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 38, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 39, pilot: "Jerwin Pouwelse", pilotSlug: "jerwin_pouwelse", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
    ],
  },
  "boros_bully": {
    slug: "boros_bully",
    name: "Boros Bully",
    count: 7,
    percentage: "0.58%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 31, pilot: "Leonardo Paternotte", pilotSlug: "leonardo_paternotte", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
          { position: 34, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 48, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 60, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-10-05",
        eventName: "Dutch Pauper League – 8° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-10-05", eventName: "Dutch Pauper League – 8° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 5, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
    ],
  },
  "esper_blade": {
    slug: "esper_blade",
    name: "Esper Blade",
    count: 7,
    percentage: "0.58%",
    byEvent: [
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 19, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 30, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
          { position: 47, pilot: "Alessio Viali", pilotSlug: "alessio_viali", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 32, pilot: "Alessio Viali", pilotSlug: "alessio_viali", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 34, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
          { position: 41, pilot: "Kasper Zijl", pilotSlug: "kasper_zijl", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
    ],
  },
  "azorius_glitters": {
    slug: "azorius_glitters",
    name: "Azorius Glitters",
    count: 6,
    percentage: "0.50%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Mark Bosma", pilotSlug: "mark_bosma", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 5, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
          { position: 36, pilot: "Gino De Guzman", pilotSlug: "gino_de_guzman", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 14, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
          { position: 24, pilot: "Gino De Guzman", pilotSlug: "gino_de_guzman", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
    ],
  },
  "poison_storm": {
    slug: "poison_storm",
    name: "Poison Storm",
    count: 6,
    percentage: "0.50%",
    byEvent: [
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 52, pilot: "Teun Fekkes", pilotSlug: "teun_fekkes", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 47, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 57, pilot: "Jinja Kinyak", pilotSlug: "jinja_kinyak", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 50, pilot: "Teun Fekkes", pilotSlug: "teun_fekkes", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Michael smit", pilotSlug: "michael_smit", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 38, pilot: "Gino De Guzman", pilotSlug: "gino_de_guzman", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
    ],
  },
  "monow_heroic": {
    slug: "monow_heroic",
    name: "MonoW Heroic",
    count: 5,
    percentage: "0.42%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 17, pilot: "Odile Strik", pilotSlug: "odile_strik", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 13, pilot: "Abe Mulder", pilotSlug: "abe_mulder", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 48, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-12-13",
        eventName: "Dutch Pauper League – 9° Leg – 2025",
        appearances: [
          { position: 52, pilot: "Fernando Tong", pilotSlug: "fernando_tong", eventSlug: "2025-12-13", eventName: "Dutch Pauper League – 9° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-11-01",
        eventName: "Dutch Pauper League – 8° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Fernando Tong", pilotSlug: "fernando_tong", eventSlug: "2025-11-01", eventName: "Dutch Pauper League – 8° Leg – 2025" },
        ],
      },
    ],
  },
  "fangren_tron": {
    slug: "fangren_tron",
    name: "Fangren Tron",
    count: 5,
    percentage: "0.42%",
    byEvent: [
      {
        eventSlug: "2025-09-06",
        eventName: "Dutch Pauper League – 6° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-09-06", eventName: "Dutch Pauper League – 6° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 15, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 6, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 7, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 21, pilot: "Jan Rijnbeek", pilotSlug: "jan_rijnbeek", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
    ],
  },
  "jeskai_glitters": {
    slug: "jeskai_glitters",
    name: "Jeskai Glitters",
    count: 4,
    percentage: "0.33%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 9, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 4, pilot: "Francesco Bernardi", pilotSlug: "francesco_bernardi", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-03-02",
        eventName: "Dutch Pauper League – 1° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Nicolas Bordenabe", pilotSlug: "nicolas_bordenabe", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
          { position: 18, pilot: "Sam Ye", pilotSlug: "sam_ye", eventSlug: "2024-03-02", eventName: "Dutch Pauper League – 1° Leg – 2024" },
        ],
      },
    ],
  },
  "turbofog": {
    slug: "turbofog",
    name: "Turbofog",
    count: 4,
    percentage: "0.33%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 23, pilot: "Stefan Vlijm", pilotSlug: "stefan_vlijm", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 46, pilot: "John Buckley", pilotSlug: "john_buckley", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 14, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 30, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
    ],
  },
  "golgari_gleezard": {
    slug: "golgari_gleezard",
    name: "Golgari Gleezard",
    count: 4,
    percentage: "0.33%",
    byEvent: [
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 2, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
          { position: 9, pilot: "Robbert", pilotSlug: "robbert", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Tim Laros", pilotSlug: "tim_laros", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
          { position: 35, pilot: "Lucas Feliciano", pilotSlug: "lucas_feliciano", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
    ],
  },
  "temur_ponza": {
    slug: "temur_ponza",
    name: "Temur Ponza",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 11, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 21, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 15, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
    ],
  },
  "monor_tron": {
    slug: "monor_tron",
    name: "MonoR Tron",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 40, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 26, pilot: "Michael Joseph Purcell", pilotSlug: "michael_joseph_purcell", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 19, pilot: "Max Roovers", pilotSlug: "max_roovers", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
    ],
  },
  "selesnya_gates": {
    slug: "selesnya_gates",
    name: "Selesnya Gates",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 32, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 1, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 2, pilot: "Jelle Zwaan", pilotSlug: "jelle_zwaan", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
    ],
  },
  "eldrazi_spawn": {
    slug: "eldrazi_spawn",
    name: "Eldrazi Spawn",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 58, pilot: "tijn mercx", pilotSlug: "tijn_mercx", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 20, pilot: "Frides van de Ven", pilotSlug: "frides_van_de_ven", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
          { position: 68, pilot: "tijn mercx", pilotSlug: "tijn_mercx", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
    ],
  },
  "goblins": {
    slug: "goblins",
    name: "Goblins",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 11, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2025-05-03",
        eventName: "Dutch Pauper League – 2° Leg – 2025",
        appearances: [
          { position: 23, pilot: "Roberto van den Elzen", pilotSlug: "roberto_van_den_elzen", eventSlug: "2025-05-03", eventName: "Dutch Pauper League – 2° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 27, pilot: "Ettore Cerracchio", pilotSlug: "ettore_cerracchio", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
    ],
  },
  "boros_tribe": {
    slug: "boros_tribe",
    name: "Boros Tribe",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2026-06-06",
        eventName: "Dutch Pauper League – 3° Leg – 2026",
        appearances: [
          { position: 51, pilot: "Alexander Hamilton", pilotSlug: "alexander_hamilton", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
          { position: 55, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2026-06-06", eventName: "Dutch Pauper League – 3° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 2, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
    ],
  },
  "inside_out": {
    slug: "inside_out",
    name: "Inside Out",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2025-07-05",
        eventName: "Dutch Pauper League – 4° Leg – 2025",
        appearances: [
          { position: 43, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-07-05", eventName: "Dutch Pauper League – 4° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 8, pilot: "Toon de Vet", pilotSlug: "toon_de_vet", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 6, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
    ],
  },
  "brew_golgari": {
    slug: "brew_golgari",
    name: "Brew Golgari",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 118, pilot: "Camille Paquay", pilotSlug: "camille_paquay", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2024-08-03",
        eventName: "Dutch Pauper League – 6° Leg – 2024",
        appearances: [
          { position: 29, pilot: "Martijn Siemes", pilotSlug: "martijn_siemes", eventSlug: "2024-08-03", eventName: "Dutch Pauper League – 6° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 22, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
    ],
  },
  "slivers": {
    slug: "slivers",
    name: "Slivers",
    count: 3,
    percentage: "0.25%",
    byEvent: [
      {
        eventSlug: "2025-08-02",
        eventName: "Dutch Pauper League – 5° Leg – 2025",
        appearances: [
          { position: 37, pilot: "Phil Kalter", pilotSlug: "phil_kalter", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
          { position: 43, pilot: "Liam Wyatt", pilotSlug: "liam_wyatt", eventSlug: "2025-08-02", eventName: "Dutch Pauper League – 5° Leg – 2025" },
        ],
      },
      {
        eventSlug: "2024-07-06",
        eventName: "Dutch Pauper League – 5° Leg – 2024",
        appearances: [
          { position: 25, pilot: "Marcos Garcia", pilotSlug: "marcos_garcia", eventSlug: "2024-07-06", eventName: "Dutch Pauper League – 5° Leg – 2024" },
        ],
      },
    ],
  },
  "petitioners_mill": {
    slug: "petitioners_mill",
    name: "Petitioners Mill",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 55, pilot: "Jasper vd Hammen", pilotSlug: "jasper_vd_hammen", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 12, pilot: "Tijmen van der Kamp", pilotSlug: "tijmen_van_der_kamp", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
    ],
  },
  "esper_affinity": {
    slug: "esper_affinity",
    name: "Esper Affinity",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 58, pilot: "Tobias van Kersbergen", pilotSlug: "tobias_van_kersbergen", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 81, pilot: "Yuri Stevens van Swaay", pilotSlug: "yuri_stevens_van_swaay", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
    ],
  },
  "jund_gardens": {
    slug: "jund_gardens",
    name: "Jund Gardens",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 26, pilot: "Tom de Ruiter", pilotSlug: "tom_de_ruiter", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 16, pilot: "L.S. Driessen", pilotSlug: "ls_driessen", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
    ],
  },
  "stompy": {
    slug: "stompy",
    name: "Stompy",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 34, pilot: "Pablo Pirata", pilotSlug: "pablo_pirata", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 32, pilot: "Pablo Pirata", pilotSlug: "pablo_pirata", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
    ],
  },
  "monor_blitz": {
    slug: "monor_blitz",
    name: "MonoR Blitz",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2026-05-02",
        eventName: "Dutch Pauper League – 2° Leg – 2026",
        appearances: [
          { position: 10, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas_jan_gorter", eventSlug: "2026-05-02", eventName: "Dutch Pauper League – 2° Leg – 2026" },
        ],
      },
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 77, pilot: "Klaas-Jan Gorter", pilotSlug: "klaas_jan_gorter", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
    ],
  },
  "infect": {
    slug: "infect",
    name: "Infect",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2025-06-14",
        eventName: "Dutch Pauper League – 3° Leg – 2025",
        appearances: [
          { position: 54, pilot: "Evert", pilotSlug: "evert", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
          { position: 58, pilot: "Matis Violin", pilotSlug: "matis_violin", eventSlug: "2025-06-14", eventName: "Dutch Pauper League – 3° Leg – 2025" },
        ],
      },
    ],
  },
  "jund_cascade": {
    slug: "jund_cascade",
    name: "Jund Cascade",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2024-09-07",
        eventName: "Dutch Pauper League – 7° Leg – 2024",
        appearances: [
          { position: 20, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2024-09-07", eventName: "Dutch Pauper League – 7° Leg – 2024" },
        ],
      },
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 36, pilot: "Mirco Bonati", pilotSlug: "mirco_bonati", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
    ],
  },
  "monor_dredge": {
    slug: "monor_dredge",
    name: "MonoR Dredge",
    count: 2,
    percentage: "0.17%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 69, pilot: "Gianluca Ramaccia", pilotSlug: "gianluca_ramaccia", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 11, pilot: "Fernando Gómez-Acebo", pilotSlug: "fernando_gomez_acebo", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
    ],
  },
  "golgari_food_pestilence": {
    slug: "golgari_food_pestilence",
    name: "Golgari Food Pestilence",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2026-07-04",
        eventName: "Amsterdam Pauper League – 4° Leg – 2026",
        appearances: [
          { position: 15, pilot: "Raymond Anderson", pilotSlug: "raymond_anderson", eventSlug: "2026-07-04", eventName: "Amsterdam Pauper League – 4° Leg – 2026" },
        ],
      },
    ],
  },
  "monog_tron": {
    slug: "monog_tron",
    name: "MonoG Tron",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2024-12-07",
        eventName: "Dutch Pauper League – 10° Leg – 2024",
        appearances: [
          { position: 38, pilot: "Manas weesing", pilotSlug: "manas_weesing", eventSlug: "2024-12-07", eventName: "Dutch Pauper League – 10° Leg – 2024" },
        ],
      },
    ],
  },
  "monob_control": {
    slug: "monob_control",
    name: "MonoB Control",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2025-04-12",
        eventName: "Dutch Pauper League – 1° Leg – 2025",
        appearances: [
          { position: 41, pilot: "Annemarije Boersma", pilotSlug: "annemarije_boersma", eventSlug: "2025-04-12", eventName: "Dutch Pauper League – 1° Leg – 2025" },
        ],
      },
    ],
  },
  "rakdos_ally": {
    slug: "rakdos_ally",
    name: "Rakdos Ally",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2026-04-11",
        eventName: "Dutch Pauper League – 1° Leg – 2026",
        appearances: [
          { position: 63, pilot: "Jeff Wade", pilotSlug: "jeff_wade", eventSlug: "2026-04-11", eventName: "Dutch Pauper League – 1° Leg – 2026" },
        ],
      },
    ],
  },
  "naya_turbo_emblem": {
    slug: "naya_turbo_emblem",
    name: "Naya Turbo Emblem",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2024-04-13",
        eventName: "Dutch Pauper League – 2° Leg – 2024",
        appearances: [
          { position: 28, pilot: "Laurent Paardekooper", pilotSlug: "laurent_paardekooper", eventSlug: "2024-04-13", eventName: "Dutch Pauper League – 2° Leg – 2024" },
        ],
      },
    ],
  },
  "golgari_tortex": {
    slug: "golgari_tortex",
    name: "Golgari TortEx",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2024-05-04",
        eventName: "Dutch Pauper League – 3° Leg – 2024",
        appearances: [
          { position: 30, pilot: "Gianvito Taneburgo", pilotSlug: "gianvito_taneburgo", eventSlug: "2024-05-04", eventName: "Dutch Pauper League – 3° Leg – 2024" },
        ],
      },
    ],
  },
  "monob_ponza": {
    slug: "monob_ponza",
    name: "MonoB Ponza",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2024-05-31",
        eventName: "Dutch Pauper League – 4° Leg – 2024",
        appearances: [
          { position: 33, pilot: "Mart Wessel Ordelmans", pilotSlug: "mart_wessel_ordelmans", eventSlug: "2024-05-31", eventName: "Dutch Pauper League – 4° Leg – 2024" },
        ],
      },
    ],
  },
  "dimir_control": {
    slug: "dimir_control",
    name: "Dimir Control",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2025-10-04",
        eventName: "Dutch Pauper League – 7° Leg – 2025",
        appearances: [
          { position: 39, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2025-10-04", eventName: "Dutch Pauper League – 7° Leg – 2025" },
        ],
      },
    ],
  },
  "naya_gates": {
    slug: "naya_gates",
    name: "Naya Gates",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2024-11-02",
        eventName: "Dutch Pauper League – 9° Leg – 2024",
        appearances: [
          { position: 20, pilot: "Davy Baardink", pilotSlug: "davy_baardink", eventSlug: "2024-11-02", eventName: "Dutch Pauper League – 9° Leg – 2024" },
        ],
      },
    ],
  },
  "boros_moxite": {
    slug: "boros_moxite",
    name: "Boros Moxite",
    count: 1,
    percentage: "0.08%",
    byEvent: [
      {
        eventSlug: "2026-01-17",
        eventName: "Stroopwafel IPT",
        appearances: [
          { position: 15, pilot: "Simon Isphording", pilotSlug: "simon_isphording", eventSlug: "2026-01-17", eventName: "Stroopwafel IPT" },
        ],
      },
    ],
  },
};
