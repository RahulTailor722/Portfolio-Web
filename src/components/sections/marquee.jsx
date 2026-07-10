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
  const track = [...items, ...items]
  return (
    <div className={`${styles.wrap} moving-text`} aria-hidden="true">
      {/* Outer div is nudged horizontally by scroll (GSAP scrub); the inner
          track keeps the continuous CSS loop. */}
      <div className="wrapper-text">
        <div className={styles.track}>
          {track.map((item, i) => (
            <span key={i} className={styles.item}>
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
