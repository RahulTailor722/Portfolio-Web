import React from "react"
import Link from "../link"
import styles from "./cta.module.css"

const CTA = () => {
  return (
    <section className={`${styles.cta} tp-btn-trigger`}>
      <div className="container">
        <p className={`${styles.kicker} tp_fade_anim`}>Have a project in mind?</p>
        <h2 className={`${styles.title} tp_title_anim`} data-delay="0.15">
          {"Let's build something "}
          <span className="accent">extraordinary</span>
          {" together."}
        </h2>
        <div className="tp-btn-bounce">
          <Link to="/contact/" className={`${styles.button} magnetic`} data-cursor="hover">
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
