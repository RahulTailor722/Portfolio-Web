import React from "react"
import { Link } from "gatsby"
import { ArrowUpRight, Check } from "lucide-react"

import Reveal from "./reveal"
import CTA from "./sections/cta"
import { projects } from "../data/site"
import * as styles from "./service-detail.module.css"

const ServiceDetail = ({ service, prevService, nextService }) => {
  const relatedProjects = projects
    .filter((p) => p.tags.some((t) => service.tags.includes(t)))
    .slice(0, 3)

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.blob} aria-hidden="true" />
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{service.title}</span>
          </nav>

          <Reveal>
            <span className={styles.eyebrow}>
              <span className={styles.dot} />
              Service {service.id}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className={styles.title}>{service.title}</h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={styles.desc}>{service.longDesc}</p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className={styles.tags}>
              {service.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <Reveal className={styles.col}>
              <span className="eyebrow">What's included</span>
              <h2 className={`section-title ${styles.sectionHeading}`}>
                Deliverables
              </h2>
            </Reveal>
            <div className={styles.deliverables}>
              {service.deliverables.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <div className={styles.deliverableItem}>
                    <span className={styles.checkIcon}>
                      <Check size={16} />
                    </span>
                    <span>{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <div className="container">
            <Reveal>
              <span className="eyebrow">In practice</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className={`section-title ${styles.sectionHeading}`}>
                Related work
              </h2>
            </Reveal>

            <div className={styles.relatedGrid}>
              {relatedProjects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.08} y={30}>
                  <Link
                    to={`/work/${project.slug}/`}
                    className={styles.relatedCard}
                    data-cursor="View<br/>Case Study"
                  >
                    <div className={styles.relatedImageWrap}>
                      <img
                        src={project.imageSm || project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="500"
                        className={styles.relatedImage}
                      />
                    </div>
                    <div className={styles.relatedMeta}>
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <nav className={styles.serviceNav} aria-label="Other services">
        <Link to={`/services/${prevService.slug}/`} className={styles.navPrev}>
          <span>
            <span className={styles.navLabel}>Previous</span>
            <span className={styles.navTitle}>{prevService.title}</span>
          </span>
        </Link>
        <Link to={`/services/${nextService.slug}/`} className={styles.navNext}>
          <span>
            <span className={styles.navLabel}>Next</span>
            <span className={styles.navTitle}>{nextService.title}</span>
          </span>
          <ArrowUpRight size={18} />
        </Link>
      </nav>

      <CTA />
    </article>
  )
}

export default ServiceDetail
