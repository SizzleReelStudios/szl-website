import type { Project } from "@/lib/srs/types";
import { projectBatches } from "@/content/srs/batches/projects.batch";

export const projects: Project[] = projectBatches.flat();
