import React from "react"
import Link from "../components/link"
import { ArrowUpRight, Home } from "lucide-react"

import Reveal from "../components/reveal"
import styles from "../styles/404.module.css"

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.blob} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <Reveal>
            <span className={styles.eyebrow}>
              <span className={styles.dot} />
              Error 404
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className={styles.code}>
              4<span className="text-accent">0</span>4
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className={styles.title}>This page took a wrong turn.</h2>
          </Reveal>

          <Reveal delay={0.22}>
            <p className={styles.desc}>
              The page you're looking for doesn't exist, was moved, or never
              existed in the first place. Let's get you back on track.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={styles.actions}>
              <Link to="/" className="btn btn-primary">
                <Home size={18} /> Back to Home
              </Link>
              <Link to="/work/" className="btn btn-ghost">
                View my work <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

