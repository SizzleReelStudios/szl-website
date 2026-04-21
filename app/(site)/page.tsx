import Link from "next/link";
import ContactPanel from "@/components/site/ContactPanel";
import PosterLineup from "@/components/site/PosterLineup";
import { getArtistLineup, getServices, getSiteConfig } from "@/lib/srs/data";

export default function HomePage() {
  const site = getSiteConfig();
  const lineup = getArtistLineup();
  const serviceList = getServices();

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
                Positioning
              </p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-white/68">
                <p>Client-facing production site for the Sizzle Reel Studios branch.</p>
                <p>Built around artist archives, event proof, and a clear path to enquiry.</p>
                <p>Scene-aware presentation without falling into generic agency language.</p>
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
              What It Avoids
            </p>
            <p className="font-display mt-4 text-[2rem] uppercase leading-none text-white">
              No dead agency grid.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/58">
              The work archive is being built around recognition, context, and repeat proof,
              not anonymous thumbnail soup.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              Why It Scales
            </p>
            <p className="font-display mt-4 text-[2rem] uppercase leading-none text-white">
              Add data, not page logic.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Artists, venues, promoters, and projects are modeled as separate entities so new
              entries slot into the existing routes.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              Conversion
            </p>
            <p className="font-display mt-4 text-[2rem] uppercase leading-none text-white">
              Keep the enquiry path obvious.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Home, archive, and project templates all hold clear contact routes without turning
              the site into a brochure wall.
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
