import React from "react"
import Link from "./link"
import { ArrowUpRight, Check } from "lucide-react"

import CTA from "./sections/cta"
import styles from "./service-detail.module.css"

const ServiceDetail = ({ service, prevService, nextService }) => {
  return (
    <article className={styles.page}>
      {/* Watermark hero — the service number as a giant outlined numeral. */}
      <header className={styles.hero}>
        <div className={styles.blob} aria-hidden="true" />
        <span className={styles.watermark} aria-hidden="true">
          {service.id}
        </span>
        <div className="container">
          <nav
            className={`${styles.breadcrumb} tp_fade_anim`}
            data-delay="0.05"
            aria-label="Breadcrumb"
          >
            <Link to="/">Home</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{service.title}</span>
          </nav>

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
