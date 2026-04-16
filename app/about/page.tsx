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
  Radar,
  Camera,
  Globe2,
  ShieldCheck,
} from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To protect wildlife in Bangladesh through science-based conservation, biodiversity monitoring, habitat protection, public awareness, and community engagement.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A future where endangered species, healthy ecosystems, and human communities coexist through research, education, and sustainable conservation action.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Scientific integrity, field-based learning, local engagement, compassion for wildlife, and long-term commitment to biodiversity conservation.",
  },
]

const expertise = [
  {
    icon: Radar,
    title: "Radio Telemetry",
    description:
      "Field-based wildlife tracking and movement ecology work supporting habitat use studies and evidence-based conservation planning.",
  },
  {
    icon: Camera,
    title: "Camera Trapping",
    description:
      "Biodiversity documentation, multi-site forest monitoring, and wildlife survey coordination across diverse habitats in Bangladesh.",
  },
  {
    icon: Globe2,
    title: "GIS & Spatial Ecology",
    description:
      "Ecological analysis using R, QGIS, and ArcGIS for home range estimation, habitat assessment, and spatial conservation research.",
  },
  {
    icon: ShieldCheck,
    title: "Conflict Mitigation",
    description:
      "Wildlife rescue, awareness building, and community-based response strategies to reduce human–wildlife conflict.",
  },
]

const timeline = [
  {
    year: "2021",
    event:
      "Expanded involvement in wildlife rescue, awareness, and conservation response through field-based community engagement.",
  },
  {
    year: "2022",
    event:
      "Started advanced field experience in biodiversity monitoring, radio telemetry, and ecological research in Bangladesh.",
  },
  {
    year: "2022–2025",
    event:
      "Worked as a Research Assistant at the Wildlife Conservation Centre, Sreemangal, supporting Bengal Slow Loris monitoring and spatial ecology analysis.",
  },
  {
    year: "2022–2024",
    event:
      "Coordinated camera trap implementation, field logistics, and community awareness initiatives through the Pittachhara Forest & Biodiversity Conservation Initiative.",
  },
  {
    year: "2025",
    event:
      "Completed MSc in Wildlife and Conservation Biology from the University of Chittagong.",
  },
  {
    year: "Present",
    event:
      "Leading WildlifeScope as a platform for wildlife conservation awareness, research communication, and biodiversity protection in Bangladesh.",
  },
]

const stats = [
  { value: "3+", label: "Years of field-based conservation experience" },
  { value: "MSc", label: "Wildlife and Conservation Biology" },
  { value: "R • GIS", label: "Spatial ecology and ecological analysis tools" },
  { value: "Bangladesh", label: "Core conservation landscape" },
]

