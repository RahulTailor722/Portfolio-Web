import React from "react"
import * as styles from "./marquee.module.css"

const items = [
  "Frontend Development",
  "React",
  "Next.js",
  "Motion Design",
  "HubSpot CMS",
  "Design Systems",
  "TypeScript",
  "Performance",
]

const Marquee = () => {
  const track = [...items, ...items]
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {track.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.star}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
