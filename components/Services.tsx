const services = [
  { label: "Event Coverage", desc: "Multicam. Crowd energy. Full night." },
  { label: "DJ Sets", desc: "Deck cam, FOH, short-form clips." },
  { label: "Aftermovies", desc: "The full story of the night." },
  { label: "Artist Content", desc: "Promos, music videos, reels." },
  { label: "Vlogs & Skits", desc: "The SZL side. Raw and real." },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 text-xs uppercase tracking-[0.3em] text-zinc-600">
          What We Do
        </p>
        <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.label} className="bg-zinc-950 p-8">
              <p className="mb-2 text-lg font-semibold text-white">{s.label}</p>
              <p className="text-sm text-zinc-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
