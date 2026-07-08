import { useEffect } from "react"

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
const GsapAnimations = ({ pathname }) => {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

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

          // 2. Title line reveal (template #40)
          gsap.utils.toArray(".tp_title_anim").forEach((el) => {
            const delay = parseFloat(el.getAttribute("data-delay") || 0.3)
            const split = new SplitText(el, { type: "lines" })
            gsap.set(el, { perspective: 400 })
            gsap
              .timeline({
                scrollTrigger: { trigger: el, start: "top 85%" },
              })
              .from(split.lines, {
                duration: 1,
                delay,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
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

          // 7. Stacked pinned service panels (template #25) — desktop only
          const panels = gsap.utils.toArray(".tp-service-pp-panel")
          if (panels.length) {
            const mm = gsap.matchMedia()
            mm.add("(min-width: 1199px)", () => {
              panels.forEach((section, index) => {
                ScrollTrigger.create({
                  trigger: section,
                  pin: section,
                  scrub: 1,
                  start: `top ${130 + index * 130}px`,
                  end: "bottom 120%",
                  endTrigger: ".tp-service-pp-pin",
                  pinSpacing: false,
                })
              })
            })
            cleanupFns.push(() => mm.revert())
          }

          // 8. Bounce-in button (template #27)
          gsap.utils.toArray(".tp-btn-bounce").forEach((btn) => {
            gsap.set(btn, { y: -70, opacity: 0 })
            gsap.to(btn, {
              scrollTrigger: {
                trigger: btn.closest(".tp-btn-trigger") || btn,
                start: "top center",
              },
              duration: 1,
              ease: "bounce.out",
              y: 0,
              opacity: 1,
            })
          })
        })

        ScrollTrigger.refresh()
      }

      // Wait for fonts so SplitText measures the final line breaks.
      if (document.fonts?.ready) {
        document.fonts.ready.then(run)
      } else {
        run()
      }

      cleanupFns.push(() => ctx?.revert())
    })

    return () => {
      cancelled = true
      cleanupFns.forEach((fn) => fn())
    }
  }, [pathname])

  return null
}

export default GsapAnimations
