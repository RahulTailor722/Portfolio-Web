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
      // No `lastmod` and no `changefreq` on purpose. Build time is not an
      // honest lastmod: a CSS tweak would tell Google all 17 URLs changed, and
      // a lastmod that is always "now" gets detected and discounted — which
      // costs us the signal on the pages that genuinely did change. Google has
      // ignored `changefreq` outright for years. Omitting both is stronger
      // than sending noise.
      serialize(item) {
        const path = item.url.replace(SITE, "")
        item.priority = PRIORITY[path] ?? 0.6
        return item
      },
    }),
  ],
})
