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
    importance: "Top predator maintaining ecosystem balance",
    image: "/images/bengal-tiger.jpg",
    description:
      "The iconic tiger of the Sundarbans mangrove forest, adapted to swimming and hunting in tidal waterways.",
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
const statusStyles: Record<string, string> = {
  Endangered: "text-[#ffb4a8] border-[#ffb4a8]/30 bg-[#ffb4a8]/10",
  "Critically Endangered": "text-[#ff8f7a] border-[#ff8f7a]/30 bg-[#ff8f7a]/10",
  Vulnerable: "text-[#ffd37a] border-[#ffd37a]/30 bg-[#ffd37a]/10",
}

function SpeciesCard({ species }: { species: (typeof species)[0] }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#141611] shadow-xl transition-all hover:-translate-y-1 hover:border-[#f4c542]/35">
      <Link href={`/species/${species.id}`}>
        <div className="relative aspect-[4/3]">
          <Image
            src={species.image}
            alt={`${species.name} in ${species.region}`}
            fill
            className="object-cover group-hover:scale-105 transition"
          />

          <div className="absolute left-5 top-5">
            <span className={`px-3 py-1 rounded-full text-xs ${statusStyles[species.status]}`}>
              {species.status}
            </span>
          </div>

          <div className="absolute bottom-0 p-6">
            <p className="text-sm italic text-white/70">
              {species.scientificName}
            </p>
            <h2 className="text-2xl font-bold text-white">
              {species.name}
            </h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <MapPin size={14} />
            {species.region}
          </div>

          <p className="mt-4 text-sm text-white/70">
            {species.description}
          </p>

          <div className="mt-4 text-xs text-white/60 space-y-1">
            <p><strong>Habitat:</strong> {species.habitat}</p>
            <p><strong>Trend:</strong> {species.trend}</p>
            <p><strong>Threat:</strong> {species.threat}</p>
          </div>

          <p className="mt-3 text-xs italic text-[#f4c542]">
            {species.importance}
          </p>

          <div className="mt-5 text-[#f4c542] text-sm">
            Learn more →
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function SpeciesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white pt-20">

        {/* HERO */}
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold">
            Species We Protect
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Discover the endangered wildlife of Bangladesh and learn how we are working to protect them.
          </p>
        </section>

        {/* THREATS SECTION (Clickable → Blog) */}
        <section className="bg-[#0f110d] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">
                Major Threats to Wildlife
              </h2>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="text-[#f4c542]"
              >
                Read full article →
              </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                "Habitat destruction",
                "Climate change",
                "Human-wildlife conflict",
                "River pollution",
              ].map((item) => (
                <Link
                  key={item}
                  href="/insights/threats-to-wildlife-bangladesh"
                  className="p-6 border border-white/10 rounded-xl hover:border-[#f4c542]/40"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED BLOG SECTION */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="p-8 border border-white/10 rounded-2xl bg-[#141611]">
              <h2 className="text-3xl font-bold">
                Major Threats to Wildlife in Bangladesh
              </h2>

              <p className="mt-4 text-white/70 max-w-xl">
                Learn how climate change, pollution, and habitat destruction are impacting wildlife across Bangladesh.
              </p>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="mt-6 inline-block text-[#f4c542]"
              >
                Read full insight →
              </Link>
            </div>
          </div>
        </section>

        {/* SPECIES GRID */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {species.map((item) => (
              <SpeciesCard key={item.id} species={item} />
            ))}
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold">
            Why Wildlife Conservation Matters
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            Protecting wildlife ensures ecological balance, biodiversity, and a sustainable future for generations.
          </p>
        </section>

        {/* HOW TO HELP */}
        <section className="py-20 bg-[#11130f] text-center">
          <h2 className="text-3xl font-bold">
            How You Can Help
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
            {[
              "Support conservation",
              "Spread awareness",
              "Protect habitats",
            ].map((item) => (
              <div key={item} className="p-6 border border-white/10 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
