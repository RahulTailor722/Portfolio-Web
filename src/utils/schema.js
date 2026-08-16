const SITE_URL = "https://rahultailor.com"

/**
 * Target markets, declared once so the Person, Service and ItemList schemas
 * can't drift apart. This is the honest way to signal geographic reach for a
 * remote freelancer: one English site that states who it serves, rather than
 * faked country subfolders or hreflang pointing at identical pages.
 *
 * Netherlands is named alongside "Europe" because there is shipped, linkable
 * proof for it (Sardes, Buro Koorts, Werken bij Hubo). Don't add a country
 * here that isn't backed by work — an unsupported claim buys nothing.
 */
export const AREA_SERVED = [
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Netherlands" },
  { "@type": "Place", name: "Europe" },
]

/**
 * Every profile that is verifiably the same person. This is what lets Google
 * resolve "Rahul Tailor" from a string into an entity, and entity strength is
 * what carries a personal brand into markets the site has no local domain in.
 *
 * Only add a URL that is live and actually yours — a 404 here weakens the
 * cluster instead of strengthening it.
 */
export const SAME_AS = [
  "https://www.linkedin.com/in/rahul-tailor-0a7940283/",
  // TODO: add as they go live — GitHub, Dribbble/Behance, Awwwards, Clutch,
  // Upwork, Stack Overflow. Each one is a separate corroborating source.
]

export const PROVIDER = {
  "@type": "Person",
  name: "Rahul Tailor",
  url: SITE_URL,
}

/**
 * The canonical Person entity, emitted on every page by Layout.astro. Lives
 * here rather than in the layout so /about can reuse the exact same object as
 * its ProfilePage `mainEntity` — two descriptions of one person that disagree
 * is worse than one.
 */
export const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Tailor",
  jobTitle: "Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 6+ years building fast, accessible React, Next.js, Webflow and HubSpot websites for product teams in Canada, the United States, and Europe.",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-default.jpg`,
  // Kept in the markup deliberately. The same address and number already ship
  // as plain-text mailto:/tel: anchors in the footer (every page) and on the
  // contact page, so stripping them from JSON-LD would remove entity signal
  // that supports the Canada/US/Europe targeting while doing nothing whatever
  // to slow a scraper. If inbox spam becomes a real problem, the change that
  // actually helps is obfuscating or removing those on-page links — at which
  // point remove these two lines in the same commit.
  email: "rahultailor722@gmail.com",
  telephone: "+91-6352340795",
  knowsLanguage: ["en"],
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "Webflow",
    "HubSpot CMS",
    "UI/UX Design",
    "Web Accessibility",
    "Core Web Vitals",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: AREA_SERVED,
  workLocation: { "@type": "Place", name: "Remote" },
  sameAs: SAME_AS,
}

/** /about — tells Google this page *is* the Person, not just a page mentioning one. */
export const buildProfilePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/about/`,
  mainEntity: { ...PERSON, "@context": undefined },
})

/** /contact — the page type Google looks for when surfacing contact sitelinks. */
export const buildContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact/`,
  mainEntity: {
    "@type": "Person",
    name: "Rahul Tailor",
    url: SITE_URL,
    email: "rahultailor722@gmail.com",
    telephone: "+91-6352340795",
    areaServed: AREA_SERVED,
    sameAs: SAME_AS,
  },
})

export const buildProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  about: project.category,
  description: project.desc,
  image: `${SITE_URL}${project.image}`,
  url: `${SITE_URL}/work/${project.slug}/`,
  creator: {
    "@type": "Person",
    name: "Rahul Tailor",
  },
  dateCreated: project.year,
  // Which market the site was built for. This is what turns "6 projects" into
  // "three shipped for the Dutch market" as far as a search engine can tell.
  ...(project.market && {
    audience: {
      "@type": "Audience",
      geographicArea: { "@type": "Place", name: project.market },
    },
  }),
})

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
})

/** Per-service page: what the service is, who provides it, where it's offered. */
export const buildServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  serviceType: service.title,
  description: service.longDesc || service.desc,
  url: `${SITE_URL}/services/${service.slug}/`,
  provider: PROVIDER,
  areaServed: AREA_SERVED,
  ...(service.deliverables?.length && {
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d },
      })),
    },
  }),
})

/** Services hub: the parent that ties the four detail pages together. */
export const buildServiceListSchema = (services) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Frontend development and design services",
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: service.title,
    url: `${SITE_URL}/services/${service.slug}/`,
  })),
})
