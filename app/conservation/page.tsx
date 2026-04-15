"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, MapPin, Clock3 } from "lucide-react"

type Story = {
  slug: string
  title: string
  label: string
  excerpt: string
  summary: string
  image: string
  date: string
  readTime: string
  location: string
  featured?: boolean
}

const stories: Story[] = [
  {
    slug: "radio-telemetry-bengal-slow-loris",
    title: "Radio telemetry monitoring of Bengal Slow Loris",
    label: "Field Research",
    excerpt:
      "Following nocturnal movement through forest habitats to better understand ecology, behavior, and habitat use in one of Bangladesh’s lesser-known primates.",
    summary:
      "Field-based radio telemetry work in Sreemangal helped support movement ecology research, habitat-use understanding, and long-term conservation planning for Bengal Slow Loris.",
    image: "/images/conservation-hero.jpg",
    date: "May 2025",
    readTime: "5 min read",
    location: "Sreemangal, Bangladesh",
    featured: true,
  },
  {
    slug: "camera-trap-surveys-forest-habitats",
    title: "Camera trap surveys across forest habitats",
    label: "Biodiversity Monitoring",
    excerpt:
      "Using camera trap networks to strengthen biodiversity documentation, monitor species presence, and support long-term ecological observation.",
    summary:
      "Camera trap implementation across forest habitats supported biodiversity documentation, ecological monitoring, and stronger conservation understanding.",
    image: "/images/habitat-restoration.jpg",
    date: "April 2025",
    readTime: "4 min read",
    location: "Forest Landscapes, Bangladesh",
  },
  {
    slug: "community-response-wildlife-rescue-awareness",
    title: "Community response and wildlife rescue awareness",
    label: "Human–Wildlife Conflict",
    excerpt:
      "Exploring how awareness, rapid response, and local engagement can reduce conflict and build stronger support for wildlife protection.",
    summary:
      "Awareness activities and community response efforts helped improve understanding of wildlife conservation and reduce conflict pressures.",
    image: "/images/team.jpg",
    date: "March 2025",
    readTime: "4 min read",
    location: "Bangladesh",
  },
  {
    slug: "pittachhara-forest-biodiversity-conservation",
    title: "Pittachhara forest and biodiversity conservation work",
    label: "Landscape Conservation",
    excerpt:
      "Field coordination, ecological documentation, and long-term conservation planning in a landscape shaped by biodiversity richness and environmental pressure.",
    summary:
      "Conservation work in Pittachhara supported ecological documentation, field coordination, and landscape-focused biodiversity protection.",
    image: "/images/education.jpg",
    date: "February 2025",
    readTime: "5 min read",
    location: "Pittachhara, Bangladesh",
  },
  {
    slug: "gis-spatial-ecology-wildlife-research",
    title: "GIS and spatial ecology for wildlife research",
    label: "Ecological Analysis",
    excerpt:
      "How spatial tools like R, QGIS, and ArcGIS help turn raw ecological observations into stronger habitat understanding and conservation insight.",
    summary:
      "Spatial ecology tools supported habitat assessment, home range interpretation, and stronger ecological understanding for conservation research.",
    image: "/images/marine-conservation.jpg",
    date: "January 2025",
    readTime: "6 min read",
    location: "Bangladesh",
  },
  {
    slug: "conservation-awareness-public-engagement",
    title: "Conservation awareness through public engagement",
    label: "Education & Outreach",
    excerpt:
      "Connecting people with species, habitats, and environmental responsibility through public awareness and long-term conservation communication.",
    summary:
      "Public engagement helps build a stronger conservation culture by linking ecological understanding with awareness and responsibility.",
    image: "/images/habitat-restoration.jpg",
    date: "December 2024",
    readTime: "4 min read",
    location: "Bangladesh",
  },
]

const featuredStory = stories.find((story) => story.featured) ?? stories[0]

const impactStats = [
  { value: "3+", label: "Years of field-based conservation experience" },
  { value: "R • QGIS • ArcGIS", label: "Research and spatial analysis tools" },
  { value: "Camera Traps", label: "Biodiversity monitoring approach" },
  { value: "Bangladesh", label: "Core conservation focus" },
]

