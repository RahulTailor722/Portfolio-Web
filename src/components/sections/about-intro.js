import React, { useEffect, useRef, useState } from "react"
import { Reveal } from "../reveal"
import { skills, techStack } from "../../data/site"
import * as styles from "./about-intro.module.css"

const RingSkill = ({ skill, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={styles.skillCard}>
      <div className={styles.ring}>
        <svg viewBox="0 0 36 36" className={styles.ringSvg}>
          <path className={styles.ringBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path
            className={styles.ringFill}
            strokeDasharray={visible ? `${skill.level}, 100` : "0, 100"}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className={styles.ringPct}>{visible ? skill.level : 0}%</span>
      </div>
      <span className={styles.skillName}>{skill.name}</span>
    </div>
  )
}

const AboutIntro = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <Reveal>
              <span className="eyebrow">About me</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className={`section-title ${styles.heading}`}>
                I design &amp; build interfaces that feel{" "}
                <span className="text-accent">effortless</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                With over 6 years in the industry, I&apos;ve helped startups and
                agencies ship products that are as performant as they are
                beautiful. I care deeply about clean code, thoughtful motion and
                accessible experiences for everyone.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className={styles.factRow}>
                <div className={styles.factCard}>
                  <div className={styles.factIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </div>
                  <p className={styles.factNum}>6+</p>
                  <p className={styles.factLabel}>Years of experience</p>
                </div>
                <div className={styles.factCard}>
                  <div className={styles.factIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
                  </div>
                  <p className={styles.factNum}>60+</p>
                  <p className={styles.factLabel}>Projects shipped</p>
                </div>
                <div className={styles.factCard}>
                  <div className={styles.factIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <p className={styles.factNum}>30+</p>
                  <p className={styles.factLabel}>Happy clients</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className={styles.right}>
            <Reveal delay={0.1}>
              <p className={styles.skillsTitle}>Tech stack &amp; expertise</p>
            </Reveal>
            <div className={styles.chipGrid}>
              {techStack.map((tech) => (
                <div key={tech} className={styles.chip}>
                  {tech}
                </div>
              ))}
            </div>
            <div className={styles.skillsGrid}>
              {skills.map((skill, i) => (
                <RingSkill key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
