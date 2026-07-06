import React from "react"
import { motion } from "framer-motion"
import * as styles from "./page-header.module.css"

const PageHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.blob} aria-hidden="true" />
      <div className="container">
        {eyebrow && (
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.dot} />
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  )
}

export default PageHeader
