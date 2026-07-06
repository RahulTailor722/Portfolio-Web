import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import * as styles from "./navbar.module.css"

const links = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about/" },
  { label: "Work", to: "/work/" },
  { label: "Contact Me", to: "/contact/" },
]

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Twitter", href: "https://twitter.com" },
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
      <header className={`${styles.bar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
            Rahul<span>.</span>Tailor
          </Link>

          <nav className={styles.desktopNav}>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={styles.navLink}
                activeClassName={styles.active}
              >
                {l.label}
              </Link>
            ))}
          </nav>

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
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.overlayInner}>
              <div className={styles.menuList}>
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{
                      delay: 0.25 + i * 0.07,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={l.to}
                      className={styles.menuLink}
                      onClick={() => setOpen(false)}
                    >
                      <span className={styles.menuIndex}>
                        0{i + 1}
                      </span>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className={styles.overlayFooter}>
                <div>
                  <p className={styles.overlayLabel}>Get in touch</p>
                  <a href="mailto:rahultailor722@gmail.com" className={styles.overlayEmail}>
                    rahultailor722@gmail.com
                  </a>
                </div>
                <div className={styles.overlaySocials}>
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
