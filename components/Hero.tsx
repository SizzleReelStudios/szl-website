"use client";

interface HeroProps {
  tagline: string;
  sub: string;
  videoUrl: string;
  posterUrl: string;
}

export default function Hero({ tagline, sub, videoUrl, posterUrl }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {videoUrl ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src={videoUrl}
          poster={posterUrl || undefined}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
      )}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 font-black uppercase tracking-[0.3em] text-white text-[clamp(4rem,12vw,10rem)] leading-none">
          SZL
        </h1>
        <p className="max-w-2xl text-xl font-light text-zinc-200 tracking-wide">
          {tagline}
        </p>
        <p className="mt-3 text-sm text-zinc-500 tracking-widest uppercase">
          {sub}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="h-12 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}
