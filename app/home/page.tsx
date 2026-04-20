import type { Metadata } from "next";
import HomeExperience from "@/components/HomeExperience";
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
    <HomeExperience
      site={site}
      team={team}
      work={work}
      collectives={collectives}
    />
  );
}
