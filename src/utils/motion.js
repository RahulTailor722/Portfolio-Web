/**
 * One shared reduced-motion check for every island.
 *
 * Read at effect time, never during render: the server has no matchMedia, so
 * branching on it in a render body would make the first client render disagree
 * with the SSR HTML and reintroduce the hydration mismatches this codebase just
 * fixed. Every caller uses it inside useEffect and, where a value must change,
 * sets state from there.
 */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Scroll behaviour honouring the same preference. */
export const scrollBehavior = () => (prefersReducedMotion() ? "auto" : "smooth")
