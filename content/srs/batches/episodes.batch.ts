import type { Episode } from "@/lib/srs/types";

// TODO(seed): placeholder episodes so the timeline view is visible during
// development — replace with the real episode lists in watch order.
//
// Example entry:
// {
//   id: "szl-vlogs-001",
//   slug: "the-first-one",
//   seriesSlug: "szl-vlogs",
//   number: 1,
//   title: "The First One",
//   date: "2025-03-01",
//   summary: "One-line description.",
//   links: {
//     youtube: "https://www.youtube.com/watch?v=XXXX",
//     instagram: "https://www.instagram.com/reel/XXXX/",
//     tiktok: "https://www.tiktok.com/@szl/video/XXXX",
//   },
//   embedUrl: "https://www.youtube.com/embed/XXXX",
//   published: true,
//   status: "published",
// }
export const episodeBatches: Episode[][] = [
  [
    {
      id: "szl-vlogs-001",
      slug: "episode-one",
      seriesSlug: "szl-vlogs",
      number: 1,
      title: "TODO: first vlog title",
      date: "2025-01-01",
      summary:
        "TODO: placeholder episode so the timeline renders — replace with the real first vlog.",
      links: {},
      published: true,
      status: "seed",
    },
    {
      id: "szl-vlogs-002",
      slug: "episode-two",
      seriesSlug: "szl-vlogs",
      number: 2,
      title: "TODO: second vlog title",
      date: "2025-02-01",
      summary:
        "TODO: placeholder episode so the timeline shows ordering — replace with the real second vlog.",
      links: {},
      published: true,
      status: "seed",
    },
  ],
];
