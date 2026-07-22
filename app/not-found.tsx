import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wrong Room",
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050505] px-6 text-[#f3ede2]">
      <div className="text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/40">404</p>
        <h1 className="font-display mt-5 text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.9] tracking-[-0.05em] text-white">
          Wrong room.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/60">
          This door doesn&apos;t go anywhere — not even the Portal. Head back to the
          house and pick a real one.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-white px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-black transition-transform hover:-translate-y-0.5"
        >
          Back to the house
        </Link>
      </div>
    </main>
  );
}
