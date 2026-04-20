"use client";

import { startTransition, useDeferredValue, useState } from "react";

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
  embedUrl: string;
  thumbnail: string;
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

const modes = [
  {
    id: "after-dark",
    label: "After Dark",
    kicker: "Peak hour energy",
    description: "Crowd heat, deck cam, bass bins, sweaty edits, no clean edges.",
    surfaceClass:
      "from-[#3a130c] via-[#140d0f] to-[#050505]",
    glowClass: "bg-[radial-gradient(circle_at_top,rgba(255,119,71,0.22),transparent_48%)]",
    accentClass: "border-[#ff7a4d] text-[#ffd2c2]",
  },
  {
    id: "back-room",
    label: "Back Room",
    kicker: "More intimate",
    description: "Voice notes, unreleased ideas, backstage scraps, side quests and soft menace.",
    surfaceClass:
      "from-[#17312d] via-[#0a1212] to-[#030303]",
    glowClass: "bg-[radial-gradient(circle_at_top,rgba(87,211,170,0.18),transparent_45%)]",
    accentClass: "border-[#57d3aa] text-[#d3fff1]",
  },
  {
    id: "broadcast",
    label: "Broadcast",
    kicker: "Signal mode",
    description: "Recaps, episodes, flyers, drops, timestamps, scene mapping and motion debris.",
    surfaceClass:
      "from-[#1a1938] via-[#080b12] to-[#030303]",
    glowClass: "bg-[radial-gradient(circle_at_top,rgba(111,147,255,0.22),transparent_46%)]",
    accentClass: "border-[#86a0ff] text-[#dbe2ff]",
  },
];

const serviceModules = [
  "Event coverage",
  "DJ set capture",
  "Aftermovies",
  "Artist content",
  "Podcast visuals",
  "Clothing universe",
];

const noiseButtons = [
  { id: "lights", label: "Kill The Lights", reaction: "strobes cut in, blacks go deeper" },
  { id: "crowd", label: "Crowd Up", reaction: "more bodies, more motion, less breathing room" },
  { id: "rewind", label: "Rewind Tape", reaction: "everything smears backward for a second" },
];

const hiddenDrops = [
  "Perth, after midnight.",
  "Deck cam rolling.",
  "Backstage door half open.",
  "One more pass. Keep the imperfections.",
];

