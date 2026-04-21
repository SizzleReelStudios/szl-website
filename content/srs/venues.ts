import type { Venue } from "@/lib/srs/types";
import { venueBatches } from "@/content/srs/batches/venues.batch";

export const venues: Venue[] = venueBatches.flat();
