import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ferret-Badger Bangladesh | Sightings, Ecological Role & Conservation",
  description:
    "Explore the Ferret-Badger in Bangladesh, including its habitat, ecological niche, threats, and why this small nocturnal mammal is important for forest ecosystems.",
}

const keyPoints = [
  "Ferret-Badgers are small nocturnal mammals found in forested regions of Bangladesh.",
  "They are rarely seen, making confirmed records limited and scattered.",
  "They play an important ecological role as insect predators.",
  "Habitat loss and fragmentation are major threats.",
  "Low awareness means the species receives little conservation attention.",
]

const latestBangladeshInfo = [
  {
    label: "Current status",
    title: "Rare and poorly documented",
    text: "In Bangladesh, Ferret-Badger records are limited and scattered, with most knowledge based on occasional sightings and regional studies.",
  },
  {
    label: "Why sightings are rare",
    title: "Nocturnal and secretive",
    text: "The species is active mostly at night and lives in dense vegetation, making detection extremely difficult.",
  },
  {
    label: "Best interpretation",
    title: "Presence but low visibility",
    text: "Available information suggests the species still exists in suitable habitats, but lack of monitoring means its true status is unclear.",
  },
  {
    label: "Conservation signal",
    title: "Needs more research",
    text: "The lack of recent strong records highlights the need for better surveys and monitoring rather than indicating absence.",
  },
]

const nichePoints = [
  {
    title: "Nocturnal insectivore",
    text: "Ferret-Badgers primarily feed on insects, small animals, and invertebrates, helping control pest populations in forest ecosystems.",
  },
  {
    title: "Ground-level forest species",
    text: "Unlike fully arboreal mammals, they operate mostly on the forest floor, using burrows and dense vegetation for shelter.",
  },
  {
    title: "Part of the hidden ecosystem",
    text: "They contribute to ecological balance quietly, without being easily observed like larger mammals.",
  },
  {
    title: "Indicator of understory health",
    text: "Their presence suggests functioning forest floor ecosystems with sufficient prey and cover.",
  },
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Deforestation and land conversion reduce the forest cover needed for shelter and foraging.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Breaking forests into smaller patches disrupts movement and increases vulnerability.",
  },
  {
    id: "low-awareness",
    title: "Low awareness",
    text: "Because they are not well known, Ferret-Badgers receive less conservation attention.",
  },
  {
    id: "disturbance",
    title: "Human disturbance",
    text: "Expansion of settlements and agriculture increases disturbance in forest-edge habitats.",
  },
]

const actions = [
  "Protect forest habitats and maintain ground-level vegetation.",
  "Support wildlife surveys and night-time monitoring.",
  "Increase awareness of lesser-known mammals.",
  "Reduce habitat fragmentation across forest landscapes.",
  "Include small carnivores in conservation planning.",
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">

        {/* HERO */}
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c542]">
                Nocturnal Forest Mammal
              </p>

              <h1 className="mt-4 text-5xl font-bold">
                Ferret-Badger in Bangladesh
              </h1>

              <p className="mt-6 text-white/70">
                The Ferret-Badger is one of Bangladesh’s least known wild
                mammals. Small, nocturnal, and rarely seen, it plays a quiet
                but important role in maintaining ecological balance within
                forest ecosystems.
              </p>
            </div>

            <Image
              src="/images/ferret-badger.jpg"
              alt="Ferret-Badger in forest"
              width={1200}
              height={800}
              className="rounded-xl"
            />
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="py-16 bg-[#11130f]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Key Insights</h2>

            <ul className="mt-6 space-y-3">
              {keyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#f4c542] rounded-full"></span>
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              A Hidden Mammal of the Forest Floor
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Ferret-Badgers are small carnivorous mammals that live mostly on
              the forest floor. Unlike more visible wildlife, they operate in
              the background of ecosystems, hunting insects and small prey while
              remaining largely unseen.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Their role may seem subtle, but it is essential. By controlling
              insect populations and contributing to food webs, they help
              maintain balance in forest ecosystems.
            </p>
          </div>
        </section>

        {/* LATEST BANGLADESH INFO */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Bangladesh Status & Sightings Context
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {latestBangladeshInfo.map((item) => (
                <div key={item.title} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOLOGICAL NICHE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Ecological Niche
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {nichePoints.map((item) => (
                <div key={item.title} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Major Threats
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {threats.map((item) => (
                <div key={item.id} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              What Needs to Happen
            </h2>

            <ul className="mt-6 space-y-3">
              {actions.map((item) => (
                <li key={item} className="text-white/80">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold">Explore More</h2>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/species/ferret-badger" className="text-[#f4c542]">
              Species Profile →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
