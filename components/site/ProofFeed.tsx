import Link from "next/link";
import type { ResolvedProofItem } from "@/lib/srs/types";

type ProofFeedProps = {
  items: ResolvedProofItem[];
  title: string;
  body: string;
  emptyText?: string;
  mode?: "scroll" | "stack";
};

function formatProofType(type: ResolvedProofItem["postType"]) {
  switch (type) {
    case "tour-post":
      return "Tour Post";
    case "carousel":
      return "Carousel";
    case "reel":
      return "Reel";
    case "recap":
      return "Recap";
    default:
      return type;
  }
}

export default function ProofFeed({
  items,
  title,
  body,
  emptyText = "No proof items loaded yet.",
  mode = "stack",
}: ProofFeedProps) {
  const marqueeItems = mode === "scroll" ? [...items, ...items] : items;

  return (
    <section className="grid gap-5">
      <div className="max-w-2xl">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
          Recent Proof
        </p>
        <h2 className="font-display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] uppercase leading-[0.95] tracking-[-0.04em] text-white">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/60">{body}</p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[1.6rem] border border-dashed border-white/14 bg-white/[0.02] p-6 text-sm leading-7 text-white/55">
          {emptyText}
        </div>
      ) : (
        <div className={mode === "scroll" ? "proof-marquee" : "flex gap-4 overflow-x-auto pb-2"}>
          <div className={mode === "scroll" ? "proof-marquee__track" : "contents"}>
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className={`rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5 ${
                  mode === "scroll"
                    ? "proof-marquee__card min-w-[20rem] max-w-[20rem] shrink-0"
                    : "min-w-[19rem] max-w-[19rem] shrink-0"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/35">
                    {item.platform}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#ffb089]">
                    {formatProofType(item.postType)}
                  </p>
                </div>

                <h3 className="font-display mt-4 text-[1.8rem] uppercase leading-none tracking-[-0.04em] text-white">
                  {item.sourceName}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.previewLabel}</p>

                <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/35">
                    Highlight
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{item.note}</p>
                  {item.focusSlide ? (
                    <p className="mt-3 text-[0.68rem] uppercase tracking-[0.24em] text-amber-200/65">
                      {item.focusSlide}
                    </p>
                  ) : null}
                </div>

                <div className="mt-5 grid gap-2 text-sm leading-7 text-white/52">
                  <p>{item.date}</p>
                  <p>{item.artist?.name ?? "Artist pending"}</p>
                  <p>{item.project?.eventName ?? "Project pending"}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {item.project && item.artist ? (
                    <Link
                      href={`/our-work/${item.artist.slug}/${item.project.slug}`}
                      className="rounded-full border border-white/15 px-4 py-2 text-[0.64rem] uppercase tracking-[0.28em] text-white/80 transition-colors hover:border-white/35 hover:text-white"
                    >
                      View Project
                    </Link>
                  ) : null}
                  <a
                    href={item.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-black transition-transform hover:-translate-y-0.5"
                  >
                    Open Post
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
