interface AboutProps {
  statement: string;
  extended: string;
}

export default function About({ statement, extended }: AboutProps) {
  return (
    <section id="about" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-600">
          The Team
        </p>
        <p className="text-2xl font-light leading-relaxed text-zinc-100 md:text-3xl">
          {statement}
        </p>
        <p className="mt-8 text-base leading-relaxed text-zinc-500">
          {extended}
        </p>
      </div>
    </section>
  );
}
