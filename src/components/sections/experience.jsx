import React from "react"
import { Reveal } from "../reveal"
import { experience } from "../../data/site"
import styles from "./experience.module.css"

const ExperienceItem = ({ item }) => {
  return (
    <Reveal y={40}>
      <div className={styles.item}>
        <div className={styles.node} />
        <div className={styles.itemInner}>
          <span className={styles.period}>{item.period}</span>
          <h3 className={styles.role}>{item.role}</h3>
          <p className={styles.company}>{item.company}</p>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </div>
    </Reveal>
  )
}

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <span className="eyebrow">Career journey</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={`section-title ${styles.title}`}>
              6+ years of <span className="text-accent">building</span> the web
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              A snapshot of the teams and companies I&apos;ve grown with — from
              web design beginnings to Webflow and modern frontend development.
            </p>
          </Reveal>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />
          <div className={styles.items}>
            {experience.map((item) => (
              <ExperienceItem key={item.role + item.company} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
