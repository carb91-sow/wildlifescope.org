import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Clouded Leopard Bangladesh | Wildlife Scope",
  description:
    "Discover the rare clouded leopard in Bangladesh, its habitat in the Chittagong Hill Tracts, unique adaptations, major threats, and the conservation efforts working to protect this elusive forest predator.",
}

const keyPoints = [
  "Clouded leopards are among Bangladesh’s rarest forest predators.",
  "They survive mainly in the forests of the Chittagong Hill Tracts.",
  "Their tree-climbing ability makes them highly specialized hunters.",
  "Forest loss, fragmentation, and poaching are major threats.",
  "Protecting clouded leopards helps protect Bangladesh’s remaining forests.",
]

const threats = [
  {
    id: "forest-loss",
    title: "Forest loss",
    text: "Deforestation, logging, and land conversion continue to reduce the dense forest habitat clouded leopards depend on.",
  },
  {
    id: "habitat-fragmentation",
    title: "Habitat fragmentation",
    text: "Roads, settlements, and development projects break forests into smaller patches, isolating already rare populations.",
  },
  {
    id: "poaching",
    title: "Poaching and illegal trade",
    text: "Clouded leopards are threatened by illegal hunting for their striking coat, bones, and teeth.",
  },
  {
    id: "low-monitoring",
    title: "Limited monitoring",
    text: "Because the species is elusive and poorly studied in Bangladesh, weak data and limited species-specific action make conservation harder.",
  },
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white pt-20">

        {/* HERO */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold max-w-4xl mx-auto">
            The Clouded Leopard: The Phantom of Bangladesh’s Forest Canopy
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            Hidden within the forests of the Chittagong Hill Tracts, the clouded leopard
            remains one of Bangladesh’s rarest and most elusive predators. Its survival
            is a powerful sign of the health of the country’s remaining wild forests.
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <Image
              src="/images/clouded-leopard.jpg"
              alt="Clouded Leopard in Bangladesh"
              width={1200}
              height={600}
              className="rounded-xl"
            />
          </div>
        </section>

        {/* KEY POINTS */}
        <section className="py-16 bg-[#11130f]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Key Insights
            </h2>

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

        {/* SPECIES ROLE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              A Predator Built for the Canopy
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl">
              The clouded leopard is one of the most specialized climbers among wild cats.
              Its long tail helps with balance, its flexible ankles support agile movement
              through trees, and its powerful body allows it to hunt both in the canopy
              and on the forest floor.
            </p>

            <div className="grid md:grid-cols-5 gap-4 mt-10">
              {[
                "Dense forest",
                "Tree climber",
                "Ambush hunter",
                "Controls prey",
                "Healthier ecosystem",
              ].map((item) => (
                <div key={item} className="p-4 border border-white/10 rounded-lg text-center">
                  {item}
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

        {/* WHY IT MATTERS */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold">
            Why It Matters
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            The clouded leopard is more than a rare cat. It is a symbol of Bangladesh’s
            remaining forest wilderness. Protecting this species also protects forest
            biodiversity, ecological balance, and the habitats that support countless
            other animals and plant life.
          </p>
        </section>

        {/* RELATED LINKS */}
        <section className="py-16 bg-[#11130f] text-center">
          <h2 className="text-3xl font-bold">
            Explore More
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/species/clouded-leopard" className="text-[#f4c542]">
              Clouded Leopard →
            </Link>

            <Link href="/insights/threats-to-wildlife-bangladesh" className="text-[#f4c542]">
              Wildlife Threats →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
