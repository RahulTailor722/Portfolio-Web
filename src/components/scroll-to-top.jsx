import React, { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import styles from "./scroll-to-top.module.css"
import { scrollBehavior } from "../utils/motion"

/**
 * Floating back-to-top button. The circle fills like a water tank — two
 * rotating rounded-square "waves" ride on the surface — and the level tracks
 * how far down the page you've scrolled (0% at top, 100% at bottom).
 */
const ScrollToTop = () => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const y = window.scrollY
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0)
      setVisible(y > 240)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const level = `${(1 - progress) * 100}%`

  return (
    <button
      className={`${styles.btn} ${visible ? styles.show : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: scrollBehavior() })}
      aria-label="Back to top"
      data-cursor="hover"
    >
      <span className={styles.water} aria-hidden="true">
        <span className={styles.level} style={{ transform: `translateY(${level})` }}>
          <span className={`${styles.wave} ${styles.waveBack}`} />
          <span className={`${styles.wave} ${styles.waveFront}`} />
        </span>
      </span>
      <ArrowUp size={18} strokeWidth={2.2} className={styles.icon} />
      {/* Dark copy of the arrow, clipped to the water region so the icon
          stays readable against the accent fill as the level rises. */}
      <span
        className={styles.iconFill}
        style={{ clipPath: `inset(${level} 0 0 0)` }}
        aria-hidden="true"
      >
        <ArrowUp size={18} strokeWidth={2.2} />
      </span>
    </button>
  )
}

export default ScrollToTop
