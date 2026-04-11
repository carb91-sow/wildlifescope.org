"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-accent tracking-widest uppercase mb-4"
        >
          Take Action Today
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
        >
          JOIN THE EFFORT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Every action matters. Whether you donate, volunteer, or spread awareness, you become part of a global movement dedicated to protecting our planet&apos;s precious wildlife.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-200 text-lg"
          >
            Donate Now
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-foreground/20 text-foreground font-medium rounded-full hover:bg-foreground/5 transition-colors duration-200 text-lg"
          >
            Become a Volunteer
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
            </svg>
            <span className="text-sm font-medium">501(c)(3) Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-sm font-medium">4-Star Charity</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
            <span className="text-sm font-medium">90% to Programs</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
