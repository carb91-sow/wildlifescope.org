"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  ShieldAlert,
  Trees,
  Users,
  BookOpen,
  Camera,
  Radio,
  PawPrint,
  Leaf,
  Globe2,
  HeartHandshake,
} from "lucide-react"

const issues = [
  {
    icon: ShieldAlert,
    title: "Endangered Species",
    description:
      "Many wildlife species in Bangladesh face increasing pressure from habitat degradation, disturbance, and lack of public awareness.",
  },
  {
    icon: Trees,
    title: "Habitat Loss",
    description:
      "Forests, wetlands, and natural ecosystems are shrinking, leaving wildlife with fewer safe places to survive and reproduce.",
  },
  {
    icon: Users,
    title: "Human–Wildlife Conflict",
    description:
      "As landscapes change, conflict between people and wildlife becomes more common, creating risks for both communities and species.",
  },
]

const pillars = [
  {
    icon: Globe2,
    title: "Wildlife Research",
    description:
      "Science-based understanding of species, habitats, and ecological systems through field observation, monitoring, and conservation thinking.",
  },
  {
    icon: BookOpen,
    title: "Conservation Awareness",
    description:
      "Accessible storytelling and environmental education that help more people understand why wildlife protection matters.",
  },
  {
    icon: PawPrint,
    title: "Species Documentation",
    description:
      "Highlighting the remarkable wildlife of Bangladesh and bringing attention to species that deserve deeper recognition and protection.",
  },
  {
    icon: HeartHandshake,
    title: "Community Engagement",
    description:
      "Supporting a conservation culture where local communities, learners, and nature advocates become part of the mission.",
  },
]

const species = [
  {
    name: "Bengal Slow Loris",
    status: "Rare nocturnal primate",
    image: "/images/species-slow-loris.jpg",
    description:
      "A unique and secretive species whose survival depends on habitat protection and informed conservation action.",
  },
  {
    name: "Fishing Cat",
    status: "Wetland-dependent wild cat",
    image: "/images/species-fishing-cat.jpg",
    description:
      "An extraordinary predator closely tied to fragile wetland ecosystems that are increasingly under pressure.",
  },
  {
    name: "Leopard Cat",
    status: "Elusive small wild cat",
    image: "/images/species-leopard-cat.jpg",
    description:
      "A symbol of hidden biodiversity, often surviving quietly in landscapes shaped by human activity.",
  },
]

const actionCards = [
  {
    icon: Camera,
    title: "Camera Trapping",
    description:
      "Documenting wildlife presence and building visual evidence that supports research, monitoring, and conservation planning.",
  },
  {
    icon: Radio,
    title: "Radio Telemetry",
    description:
      "Tracking animal movement and habitat use to better understand behavior, survival, and landscape connectivity.",
  },
  {
    icon: Leaf,
    title: "Biodiversity Monitoring",
    description:
      "Observing species and ecosystems across diverse habitats to support long-term ecological understanding.",
  },
  {
    icon: Users,
    title: "Awareness & Outreach",
    description:
      "Building stronger public understanding through educational communication, local engagement, and conservation storytelling.",
  },
]

const stats = [
  { value: "3+", label: "Years of field-based conservation experience" },
  { value: "MSc", label: "Wildlife & Conservation Biology" },
  { value: "Bangladesh", label: "Core conservation landscape" },
  { value: "Research + Awareness", label: "Approach to impact" },
]

