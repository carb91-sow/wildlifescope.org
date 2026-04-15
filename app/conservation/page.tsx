"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  TreePine,
  Shield,
  Waves,
  GraduationCap,
  ArrowRight,
  Check,
  MapPin,
  Leaf,
  Binoculars,
} from "lucide-react"

const programs = [
  {
    id: "field-research",
    icon: Binoculars,
    title: "Field Research & Wildlife Observation",
    subtitle: "On-the-Ground Conservation Experience",
    image: "/images/rahenur.jpeg",
    description:
      "My conservation journey is rooted in direct field experience, wildlife observation, and ecological learning. Through field visits, species documentation, and biodiversity-focused study, I continue building practical knowledge that supports real conservation action in Bangladesh.",
    highlights: [
      "Hands-on wildlife observation and habitat study",
      "Experience documenting biodiversity and ecosystems",
      "Field-based learning in conservation landscapes",
      "Strong focus on practical conservation awareness",
    ],
  },
  {
    id: "habitat-protection",
    icon: TreePine,
    title: "Habitat Protection",
    subtitle: "Protecting Ecosystems That Sustain Wildlife",
    image: "/images/habitat-restoration.jpg",
    description:
      "Effective wildlife conservation begins with habitat protection. My work and vision through WildlifeScope focus on preserving forests, wetlands, mangroves, and river systems that are essential for the survival of Bangladesh’s wildlife.",
    highlights: [
      "Focus on forest and wetland conservation",
      "Support for habitat restoration awareness",
      "Attention to biodiversity-rich ecosystems",
      "Advocacy for long-term ecological balance",
    ],
  },
  {
    id: "wildlife-protection",
    icon: Shield,
    title: "Wildlife Protection & Awareness",
    subtitle: "Building Public Understanding",
    image: "/images/team.jpg",
    description:
      "Wildlife protection is not only about research but also about building public awareness. I aim to promote conservation knowledge, encourage responsible environmental behavior, and create stronger awareness around threatened species in Bangladesh.",
    highlights: [
      "Awareness-driven conservation communication",
      "Focus on endangered and threatened species",
      "Promoting ethical and sustainable attitudes",
      "Supporting future conservation engagement",
    ],
  },
  {
    id: "community-education",
    icon: GraduationCap,
    title: "Education & Community Engagement",
    subtitle: "Connecting People with Conservation",
    image: "/images/education.jpg",
    description:
      "Long-term conservation depends on people. Through WildlifeScope, I want to help connect communities, students, and young conservation-minded individuals with the importance of wildlife protection, environmental education, and sustainable coexistence.",
    highlights: [
      "Encouraging youth participation in conservation",
      "Community-centered awareness initiatives",
      "Promoting education for sustainable futures",
      "Building local support for wildlife protection",
    ],
  },
  {
    id: "marine-ecosystems",
    icon: Waves,
    title: "River & Marine Ecosystem Awareness",
    subtitle: "Protecting Aquatic Biodiversity",
    image: "/images/marine-conservation.jpg",
    description:
      "Bangladesh’s rivers and coastal ecosystems support extraordinary biodiversity. My conservation vision includes stronger awareness and protection for dolphins, aquatic species, wetlands, and marine habitats that are often overlooked.",
    highlights: [
      "Focus on rivers, wetlands, and coastal habitats",
      "Support for aquatic biodiversity awareness",
      "Interest in freshwater and marine conservation",
      "Promoting ecosystem-wide protection efforts",
    ],
  },
]

const journey = [
  {
    year: "Academic Path",
    event: "Studied wildlife and conservation with a strong focus on biodiversity, ecosystems, and environmental responsibility.",
  },
  {
    year: "Field Learning",
    event: "Built hands-on understanding through observation, research exposure, and field-based conservation experiences.",
  },
  {
    year: "WildlifeScope",
    event: "Founded WildlifeScope to share conservation awareness, highlight species of Bangladesh, and inspire action for wildlife protection.",
  },
  {
    year: "Ongoing Mission",
    event: "Continuing to grow as a conservation leader focused on research, public awareness, and long-term ecological stewardship.",
  },
]

const founder = {
  name: "Md. Rahenur Islam Sourov",
  role: "Founder & CEO",
  image: "/images/rahenur.jpeg",
  location: "Chittagong, Bangladesh",
  degree: "MSc in Wildlife and Conservation",
  university: "University of Chittagong",
  bio: "I believe conservation must connect science, field experience, and public awareness. Through WildlifeScope, my goal is to contribute to a stronger culture of wildlife protection in Bangladesh by combining research-based understanding with education, advocacy, and a deep respect for nature.",
}

