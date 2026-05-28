"use client"

import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article 
      className="glass rounded-xl overflow-hidden group cursor-pointer hover:border-foreground/20 transition-all duration-500"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0,
      }}
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
          <svg 
            className="w-16 h-16" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
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
