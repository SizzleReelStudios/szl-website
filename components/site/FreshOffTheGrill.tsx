import Link from "next/link";
import type { ResolvedProofItem } from "@/lib/srs/types";

type FreshOffTheGrillProps = {
  items: ResolvedProofItem[];
};

function platformLabel(platform: ResolvedProofItem["platform"]) {
  switch (platform) {
    case "instagram":
      return "Instagram";
    case "tiktok":
      return "TikTok";
    case "youtube":
      return "YouTube";
    default:
      return "Elsewhere";
  }
}

function itemHref(item: ResolvedProofItem) {
  if (item.project && item.artist) {
    return `/our-work/${item.artist.slug}/${item.project.slug}`;
  }
  return item.postUrl;
}

export default function FreshOffTheGrill({ items }: FreshOffTheGrillProps) {
  const [lead, ...rest] = items;
  const secondary = rest.slice(0, 2);
  const clippings = rest.slice(2, 5);

  return (
    <section id="fresh-off-the-grill" className="site-band scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="border-y-4 border-double border-white/25 py-6 text-center">
          <p className="text-[0.66rem] uppercase tracking-[0.34em] text-white/40">
            The SZL front page — Perth, Western Australia
          </p>
          <h2 className="font-display mt-3 text-[clamp(2.6rem,7vw,5.6rem)] uppercase leading-[0.9] tracking-[-0.04em] text-white">
            Fresh Off The Grill
          </h2>
          <p className="mt-3 text-[0.66rem] uppercase tracking-[0.28em] text-white/38">
            Recent work · recent noise · still hot
          </p>
        </header>

        {!lead ? (
          <div className="mt-8 rounded-[1.6rem] border border-dashed border-white/14 bg-white/[0.02] p-6 text-sm leading-7 text-white/55">
            Nothing on the grill yet. Check back once the next drop lands.
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <article className="lg:border-r lg:border-white/12 lg:pr-8">
                <div className="flex items-center gap-3 text-[0.64rem] uppercase tracking-[0.28em]">
                  <span className="text-[#ffb089]">Lead story</span>
                  <span className="text-white/35">{platformLabel(lead.platform)}</span>
                  <span className="text-white/35">{lead.date}</span>
                </div>
                <h3 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] uppercase leading-[0.95] tracking-[-0.04em] text-white">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                  {lead.note}
                </p>
                <p className="mt-4 text-[0.66rem] uppercase tracking-[0.26em] text-white/40">
                  {lead.sourceName}
                  {lead.artist ? ` · ${lead.artist.name}` : ""}
                  {lead.project ? ` · ${lead.project.eventName}` : ""}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {lead.project && lead.artist ? (
                    <Link
                      href={`/our-work/${lead.artist.slug}/${lead.project.slug}`}
                      className="rounded-full bg-white px-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-black transition-transform hover:-translate-y-0.5"
                    >
                      Read the full story
                    </Link>
                  ) : null}
                  <a
                    href={lead.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-5 py-3 text-[0.66rem] uppercase tracking-[0.28em] text-white/75 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Open the post
                  </a>
                </div>
              </article>

              <div className="grid content-start gap-6">
                {secondary.map((item) => (
                  <article key={item.id} className="border-b border-white/12 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.26em] text-white/35">
                      <span>{platformLabel(item.platform)}</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="font-display mt-3 text-[1.6rem] uppercase leading-none tracking-[-0.03em] text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-white/58">{item.note}</p>
                    <Link
                      href={itemHref(item)}
                      className="mt-3 inline-block text-[0.64rem] uppercase tracking-[0.28em] text-[#ffb089] transition-colors hover:text-white"
                    >
                      More →
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {clippings.length > 0 ? (
              <div className="mt-8 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/12">
                {clippings.map((item) => (
                  <article key={item.id} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
                    <p className="text-[0.62rem] uppercase tracking-[0.26em] text-white/35">
                      {platformLabel(item.platform)} · {item.date}
                    </p>
                    <h4 className="font-display mt-2 text-[1.3rem] uppercase leading-tight tracking-[-0.02em] text-white">
                      {item.title}
                    </h4>
                    <Link
                      href={itemHref(item)}
                      className="mt-2 inline-block text-[0.62rem] uppercase tracking-[0.26em] text-white/45 transition-colors hover:text-white"
                    >
                      More →
                    </Link>
                  </article>
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