function ProgramSection({
  program,
  index,
}: {
  program: typeof programs[0]
  index: number
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const reversed = index % 2 !== 0

  return (
    <motion.section
      ref={sectionRef}
      id={program.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75 }}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141611]">
          <div className="relative aspect-[4/3]">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />
          </div>

          <div className="absolute bottom-6 left-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f4c542]/30 bg-black/40 text-[#f4c542] backdrop-blur-sm">
              <program.icon className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
          {program.subtitle}
        </p>

        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
          {program.title}
        </h2>

        <p className="mt-5 text-lg leading-8 text-white/74">
          {program.description}
        </p>

        <ul className="mt-8 space-y-4">
          {program.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4c542]/10">
                <Check className="h-3 w-3 text-[#f4c542]" />
              </div>
              <span className="text-white/82">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c542] transition hover:gap-3"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

export default function ConservationPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const journeyRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" })
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" })

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
            className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="mb-6 inline-flex items-center gap-3"
              >
                <span className="h-12 w-2 bg-[#f4c542]" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
                  Conservation In Action
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.75 }}
                className="max-w-4xl font-serif text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
              >
                Field experience, research, and wildlife protection
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.75 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl"
              >
                This page highlights my conservation vision, practical learning,
                and commitment to protecting wildlife in Bangladesh through
                research, awareness, habitat protection, and community
                engagement.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.75 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
                >
                  About the Founder
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                >
                  Work With Us
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#141611] shadow-2xl">
                <div className="relative min-h-[420px] lg:min-h-[620px]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-3 bg-[#f4c542]" />

                  <div className="absolute bottom-0 left-0 p-8 md:p-10">
                    <div className="inline-flex items-center gap-3 border border-[#f4c542]/35 bg-black/20 px-4 py-2 backdrop-blur-sm">
                      <span className="h-3 w-3 rounded-full bg-[#f4c542]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f4c542]">
                        WildlifeScope
                      </span>
                    </div>

                    <h2 className="mt-6 font-serif text-3xl font-bold text-white md:text-5xl">
                      {founder.name}
                    </h2>
                    <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/72">
                      {founder.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Personal Mission */}
        <section ref={missionRef} className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                >
                  My Conservation Mission
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.65 }}
                  className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl"
                >
                  Protecting wildlife through knowledge, action, and advocacy
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.65 }}
                className="space-y-6 text-lg leading-8 text-white/74"
              >
                <p>{founder.bio}</p>
                <p>
                  My work is inspired by the belief that conservation should be
                  locally rooted, scientifically informed, and publicly
                  accessible. WildlifeScope is part of that effort: a platform
                  to share awareness, strengthen conservation thinking, and
                  highlight the importance of Bangladesh’s unique biodiversity.
                </p>

                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-[#171a15] p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                      Based In
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {founder.location}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-[#171a15] p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                      Academic Background
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {founder.degree}
                    </p>
                    <p className="mt-1 text-white/65">{founder.university}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs / Experience */}
        <section className="bg-[#0d0f0c] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                Work Experience & Focus Areas
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                Conservation work on the ground
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                These sections highlight the practical areas of conservation I
                care about most, from field learning and habitat protection to
                awareness, education, and ecological stewardship.
              </p>
            </div>

            <div className="flex flex-col gap-24 lg:gap-32">
              {programs.map((program, index) => (
                <ProgramSection key={program.id} program={program} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section ref={journeyRef} className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                >
                  Professional Journey
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.65 }}
                  className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl"
                >
                  A growing path in conservation
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.65 }}
                  className="mt-8 flex flex-wrap gap-6 text-sm text-white/70"
                >
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f4c542]" />
                    Bangladesh
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-[#f4c542]" />
                    Wildlife and ecosystem focus
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.75 }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#151813] p-8 md:p-10"
              >
                <div className="absolute bottom-10 left-8 top-10 w-px bg-white/12 md:left-10" />

                <div className="space-y-8">
                  {journey.map((item, index) => (
                    <motion.div
                      key={`${item.year}-${item.event}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.25 + index * 0.08, duration: 0.5 }}
                      className="relative pl-12 md:pl-16"
                    >
                      <div className="absolute left-[23px] top-1.5 h-4 w-4 rounded-full border-4 border-[#151813] bg-[#f4c542] md:left-[31px]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c542]">
                        {item.year}
                      </p>
                      <p className="mt-2 text-base leading-7 text-white/80">
                        {item.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-[#0a0b08] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <blockquote className="font-serif text-3xl leading-tight text-white md:text-5xl">
              “Conservation is not only about protecting species, but about
              protecting the future of people and nature together.”
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#f4c542]">
              Md. Rahenur Islam Sourov · Founder & CEO
            </p>
          </div>
        </section>

        {/* Impact */}
        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
                Impact & experience
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/72">
                A growing conservation journey shaped by education, awareness,
                field learning, and commitment to biodiversity protection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { value: "01", label: "Founder Vision" },
                { value: "MSc", label: "Wildlife & Conservation" },
                { value: "Field", label: "Learning Experience" },
                { value: "Bangladesh", label: "Core Focus Region" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-[#171a15] p-8 text-center"
                >
                  <div className="font-serif text-4xl font-bold text-[#f4c542] md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">
                    {stat.label}
                  </div>
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
