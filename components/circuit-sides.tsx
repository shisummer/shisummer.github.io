"use client"

import { useEffect, useRef } from "react"

/**
 * Translucent PCB-style circuit traces that hug the left/right edges of the page.
 * - Fade in on scroll (fully revealed by the time the Projects section is in view).
 * - Sit above the ambient background but below the page content (z-[2]) so the
 *   glow colors still show through the translucent copper.
 * - Faint light pulses travel along the main traces like a signal through a wire.
 * - A cursor-proximity mask "lights up" whichever traces are near the pointer.
 *
 * Rendered pointer-events-none so it never blocks interaction; the hover glow is
 * driven by CSS variables updated in a rAF loop (no React re-renders).
 */

const TRACES = [
  "M20 -20 L20 1020",
  "M40 -20 L40 640 L64 664 L64 1020",
  "M20 130 L84 130 L84 172",
  "M40 250 L112 250 L112 210",
  "M20 360 L60 360 L60 300",
  "M40 470 L96 470 L96 520",
  "M20 600 L120 600",
  "M40 730 L72 730 L72 690",
  "M20 850 L100 850 L100 900",
  "M40 940 L60 940",
]

const FLOW = [
  { d: "M20 -20 L20 1020", dur: 5.5, delay: 0 },
  { d: "M40 -20 L40 640 L64 664 L64 1020", dur: 7, delay: 1.2 },
  { d: "M20 600 L120 600", dur: 4, delay: 0.6 },
  { d: "M20 850 L100 850 L100 900", dur: 4.6, delay: 2.1 },
]

const VIAS: [number, number][] = [
  [20, 130],
  [84, 172],
  [40, 250],
  [112, 210],
  [60, 300],
  [96, 520],
  [120, 600],
  [72, 690],
  [100, 900],
  [60, 940],
  [20, 420],
  [40, 560],
  [20, 760],
  [64, 664],
]

function CircuitArt({ side }: { side: "left" | "right" }) {
  const mirror = side === "right" ? "translate(140,0) scale(-1,1)" : undefined
  return (
    <div className="absolute inset-0">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 140 1000"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g transform={mirror}>
          {TRACES.map((d, i) => (
            <path key={`b-${i}`} d={d} className="circuit-base" vectorEffect="non-scaling-stroke" />
          ))}
          {VIAS.map(([cx, cy], i) => (
            <circle key={`v-${i}`} cx={cx} cy={cy} r={3} className="circuit-via" vectorEffect="non-scaling-stroke" />
          ))}
          {FLOW.map((f, i) => (
            <path
              key={`f-${i}`}
              d={f.d}
              pathLength={1000}
              className="circuit-flow-path"
              vectorEffect="non-scaling-stroke"
              style={{ animationDuration: `${f.dur}s`, animationDelay: `${f.delay}s` }}
            />
          ))}
        </g>
      </svg>

      {/* Cursor-proximity highlight: masked to a soft circle that follows the pointer */}
      <div className="circuit-highlight absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 140 1000"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <g transform={mirror}>
            {TRACES.map((d, i) => (
              <path key={`h-${i}`} d={d} className="circuit-hot" vectorEffect="non-scaling-stroke" />
            ))}
            {VIAS.map(([cx, cy], i) => (
              <circle
                key={`hv-${i}`}
                cx={cx}
                cy={cy}
                r={3.2}
                className="circuit-hot-via"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
}

export function CircuitSides() {
  const rootRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const raf = useRef<number | null>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const applyMouse = () => {
      raf.current = null
      const { x, y } = mouse.current
      for (const ref of [leftRef, rightRef]) {
        const el = ref.current
        if (!el) continue
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${x - rect.left}px`)
        el.style.setProperty("--my", `${y - rect.top}px`)
      }
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (raf.current === null) raf.current = requestAnimationFrame(applyMouse)
    }

    const onScroll = () => {
      const root = rootRef.current
      if (!root) return
      const projects = document.getElementById("projects")
      const vh = window.innerHeight
      const top = projects ? projects.offsetTop : vh
      const end = Math.max(1, top - vh * 0.4)
      const p = Math.min(1, Math.max(0, window.scrollY / end))
      root.style.setProperty("--reveal", p.toFixed(3))
    }

    onScroll()
    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf.current !== null) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2]"
      style={{ opacity: "var(--reveal, 0)" }}
    >
      <div
        ref={leftRef}
        className="absolute inset-y-0 left-0 hidden md:block"
        style={{ width: "clamp(72px, 12vw, 180px)" }}
      >
        <CircuitArt side="left" />
      </div>
      <div
        ref={rightRef}
        className="absolute inset-y-0 right-0 hidden md:block"
        style={{ width: "clamp(72px, 12vw, 180px)" }}
      >
        <CircuitArt side="right" />
      </div>
    </div>
  )
}
