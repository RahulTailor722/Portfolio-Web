import React, { useEffect, useRef } from "react"
import * as styles from "./preloader.module.css"

// SVG path states for the curtain reveal (same coordinates as the Aleric
// template that powers the reference site).
const PATH_FULL = "M0,1005S175,995,500,995s500,5,500,5V0H0Z"
const PATH_CURVE = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
const PATH_FLAT = "M0 2S175 1 500 1s500 1 500 1V0H0Z"

const FIRST_NAME = "RAHUL"
const LAST_NAME = "TAILOR"

const Preloader = ({ showText = true, onComplete }) => {
  const rootRef = useRef(null)
  const pathRef = useRef(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    let tl
    let cancelled = false

    import("gsap").then(({ gsap }) => {
      if (cancelled || !rootRef.current) return
      const letters = rootRef.current.querySelectorAll(`.${styles.char}`)

      tl = gsap.timeline({
        onComplete: () => onCompleteRef.current?.(),
      })

      if (showText && letters.length) {
        tl.to(letters, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.045,
        }).to(letters, {
          delay: 0.4,
          y: -110,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.012,
        })
      }

      tl.to(pathRef.current, {
        duration: 0.5,
        attr: { d: PATH_CURVE },
        ease: "power2.in",
      })
        .to(pathRef.current, {
          duration: 0.5,
          attr: { d: PATH_FLAT },
          ease: "power2.out",
        })
        .set(rootRef.current, { display: "none" })
    })

    return () => {
      cancelled = true
      tl?.kill()
    }
  }, [showText])

  return (
    <div ref={rootRef} className={styles.preloader} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path ref={pathRef} className={styles.path} d={PATH_FULL} />
      </svg>

      {showText && (
        <div className={styles.textContainer}>
          {[...FIRST_NAME, " ", ...LAST_NAME].map((char, i) => (
            <div key={i} className={styles.charWrapper}>
              <span
                className={`${styles.char} ${
                  i < FIRST_NAME.length ? styles.firstName : styles.lastName
                }`}
              >
                {char === " " ? " " : char}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Preloader
