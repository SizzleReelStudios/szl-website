import Link from "next/link";
import type { PosterTier } from "@/lib/srs/types";

type LineupArtist = {
  slug: string;
  name: string;
  posterTier: PosterTier;
  projectCount: number;
  scale?: number;
};

type PosterLineupProps = {
  artists: LineupArtist[];
  align?: "start" | "center";
};

const tierOrder: PosterTier[] = ["headliner", "featured", "support"];

const tierSizes: Record<PosterTier, string> = {
  headliner: "clamp(3rem,8vw,7rem)",
  featured: "clamp(2.1rem,5vw,4.5rem)",
  support: "clamp(1.35rem,3vw,2.2rem)",
};

export default function PosterLineup({ artists, align = "start" }: PosterLineupProps) {
  const centered = align === "center";

  return (
    <div className="poster-grid rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 sm:p-8">
      <div className={`grid ${centered ? "gap-8 py-4 sm:py-8" : "gap-6"}`}>
        {tierOrder.map((tier) => {
          const tierArtists = artists.filter((artist) => artist.posterTier === tier);

          if (tierArtists.length === 0) {
            return null;
          }

          return (
            <div key={tier} className="border-t border-white/8 pt-6 first:border-t-0 first:pt-0">
              <p
                className={`mb-4 text-[0.65rem] uppercase tracking-[0.34em] text-white/35 ${
                  centered ? "text-center" : ""
                }`}
              >
                {tier}
              </p>
              <div
                className={`flex flex-wrap items-end gap-x-5 gap-y-3 ${
                  centered ? "justify-center gap-x-8 text-center" : ""
                }`}
              >
                {tierArtists.map((artist) => {
                  const scale = artist.scale ?? 1;
                  const fontSize =
                    scale === 1
                      ? tierSizes[artist.posterTier]
                      : `calc(${tierSizes[artist.posterTier]} * ${scale})`;

                  return (
                    <Link
                      key={artist.slug}
                      href={`/our-work/${artist.slug}`}
                      style={{ fontSize }}
                      className="font-display uppercase leading-none tracking-[-0.05em] text-white transition-colors hover:text-[#ff9b6b]"
                    >
                      {artist.name}
                      <span className="ml-2 align-top text-[0.7rem] tracking-[0.24em] text-white/28">
                        {artist.projectCount}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
