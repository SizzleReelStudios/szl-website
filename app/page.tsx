import siteData from "@/content/site.json";
import teamData from "@/content/team.json";
import workData from "@/content/work.json";
import collectivesData from "@/content/collectives.json";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Collective from "@/components/Collective";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Nav
        wordmark={siteData.nav.wordmark}
        links={siteData.nav.links}
        instagram={siteData.contact.instagram}
      />
      <Hero
        tagline={siteData.hero.tagline}
        sub={siteData.hero.sub}
        videoUrl={siteData.hero.videoUrl}
        posterUrl={siteData.hero.posterUrl}
      />
      <About
        statement={teamData.statement}
        extended={teamData.extended}
      />
      <Services />
      <Work items={workData.items} />
      <Collective items={collectivesData.items} />
      <Contact
        instagram={siteData.contact.instagram}
        email={siteData.contact.email}
      />
      <footer className="border-t border-zinc-900 px-6 py-8 text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-700">
          © {new Date().getFullYear()} SZL — Perth, AU
        </p>
      </footer>
    </main>
  );
}
