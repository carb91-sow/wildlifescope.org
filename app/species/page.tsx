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
    description:
      "The iconic tiger of the Sundarbans mangrove forest, adapted to swimming and hunting in tidal waterways.",
  },
  {
    id: "ganges-dolphin",
    name: "Ganges River Dolphin",
    scientificName: "Platanista gangetica",
    status: "Endangered",
    region: "Bangladesh Rivers",
    population: "~1,200-1,800",
    image: "/images/ganges-dolphin.jpg",
    description:
      "A freshwater dolphin found in the Ganges-Brahmaputra river system, nearly blind and using echolocation.",
  },
  {
    id: "asian-elephant",
    name: "Asian Elephant",
    scientificName: "Elephas maximus",
    status: "Endangered",
    region: "Chittagong Hill Tracts",
    population: "~268",
    image: "/images/asian-elephant.jpg",
    description:
      "Bangladesh&apos;s largest land mammal, facing habitat fragmentation and human-elephant conflict.",
  },
  {
    id: "saltwater-crocodile",
    name: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    status: "Critically Endangered",
    region: "Sundarbans, Bangladesh",
    population: "~150-200",
    image: "/images/saltwater-crocodile.jpg",
    description:
      "The world&apos;s largest living reptile, found in the estuarine waters of the Sundarbans.",
  },
  {
    id: "fishing-cat",
    name: "Fishing Cat",
    scientificName: "Prionailurus viverrinus",
    status: "Vulnerable",
    region: "Bangladesh Wetlands",
    population: "Unknown",
    image: "/images/fishing-cat.jpg",
    description:
      "A medium-sized wild cat uniquely adapted to wetland habitats, skilled at catching fish.",
  },
  {
    id: "hoolock-gibbon",
    name: "Western Hoolock Gibbon",
    scientificName: "Hoolock hoolock",
    status: "Endangered",
    region: "Sylhet Division",
    population: "~200-300",
    image: "/images/hoolock-gibbon.jpg",
    description:
      "Bangladesh&apos;s only ape species, known for their loud morning calls and acrobatic movement.",
  },
  {
    id: "gharial",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    status: "Critically Endangered",
    region: "Bangladesh Rivers",
    population: "~100",
    image: "/images/gharial.jpg",
    description:
      "A fish-eating crocodilian with a distinctive long, narrow snout, critically endangered in Bangladesh.",
  },
  {
    id: "clouded-leopard",
    name: "Clouded Leopard",
    scientificName: "Neofelis nebulosa",
    status: "Vulnerable",
    region: "Chittagong Hill Tracts",
    population: "Unknown",
    image: "/images/clouded-leopard.jpg",
    description:
      "A secretive forest cat with distinctive cloud-shaped markings, rarely seen in Bangladesh&apos;s forests.",
  },
]

const statusStyles: Record<string, string> = {
  Endangered: "text-[#ffb4a8] border-[#ffb4a8]/30 bg-[#ffb4a8]/10",
  "Critically Endangered": "text-[#ff8f7a] border-[#ff8f7a]/30 bg-[#ff8f7a]/10",
  Vulnerable: "text-[#ffd37a] border-[#ffd37a]/30 bg-[#ffd37a]/10",
  "Near Threatened": "text-[#f6e27a] border-[#f6e27a]/30 bg-[#f6e27a]/10",
}

function SpeciesCard({
  species,
  index,
}: {
  species: typeof species[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.article
      ref={cardRef}
      id={species.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.65 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#141611] shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#f4c542]/35"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={species.image}
          alt={species.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />

        <div className="absolute left-5 top-5">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm ${
              statusStyles[species.status] ||
              "border-white/20 bg-white/10 text-white/80"
            }`}
          >
            {species.status}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6">
          <p className="text-sm italic text-white/70">{species.scientificName}</p>
          <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-white">
            {species.name}
          </h2>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-white/55">
          <MapPin size={14} className="text-[#f4c542]" />
          <span>{species.region}</span>
        </div>

        <p className="mt-4 text-sm leading-7 text-white/72">
          {species.description}
        </p>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex items-end justify-between gap-4">
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Estimated Population
            </span>
            <span className="font-serif text-xl font-bold text-[#f4c542]">
              {species.population}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function SpeciesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLElement>(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" })

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d09]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,197,66,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

          <div
            ref={heroRef}
            className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <span className="h-12 w-2 bg-[#f4c542]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
                Wildlife Catalog
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="max-w-4xl font-serif text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
            >
              Species We Protect
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl"
            >
              From the Sundarbans mangroves to the Chittagong Hill Tracts,
              discover the remarkable wildlife of Bangladesh and the species we
              are committed to protecting through research, conservation, and
              awareness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Habitat Range
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Forests, rivers, wetlands, mangroves
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Focus
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Endangered and threatened species
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Country
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Bangladesh
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section ref={gridRef} className="bg-[#11130f] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                >
                  Editorial Collection
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl"
                >
                  Wildlife of Bangladesh
                </motion.h2>
              </div>

              <div className="hidden h-px flex-1 bg-white/10 lg:block" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
