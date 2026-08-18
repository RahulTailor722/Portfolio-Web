import React, { useEffect, useRef, useState } from "react"
import Link from "./link"
import { ArrowUpRight, ArrowLeft, ArrowRight, Check } from "lucide-react"

import Breadcrumbs from "./breadcrumbs"
import Reveal from "./reveal"
import CTA from "./sections/cta"
import { getServicesForProject, getRelatedProjects } from "../data/site"
import styles from "./project-detail.module.css"

/**
 * Renders the services a project used as a readable sentence fragment
 * ("UI/UX design, frontend development, and deployment") rather than a row of
 * pills. In-body links inside prose are the ones that actually carry topical
 * weight — a chip row reads as navigation furniture and gets discounted.
 */
const ServiceSentence = ({ items }) =>
  items.map((service, i) => {
    const isLast = i === items.length - 1
    const separator = !i ? "" : items.length === 2 ? " and " : isLast ? ", and " : ", "
    return (
      <React.Fragment key={service.slug}>
        {separator}
        <Link to={`/services/${service.slug}/`}>
          {service.title.toLowerCase()}
        </Link>
      </React.Fragment>
    )
  })

/**
 * Bare domain for the stage's address line ("us.armsofeve.com"). Falls back to
 * null rather than throwing on a malformed URL — a missing address is
 * survivable, a crashed island is not.
 */
const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return null
  }
}

/**
 * Related work as a full-bleed takeover index.
 *
 * Four card treatments were tried here and all four failed the same way: they
 * asked how to arrange three screenshots in boxes, and the answer was always a
 * widget — project names at ~1rem, images at ~400px, a block that reads as
 * footer furniture at the end of a page whose hero type runs to 7rem.
 *
 * This inverts it. The names ARE the artwork: outlined display type at up to
 * 4.4rem, filling solid on hover, in edge-to-edge hairline rows — the site's
 * own watermark/heroOutline/index-row language, at the scale the rest of the
 * site uses. The screenshot stays uncropped at 16:10, sized off the row
 * height, and a blurred ghost of it washes the row on hover for atmosphere.
 */
const RelatedIndex = ({ projects }) => (
  <div className={styles.takeover}>
    {projects.map((related, i) => (
      <Link
        key={related.slug}
        to={`/work/${related.slug}/`}
        className={`${styles.takeRow} tp_fade_anim`}
        data-delay={`${0.08 + i * 0.08}`}
        data-cursor="View<br/>Case Study"
      >
        {/* Atmosphere only — the legible copy of this shot is the framed one
            on the right. Blurred and heavily dimmed so it never competes with
            the type sitting on top of it. */}
        <img
          src={related.imageSm}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={styles.takeGhost}
        />

        <span className={styles.takeInner}>
          <span className={styles.takeText}>
            <span className={styles.takeName}>{related.title}</span>
            <span className={styles.takeMeta}>
              {related.category}
              {related.market && ` · ${related.market}`}
            </span>
            {/* One shipped outcome per row. A name and a category say what the
                project was; this is the only line that says what it did. */}
            {related.outcome?.[0] && (
              <span className={styles.takeResult}>{related.outcome[0]}</span>
            )}
          </span>

          <span className={styles.takeShot}>
            {/* Inner wrapper owns the hover scale so it never collides with the
                scroll-driven drift running on the image itself. */}
            <span className={styles.takeShotInner}>
              <img
                src={related.imageSm}
                srcSet={`${related.imageSm} 800w, ${related.image} 1600w`}
                sizes="(max-width: 900px) 92vw, 400px"
                alt={`${related.title} — ${related.category}`}
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
              />
            </span>
          </span>

          <span className={styles.takeCta}>
            <span className={styles.takeCtaLabel}>Read case study</span>
            <span className={styles.takeDisc} aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </span>
        </span>
      </Link>
    ))}
  </div>
)

const ProjectDetail = ({ project, prevProject, nextProject }) => {
  const coverRef = useRef(null)
  // The work→service half of the cross-silo linking, plus relevance-scored
  // sibling case studies. Prev/next below is index order, which says nothing
  // about how alike two projects are.
  const projectServices = getServicesForProject(project)
  const relatedProjects = getRelatedProjects(project)

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
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Work", path: "/work/" },
              { name: project.title, path: `/work/${project.slug}/` },
            ]}
          />

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
            {project.market && (
              <Reveal y={20} delay={0.1}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Market</span>
                  <span className={styles.metaValue}>{project.market}</span>
                </div>
              </Reveal>
            )}
            {projectServices.length > 0 && (
              <Reveal y={20} delay={0.15}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Scope</span>
                  {/* Replaces the old "Year" cell. A date only tells a reader
                      how old the work is — it ages every case study a little
                      more each January while saying nothing about what was
                      actually delivered. The scope is the fact a prospect is
                      trying to establish, and it never goes stale.

                      Plain text on purpose: these services are already linked
                      as prose in the overview below, and that in-body link is
                      the one that carries weight. */}
                  <span className={`${styles.metaValue} ${styles.metaScope}`}>
                    {projectServices.map((service) => (
                      <span key={service.slug}>{service.title}</span>
                    ))}
                  </span>
                </div>
              </Reveal>
            )}
            <Reveal y={20} delay={0.2}>
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
              {projectServices.length > 0 && (
                <Reveal delay={0.24}>
                  <p className={styles.serviceLine}>
                    Delivered as{" "}
                    <ServiceSentence items={projectServices} /> — the same
                    stages every{" "}
                    <Link to="/services/">frontend engagement</Link> runs
                    through.
                  </p>
                </Reveal>
              )}
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

      {/* Related work — scored by shared service, industry, and market. */}
      {relatedProjects.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <div className="container">
            <div className={styles.sectionHead}>
              <div>
                <span className="eyebrow tp_fade_anim">Related work</span>
                <h2 className="section-title tp_title_anim">
                  Similar <span className="text-accent">projects</span>
                </h2>
              </div>
              <p
                className={`${styles.sectionSub} tp_fade_anim`}
                data-fade-from="right"
              >
                Other builds that share this project&apos;s process, industry,
                or market.
              </p>
            </div>

          </div>

          {/* Outside the container on purpose: the rail runs to both viewport
              edges, which is what sells it as something still in motion rather
              than a widget parked in a column. */}
          <RelatedIndex projects={relatedProjects} />
        </section>
      )}

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
