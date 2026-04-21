import type { Artist } from "@/lib/srs/types";
import { artistBatches } from "@/content/srs/batches/artists.batch";

export const artists: Artist[] = artistBatches.flat();
