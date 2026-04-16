"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  MapPin,
  Leaf,
  Heart,
  Eye,
  Target,
  Camera,
  Radar,
  Globe2,
  ShieldCheck,
} from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To protect wildlife in Bangladesh through research, habitat understanding, conservation awareness, and meaningful engagement with local communities.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A future where people and wildlife coexist with dignity, and where science, compassion, and public awareness guide conservation action.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity in research, respect for life, local collaboration, emotional connection to nature, and long-term commitment to biodiversity.",
  },
]

const expertise = [
  {
    icon: Radar,
    title: "Radio Telemetry",
    description:
      "Tracking wildlife movement and habitat use to better understand how species survive, adapt, and interact with changing landscapes.",
  },
  {
    icon: Camera,
    title: "Camera Trapping",
    description:
      "Documenting biodiversity across forest ecosystems and building visual evidence that supports field research and conservation planning.",
  },
  {
    icon: Globe2,
    title: "GIS & Spatial Ecology",
    description:
      "Using spatial tools to study habitat patterns, ecological relationships, and conservation priorities across Bangladesh.",
  },
  {
    icon: ShieldCheck,
    title: "Conflict Mitigation",
    description:
      "Supporting awareness, rescue response, and community understanding to reduce human–wildlife conflict in vulnerable areas.",
  },
]

const timeline = [
  {
    year: "2021",
    event:
      "Deepened involvement in wildlife rescue, awareness campaigns, and community-based conservation response.",
  },
  {
    year: "2022",
    event:
      "Began advanced field experience in biodiversity monitoring, wildlife tracking, and ecological research in Bangladesh.",
  },
  {
    year: "2022–2025",
    event:
      "Worked as a Research Assistant supporting Bengal Slow Loris monitoring, movement ecology analysis, and habitat-use research in Sreemangal.",
  },
  {
    year: "2022–2024",
    event:
      "Contributed to camera trapping, biodiversity surveys, field logistics, and local conservation awareness through forest-based initiatives.",
  },
  {
    year: "2025",
    event:
      "Completed MSc in Wildlife and Conservation Biology from the University of Chittagong.",
  },
  {
    year: "Present",
    event:
      "Building WildlifeScope as a platform for conservation storytelling, research communication, biodiversity awareness, and environmental education.",
  },
]

const stats = [
  { value: "3+", label: "Years of field experience" },
  { value: "MSc", label: "Wildlife & Conservation Biology" },
  { value: "Bangladesh", label: "Core conservation landscape" },
  { value: "Research + Awareness", label: "Approach to impact" },
]

