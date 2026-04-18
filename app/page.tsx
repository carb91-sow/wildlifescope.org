"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { stories } from "@/data/stories"
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
  HandCoins,
} from "lucide-react"

const seo = {
  organizationName: "WildlifeScope",
  siteUrl: "https://wildlifescope.org",
  title:
    "Wildlife Conservation in Bangladesh | WildlifeScope Research, Awareness, and Action",
  description:
    "WildlifeScope is a Bangladesh-based wildlife conservation platform focused on biodiversity research, endangered species awareness, ecological storytelling, and community engagement.",
  keywords: [
    "wildlife conservation in Bangladesh",
    "Bangladesh wildlife",
    "endangered species in Bangladesh",
    "biodiversity Bangladesh",
    "wildlife research Bangladesh",
    "conservation awareness Bangladesh",
    "ecology Bangladesh",
    "species documentation Bangladesh",
    "Fishing Cat Bangladesh",
    "Bengal Slow Loris Bangladesh",
    "Leopard Cat Bangladesh",
    "wildlife storytelling",
  ],
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: seo.organizationName,
      url: seo.siteUrl,
      description: seo.description,
      keywords: seo.keywords.join(", "),
      areaServed: "Bangladesh",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      name: seo.organizationName,
      url: seo.siteUrl,
      description: seo.description,
      inLanguage: "en",
      keywords: seo.keywords.join(", "),
    },
    {
      "@type": "WebPage",
      name: seo.title,
      url: seo.siteUrl,
      description: seo.description,
      primaryImageOfPage: `${seo.siteUrl}/images/hero-telemetry-research.jpg`,
      about: "Wildlife conservation in Bangladesh",
    },
  ],
}

const issues = [
  {
    icon: ShieldAlert,
    title: "Endangered Species in Bangladesh",
    description:
      "Many wildlife species face increasing pressure from habitat degradation, disturbance, illegal activity, and lack of public awareness.",
  },
  {
    icon: Trees,
    title: "Habitat Loss and Fragmentation",
    description:
      "Forests, wetlands, and natural ecosystems are shrinking, leaving wildlife with fewer safe places to survive, move, and reproduce.",
  },
  {
    icon: Users,
    title: "Human–Wildlife Conflict",
    description:
      "As landscapes change, conflict between people and wildlife becomes more common, creating growing risks for both communities and species.",
  },
]

const pillars = [
  {
    icon: Globe2,
    title: "Wildlife Research",
    description:
      "Science-based understanding of species, habitats, and ecological systems through field observation, biodiversity monitoring, and conservation thinking.",
  },
  {
    icon: BookOpen,
    title: "Conservation Awareness",
    description:
      "Accessible storytelling and environmental education that help more people understand why wildlife conservation matters.",
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
      "A unique and secretive primate whose survival depends on habitat protection, careful research, and informed conservation action.",
  },
  {
    name: "Fishing Cat",
    status: "Wetland-dependent wild cat",
    image: "/images/species-fishing-cat.jpg",
    description:
      "An extraordinary predator closely tied to fragile wetland ecosystems that are increasingly under pressure from habitat change.",
  },
  {
    name: "Leopard Cat",
    status: "Elusive small wild cat",
    image: "/images/species-leopard-cat.jpg",
    description:
      "A symbol of hidden biodiversity, representing the quiet and often overlooked wildlife still surviving across changing landscapes.",
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
      "Observing species and ecosystems across diverse habitats to support long-term ecological understanding and protection.",
  },
  {
    icon: Users,
    title: "Awareness and Outreach",
    description:
      "Building stronger public understanding through educational communication, local engagement, and conservation storytelling.",
  },
]

const stats = [
  { label: "Species Focus", value: "120+" },
  { label: "Field Learning", value: "35+" },
  { label: "Conservation Stories", value: "80+" },
  { label: "Community Reach", value: "5K+" },
]

export default function HomePage() {
  const featuredStories = stories.filter((story) => story.featured).slice(0, 3)
  const homepageStories =
    featuredStories.length > 0 ? featuredStories : stories.slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main className="bg-[#0b0d09] text-white">
        <h1 className="sr-only">
          Wildlife conservation in Bangladesh through research, storytelling, and action
        </h1>

        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-telemetry-research.jpg"
              alt="Wildlife telemetry research at dusk in Bangladesh"
              fill
              priority
              className="object-cover object-[68%_center] brightness-[1.08] contrast-105 saturate-[0.92] sm:object-[70%_center] sm:brightness-[1] md:object-[72%_center] md:brightness-[0.95] lg:object-[74%_center] lg:brightness-[0.9]"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/42 to-[#0b0d09] sm:from-black/66 sm:via-black/36 md:from-black/60 md:via-black/32 lg:from-black/52 lg:via-black/28" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-transparent sm:from-black/74 sm:via-black/32 md:from-black/68 md:via-black/28 lg:from-black/60 lg:via-black/22" />
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

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.8 }}
                className="max-w-5xl font-serif text-5xl font-bold leading-[0.96] text-white md:text-7xl lg:text-8xl drop-shadow-lg"
              >
                Wildlife conservation in Bangladesh through research, storytelling, and action
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.8 }}
                className="mt-8 max-w-3xl text-lg leading-8 text-white md:text-xl drop-shadow-md"
              >
                WildlifeScope is a Bangladesh-based conservation platform dedicated to
                biodiversity protection, endangered species awareness, ecological research,
                wildlife telemetry, and science-based storytelling from the front lines of
                conservation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.8 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/conservation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c] shadow-lg"
                  aria-label="Explore wildlife conservation work in Bangladesh"
                >
                  Explore Conservation Work
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#f4c542] hover:text-[#f4c542]"
                  aria-label="Get involved with WildlifeScope"
                >
                  Get Involved
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#0b0d09] py-8" aria-labelledby="homepage-impact-stats">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 id="homepage-impact-stats" className="sr-only">
              Wildlife conservation impact highlights
            </h2>
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

        {/* Why It Matters */}
        <section className="relative overflow-hidden py-20 lg:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/why-it-matters-bg.jpg"
              alt="Forest stream ecosystem in Bangladesh showing wildlife habitat"
              fill
              className="object-cover brightness-[0.9] contrast-105 saturate-[1]"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-[#10120e]/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10120e]/65 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                Why It Matters Now
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                Why wildlife conservation in Bangladesh matters now
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                Bangladesh is home to remarkable wildlife, rich ecosystems, and
                irreplaceable biodiversity. But many species and habitats face growing
                pressure from habitat loss, environmental change, and human–wildlife
                conflict. Protecting nature is not only about saving species. It is about
                protecting ecological balance, supporting communities, and securing a more
                sustainable future for both people and wildlife.
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
                    className="rounded-[28px] border border-white/12 bg-[#171a15]/65 p-8 backdrop-blur-[1px]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c542]/12 text-[#f4c542]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-white/80">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Conservation in Action */}
