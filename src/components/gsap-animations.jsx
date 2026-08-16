import { useEffect } from "react"
import { prefersReducedMotion } from "../utils/motion"

/**
 * Global scroll-animation engine modeled on the "Aleric" template that powers
 * jaysupeda.com. Components opt in with class names + data attributes:
 *
 * - .tp_fade_anim   — fade/slide in on scroll. data-fade-from (bottom|top|left|right),
 *                     data-fade-offset, data-duration, data-delay, data-ease, data-on-scroll
 * - .tp_title_anim  — headline lines flip up in 3D (SplitText lines, rotationX)
 * - .tp_text_invert — paragraph lines "ink in" left→right, scrubbed to scroll
 * - .anim-zoomin    — image scales down from 1.4 inside an overflow-hidden wrap
 * - .scale-up-img / .scale-up — slow scrubbed zoom while scrolling past
 * - .moving-text / .wrapper-text — marquee row nudged horizontally by scroll
 * - .tp-btn-trigger / .tp-btn-bounce — button drops in with a bounce
 */
/**
 * Failure fallback. The CSS default for every animated element is *visible* —
 * the hidden state only ever exists as inline styles GSAP writes — so a page
 * where GSAP never loads at all is already fine, and a `.no-js` class would be
 * a no-op. The dangerous case is a partial failure: GSAP loads, writes the
 * "from" state, then throws before ScrollTrigger can reveal anything, leaving
 * everything below the fold permanently blank. Clearing the inline styles GSAP
 * owns restores the CSS default.
 */
const ANIMATED = ".tp_fade_anim, .anim-zoomin, .tp-btn-bounce"

/** Everything this engine reads or restructures — used to decide which islands
 *  must be hydrated before it is safe to touch the DOM. */
const ANIMATED_CONTENT =
  ".tp_fade_anim, .tp_title_anim, .tp_text_invert, .anim-zoomin, .scale-up-img, .moving-text, .tp-btn-bounce"
const revealAll = () => {
  if (typeof document === "undefined") return
  document.querySelectorAll(ANIMATED).forEach((el) => {
    el.style.opacity = ""
    el.style.visibility = ""
    el.style.transform = ""
  })
}

