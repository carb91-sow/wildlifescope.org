"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin } from "lucide-react"

const species = [
  {
    id: "bengal-tiger",
    name: "Royal Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    status: "Endangered",
    region: "Sundarbans, Bangladesh",
    population: "~114",
    image: "/images/bengal-tiger.jpg",
    description: "The iconic tiger of the Sundarbans mangrove forest, adapted to swimming and hunting in tidal waterways.",
  },
  {
    id: "ganges-dolphin",
    name: "Ganges River Dolphin",
    scientificName: "Platanista gangetica",
    status: "Endangered",
    region: "Bangladesh Rivers",
    population: "~1,200-1,800",
    image: "/images/ganges-dolphin.jpg",
    description: "A freshwater dolphin found in the Ganges-Brahmaputra river system, nearly blind and using echolocation.",
  },
  {
    id: "asian-elephant",
    name: "Asian Elephant",
    scientificName: "Elephas maximus",
    status: "Endangered",
    region: "Chittagong Hill Tracts",
    population: "~268",
    image: "/images/asian-elephant.jpg",
    description: "Bangladesh&apos;s largest land mammal, facing habitat fragmentation and human-elephant conflict.",
  },
  {
    id: "saltwater-crocodile",
    name: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    status: "Critically Endangered",
    region: "Sundarbans, Bangladesh",
    population: "~150-200",
    image: "/images/saltwater-crocodile.jpg",
    description: "The world&apos;s largest living reptile, found in the estuarine waters of the Sundarbans.",
  },
  {
    id: "fishing-cat",
    name: "Fishing Cat",
    scientificName: "Prionailurus viverrinus",
    status: "Vulnerable",
    region: "Bangladesh Wetlands",
    population: "Unknown",
    image: "/images/fishing-cat.jpg",
    description: "A medium-sized wild cat uniquely adapted to wetland habitats, skilled at catching fish.",
  },
  {
    id: "hoolock-gibbon",
    name: "Western Hoolock Gibbon",
    scientificName: "Hoolock hoolock",
    status: "Endangered",
    region: "Sylhet Division",
    population: "~200-300",
    image: "/images/hoolock-gibbon.jpg",
    description: "Bangladesh&apos;s only ape species, known for their loud morning calls and acrobatic movement.",
  },
  {
    id: "gharial",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    status: "Critically Endangered",
    region: "Bangladesh Rivers",
    population: "~100",
    image: "/images/gharial.jpg",
    description: "A fish-eating crocodilian with a distinctive long, narrow snout, critically endangered in Bangladesh.",
  },
  {
    id: "clouded-leopard",
    name: "Clouded Leopard",
    scientificName: "Neofelis nebulosa",
    status: "Vulnerable",
    region: "Chittagong Hill Tracts",
    population: "Unknown",
    image: "/images/clouded-leopard.jpg",
    description: "A secretive forest cat with distinctive cloud-shaped markings, rarely seen in Bangladesh&apos;s forests.",
  },
]

const statusColors: Record<string, string> = {
  "Endangered": "bg-red-500/10 text-red-600 border-red-200",
  "Vulnerable": "bg-amber-500/10 text-amber-600 border-amber-200",
  "Near Threatened": "bg-yellow-500/10 text-yellow-600 border-yellow-200",
}

function SpeciesCard({ species, index }: { species: typeof species[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      id={species.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={species.image}
          alt={species.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
              statusColors[species.status] || "bg-gray-500/10 text-gray-600 border-gray-200"
            }`}
          >
            {species.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <MapPin size={14} />
          <span>{species.region}</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground">
          {species.name}
        </h3>
        <p className="text-sm text-muted-foreground italic mb-3">
          {species.scientificName}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {species.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Est. Population</span>
          <span className="font-serif text-lg font-bold text-primary">{species.population}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function SpeciesPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-accent tracking-widest uppercase mb-4"
            >
              Wildlife Catalog
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            >
              Species We Protect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              From the Sundarbans mangroves to the Chittagong Hill Tracts, discover the incredible species of Bangladesh we are dedicated to protecting.
            </motion.p>
          </div>
        </section>

        {/* Species Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {species.map((item, index) => (
                <SpeciesCard key={item.id} species={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
