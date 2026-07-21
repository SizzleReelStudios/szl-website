import { lineupOverrideBatches } from "@/content/srs/batches/lineups.batch";
import type { LineupAppearance } from "@/lib/srs/types";

export const lineupOverrides: Record<string, LineupAppearance[]> =
  lineupOverrideBatches.reduce((merged, batch) => {
    for (const [slug, appearances] of Object.entries(batch)) {
      merged[slug] = [...(merged[slug] ?? []), ...appearances];
    }
    return merged;
  }, {} as Record<string, LineupAppearance[]>);
