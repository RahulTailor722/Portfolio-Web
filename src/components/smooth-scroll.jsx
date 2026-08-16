import { useEffect } from "react"
import { prefersReducedMotion } from "../utils/motion"

/**
 * Lenis smooth scroll, wired into the GSAP ticker so ScrollTrigger scrubs
 * (parallax, pinned service panels, text-invert) stay perfectly in sync —
 * the same setup the "Aleric" template on jaysupeda.com uses.
 */
const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Reduce-motion: hand scrolling back to the browser. Lenis's eased,
    // momentum-based scroll is exactly the kind of vestibular trigger the
    // preference exists to switch off.
    if (prefersReducedMotion()) return

    let cancelled = false
    let lenis
    let tickerFn

    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)

      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      })

      // Keep ScrollTrigger updated on every Lenis scroll frame.
      lenis.on("scroll", ScrollTrigger.update)

      // Drive Lenis from GSAP's ticker instead of a second rAF loop.
      tickerFn = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(tickerFn)
      gsap.ticker.lagSmoothing(0)
    }).catch((err) => console.error("[smooth-scroll] failed to load Lenis/GSAP:", err))

    return () => {
      cancelled = true
      if (tickerFn) {
        import("gsap").then(({ gsap }) => gsap.ticker.remove(tickerFn))
      }
      lenis?.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll
