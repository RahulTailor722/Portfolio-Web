import React, { useEffect, useRef, useState } from "react"
import Link from "../link"
import { stats } from "../../data/site"
import styles from "./stats.module.css"

const Counter = ({ value }) => {
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

  return <span ref={ref}>{display}</span>
}

const Stats = () => {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.intro} tp_fade_anim`}>
            <span className="eyebrow tp_fade_anim">By the numbers</span>
            <h2 className={styles.heading}>
              Proof in the <span className={styles.accent}>details</span>
            </h2>
            <p className={styles.lead}>
              Six years of shipping polished, high-performance interfaces —
              measured in outcomes, not promises.
            </p>
            <Link to="/work/" className={styles.introLink}>
              Explore the work
              <span className={styles.introArrow} aria-hidden="true">
                &#8594;
              </span>
            </Link>
          </div>

          <div className={styles.grid}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`${styles.stat} tp_fade_anim`}
                data-delay={`${0.1 + i * 0.1}`}
                data-num={String(i + 1).padStart(2, "0")}
              >
                <p className={styles.value}>
                  <Counter value={s.value} />
                  {s.suffix && <span className={styles.suffix}>{s.suffix}</span>}
                </p>
                <p className={styles.label}>{s.label}</p>
                <span className={styles.bar} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
