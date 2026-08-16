import React, { useState, useEffect, useRef, useCallback } from "react"
import Link from "./link"
import styles from "./navbar.module.css"

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

const links = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about/" },
  { label: "Services", to: "/services/" },
  { label: "Work", to: "/work/" },
  { label: "Contact Me", to: "/contact/" },
]

const Logo = () => (
  <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <rect width="100" height="100" rx="20" fill="#c6f135" />
    <text x="50" y="64" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="44" fontWeight="700" fill="#0b0b0c" textAnchor="middle">RT</text>
  </svg>
)

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const overlayRef = useRef(null)
  const burgerRef = useRef(null)
  const closeBtnRef = useRef(null)
  // Distinguishes "never opened" from "just closed", so focus is only yanked
  // back to the burger after a real close — not on first mount.
  const hasOpened = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  /**
   * Modal behaviour for the mobile overlay: Escape to dismiss, Tab cycling
   * confined to the overlay, focus moved in on open and returned to the burger
   * on close, and the rest of the page marked inert so neither the pointer nor
   * assistive tech can reach the 32 focusable elements behind it.
   */
  useEffect(() => {
    if (!open) {
      // Returning focus is only correct if the menu was actually open; on the
      // initial render this effect runs with open === false.
      if (hasOpened.current) burgerRef.current?.focus()
      return
    }
    hasOpened.current = true

    const overlay = overlayRef.current
    if (!overlay) return

    // `inert` removes an entire subtree from the tab order, the a11y tree and
    // hit-testing in one go. aria-hidden is the fallback for engines without
    // it — it covers assistive tech, though not tabbing, which is what the
    // Tab handler below is for.
    const outside = [
      document.getElementById("main"),
      document.querySelector("body > footer, footer"),
    ].filter(Boolean)
    outside.forEach((el) => {
      el.setAttribute("inert", "")
      el.setAttribute("aria-hidden", "true")
    })

    const visibleFocusable = () =>
      Array.from(overlay.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.getClientRects().length > 0
      )

    // Wait a frame: the overlay transitions in from visibility:hidden, and an
    // element with no client rects can't take focus yet.
    const raf = requestAnimationFrame(() => {
      ;(closeBtnRef.current || visibleFocusable()[0])?.focus()
    })

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== "Tab") return
      const items = visibleFocusable()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      // The header behind the overlay still holds a focusable burger and CTA,
      // so the trap is what keeps Tab inside rather than inert alone.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("keydown", onKeyDown)
      outside.forEach((el) => {
        el.removeAttribute("inert")
        el.removeAttribute("aria-hidden")
      })
    }
  }, [open, close])

  return (
    <>
      <header
        className={`${styles.bar} ${scrolled ? styles.scrolled : ""} ${open ? styles.menuOpen : ""}`}
      >
        <div className={styles.inner}>
          <div className={styles.logoWrap}>
            <Link to="/" className={styles.logo} onClick={close}>
              <Logo />
              <span className="sr-only">Rahul Tailor — home</span>
            </Link>
          </div>

          <div className={styles.right}>
            <Link to="/contact/" className={styles.cta}>
              Let&apos;s Talk
            </Link>
            <button
              ref={burgerRef}
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay stays mounted so open/close both play a CSS transition — this
          replaces framer-motion (dropped to shrink the every-page JS bundle).
          Hidden state is opacity 0 + visibility hidden + pointer-events none,
          so it never intercepts taps or shows up in the a11y tree when closed. */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className={styles.overlayInner}>
          <div className={styles.overlayHeader}>
            <div className={styles.overlayLogo}>
              <Link to="/" onClick={close} tabIndex={open ? 0 : -1}>
                <Logo />
                <span className="sr-only">Rahul Tailor — home</span>
              </Link>
            </div>
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={close}
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
            >
              <span>close</span>
              <span className={styles.closeIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>

          <nav className={styles.menuList}>
            {links.map((l, i) => (
              <div
                key={l.to}
                className={styles.menuItem}
                style={{ transitionDelay: open ? `${0.2 + i * 0.08}s` : "0s" }}
              >
                <Link
                  to={l.to}
                  className={styles.menuLink}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                >
                  <span className={styles.menuIndex}>0{i + 1}</span>
                  {l.label}
                </Link>
              </div>
            ))}
          </nav>

          <div
            className={styles.overlayFooter}
            style={{ transitionDelay: open ? "0.5s" : "0s" }}
          >
            <div className={styles.footerInfo}>
              <span className={styles.footerLabel}>Address</span>
              <a
                href="https://maps.app.goo.gl/eoV6dPPEbrtdeCWZ9"
                target="_blank"
                rel="noreferrer"
                tabIndex={open ? 0 : -1}
              >
                Ahmedabad, Gujarat, India
              </a>
            </div>
            <div className={styles.footerInfo}>
              <span className={styles.footerLabel}>Let's Connect</span>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.linkedin.com/in/rahul-tailor-0a7940283/"
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={open ? 0 : -1}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
