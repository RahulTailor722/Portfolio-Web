import React from "react"
import * as styles from "./page-header.module.css"

const PageHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.blob} aria-hidden="true" />
      <div className="container">
        {eyebrow && (
          <p className={`${styles.eyebrow} tp_fade_anim`} data-delay="0.1">
            <span className={styles.dot} />
            {eyebrow}
          </p>
        )}
        <h1 className={`${styles.title} tp_title_anim`} data-delay="0.2">
          {title}
        </h1>
        {subtitle && (
          <p className={`${styles.subtitle} tp_fade_anim`} data-delay="0.45">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  )
}

export default PageHeader
