interface ContactProps {
  instagram: string;
  email: string;
}

export default function Contact({ instagram, email }: ContactProps) {
  return (
    <section id="contact" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-600">
          Work With Us
        </p>
        <p className="mb-12 text-3xl font-light text-zinc-100">
          Slide into the DMs.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
          >
            Instagram
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-block border border-zinc-700 px-8 py-3 text-sm uppercase tracking-widest text-zinc-400 transition-colors hover:border-white hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