const founder = {
  name: "Md. Rahenur Islam Sourov",
  role: "Wildlife Conservation Researcher • Field Ecologist • Founder of WildlifeScope",
  location: "Chattogram, Bangladesh",
  degree: "MSc in Wildlife and Conservation Biology",
  university: "University of Chittagong",
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const principlesRef = useRef(null)
  const expertiseRef = useRef(null)
  const timelineRef = useRef(null)
  const founderRef = useRef(null)
  const quoteRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  const principlesInView = useInView(principlesRef, { once: true, margin: "-100px" })
  const expertiseInView = useInView(expertiseRef, { once: true, margin: "-100px" })
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const founderInView = useInView(founderRef, { once: true, margin: "-100px" })
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" })

  return (
    <main className="bg-[#0a0d09] text-white">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative isolate min-h-screen overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Wildlife conservation in Bangladesh"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d09] via-transparent to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(244,197,66,0.16),transparent_26%)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />
        </div>

        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:120px_120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3"
            >
              <span className="h-12 w-1.5 bg-[#f4c542]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
                About WildlifeScope
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.8 }}
              className="mt-8 max-w-5xl font-serif text-5xl font-bold leading-[0.95] text-white md:text-7xl lg:text-8xl"
            >
              Wildlife conservation in Bangladesh through science, story, and human connection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.16, duration: 0.8 }}
              className="mt-8 max-w-3xl text-lg leading-8 text-white/85 md:text-xl"
            >
              WildlifeScope is a conservation platform rooted in real field
              experience and built to create deeper awareness about biodiversity,
              endangered species, ecological research, and the relationship between
              people and nature.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24, duration: 0.8 }}
              className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg"
            >
              It is a space where scientific knowledge meets emotional storytelling,
              helping conservation feel not distant or technical, but urgent, human,
              and deeply connected to the future of Bangladesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-6 text-sm text-white/78"
            >
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#f4c542]" />
                {founder.location}
              </div>
              <div className="inline-flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[#f4c542]" />
                Wildlife conservation Bangladesh
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/conservation"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
              >
                Explore Conservation Work
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#f4c542] hover:text-[#f4c542]"
              >
                Contact WildlifeScope
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story with awareness image */}
      <section ref={storyRef} className="bg-[#10130f] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141611] shadow-2xl">
                <div className="relative h-[420px] w-full md:h-[520px] lg:h-[620px]">
                  <Image
                    src="/images/awareness.jpg"
                    alt="Wildlife awareness activity in Bangladesh"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4c542]">
                    Field Awareness
                  </p>

                  <h3 className="mt-3 max-w-md font-serif text-2xl font-bold text-white md:text-3xl">
                    Community Engagement & Conservation Education
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-white/75">
                    Connecting people with wildlife through real experiences,
                    awareness programs, and conservation outreach in Bangladesh.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.65 }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                The Story
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                A platform shaped by real landscapes, real fieldwork, and real concern for wildlife
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-white/76">
                <p>
                  WildlifeScope was created from years of direct experience in the
                  forests, communities, and conservation spaces of Bangladesh. It
                  grew out of a simple but powerful understanding: wildlife
                  conservation is not only about data, reports, or species lists.
                  It is also about people, memory, emotion, and responsibility.
                </p>

                <p>
                  Across forest landscapes and human-dominated environments,
                  Rahenur has worked with practical conservation methods including
                  radio telemetry, camera trapping, biodiversity surveys, habitat
                  assessment, GIS-based ecological analysis, and public awareness
                  efforts. These experiences revealed how closely conservation
                  success depends on both scientific evidence and human connection.
                </p>

                <p>
                  WildlifeScope exists to bring those worlds together. It
                  communicates research in a more accessible way, highlights
                  species and ecosystems that deserve attention, and builds a
                  stronger voice for biodiversity protection in Bangladesh through
                  education, storytelling, and field-grounded credibility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0b0d09] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="rounded-[28px] border border-white/10 bg-[#141812] p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  {stat.label}
                </p>
                <p className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section ref={principlesRef} className="bg-[#11130f] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
              >
                Foundation
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08, duration: 0.65 }}
                className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl"
              >
                Mission, vision, and values that guide the platform
              </motion.h2>
            </div>
            <div className="hidden h-px flex-1 bg-white/10 lg:block" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  className="rounded-[28px] border border-white/10 bg-[#171a15] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f4c542]/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c542]/10 text-[#f4c542]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/72">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section ref={expertiseRef} className="bg-[#0d0f0c] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
            >
              Core Expertise
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="mt-4 max-w-4xl font-serif text-3xl font-bold text-white md:text-5xl"
            >
              Specialized field skills supporting conservation research and practical action
            </motion.h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.14 + index * 0.08, duration: 0.6 }}
                  className="rounded-[28px] border border-white/10 bg-[#161914] p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c542]/10 text-[#f4c542]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/72">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        ref={timelineRef}
        className="relative overflow-hidden py-20 lg:py-28"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/about-timeline-bg.jpg"
            alt="Night field research and conservation journey"
            fill
            className="object-cover object-center scale-[1.03] brightness-[0.9] contrast-[1.02] saturate-[1.04]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/28" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/20 to-black/42" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/48" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(244,197,66,0.12),transparent_24%)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_110px_rgba(0,0,0,0.32)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="lg:pr-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
              >
                Journey
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08, duration: 0.65 }}
                className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[1.02] text-white md:text-6xl"
              >
                A growing path in wildlife conservation and ecological research
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.16, duration: 0.65 }}
                className="mt-8 max-w-xl text-lg leading-8 text-white/86"
              >
                This journey reflects the evolution of field experience, academic
                training, conservation communication, rescue engagement, and the
                long-term effort to build a stronger public voice for biodiversity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.24, duration: 0.65 }}
                className="mt-10 flex items-center gap-4"
              >
                <div className="h-px w-16 bg-[#f4c542]" />
                <span className="text-xs uppercase tracking-[0.32em] text-white/75">
                  Research • fieldwork • awareness • action
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.75 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(8,10,8,0.68)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-10"
            >
              <div className="absolute left-8 top-10 bottom-10 w-px bg-white/14 md:left-10" />

              <div className="relative space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.event}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.22 + index * 0.08, duration: 0.5 }}
                    className="relative pl-12 md:pl-16"
                  >
                    <div className="absolute left-[23px] top-1.5 h-4 w-4 rounded-full border-4 border-[#11130f] bg-[#f4c542] shadow-[0_0_18px_rgba(244,197,66,0.24)] md:left-[31px]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c542]">
                      {item.year}
                    </p>
                    <p className="mt-2 text-base leading-8 text-white/90">
                      {item.event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section ref={founderRef} className="bg-[#0a0b08] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={founderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
            >
              Founder Spotlight
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={founderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl"
            >
              Conservation leadership grounded in research, rescue, and lived experience
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={founderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14, duration: 0.75 }}
            className="overflow-hidden rounded-[36px] border border-white/10 bg-[#141611] shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[460px] lg:min-h-[760px]">
                <Image
                  src="/images/rahenur.jpeg"
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute left-0 top-0 h-full w-3 bg-[#f4c542]" />

                <div className="absolute bottom-0 left-0 p-8 md:p-10 lg:p-12">
                  <div className="inline-flex items-center gap-3 border border-[#f4c542]/35 bg-black/20 px-4 py-2 backdrop-blur-sm">
                    <span className="h-3 w-3 rounded-full bg-[#f4c542]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f4c542]">
                      WildlifeScope
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-2xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    {founder.name}
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.32em] text-white/72 md:text-base">
                    {founder.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-[#141611]">
                <div className="w-full p-8 md:p-10 lg:p-14 xl:p-16">
                  <div className="h-1 w-20 bg-[#f4c542]" />

                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                    Conservation Leadership
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                    Building a platform for wildlife conservation, biodiversity awareness, and environmental education
                  </h3>

                  <div className="mt-6 space-y-6 text-lg leading-9 text-white/78">
                    <p>
                      Rahenur is a wildlife conservation researcher in Bangladesh
                      with more than three years of field-based experience in
                      biodiversity monitoring, spatial ecology, and human–wildlife
                      conflict mitigation.
                    </p>

                    <p>
                      His work combines field research with conservation
                      communication, helping turn ecological knowledge into more
                      meaningful and accessible public understanding. From tracking
                      species in forest landscapes to supporting awareness
                      initiatives in communities, his approach connects scientific
                      rigor with practical conservation value.
                    </p>

                    <p>
                      Through WildlifeScope, he is creating a stronger voice for
                      nature in Bangladesh by sharing research-backed stories,
                      species knowledge, and conservation perspectives that inspire
                      both awareness and action.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                        Academic Background
                      </p>
                      <p className="mt-3 text-xl font-semibold text-white">
                        {founder.university}
                      </p>
                      <p className="mt-1 text-white/68">{founder.degree}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                        Based In
                      </p>
                      <p className="mt-3 text-xl font-semibold text-white">
                        {founder.location}
                      </p>
                      <p className="mt-1 text-white/68">
                        Wildlife research and conservation advocacy
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs uppercase tracking-[0.3em] text-[#f4c542]">
                      Protecting Nature Through Science
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section ref={quoteRef} className="bg-[#11130f] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="font-serif text-3xl leading-tight text-white md:text-5xl"
          >
            “Conservation is not only about protecting wildlife. It is about
            understanding ecosystems, reaching people, and building a future where
            nature is not forgotten.”
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-8 text-sm uppercase tracking-[0.3em] text-[#f4c542]"
          >
            Md. Rahenur Islam Sourov · Founder of WildlifeScope
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0b08] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
            Join a growing mission for wildlife conservation in Bangladesh
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
            Explore conservation work, discover species, and connect with
            WildlifeScope to support biodiversity protection, environmental
            education, and a deeper public understanding of nature.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
            >
              Contact WildlifeScope
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/species"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
            >
              Explore Species
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
