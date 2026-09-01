// @astrojs/sitemap is dropped from astro.config.mjs during maintenance, so
// there is no sitemap-0.xml to point at. Crawlers, Search Console and most SEO
// checkers probe /sitemap.xml anyway; an empty-but-valid index answers them
// with "nothing to crawl right now" instead of a 404 that gets retried.
export const GET = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</sitemapindex>
`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    }
  )
