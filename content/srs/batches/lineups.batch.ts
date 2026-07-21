import type { LineupAppearance } from "@/lib/srs/types";

// Per-year poster overrides, keyed by artist slug.
//
// By default an artist appears on a year's poster when they have a published
// project dated in that year, at their base `posterTier`. Add entries here to:
//   - promote/demote an artist for a specific year (tier per year),
//   - art-direct name size per year (`scale`, 1 = tier default),
//   - place an artist on a year's poster with no logged project that year.
//
// TODO: Populate from the real year-by-year lineup calls (which artists belong
// to 2023/2024/2025 and at what tier) once confirmed.
export const lineupOverrideBatches: Record<string, LineupAppearance[]>[] = [
  // TODO(seed): demo-only 2024 edition so the year switcher and per-name scale
  // nudge are visible during development. Delete this batch when real
  // year-by-year lineup calls are confirmed.
  {
    taiga: [{ year: 2024, tier: "featured", scale: 1.15 }],
    "macky-gee": [{ year: 2024, tier: "support" }],
    disrupta: [{ year: 2024, tier: "support" }],
  },
];
