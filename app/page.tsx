"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="bg-[#0a0d09] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/home-hero.jpg"
          alt="Wildlife Bangladesh"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl font-bold leading-tight md:text-7xl"
            >
              Protecting Wildlife in Bangladesh Through Science, Story, and Action
            </motion.h1>

            <p className="mt-6 text-lg text-white/80 md:text-xl">
              WildlifeScope connects research, biodiversity awareness, and conservation storytelling
              to build a stronger future for wildlife and people.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/species"
                className="rounded-full bg-[#f4c542] px-6 py-3 text-black font-semibold"
              >
                Explore Species
              </Link>

              <Link
                href="/conservation"
                className="rounded-full border border-white/20 px-6 py-3"
              >
                Conservation Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="py-20 bg-[#11130f]">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold">
            Because conservation must be seen, understood, and felt
          </h2>

          <p className="mt-6 text-white/70 leading-8">
            Bangladesh holds extraordinary biodiversity, yet many species face growing threats.
            WildlifeScope exists to make conservation more visible, more human, and more meaningful—
            connecting science with real-world awareness and action.
          </p>
        </div>
      </section>

      {/* ================= 3 CARDS ================= */}
      <section className="py-20 bg-[#0d0f0c]">
        <div className="grid gap-8 max-w-7xl mx-auto px-6 md:grid-cols-3">

          {[
            { title: "Species", desc: "Discover wildlife across Bangladesh", link: "/species" },
            { title: "Conservation", desc: "Explore fieldwork and research", link: "/conservation" },
            { title: "Awareness", desc: "Learn through stories and education", link: "/about" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-[#171a15] border border-white/10 hover:border-[#f4c542]/40 transition"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.desc}</p>

              <Link href={item.link} className="mt-6 inline-flex items-center gap-2 text-[#f4c542]">
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-20 bg-[#11130f]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6">

          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/rahenur.jpeg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-4xl font-bold">
              Built from real field experience
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              WildlifeScope was founded by Md. Rahenur Islam Sourov, a wildlife
              conservation researcher working across Bangladesh in biodiversity monitoring,
              ecological research, and awareness initiatives.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-block bg-[#f4c542] text-black px-6 py-3 rounded-full"
            >
              Read About
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SPECIES ================= */}
      <section className="py-20 bg-[#0a0b08] text-center">
        <h2 className="font-serif text-4xl font-bold">
          Wildlife that deserves protection
        </h2>

        <p className="mt-4 text-white/70">
          Discover species that shape Bangladesh’s ecosystems
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-6">
          {["Slow Loris", "Fishing Cat", "King Cobra"].map((s) => (
            <div key={s} className="p-6 bg-[#171a15] rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-[#11130f]">
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 text-center">

          {[
            "3+ Years Experience",
            "MSc Wildlife Biology",
            "Bangladesh Focus",
            "Research + Awareness",
          ].map((stat) => (
            <div key={stat} className="p-6 bg-[#171a15] rounded-xl">
              <p className="text-xl font-bold">{stat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="py-20 text-center bg-[#0d0f0c]">
        <h2 className="font-serif text-3xl md:text-5xl max-w-4xl mx-auto">
          “Conservation is not only about protecting wildlife.
          It is about protecting the future of coexistence.”
        </h2>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#0a0b08] text-center">
        <h2 className="text-4xl font-bold">
          Join the mission for wildlife conservation
        </h2>

        <p className="mt-4 text-white/70">
          Support awareness, research, and protection of biodiversity
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#f4c542] text-black px-6 py-3 rounded-full"
          >
            Get Involved
          </Link>

          <Link
            href="/species"
            className="border border-white/20 px-6 py-3 rounded-full"
          >
            Explore Species
          </Link>
        </div>
      </section>

    </main>
  )
}
