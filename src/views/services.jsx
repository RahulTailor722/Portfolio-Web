import React from "react"
import Link from "../components/link"
import { ArrowUpRight } from "lucide-react"

import { services } from "../data/site"
import styles from "../styles/services.module.css"

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      {/* Watermark hero — same construction as the Work index. */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <span className={styles.watermark} aria-hidden="true">
          SERVICES
        </span>
        <div className="container">
          <p className={`${styles.eyebrow} tp_fade_anim`} data-delay="0.1">
            <span className={styles.dot} />
            What I Do
          </p>
          <h1 className={`${styles.heroTitle} tp_title_anim`} data-delay="0.2">
            Frontend <span className={styles.heroOutline}>services.</span>
          </h1>
          <div className={styles.heroBottom}>
            <p className={`${styles.heroStatement} tp_text_invert`}>
              Research, design, build, launch — end-to-end frontend work for
              teams across Canada, the United States, and Europe.
            </p>
            <span
              className={`${styles.svcCount} tp_fade_anim`}
              data-fade-from="right"
              data-delay="0.4"
            >
              ({String(services.length).padStart(2, "0")} services)
            </span>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={styles.list}>
          {services.map((service) => (
            <Link
              to={`/services/${service.slug}/`}
              key={service.id}
              className={styles.item}
              data-cursor="View<br/>Service"
            >
              <div className={styles.itemTop}>
                <span className={styles.num}>{service.id}</span>
                <h2 className={styles.title}>{service.title}</h2>
                <span className={styles.arrow}>
                  <ArrowUpRight size={22} strokeWidth={1.8} />
                </span>
              </div>

              <div className={styles.itemBody}>
                <p className={styles.desc}>{service.desc}</p>
                <div className={styles.meta}>
                  {service.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
