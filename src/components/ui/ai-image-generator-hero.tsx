"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [
    {
      title: "Realistic Results",
      description: "Realistic Results Photos that look professionally crafted",
    },
    {
      title: "Fast Generation",
      description: "Turn ideas into images in seconds.",
    },
    {
      title: "Diverse Styles",
      description: "Choose from a wide range of artistic options.",
    },
  ],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Measure actual container width - no guessing
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Single rotation drives everything
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const cardAngleStep = 360 / images.length

  // All sizes derived from measured container width
  const isSmall = containerWidth < 500
  const cardW = isSmall ? Math.max(56, containerWidth * 0.16) : 160
  const cardH = isSmall ? cardW * 1.25 : 192
  const radius = isSmall ? Math.min(containerWidth * 0.2, 70) : 180
  const containerHeight = isSmall ? Math.max(160, radius * 2 + cardH + 20) : 500

  return (
    <div className="relative w-full bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-32">
        {/* Carousel Container - fixed size, overflow hidden */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[500px] mb-4 sm:mb-16 mx-auto"
          style={{ height: `${containerHeight}px`, overflow: 'hidden' }}
          onMouseMove={handleMouseMove}
        >
          {containerWidth > 0 && images.map((image, index) => {
            const angle = ((rotation + index * cardAngleStep) % 360) * (Math.PI / 180)

            const centerX = containerWidth / 2
            const centerY = containerHeight / 2

            const posLeft = centerX + Math.cos(angle) * radius - cardW / 2
            const posTop = centerY + Math.sin(angle) * radius - cardH / 2

            const scale = isSmall ? 1 : 0.7 + 0.3 * ((Math.sin(angle) + 1) / 2)
            const zIndex = Math.round(50 + Math.sin(angle) * 25)
            const opacity = isSmall ? 1 : 0.5 + 0.5 * ((Math.sin(angle) + 1) / 2)

            const pX = isSmall ? 0 : (mousePosition.x - 0.5) * 20
            const pY = isSmall ? 0 : (mousePosition.y - 0.5) * 20

            return (
              <div
                key={image.id}
                style={{
                  position: 'absolute',
                  left: `${posLeft}px`,
                  top: `${posTop}px`,
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  zIndex,
                  opacity,
                  transform: isSmall ? undefined : `scale(${scale}) rotateX(${pY}deg) rotateY(${pX}deg)`,
                }}
              >
                <div className={cn(
                  "relative w-full h-full overflow-hidden",
                  isSmall ? "rounded shadow" : "rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 cursor-pointer group",
                )}>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Content Section */}
        <div className="relative z-20 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            {title}
          </h1>

          <p className="font-[family-name:var(--font-inter)] text-lg sm:text-xl text-muted-foreground mb-8 text-balance">{description}</p>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3 rounded-full",
              "bg-primary text-primary-foreground font-medium",
              "hover:shadow-lg hover:scale-105 transition-all duration-300",
              "active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "group",
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Section */}
        <div className="relative z-20 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "text-center p-6 rounded-xl",
                "bg-card/50 backdrop-blur-sm border border-border/50",
                "hover:bg-card/80 hover:border-border transition-all duration-300",
                "group",
              )}
            >
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
