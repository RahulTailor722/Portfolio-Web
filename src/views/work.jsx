import React from "react"
import Link from "../components/link"
import { motion } from "framer-motion"

import Breadcrumbs from "../components/breadcrumbs"
import { projects, services } from "../data/site"
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
          srcSet={`${project.imageSm} 800w, ${project.image} 1600w`}
          sizes="(max-width: 768px) 90vw, 45vw"
          alt={`${project.title} — ${project.category}`}
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
        {/* This slot used to hold the build year, which quietly dated the
            older case studies. The market it shipped into is the more useful
            fact and the one the site's geo targeting rests on, so it takes
            the badge and comes out of the category line above. */}
        {project.market && (
          <span className={styles.market}>{project.market}</span>
        )}
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
            <Breadcrumbs
              className="tp_fade_anim"
              delay="0.05"
              items={[
                { name: "Home", path: "/" },
                { name: "Work", path: "/work/" },
              ]}
            />
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
          {/* Hub → hub link. Without this line the Work index has no outbound
              path except back to a project, which leaves the two content silos
              connected only through the nav and footer. */}
          <p className={styles.processLine}>
            Every project below ran through the same four stages —{" "}
            {services.map((service, i) => (
              <React.Fragment key={service.slug}>
                {i > 0 && (i === services.length - 1 ? ", and " : ", ")}
                <Link to={`/services/${service.slug}/`}>
                  {service.title.toLowerCase()}
                </Link>
              </React.Fragment>
            ))}
            . <Link to="/services/">See how each stage works</Link>.
          </p>

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

