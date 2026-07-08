import React from "react"

const SITE_URL = "https://rahultailor.dev"
const DEFAULT_TITLE = "Rahul Tailor — Senior Frontend Developer"
const DEFAULT_DESC =
  "Rahul Tailor is a Senior Frontend Developer with 6+ years of experience crafting fast, accessible, and delightful digital products."
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`

export const Seo = ({
  title,
  description,
  image,
  pathname = "/",
  type = "website",
  structuredData,
}) => {
  const fullTitle = title ? `${title} — Rahul Tailor` : DEFAULT_TITLE
  const desc = description || DEFAULT_DESC
  const ogImage = image ? `${SITE_URL}${image}` : DEFAULT_IMAGE
  const ogImageWidth = image ? "1600" : "1200"
  const ogImageHeight = image ? "1000" : "630"
  const canonical = `${SITE_URL}${pathname}`

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul Tailor",
    jobTitle: "Senior Frontend Developer",
    url: SITE_URL,
    sameAs: ["https://www.linkedin.com/in/rahultailor/", "https://github.com/rahultailor"],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rahul Tailor",
    url: SITE_URL,
  }

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0b0b0c" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:site_name" content="Rahul Tailor" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {structuredData &&
        (Array.isArray(structuredData) ? structuredData : [structuredData]).map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
    </>
  )
}

export default Seo