const processSteps = [
  {
    title: "Field Observation",
    text: "Wildlife monitoring begins with time in the landscape: observing species, habitats, and ecological pressures directly.",
  },
  {
    title: "Data Collection",
    text: "Camera traps, radio telemetry, biodiversity surveys, and habitat assessment help turn field activity into usable conservation data.",
  },
  {
    title: "Analysis",
    text: "Ecological data, GIS tools, and spatial analysis support stronger understanding of habitat use, movement, and conservation priorities.",
  },
  {
    title: "Awareness & Action",
    text: "Research becomes most valuable when it supports conservation awareness, local engagement, and practical action.",
  },
]

function StoryCard({
  story,
  index,
}: {
  story: Story
  index: number
}) {
  const cardRef = useRef<HTMLElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-80px" })

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#141611] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f4c542]/35"
    >
      <Link href={`/stories/${story.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
              {story.label}
            </p>
            <h3 className="mt-3 max-w-xl font-serif text-2xl font-bold leading-tight text-white">
              {story.title}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
            <span>{story.date}</span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5 text-[#f4c542]" />
              {story.readTime}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#f4c542]" />
              {story.location}
            </span>
          </div>

          <p className="mt-5 text-sm leading-7 text-white/72">{story.excerpt}</p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4c542] transition-all duration-300 group-hover:gap-3">
            Read Story
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function ConservationPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLElement>(null)
  const storiesRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const featuredInView = useInView(featuredRef, { once: true, margin: "-100px" })
  const storiesInView = useInView(storiesRef, { once: true, margin: "-100px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px" })

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        {/* Hero */}
        <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
          <Image
            src={featuredStory.image}
            alt="Conservation fieldwork in Bangladesh"
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

          <div
            ref={heroRef}
            className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-20 pt-28 lg:px-8 lg:pb-24 lg:pt-36"
          >
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium uppercase tracking-[0.35em] text-[#f4c542]"
              >
                Conservation Stories
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="mt-5 max-w-5xl font-serif text-5xl font-bold leading-[0.98] text-white md:text-7xl lg:text-8xl"
              >
                Editorial stories from the front lines of wildlife conservation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-8 max-w-3xl text-lg leading-8 text-white/85 md:text-xl"
              >
                Field research, biodiversity monitoring, wildlife rescue, and conservation
                awareness brought together through story-driven documentation from Bangladesh.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="#stories"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
                >
                  Explore Stories
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
          </div>
        </section>

        {/* Featured Story */}
        <section ref={featuredRef} className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[34px] border border-white/10 bg-[#141611] shadow-2xl"
            >
              <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[360px] lg:min-h-[560px]">
                  <Image
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-3 bg-[#f4c542]" />
                </div>

                <div className="p-8 md:p-10 lg:p-14">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                    Featured Story
                  </p>

                  <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
                    {featuredStory.title}
                  </h2>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                    <span>{featuredStory.date}</span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-3.5 w-3.5 text-[#f4c542]" />
                      {featuredStory.readTime}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#f4c542]" />
                      {featuredStory.location}
                    </span>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-white/74">
                    {featuredStory.summary}
                  </p>

                  <div className="mt-10">
                    <Link
                      href={`/stories/${featuredStory.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4c542] transition hover:gap-3"
                    >
                      Read Featured Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Story Grid */}
        <section id="stories" ref={storiesRef} className="bg-[#0d0f0c] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={storiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
                >
                  Editorial Archive
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={storiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl"
                >
                  Conservation stories across research, rescue, and awareness
                </motion.h2>
              </div>

              <div className="hidden h-px flex-1 bg-white/10 lg:block" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {stories.map((story, index) => (
                <StoryCard key={story.slug} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Strip */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                Impact at a glance
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/72">
                A growing body of conservation work shaped by field ecology,
                biodiversity monitoring, and environmental awareness in Bangladesh.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-white/10 bg-[#171a15] p-8 text-center"
                >
                  <div className="font-serif text-3xl font-bold text-[#f4c542] md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Conservation Works */}
        <section ref={processRef} className="bg-[#0a0b08] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]"
              >
                How Conservation Work Happens
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.65 }}
                className="mt-4 max-w-4xl font-serif text-3xl font-bold text-white md:text-5xl"
              >
                From the field to conservation action
              </motion.h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
                  className="rounded-[28px] border border-white/10 bg-[#141611] p-8"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-8 text-white/72">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
              Explore more conservation stories from Bangladesh
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Discover species, habitats, research stories, and conservation
              awareness through WildlifeScope’s growing editorial archive.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/species"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
              >
                View Species
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
              >
                Contact WildlifeScope
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
