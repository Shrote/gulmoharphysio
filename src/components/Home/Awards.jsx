'use client'

import { useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const partners = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mug3z329LkIuIlvyToyXZV6TmzPLBD.png",
      alt: "PM-JAY Logo"
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mug3z329LkIuIlvyToyXZV6TmzPLBD.png",
      alt: "Department of Health Logo"
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mug3z329LkIuIlvyToyXZV6TmzPLBD.png",
      alt: "Health Organization Logo"
    },
    {
      id: 4,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mug3z329LkIuIlvyToyXZV6TmzPLBD.png",
      alt: "Bajaj Finserv Logo"
    }
  ]

  // Create an array with duplicated items for infinite scroll
  const infinitePartners = [...partners, ...partners, ...partners]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev + 1
      // If we've scrolled to the end of the middle set, reset to the start of the middle set
      if (next >= partners.length) {
        return 0
      }
      return next
    })
  }, [partners.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev - 1
      // If we've scrolled to the start of the middle set, reset to the end of the middle set
      if (next < 0) {
        return partners.length - 1
      }
      return next
    })
  }, [partners.length])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [nextSlide])

  // Handle the transition end to create the infinite scroll effect
  const handleTransitionEnd = (e) => {
    if (currentSlide >= partners.length) {
      setCurrentSlide(0)
    } else if (currentSlide < 0) {
      setCurrentSlide(partners.length - 1)
    }
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
          <h1 className="text-4xl font-semibold text-gray-800">Our Insurance, TPA & Corporate Partners</h1>
        </div>
        
        <div className="relative px-10">
          <div className="awards-carousel overflow-hidden mx-auto">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (280 + 24)}px)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {infinitePartners.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="w-[280px] flex-shrink-0"
                >
                  <div className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-8 flex items-center justify-center h-[180px]">
                      <img
                        src={partner.image || "/placeholder.svg"}
                        alt={partner.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          <button
            onClick={nextSlide} 
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
