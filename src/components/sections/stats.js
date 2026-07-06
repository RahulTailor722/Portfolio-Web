import React, { useEffect, useRef, useState } from "react"
import { stats } from "../../data/site"
import * as styles from "./stats.module.css"

const Counter = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1600
            const start = performance.now()
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setDisplay(Math.round(eased * value))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <p className={styles.value}>
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className={styles.label}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
