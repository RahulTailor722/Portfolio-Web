import React, { useEffect, useRef } from "react"

const Cursor = () => {
  const ballRef = useRef(null)
  const viewRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(hover: none)").matches) return

    const ball = ballRef.current
    const view = viewRef.current

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ballX = mouseX
    let ballY = mouseY
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const render = () => {
      ballX += (mouseX - ballX) * 0.15
      ballY += (mouseY - ballY) * 0.15
      if (ball) {
        ball.style.left = `${ballX}px`
        ball.style.top = `${ballY}px`
      }
      raf = requestAnimationFrame(render)
    }

    // Delegated hover detection (single pair of listeners on document) instead of
    // querying + attaching listeners to every link/button on an interval, which
    // rescanned the whole DOM once a second regardless of whether it changed.
    const over = (e) => {
      // Elements carrying data-cursor (e.g. project cards) expand the ball into a
      // labelled bubble ("View Project") instead of the plain hover dot.
      const viewEl = e.target.closest("[data-cursor]")
      if (viewEl) {
        view.innerHTML = viewEl.getAttribute("data-cursor")
        ball.classList.add("is-view")
        view.classList.add("is-visible")
        return
      }
      const el = e.target.closest("a, button")
      if (!el) return
      ball.classList.add("is-hover")
    }

    const out = (e) => {
      const viewEl = e.target.closest("[data-cursor]")
      if (viewEl) {
        // Ignore moves onto the card's own children (prevents flicker).
        if (e.relatedTarget && viewEl.contains(e.relatedTarget)) return
        ball.classList.remove("is-view")
        view.classList.remove("is-visible")
        return
      }
      const el = e.target.closest("a, button")
      if (!el) return
      ball.classList.remove("is-hover")
    }

    window.addEventListener("mousemove", onMove)
    render()
    document.addEventListener("mouseover", over)
    document.addEventListener("mouseout", out)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
      document.removeEventListener("mouseover", over)
      document.removeEventListener("mouseout", out)
    }
  }, [])

  return (
    <div id="magic-cursor">
      <div ref={ballRef} id="ball" className="cursor-white-bg">
        <div ref={viewRef} className="ball-view" />
      </div>
    </div>
  )
}

export default Cursor
