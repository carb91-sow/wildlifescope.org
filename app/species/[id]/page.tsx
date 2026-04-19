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
    importance:
      "A rare forest predator representing the richness of Bangladesh's wild forests.",
    image: "/images/clouded-leopard.jpg",
    description:
      "A secretive forest cat with distinctive cloud-shaped markings, rarely seen in Bangladesh's forests.",
  },
]

const speciesInterlinks: Record<string, { title: string; href: string }[]> = {
  "bengal-tiger": [
    { title: "Wildlife Conservation", href: "/conservation" },
    { title: "Wildlife Insights", href: "/insights" },
    { title: "All Species", href: "/species" },
    { title: "Clouded Leopard", href: "/species/clouded-leopard" },
    { title: "Fishing Cat", href: "/species/fishing-cat" },
    { title: "Saltwater Crocodile", href: "/species/saltwater-crocodile" },
  ],
  "clouded-leopard": [
    { title: "Wildlife Conservation", href: "/conservation" },
    { title: "Wildlife Insights", href: "/insights" },
    { title: "All Species", href: "/species" },
    { title: "Bengal Tiger", href: "/species/bengal-tiger" },
    { title: "Fishing Cat", href: "/species/fishing-cat" },
    { title: "Asian Elephant", href: "/species/asian-elephant" },
  ],
}

export function generateStaticParams() {
  return species.map((item) => ({
    id: item.id,
  }))
}

export default function SpeciesDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const item = species.find((s) => s.id === id)

  if (!item) {
    notFound()
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="container mx-auto px-4 py-10">
          <Link
            href="/species"
            className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 mb-8"
          >
            ← Back to species
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-emerald-400 text-sm uppercase tracking-wider mb-3">
                Species Profile
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.name}</h1>
              <p className="text-slate-400 italic mb-6">{item.scientificName}</p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {item.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Conservation Status</p>
                  <p className="text-lg font-semibold">{item.status}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Region</p>
                  <p className="text-lg font-semibold">{item.region}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Habitat</p>
                  <p className="text-lg font-semibold">{item.habitat}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Population</p>
                  <p className="text-lg font-semibold">{item.population}</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold mb-3">Population Trend</h2>
              <p className="text-slate-300">{item.trend}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold mb-3">Main Threat</h2>
              <p className="text-slate-300">{item.threat}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mt-6">
            <h2 className="text-xl font-semibold mb-3">Why It Matters</h2>
            <p className="text-slate-300">{item.importance}</p>
          </div>

          {item.id === "bengal-tiger" && (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 mt-10">
              <p className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                Featured Insight
              </p>
              <h2 className="text-2xl font-semibold mb-3">
                How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans
              </h2>
              <p className="text-slate-300 mb-4">
                Explore how Bengal tigers regulate prey populations, reduce
                overgrazing, and support mangrove ecosystem stability.
              </p>
              <Link
                href="/insights"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Read full article →
              </Link>
            </div>
          )}

          {item.id === "clouded-leopard" && (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 mt-10">
              <p className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                Featured Insight
              </p>
              <h2 className="text-2xl font-semibold mb-3">
                The Clouded Leopard: The Phantom of Bangladesh’s Forest Canopy
              </h2>
              <p className="text-slate-300 mb-4">
                Discover how this elusive forest predator survives in
                Bangladesh’s wild hills and why urgent conservation is needed to
                protect its future.
              </p>
              <Link
                href="/insights"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Read full article →
              </Link>
            </div>
          )}

          {speciesInterlinks[item.id]?.length > 0 && (
            <div className="mt-10">
              <p className="text-emerald-400 text-sm uppercase tracking-wider mb-4">
                Related Links
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {speciesInterlinks[item.id].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-emerald-400 hover:bg-white/10 transition"
                  >
                    <span className="font-medium text-white">{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
