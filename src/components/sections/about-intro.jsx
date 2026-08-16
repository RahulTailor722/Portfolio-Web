import React, { useEffect, useRef, useState } from "react"
import { skills } from "../../data/site"
import styles from "./about-intro.module.css"

/* Big years-of-experience counter that counts up when scrolled into view,
   like the purecounter numbers on the reference site. */
const SkillItem = ({ skill, delay }) => {
  const ref = useRef(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1100
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(eased * skill.years))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [skill.years])

  return (
    <div ref={ref} className={`${styles.skillWrap} tp_fade_anim`} data-delay={delay}>
      <span className={styles.skillIcon}>
        <img src={skill.icon} alt="" loading="lazy" width="40" height="40" />
      </span>
      <div className={styles.skillContent}>
        <span className={styles.skillName}>{skill.name}</span>
        <h3 className={styles.skillPct}>
          {display}
          <span className={styles.pctSign}>{skill.years === 1 ? "yr" : "yrs"}</span>
        </h3>
      </div>
    </div>
  )
}

/* Floating "multiplayer" cursor tags decorating the heading. */
const floaters = [
  { label: "React", color: "#c6f135", pos: { top: "7%", left: "5%" } },
  { label: "UI / UX", color: "#38e1c8", pos: { top: "24%", left: "2%" } },
  { label: "Motion & GSAP", color: "#ff7a59", pos: { top: "9%", right: "6%" } },
  { label: "AI-driven", color: "#8b7dff", pos: { top: "26%", right: "3%" } },
]

const FloatingTag = ({ label, color, pos, i }) => (
  <span
    className={styles.cursor}
    style={{ ...pos, "--c": color, animationDelay: `${i * 0.6}s` }}
    aria-hidden="true"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 3.2L18.6 9.9c.9.46.75 1.8-.22 2.05l-5.02 1.3-2.02 4.86c-.39.94-1.74.82-1.96-.17L5.5 3.2Z"
        fill={color}
        stroke="#0b0b0c"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
    <span className={styles.cursorLabel}>{label}</span>
  </span>
)

const AboutIntro = () => {
  return (
    <section className={`section ${styles.section}`} id="about">
      {floaters.map((f, i) => (
        <FloatingTag key={f.label} {...f} i={i} />
      ))}
      <div className="container">
        <div className={styles.titleWrap}>
          <span className="eyebrow tp_fade_anim">About Me</span>
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
            <SkillItem
              key={skill.name}
              skill={skill}
              delay={`${0.1 + (i % 4) * 0.08}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
