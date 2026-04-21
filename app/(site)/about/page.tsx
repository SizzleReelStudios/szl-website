import ContactPanel from "@/components/site/ContactPanel";
import PageIntro from "@/components/site/PageIntro";
import { getSiteConfig } from "@/lib/srs/data";

export default function AboutPage() {
  const site = getSiteConfig();

  return (
    <main>
      <PageIntro eyebrow="About" title="Inside the scene, not observing from outside it." body={site.about.intro} />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 text-sm leading-8 text-white/66">
            {site.about.story}
          </div>
          <ContactPanel />
        </div>
      </section>
    </main>
  );
}
