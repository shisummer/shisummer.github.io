"use client"

import { useEffect } from "react"
import { X, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock scroll + close on Escape while a project is open.
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [project, onClose])

  if (!project) return null

  const detail = project.detail

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-md"
      />

      {/* Panel */}
      <div className="relative z-10 my-4 w-full max-w-5xl glass-heavy rounded-2xl border border-white/10 animate-[fadeInUp_0.4s_ease-out]">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 rounded-t-2xl border-b border-white/10 bg-card/70 px-6 py-5 backdrop-blur-xl md:px-8">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight text-balance">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full glass p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 md:px-8 md:py-8">
          {detail?.layout === "stacked" && (
            <div className="space-y-6">
              <img
                src={detail.topImage.src || "/placeholder.svg"}
                alt={detail.topImage.alt}
                className="w-full rounded-xl border border-white/10"
              />
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#e5e7eb" }}>
                {detail.fullDescription}
              </p>
              <img
                src={detail.bottomImage.src || "/placeholder.svg"}
                alt={detail.bottomImage.alt}
                className="w-full rounded-xl border border-white/10"
              />
              <div className="flex flex-wrap gap-2 pt-2">
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
          )}

          {detail?.layout === "split" && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left: text + report link */}
              <div className="flex flex-col">
                {detail.sectionTitle && (
                  <h3 className="mb-4 text-lg md:text-xl font-semibold text-foreground tracking-tight">
                    {detail.sectionTitle}
                  </h3>
                )}
                {detail.context && (
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{detail.context}</p>
                )}
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#e5e7eb" }}>
                  {detail.fullDescription}
                </p>
                <a
                  href={detail.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
                >
                  {detail.reportLabel ?? "View Full Report"}
                  <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>

              {/* Right: video embeds */}
              <div className="flex flex-col gap-5">
                {detail.videos.map((video) => (
                  <div
                    key={video.src}
                    className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black"
                  >
                    <iframe
                      src={video.src}
                      title={video.title}
                      className="h-full w-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
