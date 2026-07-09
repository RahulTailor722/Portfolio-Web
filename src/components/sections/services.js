import React from "react"
import { Link } from "gatsby"
import { ArrowUpRight } from "lucide-react"
import { services } from "../../data/site"
import * as styles from "./services.module.css"

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.layout}>
          {/* Left column — stays pinned while the list on the right scrolls */}
          <aside className={styles.sticky}>
            <span className="eyebrow tp_fade_anim">What I Do</span>
            <h2 className={`${styles.statement} tp_text_invert`}>
              I design and develop engaging interfaces and smart digital
              solutions that combine creativity, technology, and intelligence.
            </h2>
            <div className={styles.stickyFoot}>
              <span className={styles.count}>
                {String(services.length).padStart(2, "0")} Services
              </span>
            </div>
          </aside>

          {/* Right column — type-driven list of services */}
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
                  <h3 className={styles.title}>{service.title}</h3>
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
    </section>
  )
}

export default Services
