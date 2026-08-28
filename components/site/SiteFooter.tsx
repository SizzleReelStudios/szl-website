export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/42">
            Sizzle Reel Studios
          </p>
          <p className="mt-3 text-sm leading-7 text-white/55">
            Perth-based production for artists, clubs, promoters, festivals, and music-led projects.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-white/46 md:items-end">
          <a href="mailto:muntzblake@gmail.com" className="transition-colors hover:text-white">
            muntzblake@gmail.com
          </a>
          <a href="https://instagram.com/sizzlereelstudios" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
