import { episodeBatches } from "@/content/srs/batches/episodes.batch";
import { seriesBatches } from "@/content/srs/batches/series.batch";
import type { Episode, Series } from "@/lib/srs/types";

export const series: Series[] = seriesBatches.flat();

export const episodes: Episode[] = episodeBatches.flat();
