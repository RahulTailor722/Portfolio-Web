import React, { useState, useEffect, useRef, useCallback } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import Cursor from "./cursor"
import Preloader from "./preloader"
import GsapAnimations from "./gsap-animations"
import SmoothScroll from "./smooth-scroll"

const Layout = ({ children, location }) => {
  // In-memory flag (not sessionStorage): resets on every hard reload so the
  // curtain preloader always plays on load, but survives client-side
  // navigation so internal page changes use the short transition instead.
  const [loading, setLoading] = useState(true)
  const [pageLoading, setPageLoading] = useState(false)
  const prevPath = useRef("")

  const handleInitialDone = useCallback(() => {
    setLoading(false)
    if (typeof window !== "undefined") window.__rtPreloaded = true
  }, [])

  const handlePageDone = useCallback(() => {
    setPageLoading(false)
  }, [])

  useEffect(() => {
    if (!location) return
    if (!prevPath.current) {
      prevPath.current = location.pathname
      return
    }
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname
      setPageLoading(true)
    }
  }, [location?.pathname])

  useEffect(() => {
    document.body.style.overflow = loading || pageLoading ? "hidden" : ""
  }, [loading, pageLoading])

  return (
    <>
      <Cursor />
      <SmoothScroll />
      <GsapAnimations pathname={location?.pathname} />
      {loading && <Preloader showText onComplete={handleInitialDone} />}
      {!loading && pageLoading && (
        <Preloader key={location?.pathname} showText={false} onComplete={handlePageDone} />
      )}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
