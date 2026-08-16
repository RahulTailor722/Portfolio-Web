const SITE_URL = "https://rahultailor.com"

/**
 * Target markets, declared once so the Person, Service and ItemList schemas
 * can't drift apart. This is the honest way to signal geographic reach for a
 * remote freelancer: one English site that states who it serves, rather than
 * faked country subfolders or hreflang pointing at identical pages.
 */
export const AREA_SERVED = [
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "United States" },
  { "@type": "Place", name: "Europe" },
]

export const PROVIDER = {
  "@type": "Person",
  name: "Rahul Tailor",
  url: SITE_URL,
}

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
