export type PastProject = {
  title: string;
  year: number;
  category: "Events" | "Music videos" | "Promos";
  credit: string;
  description: string;
  watchUrl?: string;
};

// Public portfolio facts only. No private messages, evidence IDs or financial data.
// Curated from the September 2026 website-candidates review; newest shoots first.
export const pastWork: readonly PastProject[] = [
  { title: "Blkout — Dirty Talk", year: 2026, category: "Promos", credit: "For Blkout", description: "Release content filmed at Neon Palms and Lucy’s Love Shack." },
  { title: "Rampage Perth", year: 2026, category: "Events", credit: "For Triangle Group", description: "Multicam live videos of AUTOMHATE, PRIMATE, LAYZ, BASSTRIPPER, Macky Gee and SVDDEN DEATH." },
  { title: "Kritikal — Money", year: 2026, category: "Music videos", credit: "For Kritikal", description: "Music video production across multiple shoot days, with supporting release content." },
  { title: "Kritikal — Night Vision", year: 2026, category: "Promos", credit: "For Kritikal", description: "Artist release content, including teaser and out-now videos." },
  { title: "Blkout — Ring Ring", year: 2026, category: "Promos", credit: "For Blkout", description: "A seven-video skit series supporting the release." },
  { title: "No One But Us", year: 2026, category: "Events", credit: "For Higher Grnd", description: "Multicam artist clips, including Charlie Tee, ShockOne, Mozey and Kings of the Rollers." },
  { title: "Radar Festival", year: 2025, category: "Events", credit: "For Higher Grnd", description: "Multicam artist clips, including Patrick Mason, X Club, VTSS and Folamour." },
  { title: "Rapid Band — The Fountain", year: 2025, category: "Music videos", credit: "For Rapid Band", description: "Music video production for The Fountain." },
  { title: "Delta Heavy", year: 2025, category: "Events", credit: "For Inhibit / Coalition Audio", description: "Raw multicam footage and audio supplied for live-set production." },
  { title: "No One But Us", year: 2025, category: "Events", credit: "For Higher Grnd", description: "Static-camera coverage including Hybrid Minds, with raw footage supplied to the organiser’s editing team." },
  { title: "Radar Festival", year: 2024, category: "Events", credit: "For Higher Grnd", description: "Multicam artist clips, including AJ Tracey, Jyoty, Overmono and Songer." },
];
