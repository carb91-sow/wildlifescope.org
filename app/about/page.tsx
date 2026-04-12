"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"

const timeline = [
  { year: "2024", event: "Founded in Chittagong, Bangladesh" },
  { year: "2024", event: "Launched Sundarbans tiger conservation program" },
  { year: "2024", event: "Partnership with local communities established" },
  { year: "2025", event: "Expanded to cover all Bangladesh wildlife regions" },
  { year: "2025", event: "Marine conservation program launched" },
  { year: "2026", event: "Protecting endangered species nationwide" },
]

const values = [
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
}

export default function AboutPage() {
  const headerRef = useRef(null)
  const storyRef = useRef(null)
  const founderRef = useRef(null)

  const isHeaderInView = useInView(headerRef, { once: true })
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isFounderInView = useInView(founderRef, { once: true, margin: "-100px" })

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        <section
          ref={headerRef}
          className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.08),transparent_45%)]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
              >
                Our Story
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
              >
                About WildlifeScope
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                Since 2024, we have been dedicated to wildlife conservation in Bangladesh,
                protecting endangered species and their natural habitats.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
                      {value.title}
                    </h2>

                    <p className="leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section ref={storyRef} className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                  Our Journey
                </p>

                <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  A Legacy of Conservation
                </h2>

                <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                  <p>
                    WildlifeScope was founded in 2024 in Chittagong, Bangladesh, by
                    passionate conservationists dedicated to protecting the rich
                    biodiversity of Bangladesh.
                  </p>

                  <p>
                    Today, we employ technology, partner with local communities, and
                    work alongside governments to protect wildlife and preserve critical habitat.
                  </p>
                </div>

                <Link
                  href="/donate"
                  className="mt-8 inline-flex items-center gap-2 font-medium text-primary transition-all hover:gap-3"
                >
                  Join Our Mission
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="relative"
              >
                <div className="absolute bottom-0 left-4 top-0 w-px bg-border" />

                <div className="space-y-10">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={`${item.year}-${item.event}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="relative flex items-start gap-6 pl-12"
                    >
                      <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                        <div className="h-3 w-3 rounded-full bg-primary-foreground" />
                      </div>

                      <div>
                        <span className="text-sm font-medium text-accent">{item.year}</span>
                        <p className="mt-1 text-foreground">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section ref={founderRef} className="bg-[#0f0f0c] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-4 text-sm font-medium uppercase tracking-widest text-[#f4c542]"
              >
                Our Leadership
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-serif text-3xl font-bold text-white md:text-4xl"
              >
                Founder Spotlight
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#171712] shadow-2xl"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[420px] lg:min-h-[720px]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />

                  <div className="absolute bottom-0 left-0 p-8 md:p-10 lg:p-12">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.25, duration: 0.6 }}
                      className="inline-block border border-[#f4c542]/40 bg-[#f4c542]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f4c542]"
                    >
                      WildlifeScope
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      className="mt-5 max-w-2xl font-serif text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                    >
                      {founder.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      className="mt-3 text-sm uppercase tracking-[0.3em] text-white/75 md:text-base"
                    >
                      {founder.role}
                    </motion.p>
                  </div>
                </div>

                <div className="flex items-center bg-[#171712]">
                  <div className="w-full p-8 md:p-10 lg:p-14 xl:p-16">
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={isFounderInView ? { opacity: 1, scaleX: 1 } : {}}
                      transition={{ delay: 0.25, duration: 0.6 }}
                      className="h-1 w-20 origin-left bg-[#f4c542]"
                    />

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                    >
                      Founder
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-4xl"
                    >
                      Leading WildlifeScope with vision, science, and purpose
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.55, duration: 0.6 }}
                      className="mt-6 text-base leading-8 text-white/80 md:text-lg"
                    >
                      {founder.bio}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.65, duration: 0.6 }}
                      className="mt-10 border-t border-white/10 pt-6"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                        Academic Background
                      </p>
                      <p className="mt-3 text-xl font-semibold text-white">
                        {founder.university}
                      </p>
                      <p className="mt-1 text-base text-white/70">{founder.degree}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFounderInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.75, duration: 0.6 }}
                      className="mt-10 flex items-center gap-4"
                    >
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                        Protecting Nature
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                    </motion.div>
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
