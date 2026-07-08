import React, { useState, useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar"
import Footer from "./footer"
import Cursor from "./cursor"
import Preloader from "./preloader"

const Layout = ({ children, location }) => {
  const [loading, setLoading] = useState(true)
  const [pageLoading, setPageLoading] = useState(false)
  const prevPath = useRef("")

  useEffect(() => {
    const seen = window.sessionStorage.getItem("rt-preloaded")
    if (seen) {
      setLoading(false)
      return
    }
    const t = setTimeout(() => {
      setLoading(false)
      window.sessionStorage.setItem("rt-preloaded", "1")
    }, 900)
    return () => clearTimeout(t)
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
      const t = setTimeout(() => setPageLoading(false), 350)
      return () => clearTimeout(t)
    }
  }, [location?.pathname])

  useEffect(() => {
    document.body.style.overflow = loading || pageLoading ? "hidden" : ""
  }, [loading, pageLoading])

  const showLoader = loading || pageLoading

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {showLoader && (
          <Preloader key={pageLoading ? "page" : "initial"} showText={!pageLoading} />
        )}
      </AnimatePresence>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
