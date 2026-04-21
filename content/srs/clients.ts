import type { Client } from "@/lib/srs/types";
import { clientBatches } from "@/content/srs/batches/clients.batch";

export const clients: Client[] = clientBatches.flat();
