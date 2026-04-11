"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const featuredSpecies = [
  {
    name: "Royal Bengal Tiger",
    status: "Endangered",
    region: "Sundarbans, Bangladesh",
    image: "/images/bengal-tiger.jpg",
    href: "/species#bengal-tiger",
  },
  {
    name: "Ganges River Dolphin",
    status: "Endangered",
    region: "Bangladesh Rivers",
    image: "/images/ganges-dolphin.jpg",
    href: "/species#ganges-dolphin",
  },
  {
    name: "Asian Elephant",
    status: "Endangered",
    region: "Chittagong Hill Tracts",
    image: "/images/asian-elephant.jpg",
    href: "/species#asian-elephant",
  },
  {
    name: "Western Hoolock Gibbon",
    status: "Endangered",
    region: "Sylhet Division",
    image: "/images/hoolock-gibbon.jpg",
    href: "/species#hoolock-gibbon",
  },
]

const statusColors: Record<string, string> = {
  "Endangered": "bg-red-500/10 text-red-600",
  "Vulnerable": "bg-amber-500/10 text-amber-600",
  "Near Threatened": "bg-yellow-500/10 text-yellow-600",
}

export function WildlifeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-accent tracking-widest uppercase mb-4"
            >
              Wildlife Under Watch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight"
            >
              Featured Species
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              href="/species"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group"
            >
              View All Species
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetrical Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {featuredSpecies.map((species, index) => (
            <motion.div
              key={species.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className={`group relative ${
                index === 0
                  ? "lg:col-span-7 lg:row-span-2"
                  : index === 1
                  ? "lg:col-span-5"
                  : index === 2
                  ? "lg:col-span-5"
                  : "lg:col-span-7"
              }`}
            >
              <Link href={species.href} className="block relative overflow-hidden rounded-2xl">
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={species.image}
                    alt={species.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[species.status] || "bg-gray-500/10 text-gray-600"
                      }`}
                    >
                      {species.status}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mt-3">
                      {species.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">{species.region}</p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