<section className="relative overflow-hidden py-20 lg:py-24">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/images/conservation-in-action-thermal.jpg"
      alt="Nighttime wildlife conservation fieldwork in Bangladesh"
      fill
      className="object-cover object-center brightness-[0.85] contrast-[1.1] saturate-[0.95] sepia-[0.45]"
      sizes="100vw"
    />

    {/* LIGHT overlay (reduced) */}
    <div className="absolute inset-0 bg-black/28" />

    {/* Soft warm tone (reduced) */}
    <div className="absolute inset-0 bg-[rgba(120,68,18,0.14)] mix-blend-screen" />

    {/* Keep text readable but not heavy */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

    {/* Very subtle top/bottom depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mb-14 max-w-5xl">
      <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#f4c542]">
        Conservation in Action
      </p>

      <h2 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.02] text-white md:text-6xl">
        Conservation requires action,
        <br className="hidden md:block" />
        not just awareness
      </h2>

      <p className="mt-8 max-w-4xl text-lg leading-8 text-white/90 md:text-[1.25rem]">
        WildlifeScope is dedicated to hands-on wildlife conservation in Bangladesh
        through field research, biodiversity monitoring, camera trapping, radio
        telemetry, and community engagement. These practical approaches help turn
        ecological knowledge into meaningful conservation action.
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
            className="rounded-[28px] border border-white/10 bg-black/18 p-8 backdrop-blur-[2px] shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c542]/10 text-[#f4c542]">
              <Icon className="h-7 w-7" />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-white/85">
              {item.description}
            </p>
          </motion.div>
        )
      })}
    </div>

    <p className="sr-only">
      Wildlife researchers conducting nighttime conservation fieldwork in Bangladesh.
    </p>
  </div>
</section>

        {/* Story / About */}
        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[480px] overflow-hidden rounded-[34px] border border-white/10">
                <Image
                  src="/images/home-story.jpg"
                  alt="Field experience and conservation storytelling in Bangladesh"
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
                  understand wildlife, while awareness helps protect it.
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
                    aria-label="Read the WildlifeScope story"
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
                Endangered and important wildlife species in Bangladesh
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                Bangladesh shelters extraordinary wildlife, many of which remain threatened,
                understudied, or poorly understood. Learning about these species is the
                first step toward protecting them.
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
                      alt={`${item.name} in Bangladesh`}
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
                aria-label="Explore more wildlife species in Bangladesh"
              >
                Explore More Species
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Donate */}
        <section className="bg-[#11130f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#171a15] shadow-2xl">
              <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-8 md:p-10 lg:p-14">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c542]/12 text-[#f4c542]">
                    <HandCoins className="h-7 w-7" />
                  </div>

                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                    Support Conservation
                  </p>

                  <h2 className="mt-4 max-w-3xl font-serif text-3xl font-bold text-white md:text-5xl">
                    Help strengthen wildlife conservation and awareness in Bangladesh
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                    Your support can help expand species awareness, conservation storytelling,
                    environmental education, and field-informed biodiversity protection.
                    Every contribution helps build a stronger voice for wildlife
                    conservation in Bangladesh.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/donate"
                      className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd45c]"
                      aria-label="Donate to support wildlife conservation in Bangladesh"
                    >
                      Donate Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                      aria-label="Partner with WildlifeScope"
                    >
                      Partner With Us
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[360px] lg:min-h-full">
                  <Image
                    src="/images/donate-home.jpg"
                    alt="Support wildlife conservation in Bangladesh"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
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
                aria-label="Read all wildlife conservation stories"
              >
                Read all stories
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homepageStories.map((story, index) => (
                <motion.div
                  key={story.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                >
                  <Link
                    href={`/stories/${story.slug}`}
                    className="group block overflow-hidden rounded-[28px] border border-white/10 bg-[#171a15] shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
                    aria-label={`Read story: ${story.title}`}
                  >
                    <div className="relative h-[420px] w-full">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,197,66,0.08),transparent_28%)]" />

                      <div className="absolute inset-x-0 bottom-0 p-8">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                          {story.label}
                        </p>

                        <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-white">
                          {story.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/72">
                          {story.excerpt}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition group-hover:text-[#f4c542]">
                          Read story
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
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
                    aria-label="Contact WildlifeScope"
                  >
                    Contact WildlifeScope
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                    aria-label="Learn more about WildlifeScope"
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
                aria-label="Get involved with wildlife conservation"
              >
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/conservation"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c542] hover:text-[#f4c542]"
                aria-label="Explore conservation work"
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
