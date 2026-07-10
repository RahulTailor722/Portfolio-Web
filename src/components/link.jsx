import React, { forwardRef } from "react"

/**
 * Drop-in replacement for Gatsby's <Link>. With Astro's <ClientRouter />
 * active, plain anchors are intercepted and swapped client-side, so all this
 * needs to do is render an <a> that accepts Gatsby's `to` prop — and forward
 * refs so `motion(Link)` keeps working.
 */
const Link = forwardRef(({ to, children, ...rest }, ref) => (
  <a href={to} ref={ref} {...rest}>
    {children}
  </a>
))

Link.displayName = "Link"

export default Link