const GsapAnimations = ({ pathname }) => {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Reduce-motion: skip the engine entirely. Every animated element's CSS
    // default is its final, visible state — the hidden/offset state only ever
    // exists as inline styles GSAP writes — so not running is exactly "render
    // content in its final state immediately". revealAll() clears anything a
    // previous run left behind (e.g. the user flipped the OS setting, or a
    // ClientRouter nav re-ran this effect).
    if (prefersReducedMotion()) {
      revealAll()
      return
    }

    let ctx
    let cancelled = false
    let cleanupFns = []

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/SplitText"),
    ]).then(([{ gsap }, { ScrollTrigger }, { SplitText }]) => {
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger, SplitText)

      const run = () => {
        if (cancelled) return
        ctx = gsap.context(() => {
          // 1. Fade anim (template #41)
          gsap.utils.toArray(".tp_fade_anim").forEach((item) => {
            const offset = parseFloat(item.getAttribute("data-fade-offset") || 40)
            const duration = parseFloat(item.getAttribute("data-duration") || 0.75)
            const from = item.getAttribute("data-fade-from") || "bottom"
            const onScroll = item.getAttribute("data-on-scroll") || "1"
            const delay = parseFloat(item.getAttribute("data-delay") || 0.15)
            const ease = item.getAttribute("data-ease") || "power2.out"
            const setting = {
              // Bare `opacity`, NOT `autoAlpha`. autoAlpha also writes
              // visibility:hidden, which pulls the element out of the
              // accessibility tree and out of the browser's find-in-page
              // index — so ~35 of 38 fade items on the homepage (project
              // names, testimonials, service copy) were invisible to Ctrl+F
              // and to a screen reader's heading list until scrolled into
              // view. Opacity keeps the text findable and announceable while
              // looking identical.
              //
              // The tradeoff this reverses: opacity:0 text still counts as
              // "rendered" to WAVE/Lighthouse, which alpha-blend it against
              // the background and may re-flag fade items as contrast
              // failures. Those are false positives on transient states;
              // real users losing Ctrl+F is not.
              opacity: 0,
              ease,
              duration,
              delay,
              x: from === "left" ? -offset : from === "right" ? offset : 0,
              y: from === "top" ? -offset : from === "bottom" ? offset : 0,
            }
            if (onScroll === "1") {
              setting.scrollTrigger = { trigger: item, start: "top 85%" }
            }
            gsap.from(item, setting)
          })

          // 2. Title line reveal — each line wipes up from below behind a mask
          gsap.utils.toArray(".tp_title_anim").forEach((el) => {
            const delay = parseFloat(el.getAttribute("data-delay") || 0.3)
            const split = new SplitText(el, { type: "lines", mask: "lines" })
            gsap.from(split.lines, {
              duration: 1,
              delay,
              yPercent: 110,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: { trigger: el, start: "top 85%" },
            })
          })

          // 3. Text invert with scroll (template #26)
          gsap.utils.toArray(".tp_text_invert").forEach((el) => {
            const split = new SplitText(el, { type: "lines" })
            split.lines.forEach((line) => {
              line.classList.add("invert-line")
              gsap.to(line, {
                backgroundPositionX: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: line,
                  scrub: 1,
                  start: "top 85%",
                  end: "bottom center",
                },
              })
            })
          })

          // 4. Zoom-in image reveal (template #28)
          gsap.utils.toArray(".anim-zoomin").forEach((el) => {
            const wrap = el.closest(".anim-zoomin-wrap") || el.parentElement
            if (wrap) wrap.style.overflow = "hidden"
            gsap.from(el, {
              duration: 2,
              autoAlpha: 0,
              scale: 1.4,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: { trigger: wrap, start: "top 100%" },
            })
          })

          // 5. Scrubbed scale-up while scrolling (template #29)
          gsap.utils.toArray(".scale-up-img").forEach((section) => {
            const target = section.querySelector(".scale-up")
            if (!target) return
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom center",
                  scrub: 1,
                },
              })
              .to(target, { scale: 1.15, duration: 1 })
          })

          // 6. Scroll-driven marquee (template moving_text)
          gsap.utils.toArray(".moving-text").forEach((section, index) => {
            const w = section.querySelector(".wrapper-text")
            if (!w) return
            const shift = Math.min(section.offsetWidth * 0.35, 420)
            const [x, xEnd] = index % 2 ? [-shift, 0] : [0, -shift]
            gsap.fromTo(
              w,
              { x },
              { x: xEnd, ease: "none", scrollTrigger: { trigger: section, scrub: 0.1 } }
            )
          })

          // 7. Bounce-in button (template #27)
          gsap.utils.toArray(".tp-btn-bounce").forEach((btn) => {
            gsap.set(btn, { y: -70, autoAlpha: 0 })
            gsap.to(btn, {
              scrollTrigger: {
                trigger: btn.closest(".tp-btn-trigger") || btn,
                start: "top center",
              },
              duration: 1,
              ease: "bounce.out",
              y: 0,
              autoAlpha: 1,
            })
          })
        })

        ScrollTrigger.refresh()
      }

      // Astro renders the page body as a separate `client:load` island. Running
      // SplitText (which restructures headings into line divs) or the fades
      // (which inject inline styles) before React finishes hydrating that island
      // corrupts hydration — React throws the server HTML away (errors
      // #418/#423/#425) and every animation silently dies.
      //
      // The previous gate — `load` event plus two animation frames — was a
      // guess. React 18 hydrates concurrently (Astro wraps island hydration in
      // startTransition), so a large tree can still be mid-hydration two frames
      // after `load`, which is exactly how 125+ hydration errors were reaching
      // production.
      //
      // Astro's island runtime gives an exact signal instead. In
      // astro-island.prebuilt.js the custom element does:
      //     await this.hydrator(this)(...); this.removeAttribute("ssr")
      // so an <astro-island> carrying `ssr` has NOT finished hydrating, and the
      // attribute disappears on the commit. Waiting for zero `astro-island[ssr]`
      // in the document is therefore a guarantee, not a heuristic.
      const whenIslandsHydrated = () =>
        new Promise((resolve) => {
          // Only islands that actually contain something this engine animates.
          // Counting *every* island would deadlock against the deferred
          // hydration strategies in Layout.astro: a `client:visible` Footer
          // keeps its `ssr` flag until it is scrolled into view, so a
          // whole-document check would stall every animation until the
          // watchdog fired. Cursor/ScrollToTop/SmoothScroll render no animated
          // markup either, so none of them need to be waited on.
          const pending = () =>
            Array.from(document.querySelectorAll("astro-island[ssr]")).filter(
              (island) => island.querySelector(ANIMATED_CONTENT)
            ).length
          if (pending() === 0) {
            resolve()
            return
          }
          let settle
          const obs = new MutationObserver(() => {
            if (pending() === 0) settle()
          })
          // A watchdog so a single island that never hydrates (chunk 404,
          // component throw) can't strand every animation forever.
          const timer = setTimeout(() => {
            console.warn(
              "[gsap-animations] islands still un-hydrated after 8s; animating anyway"
            )
            settle()
          }, 8000)
          settle = () => {
            clearTimeout(timer)
            obs.disconnect()
            resolve()
          }
          obs.observe(document.body, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ["ssr"],
          })
          cleanupFns.push(() => settle())
        })

      const whenLoaded = new Promise((resolve) => {
        if (document.readyState === "complete") resolve()
        else window.addEventListener("load", resolve, { once: true })
      })

      // fonts.ready matters so SplitText measures final line breaks.
      Promise.all([document.fonts?.ready, whenLoaded, whenIslandsHydrated()])
        .then(() => {
          try {
            run()
          } catch (err) {
            console.error("[gsap-animations] animation setup failed:", err)
            revealAll()
          }
        })
        .catch((err) => {
          console.error("[gsap-animations] gate failed:", err)
          revealAll()
        })

      cleanupFns.push(() => ctx?.revert())
    }).catch((err) => {
      console.error("[gsap-animations] failed to load GSAP:", err)
      revealAll()
    })

    return () => {
      cancelled = true
      cleanupFns.forEach((fn) => fn())
    }
  }, [pathname])

  return null
}

export default GsapAnimations
