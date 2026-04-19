import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Indian Leopard Bangladesh | Sightings, Habitat & Conservation",
  description:
    "Explore Indian Leopard sightings in Bangladesh, including recent records from the Chittagong Hill Tracts, along with habitat, threats, and conservation priorities.",
}

const keyPoints = [
  "The Indian Leopard is one of Bangladesh’s most powerful wild predators.",
  "Recent camera-trap sightings confirm it still survives in the country.",
  "Habitat loss and fragmentation are major threats.",
  "Human-leopard conflict is increasing in some regions.",
  "Protecting leopards helps protect entire ecosystems.",
]

const sightings = [
  {
    year: "2025",
    title: "Chittagong Hill Tracts camera-trap record",
    text: "A leopard was photographed by camera traps in the Chittagong Hill Tracts, confirming its continued presence in Bangladesh.",
  },
  {
    year: "2025",
    title: "Sangu-Matamuhuri Reserve Forest",
    text: "Reports described this as one of the first confirmed leopard sightings in the area in nearly a decade.",
  },
  {
    year: "Ongoing",
    title: "Rare and scattered records",
    text: "Leopard sightings in Bangladesh remain rare and scattered, indicating fragile populations rather than stable distribution.",
  },
  {
    year: "Conservation signal",
    title: "A warning, not security",
    text: "Modern sightings show survival, but also highlight how limited and vulnerable leopard habitats have become.",
  },
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Deforestation and land-use change continue to reduce the forest cover leopards depend on.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Roads and settlements divide forests into smaller patches, making movement and survival harder.",
  },
  {
    id: "conflict",
    title: "Human-leopard conflict",
    text: "Leopards sometimes move closer to settlements, leading to fear, retaliation, and conflict.",
  },
  {
    id: "poaching",
    title: "Poaching",
    text: "Illegal hunting and wildlife trade still pose risks to leopard populations.",
  },
]

const actions = [
  "Protect remaining forest habitats in the Chittagong Hill Tracts and beyond.",
  "Strengthen wildlife monitoring using camera traps and field surveys.",
  "Reduce human-leopard conflict through awareness and response systems.",
  "Improve forest connectivity between fragmented habitats.",
  "Increase protection and enforcement against poaching.",
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
                Top Predator
              </p>

              <h1 className="mt-4 text-5xl font-bold">
                Indian Leopard in Bangladesh
              </h1>

              <p className="mt-6 text-white/70">
                The Indian Leopard is a powerful and adaptable wild cat. In
                Bangladesh, it survives in shrinking forest landscapes, making
                every confirmed sighting a critical signal for conservation.
              </p>
            </div>

            <Image
              src="/images/indian-leopard.jpg"
              alt="Indian Leopard in Bangladesh"
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
              A Predator on the Edge
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              The Indian Leopard plays a critical role in maintaining ecological
              balance. As a top predator, it regulates prey populations and helps
              sustain healthy forest ecosystems. However, in Bangladesh, its
              survival is becoming increasingly uncertain due to shrinking
              habitats and rising human pressure.
            </p>
          </div>
        </section>

        {/* BANGLADESH SIGHTINGS */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Present Sightings in Bangladesh
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {sightings.map((item) => (
                <div key={item.title} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-white/70 max-w-3xl leading-8">
              These sightings are important not because they confirm stability,
              but because they highlight survival under pressure. Every record
              shows that Bangladesh still holds habitat for large predators,
              but also that conservation action is urgently needed.
            </p>
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20">
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
        <section className="py-20 bg-[#11130f]">
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
            <Link href="/species/indian-leopard" className="text-[#f4c542]">
              Species Profile →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
