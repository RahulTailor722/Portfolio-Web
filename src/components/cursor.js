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

    const enter = (e) => {
      const el = e.currentTarget
      if (el.hasAttribute("data-cursor") || el.closest("[data-cursor]")) {
        return
      }
      ball.classList.add("is-hover")
    }

    const leave = () => {
      ball.classList.remove("is-hover")
    }

    const attachHovers = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        if (el.closest("[data-cursor]")) return
        el.removeEventListener("mouseenter", enter)
        el.removeEventListener("mouseleave", leave)
        el.addEventListener("mouseenter", enter)
        el.addEventListener("mouseleave", leave)
      })
    }

    window.addEventListener("mousemove", onMove)
    render()
    attachHovers()
    const interval = setInterval(attachHovers, 1000)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
      clearInterval(interval)
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", enter)
        el.removeEventListener("mouseleave", leave)
      })
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
