import React from "react"
import Breadcrumbs from "./breadcrumbs"
import styles from "./page-header.module.css"

const PageHeader = ({ eyebrow, title, subtitle, watermark, breadcrumbs }) => {
  return (
    <header className={styles.header}>
      <div className={styles.blob} aria-hidden="true" />
      {watermark && (
        <span className={styles.watermark} aria-hidden="true">
          {watermark}
        </span>
      )}
      <div className="container">
        {/* Rendered here rather than by each view, so the trail always sits
            above the H1 and matches the BreadcrumbList the page emits. */}
        {breadcrumbs && (
          <Breadcrumbs className="tp_fade_anim" delay="0.05" items={breadcrumbs} />
        )}
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
