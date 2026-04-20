import type { Metadata } from "next";
import About from "@/components/About";
import Collective from "@/components/Collective";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Work from "@/components/Work";
import collectives from "@/content/collectives.json";
import site from "@/content/site.json";
import team from "@/content/team.json";
import work from "@/content/work.json";

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
};

export default function HomePage() {
  return (
    <>
      <Nav
        wordmark={site.nav.wordmark}
        links={site.nav.links}
        instagram={site.contact.instagram}
      />
      <main>
        <Hero
          tagline={site.hero.tagline}
          sub={site.hero.sub}
          videoUrl={site.hero.videoUrl}
          posterUrl={site.hero.posterUrl}
        />
        <Work items={work.items} />
        <About statement={team.statement} extended={team.extended} />
        <Services />
        <Collective items={collectives.items} />
        <Contact
          instagram={site.contact.instagram}
          email={site.contact.email}
        />
      </main>
    </>
  );
}