const stories = [
  {
    title: "Understanding the Bengal Slow Loris in Bangladesh",
    href: "/stories/bengal-slow-loris",
  },
  {
    title: "Why Habitat Protection Matters More Than Ever",
    href: "/stories/habitat-protection",
  },
  {
    title: "Human–Wildlife Conflict and the Need for Coexistence",
    href: "/stories/human-wildlife-conflict",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white">
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src="/images/home-hero.jpg"
              alt="Wildlife conservation in Bangladesh"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-[#0b0d09]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(244,197,66,0.16),transparent_28%)]" />
            <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.45)]" />
          </div>

          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-24">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 inline-flex items-center gap-3"
              >
                <span className="h-12 w-2 bg-[#f4c542]" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
                  WildlifeScope
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.8 }}
                className="max-w-5xl font-serif text-5xl font-bold leading-[0.96] text-white md:text-7xl lg:text-8xl"
              >
                Protecting wildlife in Bangladesh through research, awareness, and action
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.8 }}
                className="mt-8 max-w-3xl text-lg leading-8 text-white/84 md:text-xl"
              >
                WildlifeScope is a conservation platform dedicated to biodiversity
                protection, species awareness, environmental education, and science-based
                storytelling from the landscapes of Bangladesh.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.8 }}
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#f4c542] hover:text-[#f4c542]"
                >
                  Get Involved
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-[#10120e] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                Why It Matters Now
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                Wildlife conservation matters because the future of nature is being shaped now
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74">
                Bangladesh is home to remarkable wildlife, rich ecosystems, and irreplaceable
                biodiversity. But many species and habitats face growing pressure from habitat
                loss, environmental change, and human–wildlife conflict. Protecting nature now
                is not only about saving species. It is about protecting ecological balance,
                community wellbeing, and the future of life itself.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {issues.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
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

        {/* Pillars */}
        <section className="bg-[#0c0e0b] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                Our Conservation Pillars
              </p>
              <h2 className="mt-4 max-w-4xl font-serif text-3xl font-bold text-white md:text-5xl">
                How WildlifeScope creates impact
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                WildlifeScope brings together field experience, ecological understanding,
                and public engagement to support a stronger conservation future in Bangladesh.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.08, duration: 0.55 }}
                    className="rounded-[28px] border border-white/10 bg-[#151813] p-8"
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

        {/* Story / About */}
        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 min-h-[480px]">
                <Image
                  src="/images/home-story.jpg"
                  alt="Field experience and conservation storytelling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                  Our Story
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                  From field experience to conservation storytelling
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/74">
                  WildlifeScope was built from real experience in the forests, field sites,
                  and communities of Bangladesh. It grew from the understanding that
                  conservation is not only scientific, but also human. Research helps us
                  understand wildlife, but awareness helps protect it.
                </p>
                <p className="mt-6 text-lg leading-8 text-white/74">
                  Founded by wildlife conservation researcher Md. Rahenur Islam Sourov,
                  WildlifeScope connects field ecology, biodiversity research, and public
                  education into one platform to create a stronger voice for wildlife
                  conservation in Bangladesh.
                </p>

                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
                  >
                    Read Our Story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Species Spotlight */}
        <section className="bg-[#0c0e0b] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                Species Spotlight
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                Species that need our attention
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                Bangladesh shelters extraordinary wildlife. By learning about these species,
                we take the first step toward protecting them.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {species.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-[#151813]"
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                      {item.status}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="mt-4 leading-8 text-white/72">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/species"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
              >
                Explore More Species
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Conservation in Action */}
        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                Conservation in Action
              </p>
              <h2 className="mt-4 max-w-4xl font-serif text-3xl font-bold text-white md:text-5xl">
                Wildlife protection requires more than concern
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                WildlifeScope is rooted in practical conservation experience across research,
                monitoring, rescue awareness, and community engagement.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {actionCards.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.08, duration: 0.55 }}
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

        {/* Stories */}
        <section className="bg-[#10120e] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                  Latest Stories
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                  Conservation insights and field-based stories
                </h2>
              </div>

              <Link
                href="/stories"
                className="hidden text-sm font-semibold text-white/80 transition hover:text-[#f4c542] lg:inline-flex"
              >
                Read all stories
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {stories.map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="rounded-[28px] border border-white/10 bg-[#171a15] p-8"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                    Conservation Story
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-white">
                    {story.title}
                  </h3>
                  <div className="mt-8">
                    <Link
                      href={story.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-[#f4c542]"
                    >
                      Read story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="bg-[#0c0e0b] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                  Get Involved
                </p>
                <h2 className="mt-4 max-w-4xl font-serif text-3xl font-bold text-white md:text-5xl">
                  Be part of wildlife conservation in Bangladesh
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                  Conservation grows stronger when more people care, learn, and take action.
                  Whether you are a student, researcher, nature enthusiast, photographer,
                  or potential partner, WildlifeScope invites you to join a growing mission
                  for biodiversity protection and environmental awareness.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
                  >
                    Contact WildlifeScope
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Learn about species and ecosystems",
                  "Share awareness with others",
                  "Collaborate on education or research",
                  "Support a science-rooted mission",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-[#151813] p-6 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-[#0a0b08] py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,197,66,0.08),transparent_28%)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
              The future of Bangladesh’s wildlife depends on what we protect today
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Join WildlifeScope in building awareness, supporting conservation, and
              creating a stronger voice for nature.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
              >
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/conservation"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
              >
                Explore Conservation Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
