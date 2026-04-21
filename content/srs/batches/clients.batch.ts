import {
  developmentSeed,
  getSeedClientKind,
} from "@/content/srs/development-seed";
import type { Client } from "@/lib/srs/types";

export const clientBatches: Client[][] = [
  developmentSeed.clients.map((client) => ({
    id: client.slug,
    slug: client.slug,
    name: client.name,
    // TODO: Replace inferred client kinds with confirmed promoter / club / festival types.
    kind: getSeedClientKind(client.slug),
  })),
];
