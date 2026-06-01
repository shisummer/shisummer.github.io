"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4ede0b52-ed82-4320-ba84-9b947dd6d194.1280x1280%20copy-jHpLYqLteDuQwLej302Ol9Jc8htv6p.jpg",
    alt: "Watercolor painting of a horse and carriage on a city street",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15acd82b-43aa-47bd-ad1c-28fdf25d4ef9.1280x1280-JicUiSElZxq6vQmVlADq7l7Ae27EL9.jpg",
    alt: "Oil painting of two Tibetan monks in conversation",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f025c965-be3e-4a1b-8238-a33da9e7beb1.1280x1280-mGVC3QI6rCiOR9hZPy5tSLO8dotzpl.jpg",
    alt: "Painting of an elderly Tibetan woman with the Potala Palace behind her",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-29%20at%2012.42.46%E2%80%AFPM-2BIIoXKTwSGdD3YdFhAbeRi0G5nkUD.png",
    alt: "Green-toned stylized digital artwork of two figures in motion",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-29%20at%2012.42.53%E2%80%AFPM-19XYnV2y9efhfLgEDVRsVnkwD3i2Wq.png",
    alt: "Warm-toned stylized digital artwork of two figures resting",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100_0059.JPG-nkU1HOl3Fosnm2SevHIp3GQfgwBL3H.jpeg",
    alt: "Mount Fuji with a red pagoda overlooking a town",
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100_0069.JPG-9QMtdUq8f81NkAtrrQqGkB4GLpb33d.jpeg",
    alt: "Deer being hand-fed in Nara Park",
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100_0022.JPG-x0I8llFKhg9xEUXvTxri4SdFhXxY3b.jpeg",
    alt: "Red tram passing a railway crossing in Japan",
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100_0045.JPG-HcGm3bmnmAongXzuFSBfWjRbU9ZhWJ.jpeg",
    alt: "Chefs preparing sashimi at a Japanese fish market stall",
  },
  {
    id: 10,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100_0046.JPG-6U5K23SjynB8gF9XlW6O3fSLZi4p3F.jpeg",
    alt: "Fresh seafood market display with handwritten price tags",
  },
  {
    id: 11,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100_0028.JPG-ZLqm0SFzzDFwIEfZ1NL4oUX6sKM9dC.jpeg",
    alt: "Collection of white maneki-neko lucky cat figurines",
  },
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
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
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
    </div>
  )
}
