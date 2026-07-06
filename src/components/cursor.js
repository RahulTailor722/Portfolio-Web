import React, { useEffect, useRef, useState } from "react"

const Cursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [cursorText, setCursorText] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(hover: none)").matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) {
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
      }
    }

    const render = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ring) {
        ring.style.left = `${ringX}px`
        ring.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(render)
    }

    const addHover = (e) => {
      const text = e.currentTarget.getAttribute("data-cursor")
      if (text) {
        setCursorText(text)
        ring && ring.classList.add("is-hover-text")
      } else {
        ring && ring.classList.add("is-hover")
      }
    }

    const removeHover = () => {
      setCursorText("")
      if (ring) {
        ring.classList.remove("is-hover")
        ring.classList.remove("is-hover-text")
      }
    }

    const attachHovers = () => {
      document
        .querySelectorAll("a, button, [data-cursor]")
        .forEach((el) => {
          el.removeEventListener("mouseenter", addHover)
          el.removeEventListener("mouseleave", removeHover)
          el.addEventListener("mouseenter", addHover)
          el.addEventListener("mouseleave", removeHover)
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
      document
        .querySelectorAll("a, button, [data-cursor]")
        .forEach((el) => {
          el.removeEventListener("mouseenter", addHover)
          el.removeEventListener("mouseleave", removeHover)
        })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        {cursorText && (
          <span className="cursor-text" dangerouslySetInnerHTML={{ __html: cursorText }} />
        )}
      </div>
    </>
  )
}

export default Cursor
