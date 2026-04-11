"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, TreePine, Shield, Waves, GraduationCap } from "lucide-react"

const initiatives = [
  {
    icon: TreePine,
    title: "Habitat Restoration",
    description: "Restoring degraded ecosystems and creating wildlife corridors to connect fragmented habitats.",
    href: "/conservation#habitat",
  },
  {
    icon: Shield,
    title: "Anti-Poaching Units",
    description: "Training and equipping rangers with modern technology to combat wildlife trafficking.",
    href: "/conservation#anti-poaching",
  },
  {
    icon: Waves,
    title: "Marine Conservation",
    description: "Protecting ocean ecosystems and establishing marine protected areas worldwide.",
    href: "/conservation#marine",
  },
  {
    icon: GraduationCap,
    title: "Community Education",
    description: "Empowering local communities through environmental education and sustainable practices.",
    href: "/conservation#education",
  },
]

export function InitiativesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/habitat-restoration.jpg"
          alt="Conservation in action"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-accent tracking-widest uppercase mb-4"
            >
              Active Initiatives
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-balance"
            >
              Making a Real Difference in the Field
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-background/70 leading-relaxed"
            >
              Our programs span across continents, addressing the most pressing challenges facing wildlife today. From the African savannas to the depths of our oceans, we are committed to protecting every species.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/conservation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-colors duration-200 group"
              >
                View All Programs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Initiative Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={initiative.href}
                  className="block group p-6 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/20 hover:bg-background/20 hover:border-background/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                    <initiative.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {initiative.title}
                  </h3>
                  <p className="text-background/60 text-sm leading-relaxed">
                    {initiative.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
