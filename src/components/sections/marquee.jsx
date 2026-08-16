import React, { useEffect, useRef } from "react"
import styles from "./marquee.module.css"

const items = [
  "Frontend Development",
  "React",
  "Next.js",
  "Motion Design",
  "HubSpot CMS",
  "WordPress",
  "Design Systems",
  "TypeScript",
  "Performance",
]

const COPIES = 4

const Marquee = () => {
  const trackRef = useRef(null)

  /**
   * The -50% keyframe loop needs 4 copies of the list to run seamlessly, but
   * only ONE is rendered into the HTML — the other three are cloned in here
   * after mount. Previously all four were in the markup, which meant every
   * crawler read this keyword list ("React", "Next.js", "HubSpot CMS", …) four
   * times over and could reasonably score the page as keyword-stuffed.
   *
   * No flash of a short track in practice: the animation takes 145s to travel
   * the full -50%, so the gap at the end of a single copy is many seconds away,
   * and this island hydrates on load.
   *
   * The class is recomputed from the absolute index rather than copied from the
   * source node. `items` has an odd length (9), so a naive clone would repeat
   * the solid/outline pattern and put two solids next to each other at every
   * seam; the absolute index keeps the alternation unbroken across all four.
   */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const original = Array.from(track.children)
    if (!original.length) return

    const clones = []
    for (let copy = 1; copy < COPIES; copy += 1) {
      original.forEach((node, i) => {
        const clone = node.cloneNode(true)
        clone.className =
          (copy * original.length + i) % 2 ? styles.outline : styles.solid
        // The wrap is already aria-hidden, but mark the clones explicitly so
        // they stay out of the a11y tree if that ever changes.
        clone.setAttribute("aria-hidden", "true")
        track.appendChild(clone)
        clones.push(clone)
      })
    }
    return () => clones.forEach((node) => node.remove())
  }, [])

  return (
    <div className={`${styles.wrap} moving-text`} aria-hidden="true">
      {/* Outer div is nudged horizontally by scroll (GSAP scrub); the inner
          track keeps the continuous CSS loop. */}
      <div className="wrapper-text">
        <div className={styles.track} ref={trackRef}>
          {items.map((item, i) => (
            <span key={i} className={i % 2 ? styles.outline : styles.solid}>
              {item}
              <span className={styles.star}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
