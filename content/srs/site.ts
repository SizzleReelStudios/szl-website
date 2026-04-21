import {
  developmentSeed,
  getSeedServiceDeliverables,
  getSeedServiceSlug,
} from "@/content/srs/development-seed";
import type { Service, SiteConfig } from "@/lib/srs/types";

export const siteConfig: SiteConfig = {
  brand: {
    parent: "SZL",
    name: developmentSeed.site.brand,
    shortName: "SRS",
    location: developmentSeed.site.location,
  },
  seo: {
    title: developmentSeed.site.brand,
    description:
      "Perth videography trio capturing nightlife, music, artist sets, clubs, and festivals with the energy of the room still intact.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: developmentSeed.site.contact.email,
    instagram: developmentSeed.site.contact.instagram,
  },
  home: {
    eyebrow: "Perth, Western Australia",
    headline: developmentSeed.homepage.hero.headline,
    subheadline: developmentSeed.homepage.hero.subheading,
    proofLine: developmentSeed.homepage.intro,
    ctaPrimary: developmentSeed.homepage.hero.ctaPrimary,
    ctaSecondary: developmentSeed.homepage.hero.ctaSecondary,
  },
  about: {
    intro: developmentSeed.homepage.aboutSnippet,
    story:
      "We work across clubs, festivals, artist-led nights, and the environments around them. This development dataset is temporary, but the direction is fixed: keep the work sharp, high-energy, and credible to the people actually in the room.",
  },
};

export const services: Service[] = developmentSeed.services.map((service) => {
  const slug = getSeedServiceSlug(service.title);

  return {
    id: slug,
    slug,
    name: service.title,
    summary: service.description,
    deliverables: getSeedServiceDeliverables(slug),
  };
});
