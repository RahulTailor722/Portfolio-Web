import React from "react"
import Link from "../components/link"
import { motion } from "framer-motion"

import { projects } from "../data/site"
import styles from "../styles/work.module.css"

const MotionLink = motion(Link)

const ProjectCard = ({ project, idx }) => {
  return (
    <MotionLink
      to={`/work/${project.slug}/`}
      className={`${styles.projectCard} ${idx % 2 === 1 ? styles.offset : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="View<br/>Case Study"
    >
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width="1600"
          height="1000"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.metaText}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.category}>{project.category}</span>
        </div>
        <span className={styles.year}>{project.year}</span>
      </div>
    </MotionLink>
  )
}

const WorkPage = () => {
  return (
    <div className={styles.workPage}>
        {/* Watermark hero — same concept as the About page. */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <span className={styles.watermark} aria-hidden="true">
            WORK
          </span>
          <div className="container">
            <p className={`${styles.eyebrow} tp_fade_anim`} data-delay="0.1">
              <span className={styles.dot} />
              My Portfolio
            </p>
            <h1 className={`${styles.heroTitle} tp_title_anim`} data-delay="0.2">
              Selected <span className={styles.heroOutline}>work.</span>
            </h1>
            <div className={styles.heroBottom}>
              <p className={`${styles.heroStatement} tp_text_invert`}>
                A showcase of web applications, design systems, and custom CMS
                themes crafted for performance and detail.
              </p>
              <span
                className={`${styles.projCount} tp_fade_anim`}
                data-fade-from="right"
                data-delay="0.4"
              >
                ({String(projects.length).padStart(2, "0")} projects)
              </span>
            </div>
          </div>
        </section>

        <div className="container">
          <div className={styles.projectGrid}>
            {projects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default WorkPage

