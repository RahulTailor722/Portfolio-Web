import React, { useRef } from "react"
import { Link } from "gatsby"
import { motion, useInView } from "framer-motion"
import * as styles from "./cta.module.css"

const CTA = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className={styles.cta} ref={ref}>
      <div className="container">
        <p
          className={styles.kicker}
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          Have a project in mind?
        </p>
        <h2
          className={styles.title}
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(40px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}
        >
          {"Let's build something "}
          <span className="accent">extraordinary</span>
          {" together."}
        </h2>
        <div
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s" }}
        >
          <Link to="/contact" className={`${styles.button} magnetic`} data-cursor="hover">
            Start a Conversation
            <span className={styles.arrow} aria-hidden="true">
              &#8594;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
