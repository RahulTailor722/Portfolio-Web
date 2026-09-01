// The live site advertises /sitemap-index.xml to Search Console (it is the
// path @astrojs/sitemap generates). During maintenance that integration is
// dropped, so without this the catch-all in _redirects would answer the URL
// with the maintenance HTML — and Search Console would record an invalid
// "sitemap is HTML" error against the domain. An empty but valid index is the
// honest answer: nothing to crawl right now.
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
