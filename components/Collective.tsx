interface CollectiveItem {
  id: string;
  name: string;
  tagline: string;
  status: string;
  href: string | null;
}

interface CollectiveProps {
  items: CollectiveItem[];
}

export default function Collective({ items }: CollectiveProps) {
  return (
    <section id="collective" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 text-xs uppercase tracking-[0.3em] text-zinc-600">
          The Collective
        </p>
        <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="bg-zinc-950 p-8">
              <div className="mb-3 flex items-center gap-3">
                <p className="font-semibold text-white">{item.name}</p>
                {item.status === "coming_soon" && (
                  <span className="rounded-sm bg-zinc-800 px-2 py-0.5 text-[10px] uppercase tracking-widest text-zinc-500">
                    Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-500">{item.tagline}</p>
              {item.href && (
                <a
                  href={item.href}
                  className="mt-4 inline-block text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                >
                  View →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
