import React, { useRef } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import PageHeader from "../components/page-header"
import { useTilt } from "../hooks/use-tilt"
import Seo from "../components/seo"
import { projects } from "../data/site"
import * as styles from "../styles/work.module.css"

const MotionLink = motion(Link)

const ProjectCard = ({ project, idx }) => {
  const cardRef = useRef(null)
  useTilt(cardRef, { max: 6 })

  return (
    <MotionLink
      to={`/work/${project.slug}/`}
      ref={cardRef}
      className={styles.projectCard}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionLink>
  )
}

const WorkPage = () => {
  return (
    <div className={styles.workPage}>
        <PageHeader
          eyebrow="My Portfolio"
          title="Selected Work"
          subtitle="A showcase of web applications, design systems, and custom CMS themes crafted for performance and detail."
        />

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

export const Head = () => (
  <Seo
    title="Selected Work"
    description="A showcase of real e-commerce, corporate, and careers websites built for performance, accessibility, and conversion."
    pathname="/work/"
  />
)
