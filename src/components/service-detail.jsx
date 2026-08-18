import React, { useEffect, useRef, useState } from "react"
import Link from "./link"
import { ArrowUpRight, Check } from "lucide-react"

import Breadcrumbs from "./breadcrumbs"
import CTA from "./sections/cta"
import { getProjectsForService } from "../data/site"
import styles from "./service-detail.module.css"

/**
 * Proof, as an editorial index rather than a card grid.
 *
 * The old three-up card wall said "template" — it was the same component this
 * site uses for related work, work cards and featured work, so a visitor met
 * it four times in one session. Rows carry more per line (result copy, market,
 * index numeral) and match the language already used by the deliverables list,
 * the case-study process rows and the services index.
 *
 * The cover image is what makes it immersive: on a pointer device it rides the
 * cursor with a lerp and a velocity-driven tilt, so browsing the list feels
 * like flicking through a physical stack. Touch devices never fire hover, so
 * they get the same image inline in the row instead — the visual is never
 * locked behind an interaction that device can't perform.
 */
const ProofIndex = ({ caseStudies }) => {
  const [active, setActive] = useState(-1)
  // The panel is only allowed to appear once it has been positioned under the
  // pointer at least once. Without this it can flash in the viewport corner
  // when the pointer arrives on a row without crossing the wrapper first —
  // which is exactly what a scroll-then-hover does.
  const [placed, setPlaced] = useState(false)
  const previewRef = useRef(null)
  // Mutable pointer/animation state. Deliberately a ref, not state: this
  // updates every frame and must never trigger a React render.
  const motion = useRef({ tx: 0, ty: 0, x: 0, y: 0, hw: 150, hh: 95, raf: 0 })

  // rAF is the only thing that can outlive the component here.
  useEffect(() => () => cancelAnimationFrame(motion.current.raf), [])

  const canFollow = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (min-width: 901px)").matches

  const clampToViewport = (e) => {
    const m = motion.current
    // Clamp to the viewport so the panel never hangs off an edge.
    m.tx = Math.min(Math.max(e.clientX, m.hw + 16), window.innerWidth - m.hw - 16)
    m.ty = Math.min(Math.max(e.clientY, m.hh + 16), window.innerHeight - m.hh - 16)
  }

  const draw = () => {
    const m = motion.current
    const panel = previewRef.current
    if (!panel) return
    // Tilt follows the distance still left to travel, i.e. pointer speed. The
    // clamp keeps a fast flick from spinning the panel.
    const tilt = Math.max(-9, Math.min(9, (m.tx - m.x) * 0.09))
    panel.style.transform = `translate3d(${m.x}px, ${m.y}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`
  }

  const loop = () => {
    const m = motion.current
    m.x += (m.tx - m.x) * 0.14
    m.y += (m.ty - m.y) * 0.14
    draw()
    m.raf = requestAnimationFrame(loop)
  }

  const start = (e) => {
    const m = motion.current
    const panel = previewRef.current
    if (panel) {
      const rect = panel.getBoundingClientRect()
      // Measured once per entry rather than per frame — a getBoundingClientRect
      // inside a mousemove handler is a forced layout on every pixel moved.
      m.hw = rect.width / 2 || m.hw
      m.hh = rect.height / 2 || m.hh
    }
    clampToViewport(e)
    // Start from under the pointer instead of sliding in from the last exit,
    // and write that position synchronously so the first painted frame is
    // already in the right place.
    m.x = m.tx
    m.y = m.ty
    draw()
    setPlaced(true)
    cancelAnimationFrame(m.raf)
    m.raf = requestAnimationFrame(loop)
  }

  // Entry is handled from the move handler too: a pointer can end up inside a
  // row without the wrapper's enter ever firing (teleport after a scroll, or a
  // page swap under a stationary cursor).
  const onMove = (e) => {
    if (!canFollow()) return
    if (!motion.current.raf) start(e)
    else clampToViewport(e)
  }

  const onLeave = () => {
    const m = motion.current
    cancelAnimationFrame(m.raf)
    m.raf = 0
    setActive(-1)
    setPlaced(false)
  }

  return (
    <div
      className={styles.proofIndex}
      onMouseEnter={onMove}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Hover sets the preview, not focus: a keyboard focus would light the
          panel with no pointer position to anchor it to, parking it in the
          viewport corner. The row's focus ring and accent rule carry that
          state instead. */}
      {caseStudies.map((project, i) => (
        <Link
          key={project.slug}
          to={`/work/${project.slug}/`}
          className={`${styles.proofRow} tp_fade_anim`}
          data-delay={`${0.08 + i * 0.08}`}
          onMouseEnter={() => setActive(i)}
        >
          <span className={styles.proofNum} aria-hidden="true">
            0{i + 1}
          </span>

          {/* Kept as a real h3 (inside a div, not a span — a heading is flow
              content and can't live in phrasing content) so the section still
              reads h2 → h3 in the outline. */}
          <div className={styles.proofMain}>
            <h3 className={styles.proofTitle}>
              {project.title}
              <ArrowUpRight className={styles.proofArrow} size={20} />
            </h3>
            <span className={styles.proofMeta}>
              {project.category}
              {project.market && ` · ${project.market}`}
            </span>
          </div>

          {/* The first shipped outcome, not the generic blurb — this row is
              meant to be evidence, so it should state what actually landed. */}
          {project.outcome?.[0] && (
            <span className={styles.proofResult}>{project.outcome[0]}</span>
          )}

          {/* Touch/narrow fallback for the cursor-tracked preview. */}
          <span className={styles.proofThumb} aria-hidden="true">
            <img
              src={project.imageSm}
              alt=""
              loading="lazy"
              decoding="async"
              width="800"
              height="500"
            />
          </span>
        </Link>
      ))}

      <div
        ref={previewRef}
        className={`${styles.preview} ${
          active >= 0 && placed ? styles.previewOn : ""
        }`}
        aria-hidden="true"
      >
        <div className={styles.previewInner}>
          {caseStudies.map((project, i) => (
            <img
              key={project.slug}
              src={project.imageSm}
              alt=""
              loading="lazy"
              decoding="async"
              width="800"
              height="500"
              className={`${styles.previewImg} ${
                active === i ? styles.previewImgOn : ""
              }`}
            />
          ))}
          <span className={styles.previewChip}>
            Case study <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </div>
  )
}

