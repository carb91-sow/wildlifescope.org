import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Fishing Cat Threats in Bangladesh | Wildlife Scope",
  description:
    "Explore the major threats facing Fishing Cats in Bangladesh, including wetland destruction, pollution, habitat loss, and growing pressure on freshwater ecosystems.",
  keywords: [
    "Fishing Cat Bangladesh",
    "Fishing Cat threats Bangladesh",
    "Prionailurus viverrinus",
    "wetland destruction Bangladesh",
    "wetland wildlife Bangladesh",
    "Fishing Cat conservation",
    "Bangladesh wetlands",
    "wildlife threats Bangladesh",
  ],
  alternates: {
    canonical: "https://www.wildlifescope.org/insights/fishing-cat-threats",
  },
  openGraph: {
    title: "Fishing Cat Threats in Bangladesh | Wildlife Scope",
    description:
      "Learn how wetland destruction, pollution, and habitat loss are threatening the Fishing Cat in Bangladesh.",
    url: "https://www.wildlifescope.org/insights/fishing-cat-threats",
    siteName: "Wildlife Scope",
    images: [
      {
        url: "/images/fishing-cat.jpg",
        width: 1200,
        height: 630,
        alt: "Fishing Cat in Bangladesh wetlands",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fishing Cat Threats in Bangladesh | Wildlife Scope",
    description:
      "Learn how wetland destruction, pollution, and habitat loss are threatening the Fishing Cat in Bangladesh.",
    images: ["/images/fishing-cat.jpg"],
  },
}

const keyPoints = [
  "Fishing Cats depend heavily on healthy wetlands and freshwater habitats.",
  "Wetland destruction is one of the biggest threats to their survival in Bangladesh.",
  "Pollution reduces water quality and affects prey such as fish and amphibians.",
  "Habitat fragmentation isolates populations and limits safe movement.",
  "Protecting Fishing Cats also helps protect wetland biodiversity.",
]

const threats = [
  {
    id: "wetland-loss",
    title: "Wetland destruction",
    text: "Drainage, land conversion, and development are reducing marshes, river edges, and floodplain habitats that Fishing Cats rely on.",
  },
  {
    id: "pollution",
    title: "Pollution",
    text: "Water pollution from waste, chemicals, and broader environmental pressure damages wetland ecosystems and reduces prey availability.",
  },
  {
    id: "habitat-fragmentation",
    title: "Habitat fragmentation",
    text: "As wetlands become smaller and more isolated, Fishing Cats lose connected territory for hunting, shelter, and breeding.",
  },
  {
    id: "human-pressure",
    title: "Human pressure",
    text: "Growing human use of wetland areas increases disturbance and puts more pressure on already fragile habitats.",
  },
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white pt-20">
        {/* HERO */}
        <section className="text-center py-20">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              href="/species/fishing-cat"
              className="text-sm text-[#f4c542] transition-colors hover:text-[#ffd76a]"
            >
              ← Back to species
            </Link>

            <h1 className="text-5xl font-bold max-w-4xl mx-auto mt-8">
              Fishing Cat: Threats and Conservation in Bangladesh
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-white/70">
              The Fishing Cat is one of Bangladesh’s most distinctive wetland predators.
              But as wetlands shrink and pollution spreads, this specialized wild cat
              faces growing threats to its habitat, prey, and long-term survival.
            </p>

            <div className="mt-10 max-w-4xl mx-auto">
              <Image
                src="/images/fishing-cat.jpg"
                alt="Fishing Cat in Bangladesh wetlands"
                width={1200}
                height={600}
                className="rounded-xl"
                priority
              />
            </div>
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

        {/* MAIN SECTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              A Predator of Wetlands and Water Edges
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl">
              Unlike most wild cats, the Fishing Cat is closely tied to wetlands.
              It hunts in marshes, floodplains, riverbanks, reed beds, and other
              freshwater landscapes where fish and aquatic life are abundant.
              This close dependence on water makes it especially vulnerable when
              wetland ecosystems are degraded.
            </p>

            <div className="grid md:grid-cols-5 gap-4 mt-10">
              {[
                "Wetlands",
                "Fish-rich habitat",
                "Specialized hunter",
                "Ecological balance",
                "Healthy ecosystem",
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 border border-white/10 rounded-lg text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Major Threats</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {threats.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border border-white/10 rounded-xl"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAIL CONTENT */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-14">
              <section>
                <h2 className="text-3xl font-bold">Why Wetland Loss Is So Serious</h2>
                <p className="mt-6 text-white/70 max-w-4xl">
                  Wetlands are among the most threatened habitats in Bangladesh.
                  When marshes are drained, riverbanks are altered, or floodplain
                  ecosystems are converted for other uses, Fishing Cats lose the
                  exact landscapes they need to survive. Because they are so
                  specialized, even moderate habitat loss can have a strong impact.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">Pollution and Declining Prey</h2>
                <p className="mt-6 text-white/70 max-w-4xl">
                  Pollution does not only damage water quality. It also weakens
                  the entire food web. Fish, amphibians, and other aquatic prey
                  decline when wetlands become polluted, which directly affects a
                  predator that depends on wetland hunting grounds.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">Fragmented Habitat, Isolated Populations</h2>
                <p className="mt-6 text-white/70 max-w-4xl">
                  As wetland patches become smaller and more separated, Fishing
                  Cats face greater difficulty moving safely across the landscape.
                  Fragmentation reduces access to food, shelter, and breeding
                  areas, and increases risk from roads, disturbance, and conflict.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">Why Conservation Matters Now</h2>
                <p className="mt-6 text-white/70 max-w-4xl">
                  Protecting the Fishing Cat means protecting wetlands themselves.
                  Conservation efforts that restore wetland habitat, reduce
                  pollution, and preserve ecological connectivity can help both
                  this species and countless other wetland-dependent animals.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold">Why It Matters</h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            The Fishing Cat is an important symbol of Bangladesh’s wetland biodiversity.
            When this species declines, it signals deeper ecological damage across
            freshwater habitats. Protecting Fishing Cats helps protect wetlands,
            aquatic life, and the broader ecological balance they support.
          </p>
        </section>

        {/* RELATED LINKS */}
        <section className="py-16 bg-[#11130f] text-center">
          <h2 className="text-3xl font-bold">Explore More</h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/species/fishing-cat"
              className="text-[#f4c542] transition-colors hover:text-[#ffd76a]"
            >
              Fishing Cat →
            </Link>

            <Link
              href="/insights/threats-to-wildlife-bangladesh"
              className="text-[#f4c542] transition-colors hover:text-[#ffd76a]"
            >
              Wildlife Threats →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
