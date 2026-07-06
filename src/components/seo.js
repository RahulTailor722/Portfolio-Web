import React from "react"

export const Seo = ({ title, description }) => {
  const fullTitle = title
    ? `${title} — Rahul Tailor`
    : "Rahul Tailor — Senior Frontend Developer"
  const desc =
    description ||
    "Rahul Tailor is a Senior Frontend Developer with 6+ years of experience crafting fast, accessible, and delightful digital products."
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0b0b0c" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.svg" />
    </>
  )
}

export default Seo
