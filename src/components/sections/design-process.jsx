import React from "react"
import styles from "./design-process.module.css"

const steps = [
  {
    num: "01",
    label: "Discover",
    title: "Research & Strategy",
    desc: "I define project goals and user needs, creating wireframes and prototypes to guide a strategic design direction.",
  },
  {
    num: "02",
    label: "Define",
    title: "Architecture & Design",
    desc: "I architect scalable frontends and build reusable component libraries to ensure a consistent and efficient workflow.",
  },
  {
    num: "03",
    label: "Build",
    title: "Development & Testing",
    desc: "I write clean, modern code and integrate features, rigorously testing the application for functionality and usability.",
  },
  {
    num: "04",
    label: "Deliver",
    title: "Performance & Delivery",
    desc: "I optimize for speed and accessibility, ensuring the final product is a polished, high-performance experience.",
  },
]

const DesignProcess = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Split editorial header */}
        <div className={styles.header}>
          <div>
            <span className="eyebrow tp_fade_anim">How I work</span>
            <h2 className={`section-title ${styles.title} tp_title_anim`}>
              From idea to launch — a{" "}
              <span className="text-accent">proven process</span>
            </h2>
          </div>
          <p className={`${styles.subtitle} tp_fade_anim`} data-fade-from="right">
            A structured yet flexible workflow that moves from research and
            strategy through to polished delivery.
          </p>
        </div>

        {/* Editorial column grid */}
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} tp_fade_anim`}
              data-delay={`${0.1 + i * 0.1}`}
            >
              <div className={styles.stepHead}>
                <span className={styles.stepNum}>{step.num}</span>
                <span className={styles.stepLabel}>{step.label}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignProcess
