import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ferret-Badger Bangladesh | Latest Evidence, Ecological Niche & Conservation",
  description:
    "Explore the Ferret-Badger in Bangladesh, including its ecological niche, latest evidence, threats, and why this small nocturnal mammal matters for forest ecosystems.",
}

const keyPoints = [
  "Ferret-Badgers are small, nocturnal carnivores found in forested regions of Bangladesh.",
  "They are rarely recorded, making their national status poorly understood.",
  "They play an ecological role as insect and small-prey predators.",
  "Habitat loss and fragmentation are key threats.",
  "Low awareness limits conservation attention for this species.",
]

const highlights = [
  {
    label: "Nocturnal mammal",
    text: "Ferret-Badgers are active mostly at night, which makes them difficult to observe in the wild.",
  },
  {
    label: "Insect predator",
    text: "They help regulate insect and invertebrate populations in forest ecosystems.",
  },
  {
    label: "Ground-level species",
    text: "They live and move mainly along the forest floor rather than in the canopy.",
  },
  {
    label: "Hidden biodiversity",
    text: "They represent the overlooked layer of biodiversity that supports ecosystem stability.",
  },
]

const latestBangladeshInfo = [
  {
    label: "Current evidence",
    title: "Limited and scattered records",
    text: "Available information on Ferret-Badgers in Bangladesh comes from occasional sightings and regional wildlife records rather than consistent monitoring.",
  },
  {
    label: "Why records are rare",
    title: "Low detectability",
    text: "The species is nocturnal, secretive, and lives in dense vegetation, making it extremely difficult to document.",
  },
  {
    label: "Best interpretation",
    title: "Presence without clarity",
    text: "Evidence suggests the species persists in suitable forest habitats, but population size and distribution remain unclear.",
  },
  {
    label: "Conservation signal",
    title: "Need for better monitoring",
    text: "The lack of strong recent records highlights the need for targeted research rather than indicating absence.",
  },
]

const nichePoints = [
  {
    title: "Nocturnal insectivore niche",
    text: "Ferret-Badgers feed on insects, invertebrates, and small animals, helping maintain balance in forest floor ecosystems.",
  },
  {
    title: "Forest-floor specialist",
    text: "They rely on ground-level vegetation, burrows, and dense cover for shelter and hunting.",
  },
  {
    title: "Part of the hidden food web",
    text: "Their role is subtle but important, linking insect populations and small prey to larger ecological processes.",
  },
  {
    title: "Indicator of understory health",
    text: "Their presence suggests that forest floor conditions remain suitable for small mammals and prey species.",
  },
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Deforestation reduces shelter and feeding areas required for survival.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Breaking forests into smaller patches limits movement and increases risk.",
  },
  {
    id: "disturbance",
    title: "Human disturbance",
    text: "Expanding agriculture and settlements disturb forest floor habitats.",
  },
  {
    id: "low-awareness",
    title: "Low awareness",
    text: "The species is often ignored in conservation planning due to limited public recognition.",
  },
]

const actions = [
  "Protect forest habitats and ground vegetation layers.",
  "Increase monitoring using camera traps and field surveys.",
  "Raise awareness about lesser-known mammals.",
  "Reduce habitat fragmentation across forest landscapes.",
  "Include small carnivores in conservation strategies.",
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">

        {/* HERO */}
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c542]">
                Nocturnal Forest Carnivore
              </p>

              <h1 className="mt-4 text-5xl font-bold">
                Ferret-Badger in Bangladesh: Hidden, Rare, and Ecologically Important
              </h1>

              <p className="mt-6 text-white/70">
                The Ferret-Badger is one of Bangladesh’s least visible wild
                mammals. Small, nocturnal, and elusive, it operates within the
                forest floor ecosystem, quietly contributing to ecological
                balance while remaining largely unknown.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/ferret-badger.jpg"
                alt="Ferret-Badger in forest habitat"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="bg-[#11130f] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Key Insights</h2>

            <ul className="mt-8 space-y-3">
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
              A Hidden Component of Forest Ecosystems
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Ferret-Badgers are small carnivorous mammals that live close to
              the forest floor. Unlike larger and more visible species, they
              operate quietly within the ecosystem, feeding on insects and small
              animals and contributing to ecological balance in subtle ways.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Their role may not attract attention, but it is essential. Forest
              ecosystems depend on a wide range of species, including those that
              regulate insect populations and maintain food web stability.
            </p>
          </div>
        </section>

        {/* LATEST BANGLADESH INFO */}
        <section className="bg-[#11130f] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Latest Bangladesh Evidence
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
        <section className="bg-[#11130f] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Major Threats</h2>

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
            <h2 className="text-3xl font-bold">What Needs to Happen Next</h2>

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
        <section className="bg-[#11130f] py-16 text-center">
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
