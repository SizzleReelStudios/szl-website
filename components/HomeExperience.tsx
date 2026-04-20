type NavLink = {
  label: string;
  href: string;
};

type SiteData = {
  nav: {
    wordmark: string;
    links: NavLink[];
  };
  hero: {
    tagline: string;
    sub: string;
  };
  contact: {
    instagram: string;
    email: string;
  };
};

type TeamData = {
  statement: string;
  extended: string;
};

type WorkItem = {
  id: string;
  title: string;
  type: string;
  client: string;
  date: string;
  tags: string[];
};

type CollectiveItem = {
  id: string;
  name: string;
  tagline: string;
  status: string;
  href: string | null;
};

type HomeExperienceProps = {
  site: SiteData;
  team: TeamData;
  work: {
    items: WorkItem[];
  };
  collectives: {
    items: CollectiveItem[];
  };
};

const offerings = [
  "Event coverage",
  "DJ sets",
  "Aftermovies",
  "Artist content",
  "Promos and reels",
  "Campaign visuals",
];

const featuredMoments = [
  { label: "Base", value: "Perth / WA" },
  { label: "Focus", value: "Music, nightlife, culture" },
  { label: "Approach", value: "Raw, clean, in the moment" },
];

export default function HomeExperience({
  site,
  team,
  work,
  collectives,
}: HomeExperienceProps) {
  const featuredWork = work.items.filter((item) => item.title).slice(0, 6);

  const fallbackWork = [
    {
      id: "northbridge-night",
      title: "Northbridge Night Recap",
      type: "event coverage",
      client: "Club and crowd energy",
      date: "Recent",
      tags: ["nightlife", "event"],
    },
    {
      id: "booth-cuts",
      title: "Booth Cuts",
      type: "dj set",
      client: "Fast-turn artist content",
      date: "Recent",
      tags: ["dj", "reels"],
    },
    {
      id: "artist-rollout",
      title: "Artist Rollout",
      type: "promo pack",
      client: "Short-form campaign assets",
      date: "Recent",
      tags: ["artist", "promo"],
    },
  ];

  const archive = featuredWork.length > 0 ? featuredWork : fallbackWork;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f4efe7] selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,119,71,0.16),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_32%)]" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <a
            href="#hero"
            className="text-sm font-semibold uppercase tracking-[0.42em] text-white"
          >
            {site.nav.wordmark}
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {site.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.3em] text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={site.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/75 transition-colors hover:border-white/35 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </nav>

      <section
        id="hero"
        className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(135deg,#31140d_0%,#120d10_40%,#050505_100%)] pt-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:130px_130px] opacity-[0.15]" />
        <div className="absolute -left-16 top-28 h-52 w-52 rounded-full bg-white/8 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-black/25 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.38em] text-white/55">
                  Perth-based creative unit
                </p>
                <h1 className="mt-4 max-w-4xl text-[clamp(4rem,12vw,10rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em] text-white">
                  SZL
                </h1>
              </div>
              <div className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
                Video. Culture. After dark.
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/82 sm:text-2xl">
              {site.hero.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
              {site.hero.sub} SZL is a creative platform built around nightlife,
              artists, events, and the visual culture around them.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {featuredMoments.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-black/28 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition-transform hover:-translate-y-0.5"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-3 text-[11px] uppercase tracking-[0.32em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.8rem] border border-white/10 bg-black/34 p-5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                  What We Do
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/60">
                  <span className="h-2 w-2 rounded-full bg-[#7af5ba]" />
                  Available
                </span>
              </div>
              <div className="mt-5 grid gap-2">
                {offerings.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-sm text-white/80">{item}</span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/12 bg-[#111111]/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/48">
                  Who We Are
                </p>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {team.statement}
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/12 bg-[#181010]/85 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/48">
                  The Aim
                </p>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {team.extended}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#070707] px-4 py-16 sm:px-6">
        <div className="marquee-shell border-y border-white/10 py-4">
          <div className="marquee-track text-[11px] uppercase tracking-[0.4em] text-white/35">
            <span>szl</span>
            <span>event coverage</span>
            <span>dj sets</span>
            <span>aftermovies</span>
            <span>artist content</span>
            <span>campaign visuals</span>
            <span>culture</span>
            <span>szl</span>
            <span>event coverage</span>
            <span>dj sets</span>
            <span>aftermovies</span>
            <span>artist content</span>
            <span>campaign visuals</span>
            <span>culture</span>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-white/10 bg-[#070707] px-4 py-20 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
                Built to replay.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/55">
              Event recap, artist rollout, booth footage, short-form edits, and
              visual systems around the scene.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {archive.map((item, index) => (
              <article
                key={item.id}
                className={`archive-card rounded-[1.7rem] border border-white/10 p-5 ${
                  index % 3 === 0
                    ? "bg-[#151515]"
                    : index % 3 === 1
                      ? "bg-[#120f14]"
                      : "bg-[#11171b]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/45">
                    {item.type}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.26em] text-white/30">
                    {item.date || "Recent"}
                  </span>
                </div>
                <p className="mt-5 text-2xl font-medium leading-tight text-white">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-white/55">
                  {item.client || "SZL archive"}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={`${item.id}-${tag}`}
                      className="rounded-full bg-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/10 bg-[#050505] px-4 py-20 sm:px-6"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              About SZL
            </p>
            <h2 className="mt-3 text-4xl font-medium text-white sm:text-5xl">
              A creative unit around the night.
            </h2>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.8rem] border border-white/10 bg-[#0b0b0b] p-6">
              <p className="text-sm leading-8 text-white/68">{team.statement}</p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-[#0b0b0b] p-6">
              <p className="text-sm leading-8 text-white/60">{team.extended}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="collective"
        className="border-t border-white/10 bg-[#070707] px-4 py-20 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              Collective
            </p>
            <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
              Different lanes, one world.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {collectives.items.map((item, index) => (
              <article
                key={item.id}
                className={`rounded-[1.8rem] border border-white/10 p-6 ${
                  index === 0
                    ? "bg-[linear-gradient(180deg,rgba(255,122,77,0.14),rgba(255,255,255,0.03))]"
                    : index === 1
                      ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
                      : "bg-[linear-gradient(180deg,rgba(111,147,255,0.12),rgba(255,255,255,0.03))]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xl text-white">{item.name}</p>
                  <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {item.status === "coming_soon" ? "Soon" : "Live"}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.tagline}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/75 transition-colors hover:border-white/35 hover:text-white"
                  >
                    Open
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[linear-gradient(180deg,#0a0a0a_0%,#050505_100%)] px-4 py-20 sm:px-6"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-medium text-white sm:text-5xl">
              Let&apos;s make something worth replaying.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-black/40 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  Reach Out
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-black transition-transform hover:-translate-y-0.5"
                  >
                    Instagram
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="rounded-full border border-white/15 px-5 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-white/75 transition-colors hover:border-white/35 hover:text-white"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  Best For
                </p>
                <p className="mt-4 text-2xl text-white">Events, artists, campaigns</p>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Short-form content, full-night coverage, and visual identities
                  built around music and culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
