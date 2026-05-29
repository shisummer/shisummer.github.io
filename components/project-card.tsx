"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const hasDetail = Boolean(project.detail)
  const hasCover = !project.image.startsWith("/placeholder-")

  // Update CSS variables for the cursor-tracked glowing border.
  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onClick={() => hasDetail && onOpen(project)}
      onKeyDown={(e) => {
        if (hasDetail && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault()
          onOpen(project)
        }
      }}
      role={hasDetail ? "button" : undefined}
      tabIndex={hasDetail ? 0 : undefined}
      className={`group relative glass rounded-xl overflow-hidden transition-all duration-500 ${
        hasDetail ? "cursor-pointer" : ""
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
        opacity: 0,
      }}
    >
      {/* Cursor-tracked glowing border ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: "1px",
          background:
            "radial-gradient(180px circle at var(--mx) var(--my), oklch(0.9 0.05 250 / 0.7), transparent 45%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Cover image / placeholder */}
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-secondary to-muted">
        {hasCover ? (
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} cover`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed line-clamp-2" style={{ color: "#e5e7eb" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal bg-secondary/50 text-muted-foreground border-none"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </article>
  )
}
