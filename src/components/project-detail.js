import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"

import Reveal from "./reveal"
import CTA from "./sections/cta"
import * as styles from "./project-detail.module.css"

const ProjectDetail = ({ project, prevProject, nextProject }) => {
  const coverRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    let ctx
    let cancelled = false

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          const img = coverRef.current
          if (!img) return
          gsap.fromTo(
            img,
            { scale: 1.12, yPercent: -4 },
            {
              scale: 1,
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          )
        })
      }
    )

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.blob} aria-hidden="true" />
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/work/">Work</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{project.title}</span>
          </nav>

          <Reveal>
            <span className={styles.eyebrow}>
              <span className={styles.dot} />
              {project.category}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className={styles.title}>{project.title}</h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={styles.desc}>{project.desc}</p>
          </Reveal>
        </div>
      </header>

      <section className={styles.coverSection}>
        <div className="container">
          <div className={styles.coverWrap}>
            <img
              ref={coverRef}
              src={project.image}
              alt={`${project.title} website preview`}
              width="1600"
              height="1000"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className={styles.coverImg}
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.metaSection}`}>
        <div className="container">
          <div className={styles.metaGrid}>
            <Reveal y={20}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
            </Reveal>
            <Reveal y={20} delay={0.05}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>{project.industry}</span>
              </div>
            </Reveal>
            <Reveal y={20} delay={0.1}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
            </Reveal>
            <Reveal y={20} delay={0.15}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Live Site</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.metaLink}
                >
                  Visit site <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <Reveal className={styles.overviewCol}>
              <span className="eyebrow">Overview</span>
              <h2 className={`section-title ${styles.sectionHeading}`}>
                The brief
              </h2>
            </Reveal>
            <div className={styles.overviewText}>
              {project.overview.split("\n\n").map((para, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.approachSection}`}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Process</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={`section-title ${styles.sectionHeading}`}>
              Approach &amp; process
            </h2>
          </Reveal>

          <div className={styles.approachGrid}>
            {project.approach.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.08} y={30}>
                <div className={styles.approachCard}>
                  <span className={styles.approachIndex}>0{idx + 1}</span>
                  <h3 className={styles.approachTitle}>{step.title}</h3>
                  <p className={styles.approachDesc}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <Reveal className={styles.overviewCol}>
              <span className="eyebrow">Challenge &amp; outcome</span>
              <h2 className={`section-title ${styles.sectionHeading}`}>
                What we solved
              </h2>
            </Reveal>
            <div className={styles.overviewText}>
              <Reveal>
                <p>{project.challenge}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className={styles.outcomeList}>
                  {project.outcome.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <nav className={styles.projectNav} aria-label="Other projects">
        <Link to={`/work/${prevProject.slug}/`} className={styles.navPrev}>
          <span className={styles.navArrow}>
            <ArrowLeft size={18} />
          </span>
          <span>
            <span className={styles.navLabel}>Previous</span>
            <span className={styles.navTitle}>{prevProject.title}</span>
          </span>
        </Link>
        <Link to={`/work/${nextProject.slug}/`} className={styles.navNext}>
          <span>
            <span className={styles.navLabel}>Next</span>
            <span className={styles.navTitle}>{nextProject.title}</span>
          </span>
          <span className={styles.navArrow}>
            <ArrowRight size={18} />
          </span>
        </Link>
      </nav>

      <CTA />
    </article>
  )
}

export default ProjectDetail
