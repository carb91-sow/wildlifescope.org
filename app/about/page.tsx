"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Target, Eye, Heart, MapPin, Leaf } from "lucide-react"

const timeline = [
  { year: "2024", event: "Founded in Chittagong, Bangladesh" },
  { year: "2024", event: "Launched Sundarbans tiger conservation program" },
  { year: "2024", event: "Partnership with local communities established" },
  { year: "2025", event: "Expanded to cover all Bangladesh wildlife regions" },
  { year: "2025", event: "Marine conservation program launched" },
  { year: "2026", event: "Protecting endangered species nationwide" },
]

const pillars = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To protect endangered species and their habitats through science-based conservation, community engagement, and global partnerships.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A world where wildlife thrives in healthy ecosystems, and humans live in harmony with the natural world.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, compassion, collaboration, and unwavering dedication to the preservation of biodiversity.",
  },
]

const founder = {
  name: "Md. Rahenur Islam Sourov",
  role: "Founder & CEO",
  bio: "Md. Rahenur Islam Sourov is a wildlife conservation enthusiast and researcher with an MSc in Wildlife and Conservation from the University of Chittagong. His work is driven by a deep commitment to biodiversity protection, scientific research, and long-term environmental sustainability through education, advocacy, and community action.",
  image: "/images/rahenur.jpeg",
  university: "University of Chittagong",
  degree: "MSc in Wildlife and Conservation",
  location: "Chittagong, Bangladesh",
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const founderRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  const founderInView = useInView(founderRef, { once: true, margin: "-100px" })

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative overflow-hidden border-b border-white/10 bg-[#0b0d09]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,197,66,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
            <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="mb-6 inline-flex items-center gap-3"
                >
                  <span className="h-12 w-2 bg-[#f4c542]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
                    Our Story
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.75 }}
                  className="max-w-4xl font-serif text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
                >
                  About WildlifeScope
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.75 }}
                  className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl"
                >
                  Since 2024, WildlifeScope has been dedicated to wildlife
                  conservation in Bangladesh, protecting endangered species and
                  preserving the habitats they depend on.
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
                    Explore Our Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                    Founded
                  </p>
                  <p className="mt-3 font-serif text-4xl font-bold text-white">2024</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                    Focus
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Wildlife Protection & Habitat Conservation
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                    Region
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                  Editorial Principles
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
                  Mission, vision, and values
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

        {/* Story + Timeline */}
        <section ref={storyRef} className="bg-[#0d0f0c] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                >
                  Our Journey
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.65 }}
                  className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl"
                >
                  A legacy of conservation
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.65 }}
                  className="mt-8 space-y-6 text-lg leading-8 text-white/74"
                >
                  <p>
                    WildlifeScope was founded in Chittagong, Bangladesh, to protect
                    the country’s remarkable biodiversity and support a future where
                    ecosystems, species, and communities can thrive together.
                  </p>
                  <p>
                    From field-based conservation to public awareness and partnership
                    building, our work combines science, education, and long-term
                    environmental stewardship.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.65 }}
                  className="mt-10 flex flex-wrap gap-6 text-sm text-white/70"
                >
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f4c542]" />
                    Bangladesh
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-[#f4c542]" />
                    Biodiversity Protection
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.75 }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#151813] p-8 md:p-10"
              >
                <div className="absolute left-8 top-10 bottom-10 w-px bg-white/12 md:left-10" />

                <div className="mb-8">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                    Timeline
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                    Milestones
                  </h3>
                </div>

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={`${item.year}-${item.event}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={storyInView ? { opacity: 1, y: 0 } : {}}
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
                Our Leadership
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={founderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.65 }}
                className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl"
              >
                Founder spotlight
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
                      National Geographic Theme
                    </p>

                    <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                      Leading WildlifeScope with vision, science, and purpose
                    </h3>

                    <p className="mt-6 text-lg leading-9 text-white/78">
                      {founder.bio}
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
                          Conservation leadership and advocacy
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 flex items-center gap-4">
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="text-xs uppercase tracking-[0.3em] text-[#f4c542]">
                        Protecting Nature
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
