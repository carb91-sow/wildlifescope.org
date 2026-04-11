"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Split Screen Layout */}
      <div className="grid lg:grid-cols-2 w-full min-h-screen">
        {/* Left: Image Block */}
        <motion.div
          className="relative h-[60vh] lg:h-screen order-2 lg:order-1"
          style={{ y: imageY }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
            {/* Circular Image Mask */}
            <div className="relative w-full h-full max-w-lg max-h-lg aspect-square rounded-full overflow-hidden">
              <Image
                src="/images/hero-lion.jpg"
                alt="Majestic lion in the African savanna"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-8 lg:bottom-16 lg:left-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm font-medium text-muted-foreground tracking-widest uppercase"
            >
              Since 2024
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Typography Block */}
        <motion.div
          className="relative flex flex-col justify-center px-8 lg:px-16 py-32 lg:py-0 order-1 lg:order-2 bg-secondary"
          style={{ y: textY, opacity }}
        >
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-accent tracking-widest uppercase mb-6"
            >
              Wildlife Conservation Foundation
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance"
            >
              PROTECTING OUR NATURAL WORLD
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              Dedicated to safeguarding endangered species and preserving biodiversity through sustainable conservation practices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/species"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-200"
              >
                Explore Species
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-medium rounded-full hover:bg-foreground/5 transition-colors duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-8 lg:left-16 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
