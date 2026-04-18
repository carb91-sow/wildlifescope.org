import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin } from "lucide-react"

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
    importance: "Top predator maintaining ecosystem balance in the Sundarbans.",
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
      "Bangladesh&apos;s largest land mammal, facing habitat fragmentation and human-elephant conflict.",
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
      "The world&apos;s largest living reptile, found in the estuarine waters of the Sundarbans.",
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
    importance: "Bangladesh&apos;s only ape, vital for forest biodiversity awareness.",
    image: "/images/hoolock-gibbon.jpg",
    description:
      "Bangladesh&apos;s only ape species, known for their loud morning calls and acrobatic movement.",
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
    importance: "A rare forest predator representing the richness of Bangladesh&apos;s wild forests.",
    image: "/images/clouded-leopard.jpg",
    description:
      "A secretive forest cat with distinctive cloud-shaped markings, rarely seen in Bangladesh&apos;s forests.",
  },
]

const statusStyles: Record<string, string> = {
  Endangered: "text-[#ffb4a8] border-[#ffb4a8]/30 bg-[#ffb4a8]/10",
  "Critically Endangered": "text-[#ff8f7a] border-[#ff8f7a]/30 bg-[#ff8f7a]/10",
  Vulnerable: "text-[#ffd37a] border-[#ffd37a]/30 bg-[#ffd37a]/10",
  "Near Threatened": "text-[#f6e27a] border-[#f6e27a]/30 bg-[#f6e27a]/10",
}

function SpeciesCard({
  species,
}: {
  species: (typeof species)[0]
}) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#141611] shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#f4c542]/35">
      <Link href={`/species/${species.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={species.image}
            alt={`${species.name} in ${species.region}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-2 bg-[#f4c542]" />

          <div className="absolute left-5 top-5">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm ${
                statusStyles[species.status] ||
                "border-white/20 bg-white/10 text-white/80"
              }`}
            >
              {species.status}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6">
            <p className="text-sm italic text-white/70">{species.scientificName}</p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-white">
              {species.name}
            </h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-white/55">
            <MapPin size={14} className="text-[#f4c542]" />
            <span>{species.region}</span>
          </div>

          <p className="mt-4 text-sm leading-7 text-white/72">
            {species.description}
          </p>

          <div className="mt-4 space-y-2 text-xs leading-6 text-white/60">
            <p>
              <span className="text-white/40">Habitat:</span> {species.habitat}
            </p>
            <p>
              <span className="text-white/40">Trend:</span> {species.trend}
            </p>
            <p>
              <span className="text-white/40">Main Threat:</span> {species.threat}
            </p>
          </div>

          <p className="mt-4 text-sm italic leading-6 text-[#f4c542]">
            {species.importance}
          </p>

          <div className="mt-6 border-t border-white/10 pt-4">
            <div className="flex items-end justify-between gap-4">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Estimated Population
              </span>
              <span className="font-serif text-xl font-bold text-[#f4c542]">
                {species.population}
              </span>
            </div>
          </div>

          <div className="mt-5 inline-flex items-center text-sm font-medium text-[#f4c542]">
            Learn more →
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function SpeciesPage() {
  const endangeredCount = species.filter((item) => item.status === "Endangered").length
  const criticalCount = species.filter(
    (item) => item.status === "Critically Endangered"
  ).length

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d09]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,197,66,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-12 w-2 bg-[#f4c542]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f4c542]">
                Wildlife Catalog
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Species We Protect
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              From the Sundarbans mangroves to the Chittagong Hill Tracts,
              discover the remarkable wildlife of Bangladesh and the species we
              are committed to protecting through research, conservation, and
              awareness.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Species Tracked
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  {species.length}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Endangered
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  {endangeredCount}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Critical Risk
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  {criticalCount}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0f110d] py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white">
              Major Threats to Wildlife in Bangladesh
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Habitat destruction",
                "Climate change",
                "Human-wildlife conflict",
                "River pollution",
              ].map((threat) => (
                <div
                  key={threat}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-sm leading-7 text-white/80">{threat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11130f] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f4c542]">
                  Editorial Collection
                </p>

                <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
                  Wildlife of Bangladesh
                </h2>
              </div>

              <div className="hidden h-px flex-1 bg-white/10 lg:block" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {species.map((item) => (
                <SpeciesCard key={item.id} species={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0d09] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Why Wildlife Conservation Matters
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Bangladesh is home to some of the world&apos;s most unique
              ecosystems. Protecting endangered species is essential for
              maintaining ecological balance, preserving biodiversity, and
              securing a sustainable future for generations to come.
            </p>
          </div>
        </section>

        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              How You Can Help
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Support conservation efforts",
                "Spread awareness",
                "Protect natural habitats",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
