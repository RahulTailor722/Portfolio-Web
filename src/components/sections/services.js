import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Reveal } from "../reveal"
import { services } from "../../data/site"
import * as styles from "./services.module.css"

const Services = () => {
  const [active, setActive] = useState(0)

  return (
    <section className="section" id="services">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <span className="eyebrow">What I do</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={`section-title ${styles.title}`}>
              Services &amp; capabilities
            </h2>
          </Reveal>
        </div>

        <div className={styles.list}>
          {services.map((service, i) => {
            const open = active === i
            return (
              <div
                key={service.id}
                className={`${styles.item} ${open ? styles.open : ""}`}
                onClick={() => setActive(open ? -1 : i)}
              >
                <div className={styles.itemHead}>
                  <span className={styles.num}>{service.id}</span>
                  <h3 className={styles.itemTitle}>{service.title}</h3>
                  <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`}>
                    <Plus size={22} />
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className={styles.body}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className={styles.bodyInner}>
                        <p>{service.desc}</p>
                        <div className={styles.tags}>
                          {service.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
