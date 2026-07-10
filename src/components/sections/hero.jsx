import React, { useEffect, useRef } from "react"
import Link from "../link"
import { ArrowUpRight } from "lucide-react"
import styles from "./hero.module.css"

const Hero = () => {
  const rootRef = useRef(null)
  const botWrapRef = useRef(null)
  const botRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let ctx
    let cancelled = false
    let removeMouse

    // Hard load: the preloader curtain lifts at ~2.4s, so the robot lands
    // right as the page is revealed. Client-side navigation skips the wait.
    const hardLoad = !window.__rtPreloaded
    const baseDelay = hardLoad ? 2.1 : 0.35

    import("gsap").then(({ gsap }) => {
      if (cancelled || !rootRef.current) return

      ctx = gsap.context(() => {
        const bot = botRef.current
        const glow = glowRef.current

        gsap
          .timeline({ delay: baseDelay, defaults: { ease: "power3.out" } })
          .from(glow, { scale: 0, opacity: 0, duration: 1, ease: "back.out(1.6)" })
          .from(bot, { y: 90, opacity: 0, scale: 0.92, duration: 1.1 }, "-=0.6")
          .from(
            ".hero-ring",
            { scale: 0.5, opacity: 0, duration: 1, stagger: 0.15, transformOrigin: "50% 50%" },
            "-=0.7"
          )
          .from(
            ".hero-node",
            { scale: 0, opacity: 0, duration: 0.5, stagger: 0.05, transformOrigin: "50% 50%" },
            "-=0.6"
          )
          .from(
            `.${styles.pill}`,
            { y: 26, opacity: 0, stagger: 0.09, duration: 0.6 },
            "-=0.5"
          )

        const loopDelay = baseDelay + 1.8

        // Idle float on the robot (the mouse parallax below moves the wrapper,
        // so the two never write to the same transform).
        gsap.to(bot, {
          y: "-=16",
          duration: 3.4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: loopDelay,
        })
        gsap.to(glow, {
          scale: 1.18,
          duration: 2.6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: loopDelay,
        })
        gsap.utils.toArray(`.${styles.pill}`).forEach((pill, i) => {
          gsap.to(pill, {
            y: i % 2 ? 8 : -8,
            duration: 2.6 + i * 0.4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: loopDelay + i * 0.3,
          })
        })

        // Orbit rings slowly rotate around the robot.
        gsap.to(".hero-ring-a", {
          rotation: 360,
          duration: 26,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
          delay: loopDelay,
        })
        gsap.to(".hero-ring-b", {
          rotation: -360,
          duration: 34,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
          delay: loopDelay,
        })

        // Eye blink every few seconds.
        gsap
          .timeline({ repeat: -1, repeatDelay: 3.2, delay: loopDelay })
          .to(".hero-eye", { scaleY: 0.08, duration: 0.09, transformOrigin: "50% 50%" })
          .to(".hero-eye", { scaleY: 1, duration: 0.14, transformOrigin: "50% 50%" })

        // Antenna tip + chest core pulse.
        gsap.to(".hero-beacon", {
          opacity: 0.35,
          scale: 0.8,
          duration: 1.1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          transformOrigin: "50% 50%",
          delay: loopDelay,
        })

        // Mouse parallax on the whole composition.
        const wrapX = gsap.quickTo(botWrapRef.current, "x", { duration: 0.8, ease: "power3.out" })
        const wrapY = gsap.quickTo(botWrapRef.current, "y", { duration: 0.8, ease: "power3.out" })

        const onMove = (e) => {
          const nx = e.clientX / window.innerWidth - 0.5
          const ny = e.clientY / window.innerHeight - 0.5
          wrapX(nx * 26)
          wrapY(ny * 20)
        }
        window.addEventListener("mousemove", onMove, { passive: true })
        removeMouse = () => window.removeEventListener("mousemove", onMove)
      }, rootRef)
    }).catch((err) => console.error("[hero] failed to load GSAP:", err))

    return () => {
      cancelled = true
      removeMouse?.()
      ctx?.revert()
    }
  }, [])

  return (
    <section className={styles.hero} ref={rootRef}>
      <div className={styles.gridPattern} aria-hidden="true" />
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className="tp_fade_anim" data-delay="0.3">
              <div className={styles.tagline}>
                <span className={styles.taglineDot} />
                Available for freelance &amp; full-time
              </div>
            </div>

            <h1 className={`${styles.heading} tp_title_anim`} data-delay="0.4">
              Building <span className={styles.gradient}>intelligent web experiences</span> for new-age businesses
            </h1>

            <p className={`${styles.desc} tp_fade_anim`} data-delay="0.6">
              I&apos;m Rahul Tailor — a senior frontend developer merging
              intuitive UI/UX, modern frameworks, and AI-driven enhancements
              into products that feel effortless.
            </p>

            <div className={`${styles.actions} tp_fade_anim`} data-delay="0.75">
              <Link to="/contact/" className={styles.btnPrimary}>
                Let&apos;s build what you need <ArrowUpRight size={18} />
              </Link>
              <Link to="/work/" className={styles.btnOutline}>
                View my work
              </Link>
            </div>

          </div>

          <div className={styles.visual} aria-hidden="true">
            <div ref={glowRef} className={styles.touchGlow} />

            <div ref={botWrapRef} className={styles.botWrap}>
              <svg
                ref={botRef}
                className={styles.botSvg}
                viewBox="0 0 560 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="rt-head" x1="170" y1="180" x2="390" y2="380" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#232329" />
                    <stop offset="1" stopColor="#121215" />
                  </linearGradient>
                  <linearGradient id="rt-eye" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#c6f135" />
                    <stop offset="1" stopColor="#38e1c8" />
                  </linearGradient>
                  <radialGradient id="rt-core" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#38e1c8" />
                    <stop offset="1" stopColor="#38e1c8" stopOpacity="0" />
                  </radialGradient>
                  <filter id="rt-soft" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="8" />
                  </filter>
                </defs>

                {/* Neural constellation */}
                <g stroke="rgba(198,241,53,0.18)" strokeWidth="1">
                  <line x1="72" y1="120" x2="150" y2="170" />
                  <line x1="150" y1="170" x2="120" y2="255" />
                  <line x1="488" y1="140" x2="420" y2="196" />
                  <line x1="420" y1="196" x2="462" y2="270" />
                  <line x1="90" y1="430" x2="160" y2="392" />
                  <line x1="470" y1="420" x2="410" y2="380" />
                </g>
                <g fill="#c6f135">
                  <circle className="hero-node" cx="72" cy="120" r="4" opacity="0.7" />
                  <circle className="hero-node" cx="150" cy="170" r="3" opacity="0.5" />
                  <circle className="hero-node" cx="120" cy="255" r="4.5" opacity="0.6" />
                  <circle className="hero-node" cx="488" cy="140" r="4" opacity="0.7" />
                  <circle className="hero-node" cx="420" cy="196" r="3" opacity="0.5" />
                  <circle className="hero-node" cx="462" cy="270" r="4.5" opacity="0.6" />
                  <circle className="hero-node" cx="90" cy="430" r="3.5" opacity="0.55" />
                  <circle className="hero-node" cx="470" cy="420" r="3.5" opacity="0.55" />
                </g>

                {/* Orbit rings */}
                <g className="hero-ring hero-ring-a">
                  <ellipse cx="280" cy="300" rx="238" ry="92" stroke="rgba(198,241,53,0.28)" strokeWidth="1.4" strokeDasharray="3 7" />
                  <circle cx="518" cy="300" r="7" fill="#c6f135" />
                  <circle cx="42" cy="300" r="4" fill="#38e1c8" />
                </g>
                <g className="hero-ring hero-ring-b">
                  <ellipse cx="280" cy="300" rx="196" ry="150" stroke="rgba(56,225,200,0.22)" strokeWidth="1.2" transform="rotate(-24 280 300)" />
                  <circle cx="420" cy="180" r="5" fill="#38e1c8" />
                </g>

                {/* Shoulders */}
                <rect x="146" y="398" width="268" height="120" rx="56" fill="url(#rt-head)" stroke="#2c2c33" strokeWidth="2" />
                {/* Chest core */}
                <circle className="hero-beacon" cx="280" cy="470" r="26" fill="url(#rt-core)" />
                <circle cx="280" cy="470" r="11" fill="none" stroke="url(#rt-eye)" strokeWidth="2.5" />

                {/* Neck */}
                <rect x="254" y="366" width="52" height="42" rx="14" fill="#1a1a1f" stroke="#2c2c33" strokeWidth="2" />

                {/* Antenna */}
                <line x1="280" y1="140" x2="280" y2="176" stroke="#2c2c33" strokeWidth="5" strokeLinecap="round" />
                <circle className="hero-beacon" cx="280" cy="126" r="16" fill="#c6f135" opacity="0.35" filter="url(#rt-soft)" />
                <circle cx="280" cy="126" r="8" fill="#c6f135" />

                {/* Ear pods */}
                <rect x="130" y="240" width="34" height="86" rx="17" fill="#1a1a1f" stroke="#2c2c33" strokeWidth="2" />
                <rect x="396" y="240" width="34" height="86" rx="17" fill="#1a1a1f" stroke="#2c2c33" strokeWidth="2" />
                <rect x="140" y="262" width="14" height="42" rx="7" fill="#c6f135" opacity="0.5" />
                <rect x="406" y="262" width="14" height="42" rx="7" fill="#38e1c8" opacity="0.5" />

                {/* Head */}
                <rect x="158" y="176" width="244" height="204" rx="62" fill="url(#rt-head)" stroke="#2c2c33" strokeWidth="2" />
                {/* Visor */}
                <rect x="186" y="222" width="188" height="102" rx="48" fill="#0a0a0c" stroke="#26262b" strokeWidth="2" />

                {/* Eyes */}
                <rect className="hero-eye" x="222" y="258" width="42" height="20" rx="10" fill="url(#rt-eye)" />
                <rect className="hero-eye" x="296" y="258" width="42" height="20" rx="10" fill="url(#rt-eye)" />
                {/* Cheek lights */}
                <circle cx="206" cy="346" r="4" fill="#38e1c8" opacity="0.65" />
                <circle cx="354" cy="346" r="4" fill="#c6f135" opacity="0.65" />

                {/* Head shine */}
                <path d="M190 200 Q 280 178 370 200" stroke="rgba(255,255,255,0.14)" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <span className={styles.pill} style={{ top: "8%", left: "2%" }}>
              React
            </span>
            <span className={styles.pill} style={{ top: "20%", right: "0%" }}>
              Next.js
            </span>
            <span className={styles.pill} style={{ bottom: "24%", right: "2%" }}>
              HubSpot
            </span>
            <span className={styles.pill} style={{ bottom: "10%", left: "6%" }}>
              GSAP
            </span>
            <span className={styles.pill} style={{ bottom: "2%", left: "40%" }}>
              WordPress
            </span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollWheel} />
        Scroll
      </div>
    </section>
  )
}

export default Hero
