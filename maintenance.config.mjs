/**
 * SITE-WIDE MAINTENANCE SWITCH
 * ===========================================================================
 * Set to `false` and redeploy to bring the whole site back.
 *
 * Lives at the repo root, not in src/, because it decides WHICH source tree
 * Astro compiles — see `srcDir` in astro.config.mjs. While it is `true`:
 *
 *   srcDir  -> ./src-maintenance   (4 routes: /, 404, robots.txt, sitemap.xml)
 *   srcDir  -> ./src               when false (the real 17-route site)
 *
 * WHY A WHOLE SEPARATE TREE, rather than just rendering a different component
 * from inside the normal layout:
 *   Astro/Vite emit a hashed JS chunk for every island in the module graph,
 *   whether or not the page renders it. Those chunks carry the real page copy
 *   — dist/_astro/contact.*.js in the previous build contained the phone
 *   number and email address. Vite names them by a hash OF THEIR CONTENT, so
 *   unchanged source produces the SAME filename every build. Any cached or
 *   archived copy of the old /contact/ page therefore hands out a working URL
 *   to that file. "Not linked from any HTML" is not the same as unreachable.
 *   Pointing srcDir at a tree that never imports src/views, src/data/site.js
 *   or any island is the only way to guarantee the content is not in dist/ at
 *   all, and it is trivially checkable: grep the build output.
 *
 * NO MANUAL STEPS EITHER WAY — this flag is the whole switch. Verified:
 *   - `_redirects` and the Disallow `robots.txt` are written into dist/ by an
 *     `astro:build:done` hook in astro.config.mjs, so they exist only in a
 *     maintenance build. Nothing to delete from public/ afterwards.
 *   - `astro build` empties outDir first (tested with a planted file), so no
 *     maintenance-era file can survive into a live build, or vice versa.
 *   - src/ is byte-identical to its committed state; turning this off rebuilds
 *     exactly the site that was live before.
 *
 * WHAT THIS FLAG CANNOT REACH — check these in the Cloudflare dashboard:
 *   Every past Cloudflare Pages deployment stays live at its own
 *   <commit-hash>.<project>.pages.dev URL, serving the FULL old site. Those
 *   are not rebuilt and this flag does not touch them. Disable preview
 *   deployments, or put a Cloudflare Access policy in front of them, for the
 *   duration. Also purge the CDN cache after deploying, or edge-cached copies
 *   of the real pages keep being served until they expire.
 */
export const MAINTENANCE_MODE = true

/** Head copy for the maintenance screen. Deliberately brand-only. */
export const MAINTENANCE_META = {
  title: "Site Under Maintenance — Rahul Tailor",
  description:
    "This site is temporarily offline for scheduled maintenance and will be back shortly.",
}
