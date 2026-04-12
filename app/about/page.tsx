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

{/* Founder Spotlight */}
<section ref={teamRef} className="py-20 lg:py-28 bg-[#0f0f0c]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#171712] shadow-2xl"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative min-h-[420px] lg:min-h-[700px]">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />

          <div className="absolute bottom-0 left-0 p-8 md:p-10 lg:p-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-block border border-[#f4c542]/40 bg-[#f4c542]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f4c542]"
            >
              Founder Spotlight
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-5 font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-2xl"
            >
              {founder.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-3 text-sm md:text-base uppercase tracking-[0.3em] text-white/75"
            >
              {founder.role}
            </motion.p>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex items-center bg-[#171712]">
          <div className="w-full p-8 md:p-10 lg:p-14 xl:p-16">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isTeamInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-1 w-20 origin-left bg-[#f4c542]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-sm font-medium text-[#f4c542] tracking-[0.3em] uppercase"
            >
              Our Leadership
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 font-serif text-3xl md:text-4xl font-bold leading-tight text-white"
            >
              Leading WildlifeScope with vision, science, and purpose
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-base md:text-lg leading-8 text-white/80"
            >
              {founder.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 border-t border-white/10 pt-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                Academic Background
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                {founder.university}
              </p>
              <p className="mt-1 text-white/70 text-base">
                {founder.degree}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
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
const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To protect endangered species and their habitats through science-based conservation, community engagement, and global partnerships.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A world where wildlife thrives in healthy ecosystems, and humans live in harmony with the natural world.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, compassion, collaboration, and unwavering dedication to the preservation of biodiversity.",
  },
]

export default function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" })

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
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            >
              About WildlifeScope
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Since 2024, we have been dedicated to wildlife conservation in Bangladesh, protecting endangered species and their natural habitats.
            </motion.p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 bg-card rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section ref={storyRef} className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
                  Our Journey
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                  A Legacy of Conservation
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  WildlifeScope was founded in 2024 in Chittagong, Bangladesh, by passionate conservationists dedicated to protecting the rich biodiversity of Bangladesh. From the majestic Royal Bengal tigers of the Sundarbans to the endangered Ganges river dolphins, our mission is to preserve Bangladesh&apos;s unique wildlife heritage for future generations.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Today, we employ cutting-edge technology, partner with local communities, and work alongside governments to protect over 150 species and preserve millions of acres of critical habitat. Our work is driven by science, guided by compassion, and fueled by the belief that every species matters.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-200 group"
                  >
                    Join Our Mission
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                <div className="flex flex-col gap-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="relative flex items-start gap-6 pl-12"
                    >
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-accent">{item.year}</span>
                        <p className="text-foreground mt-1">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section ref={teamRef} className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium text-accent tracking-widest uppercase mb-4"
              >
                Our Leadership
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-serif text-3xl md:text-4xl font-bold text-foreground"
              >
                Meet the Team
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/images/team.jpg"
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-3">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
