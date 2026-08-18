import React from "react"
import Link from "../components/link"
import { ArrowUpRight } from "lucide-react"

import Breadcrumbs from "../components/breadcrumbs"
import { services, projects, getProjectsForService } from "../data/site"
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
          <Breadcrumbs
            className="tp_fade_anim"
            delay="0.05"
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services/" },
            ]}
          />
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

      {/* Hub → work links. The rows above are whole-card anchors, so the
          case-study links that prove each service can't be nested inside them
          — they live here instead, one row per service. */}
      <section className={`section ${styles.proof}`}>
        <div className="container">
          <div className={styles.proofHead}>
            <div>
              <span className="eyebrow tp_fade_anim">Proof</span>
              <h2 className="section-title tp_title_anim">
                Where these <span className="text-accent">show up</span>
              </h2>
            </div>
            <p
              className={`${styles.proofSub} tp_fade_anim`}
              data-fade-from="right"
            >
              The shipped work behind each service, so none of this rests on a
              claim alone.
            </p>
          </div>

          {/* Numbered rows with the case studies as chips, matching the
              index language used on the service detail pages — the plain
              comma-run of links this replaced read as a footer, not as proof. */}
          <ul className={styles.proofList}>
            {services.map((service, i) => (
              <li
                key={service.slug}
                className={`${styles.proofRow} tp_fade_anim`}
                data-delay={`${0.08 + i * 0.08}`}
              >
                <span className={styles.proofNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link
                  to={`/services/${service.slug}/`}
                  className={styles.proofService}
                >
                  {service.title}
                  <ArrowUpRight size={16} />
                </Link>
                <span className={styles.proofProjects}>
                  {getProjectsForService(service.slug).map((project) => (
                    <Link
                      key={project.slug}
                      to={`/work/${project.slug}/`}
                      className={styles.proofChip}
                    >
                      {project.title}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>

          <p className={`${styles.proofMore} tp_fade_anim`}>
            All {projects.length} builds are written up in the{" "}
            <Link to="/work/">full portfolio</Link> — or read{" "}
            <Link to="/about/">how I work</Link> before getting in touch.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
