import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const species = [
  {
    id: "bengal-tiger",
    name: "Royal Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    status: "Endangered",
    region: "Sundarbans, Bangladesh",
    habitat: "Mangrove Forest",
    population: "~114",
    trend: "Decreasing",
    threat: "Habitat loss & human-wildlife conflict",
    importance: "Top predator maintaining ecosystem balance in the Sundarbans",
    image: "/images/bengal-tiger.jpg",
    description:
      "The iconic tiger of the Sundarbans mangrove forest, adapted to swimming and hunting in tidal waterways.",
  },
  {
    id: "ganges-dolphin",
    name: "Ganges River Dolphin",
    scientificName: "Platanista gangetica",
    status: "Endangered",
    region: "Bangladesh Rivers",
    habitat: "Freshwater Rivers",
    population: "~1,200-1,800",
    trend: "Decreasing",
    threat: "River pollution & fishing net entanglement",
    importance: "An indicator species for the health of freshwater ecosystems.",
    image: "/images/ganges-dolphin.jpg",
    description:
      "A freshwater dolphin found in the Ganges-Brahmaputra river system, nearly blind and using echolocation.",
  },
  {
    id: "asian-elephant",
    name: "Asian Elephant",
    scientificName: "Elephas maximus",
    status: "Endangered",
    region: "Chittagong Hill Tracts",
    habitat: "Hill Forests",
    population: "~268",
    trend: "Decreasing",
    threat: "Habitat fragmentation & human-elephant conflict",
    importance: "A keystone species that shapes and supports forest ecosystems.",
    image: "/images/asian-elephant.jpg",
    description:
      "Bangladesh's largest land mammal, facing habitat fragmentation and human-elephant conflict.",
  },
  {
    id: "saltwater-crocodile",
    name: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    status: "Critically Endangered",
    region: "Sundarbans, Bangladesh",
    habitat: "Estuarine Waters",
    population: "~150-200",
    trend: "Decreasing",
    threat: "Habitat disturbance & nesting site loss",
    importance: "Helps maintain balance in coastal and estuarine food chains.",
    image: "/images/saltwater-crocodile.jpg",
    description:
      "The world's largest living reptile, found in the estuarine waters of the Sundarbans.",
  },
  {
    id: "fishing-cat",
    name: "Fishing Cat",
    scientificName: "Prionailurus viverrinus",
    status: "Vulnerable",
    region: "Bangladesh Wetlands",
    habitat: "Wetlands",
    population: "Unknown",
    trend: "Unknown",
    threat: "Wetland destruction & pollution",
    importance: "A unique wetland predator important for ecological balance.",
    image: "/images/fishing-cat.jpg",
    description:
      "A medium-sized wild cat uniquely adapted to wetland habitats, skilled at catching fish.",
  },
  {
    id: "hoolock-gibbon",
    name: "Western Hoolock Gibbon",
    scientificName: "Hoolock hoolock",
    status: "Endangered",
    region: "Sylhet Division",
    habitat: "Evergreen Forest",
    population: "~200-300",
    trend: "Decreasing",
    threat: "Deforestation & forest fragmentation",
    importance: "Bangladesh's only ape, vital for forest biodiversity awareness.",
    image: "/images/hoolock-gibbon.jpg",
    description:
      "Bangladesh's only ape species, known for their loud morning calls and acrobatic movement.",
  },
  {
    id: "gharial",
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    status: "Critically Endangered",
    region: "Bangladesh Rivers",
    habitat: "Large River Systems",
    population: "~100",
    trend: "Decreasing",
    threat: "River degradation & loss of nesting habitat",
    importance: "A rare river reptile that reflects the health of aquatic ecosystems.",
    image: "/images/gharial.jpg",
    description:
      "A fish-eating crocodilian with a distinctive long, narrow snout, critically endangered in Bangladesh.",
  },
  {
    id: "clouded-leopard",
    name: "Clouded Leopard",
    scientificName: "Neofelis nebulosa",
    status: "Vulnerable",
    region: "Chittagong Hill Tracts",
    habitat: "Tropical Forest",
    population: "Unknown",
    trend: "Unknown",
    threat: "Forest loss & habitat fragmentation",
    importance: "A rare forest predator representing the richness of Bangladesh's wild forests.",
    image: "/images/clouded-leopard.jpg",
    description:
      "A secretive forest cat with distinctive cloud-shaped markings, rarely seen in Bangladesh's forests.",
  },
]

export function generateStaticParams() {
  return species.map((item) => ({
    id: item.id,
  }))
}

export default async function SpeciesDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const item = species.find((s) => s.id === id)

  if (!item) {
    notFound()
  }

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Link
              href="/species"
              className="text-sm text-[#f4c542] transition-colors hover:text-[#ffd76a]"
            >
              ← Back to species
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#f4c542]">
                  Species Profile
                </p>
                <h1 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
                  {item.name}
                </h1>
                <p className="mt-4 text-lg italic text-white/65">
                  {item.scientificName}
                </p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                  {item.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f4c542]">
                      Conservation Status
                    </p>
                    <p className="mt-3 text-lg text-white">{item.status}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f4c542]">
                      Region
                    </p>
                    <p className="mt-3 text-lg text-white">{item.region}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f4c542]">
                      Habitat
                    </p>
                    <p className="mt-3 text-lg text-white">{item.habitat}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f4c542]">
                      Population
                    </p>
                    <p className="mt-3 text-lg text-white">{item.population}</p>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10">
                <Image
                  src={item.image}
                  alt={`${item.name} in ${item.region}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Population Trend
                </h2>
                <p className="mt-4 leading-8 text-white/72">{item.trend}</p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Main Threat
                </h2>
                <p className="mt-4 leading-8 text-white/72">{item.threat}</p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Why It Matters
                </h2>
                <p className="mt-4 leading-8 text-white/72">{item.importance}</p>
              </div>
            </div>

            {item.id === "bengal-tiger" && (
              <div className="mt-10 rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                  Featured Insight
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold text-white">
                  How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-white/72">
                  Explore how Bengal tigers regulate prey populations, reduce
                  overgrazing, and support mangrove ecosystem stability.
                </p>
                <Link
                  href="/insights/tiger-role-ecosystem-sundarbans"
                  className="mt-6 inline-flex rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
                >
                  Read full article →
                </Link>
              </div>
            )}

            {item.id === "clouded-leopard" && (
              <div className="mt-10 rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                  Featured Insight
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold text-white">
                  Clouded Leopard in Bangladesh
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-white/72">
                  Discover habitat, threats, and conservation efforts for the
                  Clouded Leopard in Bangladesh.
                </p>
                <Link
                  href="/insights/clouded-leopard-bangladesh"
                  className="mt-6 inline-flex rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
                >
                  Read full article →
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
