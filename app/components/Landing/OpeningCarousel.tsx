"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Carousel data
const carouselItems = [
  {
    id: 1,
    title: "Warfare",
    year: "2025",
    image: "https://picsum.photos/1920/1080?random",
    url: "https://fastly.picsum.photos/id/348/1920/1080.jpg?hmac=fvBUXXoQW477sfPvaCKh4L4cPMnJj_Dc6oKRPQyVU78",
  },
  {
    id: 2,
    title: "Death of a Unicorn",
    year: "2025",
    image: "https://picsum.photos/1920/1080?random",
    url: "https://fastly.picsum.photos/id/1049/1920/1080.jpg?hmac=ZWQrhCKsQbsjiSX6jcvW-aJ8H5YGNLJaf-QpG7-sO8k",
  },
  {
    id: 3,
    title: "The Legend of Ochi",
    year: "2025",
    image: "https://picsum.photos/1920/1080?random",
    url: "https://fastly.picsum.photos/id/183/1920/1080.jpg?hmac=ZGsBNiH9wRMhEtIV2bG6TJ2BreX5qeRJ-FYWJVpg8dQ",
  },
  {
    id: 4,
    title: "Friendship",
    year: "2025",
    image: "https://picsum.photos/1920/1080?random",
    url: "https://fastly.picsum.photos/id/604/1920/1080.jpg?hmac=mmdN2IhnGko0FXw8NE6j6Jiv7Wv6pMDoApH5V2A5aKE",
  },
  {
    id: 5,
    title: "Bring Her Back",
    year: "2025",
    image: "https://picsum.photos/1920/1080?random",
    url: "https://picsum.photos/1920/1080?random",
  },
  {
    id: 6,
    title: "Materialists",
    year: "2025",
    image: "https://picsum.photos/1920/1080?random",
    url: "https://picsum.photos/1920/1080?random",
  },
]

export default function OpeningCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const changeSlide = (index: number) => {
    if (isTransitioning || index === activeIndex) return

    setIsTransitioning(true)
    setActiveIndex(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    const nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1
    changeSlide(nextIndex)
  }

  // Auto-advance carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [activeIndex, isTransitioning])

  const currentItem = carouselItems[activeIndex]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Bottom Section with Film Titles, URL and Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* Film Titles List - Now at bottom left */}
        <div className="px-[--x-spacing] p-8 pb-16 md:p-10 md:pb-20">
          <div className="space-y-1 ">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => changeSlide(index)}
                onClick={() => changeSlide(index)} // Keep click for mobile
                className="flex items-baseline group w-full cursor-pointer"
              >
                <Link href={item.url} className="flex items-center">
                <h2
                  className={cn(
                    "text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-300",
                    index === activeIndex ? "opacity-100" : "opacity-40 hover:opacity-70",
                  )}
                >
                  {item.title}
                </h2>
                <span
                  className={cn(
                    "text-white text-sm ml-2 transition-opacity duration-300",
                    index === activeIndex ? "opacity-70" : "opacity-40 group-hover:opacity-70",
                  )}
                >
                  {item.year}
                </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* URL and Scroll Indicator */}
        <div className="absolute bottom-4 right-0 flex justify-between items-end px-8">
          <button onClick={nextSlide} className="text-white p-2" aria-label="Next slide">
            NEr
          </button>
        </div>
      </div>
    </div>
  )
}
