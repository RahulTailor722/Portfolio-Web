const SITE_URL = "https://rahultailor.com"

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
