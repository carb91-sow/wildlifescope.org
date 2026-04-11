"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TreePine, Shield, Waves, GraduationCap, ArrowRight, Check } from "lucide-react"

const programs = [
  {
    id: "habitat",
    icon: TreePine,
    title: "Habitat Restoration",
    subtitle: "Rebuilding Natural Ecosystems",
    image: "/images/habitat-restoration.jpg",
    description: "Our habitat restoration program focuses on reviving degraded ecosystems and creating wildlife corridors that connect fragmented habitats, allowing species to migrate and maintain genetic diversity.",
    highlights: [
      "Planted over 5 million native trees",
      "Restored 500,000 acres of degraded land",
      "Created 15 wildlife corridors across Africa",
      "Partnered with 200+ local communities",
    ],
  },
  {
    id: "anti-poaching",
    icon: Shield,
    title: "Anti-Poaching Units",
    subtitle: "Frontline Wildlife Protection",
    image: "/images/team.jpg",
    description: "Our anti-poaching teams work around the clock to protect vulnerable species from illegal wildlife trafficking. We equip rangers with cutting-edge technology and provide extensive training.",
    highlights: [
      "Trained 2,500+ wildlife rangers",
      "Deployed drone surveillance systems",
      "90% reduction in poaching incidents",
      "24/7 rapid response capabilities",
    ],
  },
  {
    id: "marine",
    icon: Waves,
    title: "Marine Conservation",
    subtitle: "Protecting Ocean Ecosystems",
    image: "/images/marine-conservation.jpg",
    description: "From coral reef restoration to sea turtle protection, our marine conservation efforts span the world&apos;s oceans, working to preserve biodiversity in our most threatened marine environments.",
    highlights: [
      "Established 12 marine protected areas",
      "Protected 50,000 sea turtle nests",
      "Restored 100 acres of coral reef",
      "Removed 500 tons of ocean debris",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Community Education",
    subtitle: "Empowering Future Conservationists",
    image: "/images/education.jpg",
    description: "Education is the foundation of lasting conservation. We work with local communities to develop sustainable livelihoods that protect rather than exploit natural resources.",
    highlights: [
      "Educated 100,000+ students annually",
      "Established 50 wildlife clubs",
      "Trained 1,000 eco-tourism guides",
      "Supported 500 sustainable businesses",
    ],
  },
]

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      id={program.id}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        !isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Decorative Icon */}
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
          <program.icon className="w-10 h-10 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "lg:order-1" : ""}`}>
        <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
          {program.subtitle}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
          {program.title}
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {program.description}
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {program.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-foreground">{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-200 group"
          >
            Support This Program
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function ConservationPage() {
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
              Our Programs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            >
              Conservation Initiatives
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Explore our comprehensive conservation programs that span continents and ecosystems, each designed to address critical threats facing wildlife today.
            </motion.p>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col gap-24 lg:gap-32">
              {programs.map((program, index) => (
                <ProgramCard key={program.id} program={program} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Global Impact</h2>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
                Together with our partners and supporters, we have achieved remarkable results in protecting wildlife worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "40+", label: "Countries" },
                { value: "150+", label: "Species Protected" },
                { value: "2.5M", label: "Acres Preserved" },
                { value: "500K+", label: "People Educated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-4xl md:text-5xl font-bold">{stat.value}</div>
                  <div className="text-primary-foreground/80 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
