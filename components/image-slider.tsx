"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { id: 1, alt: "Photography 1" },
  { id: 2, alt: "Photography 2" },
  { id: 3, alt: "Photography 3" },
  { id: 4, alt: "Photography 4" },
  { id: 5, alt: "Photography 5" },
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollTo = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, images.length - 1))
    setCurrentIndex(newIndex)
    if (sliderRef.current) {
      const scrollAmount = newIndex * (sliderRef.current.offsetWidth * 0.8 + 16)
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft
      const itemWidth = sliderRef.current.offsetWidth * 0.8 + 16
      const newIndex = Math.round(scrollLeft / itemWidth)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className="w-full">
      <div className="glass-heavy rounded-2xl p-4 md:p-6">
        {/* Slider container */}
        <div className="relative">
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          >
            {images.map((image) => (
              <div 
                key={image.id}
                className="flex-shrink-0 w-[80%] md:w-[60%] aspect-[16/10] rounded-xl overflow-hidden snap-center"
              >
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <svg 
                    className="w-16 h-16 text-muted-foreground/30" 
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
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={() => scrollTo(currentIndex - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollTo(currentIndex + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
            disabled={currentIndex === images.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-foreground w-6" 
                  : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Caption */}
      <p className="mt-4 text-sm text-muted-foreground text-left">
        capturing moments and concepts through a camera lens and a paintbrush.
      </p>
    </div>
  )
}
