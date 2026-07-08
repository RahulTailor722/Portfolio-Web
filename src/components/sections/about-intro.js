import React, { useEffect, useRef, useState } from "react"
import { skills } from "../../data/site"
import * as styles from "./about-intro.module.css"

/* Big percentage counter that counts up when scrolled into view,
   like the purecounter numbers on the reference site. */
const SkillCounter = ({ value }) => {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1000
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}</span>
}

const AboutIntro = () => {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className="container">
        <div className={styles.titleWrap}>
          <span className={`${styles.subtitle} tp_fade_anim`}>About Me</span>
          <h2 className={`${styles.statement} tp_text_invert`}>
            I create impactful digital solutions by merging intuitive UI/UX,
            modern frontend technologies, and AI-driven enhancements.
          </h2>
        </div>

        <div className={styles.divider} aria-hidden="true">
          <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className={styles.skillGrid}>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`${styles.skillWrap} tp_fade_anim`}
              data-delay={`${0.1 + (i % 4) * 0.08}`}
            >
              <span className={styles.skillIcon}>
                <img src={skill.icon} alt={skill.name} loading="lazy" width="48" height="48" />
              </span>
              <div className={styles.skillContent}>
                <span className={styles.skillName}>{skill.name}</span>
                <h3 className={styles.skillPct}>
                  <SkillCounter value={skill.level} />%
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
