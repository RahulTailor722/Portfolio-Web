import React from "react"
import Hero from "../components/sections/hero"
import Marquee from "../components/sections/marquee"
import AboutIntro from "../components/sections/about-intro"
import FeaturedWork from "../components/sections/featured-work"
import Services from "../components/sections/services"
import DesignProcess from "../components/sections/design-process"
import Testimonials from "../components/sections/testimonials"
import Stats from "../components/sections/stats"
import CTA from "../components/sections/cta"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutIntro />
      <FeaturedWork />
      <Services />
      <DesignProcess />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title="Rahul Tailor — Senior Frontend Developer" />
