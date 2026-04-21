import Link from "next/link";
import ContactPanel from "@/components/site/ContactPanel";
import PosterLineup from "@/components/site/PosterLineup";
import ProofFeed from "@/components/site/ProofFeed";
import SeedDataNotice from "@/components/site/SeedDataNotice";
import {
  getArtistLineup,
  getProjects,
  getRecentProofItems,
  getSeedAudit,
  getServices,
  getSiteConfig,
} from "@/lib/srs/data";

export default function HomePage() {
  const site = getSiteConfig();
  const lineup = getArtistLineup();
  const serviceList = getServices();
  const projects = getProjects();
  const proofItems = getRecentProofItems();
  const audit = getSeedAudit();

  return (
    <main>
      <section className="site-band px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2.2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(49,20,13,0.72),rgba(8,8,8,0.9))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/48">
              {site.home.eyebrow}
            </p>
            <h1 className="font-display mt-5 max-w-5xl text-[clamp(4.2rem,11vw,9rem)] leading-[0.88] tracking-[-0.06em] text-white">
              {site.home.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {site.home.subheadline}
            </p>
            <p className="mt-6 max-w-xl text-sm uppercase tracking-[0.24em] text-[#ff9b6b]">
              {site.home.proofLine}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/our-work"
                className="rounded-full bg-white px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-black transition-transform hover:-translate-y-0.5"
              >
                {site.home.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-white/78 transition-colors hover:border-white/40 hover:text-white"
              >
                {site.home.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/42">
                Snapshot
              </p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-white/68">
                <p>{site.about.intro}</p>
                <p>{site.about.story}</p>
                <p>
                  Current development seed includes {lineup.length} artists and{" "}
                  {projects.length} logged projects.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {serviceList.map((service) => (
                <div key={service.id} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/38">
                    Service
                  </p>
                  <h2 className="font-display mt-4 text-[1.7rem] uppercase leading-none tracking-[-0.03em] text-white">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    {service.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SeedDataNotice
            items={[
              audit.missingFields[0],
              audit.missingFields[1],
              audit.weakSpots[0],
            ]}
          />
        </div>
      </section>

      <section className="site-band px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <ProofFeed
            items={proofItems}
            mode="scroll"
            title="Recent proof moving through real posts, recap slides, and tour uploads."
            body="This strip is meant to read like social proof in motion: notable uploads where the footage appeared in the artist or promoter rollout."
          />
        </div>
      </section>

      <section className="site-band px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
              The Lineup
            </p>
            <h2 className="font-display mt-5 text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-white">
              Artist-first work discovery instead of a dead portfolio grid.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
              The main archive is structured like a poster. Click an artist name, then step
              into their event history and project proof from there.
            </p>
            <div className="mt-8 grid gap-3 text-sm leading-7 text-white/58">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
                  Layer 1
                </p>
                <p className="mt-2">Poster-style lineup page for discovery and hierarchy.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
                  Layer 2
                </p>
                <p className="mt-2">Artist archive page listing every filmed appearance.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
                  Layer 3
                </p>
                <p className="mt-2">Repeatable project detail template for proof and media.</p>
              </div>
            </div>
          </div>

          <PosterLineup artists={lineup} />
        </div>
      </section>

      <section className="site-band px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              Artists Loaded
            </p>
            <p className="font-display mt-4 text-[2rem] uppercase leading-none text-white">
              {lineup.length}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/58">
              The current development archive is already structured artist-first, so new names
              slot straight into the lineup wall and archive routes.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              Projects Logged
            </p>
            <p className="font-display mt-4 text-[2rem] uppercase leading-none text-white">
              {projects.length}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Event pages are already rendering from the seed dataset, even though thumbnails,
              stills, and final descriptions still need replacing.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              Next Content Pass
            </p>
            <p className="font-display mt-4 text-[2rem] uppercase leading-none text-white">
              Replace the weak spots.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Final venue details, confirmed service links, stills, and real embed URLs are the
              main content gaps left in this development pass.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <ContactPanel />
        </div>
      </section>
    </main>
  );
}
