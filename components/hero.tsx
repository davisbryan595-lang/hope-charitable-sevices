"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

const CAROUSEL_IMAGES = [
  "/diverse-community-helping-each-other-smiling.jpg",
  "/diverse-community-helping-each-other-smiling.jpg",
  "/diverse-community-helping-each-other-smiling.jpg",
]

export function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      scrollNext()
    }, 5000)

    return () => clearInterval(autoplayInterval)
  }, [scrollNext])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div ref={emblaRef} className="relative h-96 md:h-screen">
        <div className="flex h-full">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div
              key={index}
              className="relative flex-none w-full h-full"
            >
              <Image
                src={image}
                alt={`Hope Charitable Services Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Tinted Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(88, 96, 221, 0.7), rgba(88, 96, 221, 0.5), transparent)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(88, 96, 221, 0.4), transparent, rgba(88, 96, 221, 0.3))"
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
                Hope for <span className="text-secondary">Everyone</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-balance">
                At Hope Charitable Services, we believe in the power of compassion. We provide essential services and
                support to those in need, creating pathways to dignity, independence, and renewed hope.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 w-fit">
                Support Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent w-fit"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20 max-w-md">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-secondary">15K+</p>
                <p className="text-sm text-white/70">Lives Impacted</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-secondary">8+</p>
                <p className="text-sm text-white/70">Years Active</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-secondary">50+</p>
                <p className="text-sm text-white/70">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-white w-8" : "bg-white/40 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
