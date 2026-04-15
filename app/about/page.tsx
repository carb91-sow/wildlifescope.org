"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Target, Eye, Heart, MapPin, Leaf } from "lucide-react"

const founder = {
  name: "Md. Rahenur Islam Sourov",
  role: "Wildlife Researcher • Field Ecologist • Conservation Leader",
  image: "/images/rahenur.jpeg",
  location: "Chattogram, Bangladesh",
  university: "University of Chittagong",
  degree: "MSc in Wildlife and Conservation Biology",
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const founderRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isFounderInView = useInView(founderRef, { once: true })

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white">

        {/* HERO */}
        <section ref={heroRef} className="py-28 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                className="text-sm uppercase tracking-[0.3em] text-[#f4c542]"
              >
                About the Founder
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                className="mt-4 font-serif text-5xl font-bold"
              >
                Md. Rahenur Islam Sourov
              </motion.h1>

              <p className="mt-4 text-[#f4c542] uppercase tracking-[0.25em] text-sm">
                {founder.role}
              </p>

              <p className="mt-6 text-lg text-white/70 leading-8">
                Wildlife conservation researcher in Bangladesh specializing in 
                biodiversity monitoring, spatial ecology, and human–wildlife 
                conflict mitigation. Founder of WildlifeScope, working to 
                connect research, field experience, and conservation awareness.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="/conservation" className="bg-[#f4c542] text-black px-6 py-3 rounded-full font-semibold">
                  Explore Work
                </Link>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* BIO SECTION */}
        <section ref={founderRef} className="py-24">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="font-serif text-4xl mb-6">
              Wildlife Conservation Researcher in Bangladesh
            </h2>

            <p className="text-white/75 leading-8 mb-6">
              Md. Rahenur Islam Sourov is a wildlife conservation researcher and 
              field ecologist with over three years of experience in biodiversity 
              conservation in Bangladesh. His work focuses on wildlife monitoring, 
              spatial ecology, and human–wildlife conflict mitigation using modern 
              conservation techniques such as radio telemetry, camera trapping, 
              and GIS-based ecological analysis.
            </p>

            <p className="text-white/75 leading-8 mb-6">
              He worked as a Research Assistant at the Wildlife Conservation 
              Centre in Sreemangal, where he conducted radio telemetry tracking 
              of Bengal Slow Loris and contributed to ecological data analysis 
              using R and GIS tools. His work supported habitat use studies, 
              movement ecology research, and conservation planning.
            </p>

            <p className="text-white/75 leading-8 mb-6">
              Rahenur has also coordinated large-scale camera trap surveys, 
              participated in multi-site biodiversity monitoring, and contributed 
              to conservation data systems. His expertise includes habitat 
              assessment, ecological modeling, and wildlife field research.
            </p>

            <p className="text-white/75 leading-8">
              In addition to research, he actively works in community-based 
              conservation, leading awareness programs and wildlife rescue 
              operations to reduce human–wildlife conflict in Bangladesh. Through 
              WildlifeScope, he aims to promote conservation education, protect 
              endangered species, and build a sustainable future for biodiversity.
            </p>

          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

            {[
              "Radio Telemetry & Camera Trapping",
              "GIS & Spatial Ecology Analysis",
              "Wildlife Field Research",
              "Biodiversity Monitoring",
              "Human–Wildlife Conflict Mitigation",
              "Community-Based Conservation"
            ].map((item) => (
              <div key={item} className="border border-white/10 p-6 rounded-2xl">
                <p className="text-white/80">{item}</p>
              </div>
            ))}

          </div>
        </section>

        {/* QUOTE */}
        <section className="py-24 text-center">
          <p className="font-serif text-3xl max-w-3xl mx-auto">
            “Conservation is not only about protecting wildlife, but about 
            protecting the future of people and nature together.”
          </p>

          <p className="mt-6 text-[#f4c542] uppercase tracking-[0.3em] text-sm">
            Md. Rahenur Islam Sourov
          </p>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#11130f] text-center">
          <h2 className="font-serif text-4xl">
            Join the mission to protect wildlife
          </h2>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#f4c542] text-black px-8 py-3 rounded-full font-semibold"
          >
            Contact Me
          </Link>
        </section>

      </main>

      <Footer />
    </>
  )
}