export default function HomeExperience({
  site,
  team,
  work,
  collectives,
}: HomeExperienceProps) {
  const fallbackArchive = [
    {
      id: "archive-01",
      title: "Northbridge Heat Check",
      type: "event",
      client: "Crowd study",
      date: "Fri 11:48 PM",
      tags: ["event", "crowd", "night"],
    },
    {
      id: "archive-02",
      title: "Deck Cam Test Roll",
      type: "set",
      client: "Booth footage",
      date: "Sat 1:18 AM",
      tags: ["dj", "set", "booth"],
    },
    {
      id: "archive-03",
      title: "Flyer Wall",
      type: "design",
      client: "Promo fragments",
      date: "This week",
      tags: ["promo", "visual", "design"],
    },
    {
      id: "archive-04",
      title: "Back Room Voice Notes",
      type: "podcast",
      client: "Sausage Sizzle",
      date: "Loose tape",
      tags: ["podcast", "talk", "archive"],
    },
    {
      id: "archive-05",
      title: "Artist Sprint",
      type: "content",
      client: "One-night rollout",
      date: "72 hour push",
      tags: ["artist", "content", "reels"],
    },
    {
      id: "archive-06",
      title: "Clothing Drop Mockup",
      type: "merch",
      client: "SZL Collective",
      date: "Pending release",
      tags: ["clothing", "drop", "future"],
    },
  ];

  const seededArchive = work.items
    .filter((item) => item.title)
    .map((item) => ({
      id: item.id,
      title: item.title,
      type: item.type || "clip",
      client: item.client || "SZL archive",
      date: item.date || "Recent",
      tags: item.tags.length > 0 ? item.tags : [item.type || "clip"],
    }));

  const archiveSeed = seededArchive.length > 0 ? seededArchive : fallbackArchive;
  const [mode, setMode] = useState(modes[0]);
  const [activeCollective, setActiveCollective] = useState(
    collectives.items[0] ?? null,
  );
  const [activeNoise, setActiveNoise] = useState(noiseButtons[0]);
  const [crateCount, setCrateCount] = useState(0);
  const [archiveFilter, setArchiveFilter] = useState("all");
  const [archiveBoard, setArchiveBoard] = useState(archiveSeed);
  const deferredFilter = useDeferredValue(archiveFilter);

  const archiveTags = Array.from(
    new Set(archiveSeed.flatMap((item) => item.tags)),
  ).slice(0, 6);

  const visibleArchive = archiveBoard.filter((item) => {
    if (deferredFilter === "all") {
      return true;
    }

    return item.tags.includes(deferredFilter) || item.type === deferredFilter;
  });

  const revealedDrop =
    hiddenDrops[Math.min(crateCount, hiddenDrops.length - 1)] ?? hiddenDrops[0];

  return (
    <main
      className={`min-h-screen overflow-hidden bg-[#050505] text-[#f4efe7] selection:bg-white selection:text-black`}
    >
      <div
        className={`pointer-events-none fixed inset-0 opacity-100 transition-all duration-700 ${mode.glowClass}`}
      />

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
            <a
              href="#playground"
              className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Explore
            </a>
          </div>
          <a
            href={site.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.35em] text-white/65 transition-colors hover:text-white"
          >
            IG
          </a>
        </div>
      </nav>

      <section
        id="hero"
        className={`relative isolate min-h-screen overflow-hidden bg-gradient-to-br ${mode.surfaceClass} pt-24`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:130px_130px] opacity-[0.17]" />
        <div className="absolute -left-16 top-28 h-52 w-52 rounded-full bg-white/8 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-black/25 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.38em] text-white/55">
                  Perth-based creative unit
                </p>
                <h1 className="mt-4 max-w-4xl text-[clamp(4rem,12vw,10rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em] text-white">
                  Built For
                  <br />
                  Night Motion
                </h1>
              </div>
              <div className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
                {mode.kicker}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="max-w-2xl text-lg leading-relaxed text-white/82 sm:text-2xl">
                  {site.hero.tagline}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                  {site.hero.sub} This page should feel like the aftermath:
                  posters, notes, clips, scene fragments, signals, plans,
                  and little systems you can mess with.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {modes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMode(item)}
                      className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.32em] transition-all ${
                        mode.id === item.id
                          ? `${item.accentClass} bg-white/8`
                          : "border-white/12 text-white/55 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Scenes chased", value: "27" },
                    { label: "Hours after dark", value: "146" },
                    { label: "Moments worth replaying", value: "∞" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-black/28 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-black/34 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                      Live signal
                    </p>
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/60">
                      <span className="h-2 w-2 rounded-full bg-[#7af5ba]" />
                      Open
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-medium leading-tight text-white">
                    {mode.description}
                  </p>
                  <div className="mt-5 grid gap-2">
                    {serviceModules.map((module, index) => (
                      <div
                        key={module}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="text-sm text-white/80">{module}</span>
                        <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="floating-panel rounded-[1.6rem] border border-white/12 bg-[#111111]/80 p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/48">
                      Tape note
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {team.statement}
                    </p>
                  </div>
                  <div className="floating-panel floating-panel--delay rounded-[1.6rem] border border-white/12 bg-[#181010]/85 p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/48">
                      Why it hits
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/70">
                      {team.extended}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#playground"
                className="rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition-transform hover:-translate-y-0.5"
              >
                Enter The Surface
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-3 text-[11px] uppercase tracking-[0.32em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Build Something
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/12 bg-black/30 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/48">
                  Noise Controls
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Click me
                </p>
              </div>
              <div className="grid gap-3">
                {noiseButtons.map((button) => (
                  <button
                    key={button.id}
                    type="button"
                    onClick={() => setActiveNoise(button)}
                    className={`rounded-[1.4rem] border px-4 py-4 text-left transition-all ${
                      activeNoise.id === button.id
                        ? "border-white/40 bg-white/10"
                        : "border-white/8 bg-white/[0.03] hover:border-white/20"
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                      Trigger
                    </p>
                    <p className="mt-2 text-lg text-white">{button.label}</p>
                    <p className="mt-2 text-sm text-white/55">
                      {button.reaction}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-black/30 p-5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/48">
                  Orbiting Projects
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Hotspots
                </p>
              </div>
              <div className="relative mt-6 grid min-h-[250px] place-items-center overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]">
                <div className="absolute h-28 w-28 rounded-full border border-dashed border-white/20" />
                <div className="absolute h-48 w-48 rounded-full border border-dashed border-white/10" />
                {collectives.items.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveCollective(item)}
                    className={`orbit-chip orbit-chip-${index + 1} rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all ${
                      activeCollective?.id === item.id
                        ? "border-white/45 bg-white/16 text-white"
                        : "border-white/14 bg-black/70 text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="rounded-full border border-white/12 bg-black/70 px-5 py-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                    Scene Core
                  </p>
                  <p className="mt-1 text-xl font-medium text-white">SZL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="playground"
        className="relative border-t border-white/10 bg-[#070707] px-4 py-20 sm:px-6"
      >
        <div className="marquee-shell border-y border-white/10 py-4">
          <div className="marquee-track text-[11px] uppercase tracking-[0.4em] text-white/35">
            <span>video</span>
            <span>events</span>
            <span>reels</span>
            <span>podcast</span>
            <span>fits</span>
            <span>after dark</span>
            <span>back room</span>
            <span>signal</span>
            <span>video</span>
            <span>events</span>
            <span>reels</span>
            <span>podcast</span>
            <span>fits</span>
            <span>after dark</span>
            <span>back room</span>
            <span>signal</span>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            id="work"
            className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                  Archive Wall
                </p>
                <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
                  Shuffle the scene.
                </h2>
              </div>
              <button
                type="button"
                onClick={() =>
                  startTransition(() => {
                    setArchiveBoard((current) => {
                      const next = [...current];
                      for (let index = next.length - 1; index > 0; index -= 1) {
                        const swapIndex = Math.floor(Math.random() * (index + 1));
                        const currentValue = next[index];
                        next[index] = next[swapIndex];
                        next[swapIndex] = currentValue;
                      }
                      return next;
                    });
                  })
                }
                className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/75 transition-colors hover:border-white/35 hover:text-white"
              >
                Shuffle Board
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setArchiveFilter("all")}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em] transition-colors ${
                  archiveFilter === "all"
                    ? "border-white/35 bg-white/10 text-white"
                    : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                }`}
              >
                All
              </button>
              {archiveTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setArchiveFilter(tag)}
                  className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em] transition-colors ${
                    archiveFilter === tag
                      ? "border-white/35 bg-white/10 text-white"
                      : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visibleArchive.map((item, index) => (
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
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-5 text-2xl font-medium leading-tight text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-white/55">{item.client}</p>
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

          <div className="grid gap-6">
            <div
              id="about"
              className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-5 sm:p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                Back Room Console
              </p>
              <h2 className="mt-3 text-3xl font-medium text-white">
                Press around.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                This is where the site should stop behaving like a brochure. Hit
                the crate button a few times. Switch modes. Reorder the archive.
                Make the page feel occupied.
              </p>

              <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-black/40 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                    Hidden drop
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/28">
                    {crateCount}/4
                  </p>
                </div>
                <p className="mt-4 text-2xl text-white">{revealedDrop}</p>
                <button
                  type="button"
                  onClick={() =>
                    setCrateCount((count) =>
                      Math.min(count + 1, hiddenDrops.length - 1),
                    )
                  }
                  className="mt-5 rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/75 transition-colors hover:border-white/35 hover:text-white"
                >
                  Open Crate
                </button>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  "Posters pinned over older posters",
                  "Voice notes sitting next to polished edits",
                  "Timestamps, locations, and unfinished plans in plain sight",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="collective"
              className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                    Collective
                  </p>
                  <h2 className="mt-3 text-3xl font-medium text-white">
                    Pick a lane.
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Active panel
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {collectives.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveCollective(item)}
                    className={`rounded-[1.4rem] border p-4 text-left transition-all ${
                      activeCollective?.id === item.id
                        ? "border-white/30 bg-white/10"
                        : "border-white/8 bg-white/[0.03] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-lg text-white">{item.name}</p>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                        {item.status === "coming_soon" ? "Soon" : "Live"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/55">{item.tagline}</p>
                  </button>
                ))}
              </div>

              {activeCollective ? (
                <div className="mt-5 rounded-[1.6rem] border border-white/10 bg-black/45 p-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                    Selected output
                  </p>
                  <p className="mt-3 text-2xl text-white">
                    {activeCollective.name}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {activeCollective.tagline} Give each branch its own object,
                    tone, and surface treatment so the site feels expandable,
                    not boxed in.
                  </p>
                  {activeCollective.href ? (
                    <a
                      href={activeCollective.href}
                      className="mt-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/75 transition-colors hover:border-white/35 hover:text-white"
                    >
                      Open Lane
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative border-t border-white/10 bg-[linear-gradient(180deg,#0a0a0a_0%,#050505_100%)] px-4 py-20 sm:px-6"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              Contact Surface
            </p>
            <h2 className="mt-3 text-4xl font-medium text-white sm:text-5xl">
              Make it loud.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
              If the page is doing its job, the CTA should feel like stepping
              into the DM thread from the middle of a venue, not reaching the
              footer of a portfolio.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-black/40 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  Send the brief
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
                  Right now
                </p>
                <p className="mt-4 text-2xl text-white">
                  {activeNoise.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {activeNoise.reaction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
