import React from "react"
import { Link } from "gatsby"
import { Search, PenTool, Code2, Rocket } from "lucide-react"
import { services } from "../../data/site"
import * as styles from "./services.module.css"

const icons = [Search, PenTool, Code2, Rocket]

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <span className={`${styles.subtitle} tp_fade_anim`}>What I Do</span>
            <div className={styles.shapes} aria-hidden="true">
              <span className={styles.shape1}>
                <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.6209 4.29153e-05C7.77239 4.29153e-05 0.599251 6.84014 0.599251 15.2778H32.6426C32.6426 6.84014 25.4694 4.29153e-05 16.6209 4.29153e-05Z"
                    fill="#c6f135"
                  />
                </svg>
              </span>
              <span className={styles.shape2}>
                <svg width="67" height="44" viewBox="0 0 67 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67 0.25H0V44L67 0.25Z" fill="#38e1c8" />
                </svg>
              </span>
            </div>
          </div>
          <h2 className={`${styles.statement} tp_text_invert`}>
            I design and develop engaging interfaces and smart digital
            solutions that combine creativity, technology, and intelligence.
          </h2>
        </div>
      </div>

      <div className={`${styles.pinArea} tp-service-pp-pin`}>
        {services.map((service, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={service.id}
              className={`${styles.panel} tp-service-pp-panel`}
            >
              <div className="container">
                <div className={styles.panelRow}>
                  <div className={styles.number}>{service.id}.</div>

                  <div className={styles.content}>
                    <h3 className={styles.title}>
                      <Link to={`/services/${service.slug}/`} className="tp_text_invert">
                        {service.title}
                      </Link>
                    </h3>
                    <p className={styles.desc}>{service.desc}</p>
                    <div className={styles.tags}>
                      {service.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`${styles.thumb} tp_fade_anim`}
                    data-fade-from="right"
                    data-delay="0.2"
                  >
                    <div className={styles.thumbInner}>
                      <Icon size={52} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
