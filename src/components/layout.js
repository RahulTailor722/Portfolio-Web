import React, { useState, useEffect, useRef, useCallback } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import Cursor from "./cursor"
import Preloader from "./preloader"
import GsapAnimations from "./gsap-animations"

const Layout = ({ children, location }) => {
  const [loading, setLoading] = useState(true)
  const [pageLoading, setPageLoading] = useState(false)
  const prevPath = useRef("")

  useEffect(() => {
    if (window.sessionStorage.getItem("rt-preloaded")) {
      setLoading(false)
    }
  }, [])

  const handleInitialDone = useCallback(() => {
    setLoading(false)
    window.sessionStorage.setItem("rt-preloaded", "1")
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