const founder = {
  name: "Md. Rahenur Islam Sourov",
  role: "Wildlife Conservation Researcher • Field Ecologist • Founder of WildlifeScope",
  image: "/images/rahenur.jpeg",
  location: "Chattogram, Bangladesh",
  university: "University of Chittagong",
  degree: "MSc in Wildlife and Conservation Biology",
  shortBio:
    "Md. Rahenur Islam Sourov is a wildlife conservation researcher in Bangladesh with over three years of field-based experience in biodiversity monitoring, spatial ecology, and human–wildlife conflict mitigation.",
  longBio1:
    "He has worked across forest landscapes and human-dominated environments, applying practical conservation methods such as radio telemetry, camera trapping, biodiversity surveys, habitat assessment, and GIS-based ecological analysis. His work combines scientific research with conservation communication, helping translate ecological data into meaningful action for wildlife protection.",
  longBio2:
    "As a Research Assistant at Plumploris e.V. and the Wildlife Conservation Centre in Sreemangal, he contributed to Bengal Slow Loris monitoring through extensive radio-telemetry tracking, ecological datasets, movement ecology analysis, and habitat-use research. He also supported multi-site biodiversity surveys and technical conservation reporting.",
  longBio3:
    "Beyond research, Rahenur has led field coordination, community awareness programs, and conflict mitigation efforts through the Pittachhara Forest & Biodiversity Conservation Initiative and the Snake Awareness & Rescue Program. His conservation approach is rooted in science, field experience, local engagement, and long-term ecological stewardship.",
  longBio4:
    "Through WildlifeScope, he is building a platform focused on wildlife conservation in Bangladesh, environmental education, species awareness, and the promotion of sustainable coexistence between people and nature.",
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const expertiseRef = useRef(null)
  const timelineRef = useRef(null)
  const founderRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const introInView = useInView(introRef, { once: true, margin: "-100px" })
  const expertiseInView = useInView(expertiseRef, { once: true, margin: "-100px" })
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const founderInView = useInView(founderRef, { once: true, margin: "-100px" })

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative min-h-[92vh] overflow-hidden border-b border-white/10"
        >
          <Image
            src="/images/about-hero.jpeg"
            alt="Wildlife conservation fieldwork in Bangladesh"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(244,197,66,0.18),transparent_32%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0d09] to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

          <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-24">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="mb-6 inline-flex items-center gap-3"
                >
                  <span className="h-12 w-2 bg-[#f4c542]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
                    About WildlifeScope
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.75 }}
                  className="max-w-5xl font-serif text-5xl font-bold leading-[0.98] text-white md:text-7xl lg:text-8xl"
                >
                  Wildlife conservation in Bangladesh through research, field ecology, and community action
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.75 }}
                  className="mt-8 max-w-3xl text-lg leading-8 text-white/85 md:text-xl"
                >
                  WildlifeScope is a Bangladesh-based conservation platform focused on
                  biodiversity conservation, endangered species protection, ecological
                  awareness, and science-driven environmental stewardship.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.75 }}
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
                    href="/species"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#f4c542] hover:text-[#f4c542]"
                  >
                    View Species
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-md"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro / Founder Summary */}
        <section ref={introRef} className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                >
                  Founder Profile
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.65 }}
                  className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl"
                >
                  A wildlife conservation researcher building impact through field experience and science
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.65 }}
                  className="mt-8 flex flex-wrap gap-6 text-sm text-white/70"
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
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.65 }}
                className="space-y-6 text-lg leading-8 text-white/74"
              >
                <p>{founder.shortBio}</p>
                <p>{founder.longBio1}</p>
                <p>{founder.longBio2}</p>
                <p>{founder.longBio3}</p>
                <p>{founder.longBio4}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="bg-[#0d0f0c] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                  Editorial Principles
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
                  Mission, vision, and conservation values
                </h2>
              </div>
              <div className="hidden h-px flex-1 bg-white/10 lg:block" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {pillars.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.12, duration: 0.6 }}
                    className="group rounded-[28px] border border-white/10 bg-[#171a15] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f4c542]/40"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c542]/10 text-[#f4c542]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-white/72">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section ref={expertiseRef} className="bg-[#11130f] py-20 lg:py-24">
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
                transition={{ delay: 0.1, duration: 0.65 }}
                className="mt-4 max-w-4xl font-serif text-3xl font-bold text-white md:text-5xl"
              >
                Specialized skills in field ecology, biodiversity monitoring, and conservation planning
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
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
                    className="rounded-[28px] border border-white/10 bg-[#171a15] p-8"
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

        {/* Timeline - Brighter Real Photo Look */}
        <section
          ref={timelineRef}
          className="relative overflow-hidden py-20 lg:py-28"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/about-timeline-bg.jpg"
              alt="Night fieldwork in dense forest landscape"
              fill
              priority
              className="object-cover object-center scale-[1.03] brightness-[0.9] contrast-[1.02] saturate-[1.04]"
              sizes="100vw"
            />

            {/* More natural, less dark overlays */}
            <div className="absolute inset-0 bg-black/28" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/56 via-black/22 to-black/38" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/45" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(244,197,66,0.12),transparent_24%)]" />
            <div className="absolute inset-0 shadow-[inset_0_0_110px_rgba(0,0,0,0.32)]" />
          </div>

          {/* Very subtle texture */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:120px_120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-[0.92fr_1.08fr]">
              {/* Left Content */}
              <div className="lg:pr-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                >
                  Professional Journey
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.65 }}
                  className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[1.02] text-white md:text-6xl"
                >
                  A growing path in wildlife conservation and biodiversity research
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.65 }}
                  className="mt-8 max-w-xl text-lg leading-8 text-white/86"
                >
                  This journey reflects academic training, field ecology experience,
                  biodiversity monitoring, wildlife rescue engagement, and the
                  long-term development of a conservation platform focused on
                  Bangladesh.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.65 }}
                  className="mt-10 flex items-center gap-4"
                >
                  <div className="h-px w-16 bg-[#f4c542]" />
                  <span className="text-xs uppercase tracking-[0.32em] text-white/75">
                    Field experience • research • conservation action
                  </span>
                </motion.div>
              </div>

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.75 }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(8,10,8,0.68)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-10"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,197,66,0.08),transparent_30%)]" />
                <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/5" />

                <div className="absolute left-8 top-10 bottom-10 w-px bg-white/14 md:left-10" />

                <div className="relative space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={`${item.year}-${item.event}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.25 + index * 0.08, duration: 0.5 }}
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
                transition={{ delay: 0.1, duration: 0.65 }}
                className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl"
              >
                Conservation leadership rooted in research, rescue, and real landscapes
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={founderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.75 }}
              className="overflow-hidden rounded-[36px] border border-white/10 bg-[#141611] shadow-2xl"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[460px] lg:min-h-[760px]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    priority
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

                    <p className="mt-6 text-lg leading-9 text-white/78">
                      As the founder of WildlifeScope, Rahenur is working to create
                      a stronger voice for wildlife conservation in Bangladesh. His
                      vision brings together field research, ecological knowledge,
                      species awareness, and public engagement to support a more
                      informed and sustainable future for biodiversity.
                    </p>

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
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <blockquote className="font-serif text-3xl leading-tight text-white md:text-5xl">
              “Conservation is not only about protecting wildlife, but about understanding ecosystems, empowering communities, and building a future where people and nature coexist.”
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#f4c542]">
              Md. Rahenur Islam Sourov · Founder of WildlifeScope
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0b08] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
              Join a growing mission for wildlife conservation in Bangladesh
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Explore conservation work, discover species of Bangladesh, and connect
              with WildlifeScope to support biodiversity protection, environmental
              education, and science-driven conservation awareness.
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
                href="/conservation"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
              >
                View Conservation Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
