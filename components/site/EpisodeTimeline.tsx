import type { Episode } from "@/lib/srs/types";

type EpisodeTimelineProps = {
  episodes: Episode[];
};

const PLATFORM_LABELS: Array<{ key: keyof Episode["links"]; label: string }> = [
  { key: "youtube", label: "YouTube" },
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
];

export default function EpisodeTimeline({ episodes }: EpisodeTimelineProps) {
  if (episodes.length === 0) {
    return (
      <div className="rounded-[1.6rem] border border-dashed border-white/14 bg-white/[0.02] p-6 text-sm leading-7 text-white/55">
        No episodes on this screen yet — the projector warms up once the episode
        list lands.
      </div>
    );
  }

  return (
    <ol className="relative grid gap-10 border-l border-white/12 pl-8 sm:pl-10">
      {episodes.map((episode) => (
        <li key={episode.id} className="relative">
          <span className="font-display absolute -left-8 top-0 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-white/20 bg-black text-[0.85rem] text-white/80 sm:-left-10">
            {episode.number}
          </span>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-[1.8rem] uppercase leading-none tracking-[-0.03em] text-white">
              {episode.title}
            </h3>
            <p className="text-[0.64rem] uppercase tracking-[0.26em] text-white/38">
              {episode.date}
            </p>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
            {episode.summary}
          </p>

          <div className="mt-5 max-w-2xl">
            {episode.embedUrl ? (
              <div className="aspect-video overflow-hidden rounded-[1.2rem] border border-white/10">
                <iframe
                  src={episode.embedUrl}
                  title={episode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="grid aspect-video place-items-center rounded-[1.2rem] border border-white/10 bg-black/40">
                <p className="text-[0.66rem] uppercase tracking-[0.3em] text-white/30">
                  Screen&apos;s dark for now
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {PLATFORM_LABELS.map(({ key, label }) => {
              const href = episode.links[key];

              if (!href) {
                return null;
              }

              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-[0.62rem] uppercase tracking-[0.26em] text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  Watch on {label}
                </a>
              );
            })}
          </div>
        </li>
      ))}
    </ol>
  );
}
