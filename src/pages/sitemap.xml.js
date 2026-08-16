// @astrojs/sitemap only ever emits sitemap-index.xml + sitemap-0.xml, but
// crawlers, Search Console and most SEO checkers probe /sitemap.xml first and
// would otherwise get a 404. This endpoint serves a sitemap index at that
// conventional path, pointing at the urlset the integration generates.
//
// A Cloudflare _redirects rule would also work in production, but it is
// invisible to `astro dev` and `astro preview` — an endpoint behaves the same
// in all three, so what you test locally is what ships.
//
// Single sitemap-0.xml is safe here: the integration only splits into
// sitemap-1.xml and beyond past `entryLimit` (default 45,000) URLs.
export const GET = ({ site }) => {
  const base = site?.href.replace(/\/$/, "") ?? "";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemap-0.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
