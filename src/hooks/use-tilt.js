import { useEffect } from "react"

export const useTilt = (ref, { max = 8, scale = 1.02, speed = 400, perspective = 1200 } = {}) => {
  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === "undefined") return
    if (window.matchMedia("(hover: none)").matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -max
      const rotateY = ((x - centerX) / centerX) * max

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    }

    const onLeave = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      el.style.transition = `transform ${speed}ms ease`
      setTimeout(() => {
        el.style.transition = ""
      }, speed)
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)

    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [ref, max, scale, speed, perspective])
}

export default useTilt
