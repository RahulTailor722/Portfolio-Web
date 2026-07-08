import React from "react"
import * as styles from "./design-process.module.css"

const steps = [
  {
    num: "01",
    title: "Research & Strategy",
    desc: "I define project goals and user needs, creating wireframes and prototypes to guide a strategic design direction.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "I architect scalable frontends and build reusable component libraries to ensure a consistent and efficient workflow.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "I write clean, modern code and integrate features, rigorously testing the application for functionality and usability.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Performance & Delivery",
    desc: "I optimize for speed and accessibility, ensuring the final product is a polished, high-performance experience.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
      </svg>
    ),
  },
]

const DesignProcess = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow tp_fade_anim">How I work</span>
          <h2 className={`section-title ${styles.title} tp_title_anim`}>
            From idea to launch — a <span className="text-accent">proven process</span>
          </h2>
          <p className={`lead ${styles.subtitle} tp_fade_anim`} data-delay="0.3">
            A structured yet flexible workflow that moves from research and
            strategy through to polished delivery.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={step.num} className={`${styles.step} ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.stepConnector}>
                <div className={styles.stepDot}>
                  <span className={styles.stepDotNum}>{step.num}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.stepLine} />}
              </div>
              <div
                className={`${styles.stepCard} tp_fade_anim`}
                data-delay={`${0.1 + i * 0.08}`}
                data-fade-from={i % 2 === 0 ? "left" : "right"}
              >
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignProcess
