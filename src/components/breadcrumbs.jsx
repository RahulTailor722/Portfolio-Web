import React from "react"
import Link from "./link"
import styles from "./breadcrumbs.module.css"

/**
 * The visible counterpart to the `BreadcrumbList` JSON-LD every page emits from
 * `utils/schema.js`. Both are built from the same `[{ name, path }]` shape so
 * the markup a crawler parses and the trail a reader clicks can't describe two
 * different hierarchies.
 *
 * Rendered as a single capsule rather than loose text: the same pill geometry
 * (99px radius, hairline border, mono uppercase) the tag and skill chips use
 * everywhere else, so the trail reads as part of the design system instead of
 * default browser furniture. The live dot is the eyebrow dot from every page
 * hero, and the current page sits in an inset accent chip — it is the one
 * segment a reader needs to locate at a glance.
 *
 * The last item renders as text, not a link — a self-referencing anchor adds a
 * crawl edge to the page you're already on and gives keyboard users a tab stop
 * that goes nowhere.
 */
const Breadcrumbs = ({ items, className = "", delay }) => (
  <nav
    className={`${styles.breadcrumb} ${className}`.trim()}
    data-delay={delay}
    aria-label="Breadcrumb"
  >
    <span className={styles.pulse} aria-hidden="true" />
    <ol className={styles.list}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <li key={item.path ?? item.name} className={styles.item}>
            {isLast ? (
              <span className={styles.current} aria-current="page">
                {item.name}
              </span>
            ) : (
              <>
                <Link to={item.path} className={styles.crumb}>
                  {item.name}
                </Link>
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
              </>
            )}
          </li>
        )
      })}
    </ol>
  </nav>
)

export default Breadcrumbs
