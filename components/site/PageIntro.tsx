type PageIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export default function PageIntro({ eyebrow, title, body }: PageIntroProps) {
  return (
    <section className="site-band px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
          {eyebrow}
        </p>
        <h1 className="font-display mt-5 max-w-4xl text-[clamp(3.2rem,8vw,7.2rem)] leading-[0.92] tracking-[-0.03em] text-white">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          {body}
        </p>
      </div>
    </section>
  );
}
