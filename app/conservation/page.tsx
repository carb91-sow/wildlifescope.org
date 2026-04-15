"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConservationPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white">

        {/* HERO */}
        <section className="relative h-[90vh] flex items-center">
          <Image
            src="/images/rahenur.jpeg"
            alt="Rahenur field work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative max-w-5xl mx-auto px-6">
            <p className="uppercase tracking-[0.3em] text-[#f4c542] text-sm">
              Conservation Story
            </p>

            <h1 className="mt-6 font-serif text-5xl md:text-7xl font-bold leading-tight">
              From field research to wildlife conservation in Bangladesh
            </h1>

            <p className="mt-6 text-lg text-white/70">
              The journey of Md. Rahenur Islam Sourov — wildlife researcher,
              field ecologist, and founder of WildlifeScope.
            </p>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="py-24 max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Where it began</h2>

          <p className="text-white/75 leading-8 mb-6">
            Growing up in Bangladesh, I witnessed the richness of biodiversity
            alongside its gradual disappearance. Forests were shrinking,
            wildlife was becoming more vulnerable, and awareness was limited.
          </p>

          <p className="text-white/75 leading-8">
            This reality shaped my decision to pursue wildlife conservation,
            focusing on understanding ecosystems, protecting species, and
            building a future where humans and wildlife coexist.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

            {[
              "Radio Telemetry & Wildlife Tracking",
              "Camera Trap Surveys & Biodiversity Monitoring",
              "GIS & Spatial Ecology Analysis",
              "Human–Wildlife Conflict Mitigation",
              "Field Research & Habitat Assessment",
              "Community Awareness & Conservation Education"
            ].map((item) => (
              <div key={item} className="border border-white/10 p-6 rounded-2xl">
                <p>{item}</p>
              </div>
            ))}

          </div>
        </section>

        {/* FEATURED STORY */}
        <section className="py-24 max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">
            Tracking Bengal Slow Loris in Sreemangal
          </h2>

          <Image
            src="/images/rahenur.jpeg"
            alt="Field research"
            width={1200}
            height={700}
            className="rounded-3xl mb-8"
          />

          <p className="text-white/75 leading-8 mb-6">
            As a Research Assistant at the Wildlife Conservation Centre in
            Sreemangal, I worked on tracking Bengal Slow Loris using radio
            telemetry. This involved long hours in the field, collecting data
            on movement patterns, habitat use, and ecological behavior.
          </p>

          <p className="text-white/75 leading-8 mb-6">
            Using GIS and ecological analysis tools, I contributed to
            understanding how this species interacts with its environment,
            helping inform conservation strategies.
          </p>

          <p className="text-white/75 leading-8">
            This experience strengthened my belief that conservation must be
            rooted in science, field data, and real-world observation.
          </p>
        </section>

        {/* IMPACT */}
        <section className="py-20 bg-[#11130f] text-center">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

            {[
              { value: "3+", label: "Years Experience" },
              { value: "Field", label: "Research Work" },
              { value: "GIS", label: "Ecology Tools" },
              { value: "Bangladesh", label: "Focus Region" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-4xl font-bold text-[#f4c542]">
                  {item.value}
                </h3>
                <p className="mt-2 text-white/70">{item.label}</p>
              </div>
            ))}

          </div>
        </section>

        {/* COMMUNITY */}
        <section className="py-24 max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">
            Community and conservation impact
          </h2>

          <p className="text-white/75 leading-8 mb-6">
            Beyond research, I have worked in wildlife rescue operations and
            awareness programs to reduce human–wildlife conflict. Engaging with
            communities is essential to conservation success.
          </p>

          <p className="text-white/75 leading-8">
            By building awareness and promoting sustainable practices, we can
            protect both people and wildlife.
          </p>
        </section>

        {/* TIMELINE */}
        <section className="py-24 bg-[#11130f]">
          <div className="max-w-4xl mx-auto px-6 space-y-8">

            {[
              "Started conservation interest",
              "Field research experience",
              "Wildlife research assistant",
              "MSc in Wildlife Conservation",
              "Founded WildlifeScope"
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-[#f4c542] pl-6">
                <p>{item}</p>
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

          <p className="mt-6 text-[#f4c542] uppercase text-sm">
            Md. Rahenur Islam Sourov
          </p>
        </section>

        {/* FUTURE */}
        <section className="py-24 max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-6">
            Looking ahead
          </h2>

          <p className="text-white/75 leading-8">
            My goal is to expand conservation work across Bangladesh,
            strengthen biodiversity research, and build a platform that
            connects science, community, and global awareness.
          </p>
        </section>

      </main>

      <Footer />
    </>
  )
}
