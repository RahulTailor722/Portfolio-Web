import React from "react"
import styles from "./marquee.module.css"

const items = [
  "Frontend Development",
  "React",
  "Next.js",
  "Motion Design",
  "HubSpot CMS",
  "WordPress",
  "Design Systems",
  "TypeScript",
  "Performance",
]

const Marquee = () => {
  // 4 copies keep the -50% loop seamless: half the track is 18 spans (even),
  // so the solid/outline alternation lines up across the seam.
  const track = [...items, ...items, ...items, ...items]
  return (
    <div className={`${styles.wrap} moving-text`} aria-hidden="true">
      {/* Outer div is nudged horizontally by scroll (GSAP scrub); the inner
          track keeps the continuous CSS loop. */}
      <div className="wrapper-text">
        <div className={styles.track}>
          {track.map((item, i) => (
            <span key={i} className={i % 2 ? styles.outline : styles.solid}>
              {item}
              <span className={styles.star}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
