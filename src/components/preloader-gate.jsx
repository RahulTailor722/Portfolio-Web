import React, { useState, useEffect, useCallback } from "react"
import Preloader from "./preloader"
import { prefersReducedMotion } from "../utils/motion"

/**
 * Decides which curtain plays. `window.__rtPreloaded` is an in-memory flag
 * (not sessionStorage): it resets on every hard reload so the full
 * "RAHUL TAILOR" preloader always plays on first paint, but it survives
 * Astro's <ClientRouter /> page swaps, so internal navigation gets the short
 * text-less curtain — the same behavior the Gatsby layout had.
 *
 * The text flag flips in an effect (not in the initial state) so the client's
 * first render always matches the server HTML — no hydration mismatch.
 */
const PreloaderGate = () => {
  const [active, setActive] = useState(true)
  const [showText, setShowText] = useState(true)

  const handleDone = useCallback(() => {
    setActive(false)
    if (typeof window !== "undefined") window.__rtPreloaded = true
  }, [])

  useEffect(() => {
    // Reduce-motion: drop the curtain immediately rather than playing the
    // 2.4s letter-stagger + SVG wipe. Dismissed from an effect, never from
    // initial state — `active` must start `true` on the client so the first
    // render still matches the server HTML.
    if (prefersReducedMotion()) {
      handleDone()
      return
    }
    if (window.__rtPreloaded) setShowText(false)
  }, [handleDone])

  // Lock scrolling while the curtain is up (was on the Gatsby layout).
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [active])

  return active ? <Preloader showText={showText} onComplete={handleDone} /> : null
}

export default PreloaderGate
