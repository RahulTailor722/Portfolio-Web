import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { ArrowUpRight } from "lucide-react"
import * as styles from "./hero.module.css"

const Hero = () => {
  const blobRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (blobRef.current) {
        blobRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
      }
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className={styles.hero}>
      <div ref={blobRef} className={styles.orb} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.gridPattern} aria-hidden="true" />

      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.tagline}>
              <span className={styles.taglineDot} />
              Available for freelance &amp; full-time
            </div>

            <h1 className={styles.heading}>
              Building the web,{" "}
              <span className={styles.gradient}>one pixel at a time</span>
            </h1>

            <p className={styles.desc}>
              I create impactful digital solutions by merging intuitive UI/UX,
              modern frontend technologies, and AI-driven enhancements.
            </p>

            <div className={styles.actions}>
              <Link to="/work/" className={styles.btnPrimary}>
                View my work <ArrowUpRight size={18} />
              </Link>
              <Link to="/contact/" className={styles.btnOutline}>
                Let&apos;s Talk
              </Link>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>6+</span>
                <span className={styles.statLabel}>Years Exp.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>60+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30+</span>
                <span className={styles.statLabel}>Clients</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.profileWrap} ref={imgRef}>
              <div className={styles.profileGlow} />
              <div className={styles.profileBorder} />
              <img
                src="/images/profile.svg"
                alt="Rahul Tailor"
                className={styles.profileImg}
              />
            </div>

            <div className={styles.techPill} style={{ top: "12%", right: "-5%" }}>
              React
            </div>
            <div className={styles.techPill} style={{ bottom: "28%", left: "-10%" }}>
              TypeScript
            </div>
            <div className={styles.techPill} style={{ bottom: "8%", right: "8%" }}>
              Next.js
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
