"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  MapPin,
  Leaf,
} from "lucide-react"

export default function AboutPage() {
  const heroRef = useRef(null)
  const introRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const introInView = useInView(introRef, { once: true })

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white">

        {/* ================= HERO ================= */}
        <section
          ref={heroRef}
          className="relative min-h-[92vh] overflow-hidden"
        >
          {/* Real Image */}
          <Image
            src="/images/about-hero.jpeg"
            alt="Wildlife conservation fieldwork"
            fill
            priority
            className="object-cover brightness-[0.95]"
          />

          {/* Light overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0d09] to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
            <div className="max-w-4xl">

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                className="font-serif text-5xl font-bold md:text-7xl"
              >
                Wildlife conservation in Bangladesh through research and field ecology
              </motion.h1>

              <p className="mt-6 text-lg text-white/90">
                WildlifeScope is a Bangladesh-based conservation platform focused on biodiversity protection and environmental awareness.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/conservation"
                  className="bg-[#f4c542] text-black px-6 py-3 rounded-full font-semibold"
                >
                  Explore Work
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FOUNDER ================= */}
        <section
          ref={introRef}
          className="relative overflow-hidden py-20"
        >
          {/* Real background */}
          <Image
            src="/images/founder-bg.jpg"
            alt="Fieldwork"
            fill
            className="object-cover object-right brightness-[0.9]"
          />

          {/* Light overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

            <div>
              <p className="text-[#f4c542] uppercase text-sm tracking-widest">
                Founder Profile
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold">
                A wildlife researcher building impact through real field experience
              </h2>

              <div className="mt-6 flex gap-6 text-white/90 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Bangladesh
                </span>
                <span className="flex items-center gap-2">
                  <Leaf size={16} /> Conservation
                </span>
              </div>
            </div>

            <div className="text-white/90 leading-8 space-y-4">
              <p>
                Md. Rahenur Islam Sourov is a wildlife conservation researcher with field-based experience in biodiversity monitoring and ecology.
              </p>
              <p>
                His work includes radio telemetry, camera trapping, and GIS-based ecological analysis across Bangladesh.
              </p>
              <p>
                He combines scientific research with conservation communication to support real-world biodiversity protection.
              </p>
            </div>

          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            
            <div>
              <Target className="text-[#f4c542]" />
              <h3 className="mt-4 text-2xl font-bold">Mission</h3>
              <p className="mt-2 text-white/70">
                Protect wildlife through science-based conservation.
              </p>
            </div>

            <div>
              <Eye className="text-[#f4c542]" />
              <h3 className="mt-4 text-2xl font-bold">Vision</h3>
              <p className="mt-2 text-white/70">
                A future where ecosystems and communities coexist.
              </p>
            </div>

            <div>
              <Heart className="text-[#f4c542]" />
              <h3 className="mt-4 text-2xl font-bold">Values</h3>
              <p className="mt-2 text-white/70">
                Science, integrity, and compassion for wildlife.
              </p>
            </div>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold">
            Join the mission for wildlife conservation
          </h2>
          <p className="mt-4 text-white/70">
            Support biodiversity protection and environmental awareness.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#f4c542] text-black px-6 py-3 rounded-full"
          >
            Contact
          </Link>
        </section>

      </main>

      <Footer />
    </>
  )
}
