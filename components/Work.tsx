interface WorkItem {
  id: string;
  title: string;
  type: string;
  embedUrl: string;
  thumbnail: string;
  client: string;
  date: string;
  tags: string[];
}

interface WorkProps {
  items: WorkItem[];
}

export default function Work({ items }: WorkProps) {
  const populated = items.filter((i) => i.title);

  if (populated.length === 0) {
    return null;
  }

  return (
    <section id="work" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-xs uppercase tracking-[0.3em] text-zinc-600">
          Latest Moments
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {populated.map((item) => (
            <div key={item.id} className="group relative aspect-video overflow-hidden bg-zinc-900">
              {item.thumbnail && (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-sm font-medium text-white">{item.title}</p>
                {item.client && (
                  <p className="text-xs text-zinc-500">{item.client}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
