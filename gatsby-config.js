/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rahul Tailor — Senior Frontend Developer`,
    description: `Rahul Tailor is a Senior Frontend Developer with 6+ years of experience crafting fast, accessible, and delightful digital products.`,
    author: `Rahul Tailor`,
    siteUrl: `https://rahultailor.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rahul Tailor — Senior Frontend Developer`,
        short_name: `Rahul Tailor`,
        start_url: `/`,
        background_color: `#0b0b0c`,
        theme_color: `#0b0b0c`,
        display: `standalone`,
        icons: [
          {
            src: `/icons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/dev-404-page/`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://rahultailor.dev`,
        sitemap: `https://rahultailor.dev/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
  ],
}
