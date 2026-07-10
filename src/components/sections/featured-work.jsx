import React from "react"
import Link from "../link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "../../data/site"
import styles from "./featured-work.module.css"

const ProjectCard = ({ project, index }) => {
  return (
    <Link
      to={`/work/${project.slug}/`}
      className={`${styles.card} ${index % 2 === 1 ? styles.offset : ""} tp_fade_anim`}
      data-delay={`${0.15 + (index % 2) * 0.12}`}
      data-cursor="View<br/>Project"
    >
      <div className={styles.imageWrap}>
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className={styles.cardMeta}>
        <div className={styles.metaText}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.cardCat}>{project.category}</span>
        </div>
        <span className={styles.year}>{project.year}</span>
      </div>
    </Link>
  )
}

const FeaturedWork = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow tp_fade_anim">Selected work</span>
            <h2 className={`section-title ${styles.title} tp_title_anim`}>
              Featured projects
            </h2>
          </div>
          <Link
            to="/work/"
            className="btn btn-ghost tp_fade_anim"
            data-fade-from="right"
          >
            View all projects <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
