import type { Series } from "@/lib/srs/types";

// TODO(seed): placeholder series entries from the mockup sketch — replace
// names, summaries, and statuses with the real cinema programme.
//
// Example entry:
// {
//   id: "stanleys-playground",
//   slug: "stanleys-playground",
//   name: "Stanley's Playground",
//   summary: "One-line description of the series.",
//   status: "screening",
//   order: 1,
// }
export const seriesBatches: Series[][] = [
  [
    {
      id: "stanleys-playground",
      slug: "stanleys-playground",
      name: "Stanley's Playground",
      summary:
        "Web series. Episode order and platform links land with the real content pass.",
      status: "in-production",
      order: 1,
    },
    {
      id: "killing-of-the-clones",
      slug: "killing-of-the-clones",
      name: "Killing of the Clones",
      summary:
        "Web series. Built for the timeline view so new viewers can follow the story from the start.",
      status: "coming-soon",
      order: 2,
    },
    {
      id: "szl-vlogs",
      slug: "szl-vlogs",
      name: "SZL Vlogs",
      summary:
        "The trio, unscripted. The connective tissue between everything else on the marquee.",
      status: "screening",
      order: 3,
    },
  ],
];
