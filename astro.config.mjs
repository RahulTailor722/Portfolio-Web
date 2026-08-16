import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

const SITE = "https://rahultailor.com"

// Pages that carry the most weight for search. Everything else (project and
// service detail pages) falls through to the default below.
const PRIORITY = {
  "/": 1.0,
  "/work/": 0.9,
  "/services/": 0.9,
  "/about/": 0.8,
  "/contact/": 0.8,
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    sitemap({
      // 404 is dropped by the integration itself. The /sitemap.xml endpoint
      // must be excluded too — a sitemap listing itself as a page is invalid.
      filter: (page) => !page.includes("/404") && !page.includes("/sitemap"),
      changefreq: "monthly",
      // Static site: a rebuild is the only way content changes, so build time
      // is an honest lastmod for every URL.
      lastmod: new Date(),
      serialize(item) {
        const path = item.url.replace(SITE, "")
        item.priority = PRIORITY[path] ?? 0.6
        return item
      },
    }),
  ],
})
