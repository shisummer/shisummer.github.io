"use client"

import { useEffect, useRef } from "react"

/**
 * A subtle, high-end ambient spotlight that follows the cursor.
 * It renders ON TOP of the existing ambient background without altering it.
 * Uses a ref + requestAnimationFrame to update a CSS variable so React never
 * re-renders on mouse move, keeping it smooth and well-optimized.
 */
export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number | null>(null)
  const coords = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Start centered so there is no flash in the corner.
    coords.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const update = () => {
      frame.current = null
      const el = glowRef.current
      if (el) {
        el.style.setProperty("--x", `${coords.current.x}px`)
        el.style.setProperty("--y", `${coords.current.y}px`)
      }
    }

    const handleMove = (e: MouseEvent) => {
      coords.current = { x: e.clientX, y: e.clientY }
      if (frame.current === null) {
        frame.current = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener("mousemove", handleMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMove)
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{
        background:
          "radial-gradient(600px circle at var(--x) var(--y), oklch(0.85 0.05 250 / 0.05), transparent 60%)",
      }}
    />
  )
}
