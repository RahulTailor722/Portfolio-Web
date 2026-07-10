import React, { useState, useEffect } from "react"
import Link from "./link"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./navbar.module.css"

const links = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about/" },
  { label: "Work", to: "/work/" },
  { label: "Contact Me", to: "/contact/" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <header
        className={`${styles.bar} ${scrolled ? styles.scrolled : ""} ${open ? styles.menuOpen : ""}`}
      >
        <div className={styles.inner}>
          <div className={styles.logoWrap}>
            <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
              <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill="#c6f135"/>
                <text x="50" y="64" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="44" fontWeight="700" fill="#0b0b0c" textAnchor="middle">RT</text>
              </svg>
            </Link>
          </div>

          <div className={styles.right}>
            <Link to="/contact/" className={styles.cta}>
              Let&apos;s Talk
            </Link>
            <button
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.overlayInner}>
              <div className={styles.overlayHeader}>
                <div className={styles.overlayLogo}>
                  <Link to="/" onClick={() => setOpen(false)}>
                    <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100" height="100" rx="20" fill="#c6f135"/>
                      <text x="50" y="64" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="44" fontWeight="700" fill="#0b0b0c" textAnchor="middle">RT</text>
                    </svg>
                  </Link>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <span>close</span>
                  <span className={styles.closeIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
              </div>

              <nav className={styles.menuList}>
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.08,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={styles.menuItem}
                  >
                    <Link
                      to={l.to}
                      className={styles.menuLink}
                      onClick={() => setOpen(false)}
                    >
                      <span className={styles.menuIndex}>0{i + 1}</span>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className={styles.overlayFooter}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.footerInfo}>
                  <label>Address</label>
                  <a
                    href="https://maps.app.goo.gl/eoV6dPPEbrtdeCWZ9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ahmedabad, Gujarat, India
                  </a>
                </div>
                <div className={styles.footerInfo}>
                  <label>Let's Connect</label>
                  <div className={styles.socialLinks}>
                    <a
                      href="https://www.linkedin.com/in/rahultailor/"
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/rahultailor"
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
