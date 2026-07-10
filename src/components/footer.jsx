import React from "react"
import Link from "./link"
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react"
import styles from "./footer.module.css"

const scrollTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <p className={styles.brand}>
              Rahul<span>.</span>Tailor
            </p>
            <p className={styles.brandText}>
              Senior Frontend Developer crafting fast, accessible and
              memorable digital experiences.
            </p>
            <span className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              Available for new projects
            </span>
            <div className={styles.social}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <p className={styles.colTitle}>Pages</p>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/work/">Work</Link>
            <Link to="/contact/">Contact</Link>
          </div>

          <div className={styles.linkCol}>
            <p className={styles.colTitle}>Services</p>
            <Link to="/services/user-research/">User Research</Link>
            <Link to="/services/ui-ux-design/">UI/UX Design</Link>
            <Link to="/services/frontend-development/">Frontend Dev</Link>
            <Link to="/services/deployment/">Deployment</Link>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.colTitle}>Get in touch</p>
            <a href="mailto:rahultailor722@gmail.com" className={styles.contactLink}>
              <Mail size={14} /> rahultailor722@gmail.com
            </a>
            <a href="tel:+916352340795" className={styles.contactLink}>
              <Phone size={14} /> +91 6352340795
            </a>
            <span className={styles.contactLink}>
              <MapPin size={14} /> Ahmedabad, India
            </span>
            <Link to="/contact/" className={styles.ctaBtn}>
              Send a message <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <p className={styles.watermark} aria-hidden="true">
          RAHUL TAILOR
        </p>

        <div className={styles.bottom}>
          <span>© {year} Rahul Tailor. All rights reserved.</span>
          <span className={styles.bottomMeta}>Ahmedabad, India · IST (UTC+5:30)</span>
          <button className={styles.toTop} onClick={scrollTop} aria-label="Back to top">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
