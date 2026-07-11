import React, { useEffect, useRef } from "react"
import Link from "./link"
import { ArrowUpRight, ArrowLeft, ArrowRight, Check } from "lucide-react"

import Reveal from "./reveal"
import CTA from "./sections/cta"
import styles from "./project-detail.module.css"

const ProjectDetail = ({ project, prevProject, nextProject }) => {
  const coverRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    let ctx
    let cancelled = false

    // One-time zoom-settle entrance: the image starts slightly scaled up and
    // eases to scale 1, so nothing stays cropped once the animation finishes.
    import("gsap").then(({ gsap }) => {
      if (cancelled) return
      ctx = gsap.context(() => {
        const img = coverRef.current
        if (!img) return
        gsap.fromTo(
          img,
          { scale: 1.08 },
          { scale: 1, duration: 1.4, delay: 0.15, ease: "power3.out" }
        )
      })
    })

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
              srcSet={`${project.imageSm} 800w, ${project.image} 1600w`}
              sizes="(max-width: 900px) 100vw, 1100px"
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

      {/* Process — editorial numbered rows, same language as the About page. */}
      <section className={`section ${styles.approachSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow tp_fade_anim">Process</span>
              <h2 className="section-title tp_title_anim">
                Approach &amp; <span className="text-accent">process</span>
              </h2>
            </div>
            <p className={`${styles.sectionSub} tp_fade_anim`} data-fade-from="right">
              How the project moved from first brief to shipped product.
            </p>
          </div>

          <div className={styles.approachList}>
            {project.approach.map((step, idx) => (
              <div
                key={step.title}
                className={`${styles.approachRow} tp_fade_anim`}
                data-delay={`${0.08 + idx * 0.08}`}
              >
                <span className={styles.approachIndex} aria-hidden="true">
                  0{idx + 1}
                </span>
                <h3 className={styles.approachTitle}>{step.title}</h3>
                <p className={styles.approachDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & outcome — statement card + check-marked results. */}
      <section className={`section ${styles.solvedSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow tp_fade_anim">Challenge &amp; outcome</span>
              <h2 className="section-title tp_title_anim">
                What we <span className="text-accent">solved</span>
              </h2>
            </div>
            <p className={`${styles.sectionSub} tp_fade_anim`} data-fade-from="right">
              The core constraint behind the project — and what shipped in the
              end.
            </p>
          </div>

          <div className={styles.solvedGrid}>
            <div className={`${styles.challengeCard} tp_fade_anim`}>
              <span className={styles.solvedLabel}>The challenge</span>
              <p className={styles.challengeText}>{project.challenge}</p>
            </div>
            <div className={styles.outcomeCol}>
              <span className={styles.solvedLabel}>The outcome</span>
              <ul className={styles.outcomeList}>
                {project.outcome.map((point, i) => (
                  <li
                    key={i}
                    className={`${styles.outcomeItem} tp_fade_anim`}
                    data-delay={`${0.1 + i * 0.08}`}
                  >
                    <span className={styles.outcomeCheck}>
                      <Check size={15} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
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