const ServiceDetail = ({ service, prevService, nextService }) => {
  // The service→work half of the cross-silo linking. Without it this page can
  // only ever link to other service pages, and the case studies that prove the
  // service are reachable solely through the Work index.
  const caseStudies = getProjectsForService(service.slug)

  return (
    <article className={styles.page}>
      {/* Watermark hero — the service number as a giant outlined numeral. */}
      <header className={styles.hero}>
        <div className={styles.blob} aria-hidden="true" />
        <span className={styles.watermark} aria-hidden="true">
          {service.id}
        </span>
        <div className="container">
          <Breadcrumbs
            className="tp_fade_anim"
            delay="0.05"
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services/" },
              { name: service.title, path: `/services/${service.slug}/` },
            ]}
          />

          <span className={`${styles.eyebrow} tp_fade_anim`} data-delay="0.1">
            <span className={styles.dot} />
            Service {service.id}
          </span>

          <h1 className={`${styles.title} tp_title_anim`} data-delay="0.2">
            {service.title}
          </h1>

          <div className={styles.heroBottom}>
            <p className={`${styles.desc} tp_text_invert`}>{service.longDesc}</p>

            <div className={styles.tags}>
              {service.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`${styles.tag} tp_fade_anim`}
                  data-fade-from="right"
                  data-delay={`${0.35 + i * 0.08}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className={`section ${styles.deliverSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow tp_fade_anim">What&apos;s included</span>
              <h2 className="section-title tp_title_anim">
                Deliver<span className="text-accent">ables</span>
              </h2>
            </div>
            <p className={`${styles.sectionSub} tp_fade_anim`} data-fade-from="right">
              Everything you can expect in hand by the time this engagement
              wraps up.
            </p>
          </div>
          <div className={styles.deliverGrid}>
            {service.deliverables.map((item, i) => (
              <div
                key={item}
                className={`${styles.deliverableItem} tp_fade_anim`}
                data-delay={`${0.08 + i * 0.08}`}
              >
                <span className={styles.deliverableNum} aria-hidden="true">
                  0{i + 1}
                </span>
                <span className={styles.deliverableText}>{item}</span>
                <span className={styles.checkIcon}>
                  <Check size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — the case studies where this service did the work. */}
      {caseStudies.length > 0 && (
        <section className={`section ${styles.proofSection}`}>
          <div className="container">
            <div className={styles.sectionHead}>
              <div>
                <span className="eyebrow tp_fade_anim">
                  Proof
                  <span className={styles.proofCount}>
                    {String(caseStudies.length).padStart(2, "0")} case{" "}
                    {caseStudies.length === 1 ? "study" : "studies"}
                  </span>
                </span>
                <h2 className="section-title tp_title_anim">
                  {service.title} <span className="text-accent">in practice</span>
                </h2>
              </div>
              <p
                className={`${styles.sectionSub} tp_fade_anim`}
                data-fade-from="right"
              >
                Shipped projects where this stage of the work carried the
                result.
              </p>
            </div>

            <ProofIndex caseStudies={caseStudies} />

            <p className={`${styles.proofMore} tp_fade_anim`}>
              Every engagement runs the same four stages — see how{" "}
              {service.title.toLowerCase()} fits into the{" "}
              <Link to="/services/">full frontend process</Link>, or browse the{" "}
              <Link to="/work/">complete portfolio of case studies</Link>.
            </p>
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
