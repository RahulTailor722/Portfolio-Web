import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { ArrowUpRight } from "lucide-react"
import { useTilt } from "../../hooks/use-tilt"
import { projects } from "../../data/site"
import * as styles from "./featured-work.module.css"

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  useTilt(cardRef)

  return (
    <Link
      to={`/work/${project.slug}/`}
      ref={cardRef}
      className={`${styles.card} ${index % 2 === 1 ? styles.offset : ""}`}
      data-cursor="View<br/>Demo"
    >
      <div className={styles.imageWrap}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className={styles.year}>{project.year}</span>
        <span className={styles.hoverIcon}>
          <ArrowUpRight size={22} />
        </span>
      </div>
      <div className={styles.cardMeta}>
        <div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardCat}>{project.category}</p>
        </div>
        <div className={styles.tags}>
          {project.tags.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

const FeaturedWork = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    let ctx
    let cancelled = false

    // Loaded on demand: gsap + ScrollTrigger only drive a below-the-fold
    // parallax detail, so they shouldn't sit in the critical initial bundle.
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.utils.toArray(`.${styles.card}`).forEach((card) => {
            const img = card.querySelector("img")
            if (!img) return
            gsap.fromTo(
              img,
              { scale: 1.18, yPercent: -6 },
              {
                scale: 1,
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            )
          })
        }, rootRef)
      }
    )

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <section className="section" id="work" ref={rootRef}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className={`section-title ${styles.title}`}>Featured projects</h2>
          </div>
          <Link to="/work/" className="btn btn-ghost">
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
