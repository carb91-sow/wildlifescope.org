import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin } from "lucide-react"
import { species, type Species } from "@/lib/species-data"

const statusStyles: Record<string, string> = {
  Endangered: "text-[#ffb4a8] border-[#ffb4a8]/30 bg-[#ffb4a8]/10",
  "Critically Endangered": "text-[#ff8f7a] border-[#ff8f7a]/30 bg-[#ff8f7a]/10",
  Vulnerable: "text-[#ffd37a] border-[#ffd37a]/30 bg-[#ffd37a]/10",
}

const sortedSpecies = [...species].sort((a, b) => {
  if (!!a.featured === !!b.featured) {
    return a.name.localeCompare(b.name)
  }
  return a.featured ? -1 : 1
})

function SpeciesCard({ species }: { species: Species }) {
  const statusStyle =
    statusStyles[species.status] ||
    "text-white/80 border-white/20 bg-white/10"

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#141611] shadow-xl transition-all hover:-translate-y-1 hover:border-[#f4c542]/35">
      <Link href={`/species/${species.id}`} className="block h-full">
        <div className="relative aspect-[4/3]">
          <Image
            src={species.image}
            alt={`${species.name} in ${species.region}`}
            fill
            className="object-cover transition group-hover:scale-105"
          />

          <div className="absolute left-5 top-5">
            <span className={`rounded-full px-3 py-1 text-xs ${statusStyle}`}>
              {species.status}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-sm italic text-white/70">
              {species.scientificName}
            </p>
            <h2 className="text-2xl font-bold text-white">{species.name}</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <MapPin size={14} />
            <span>{species.region}</span>
          </div>

          <p className="mt-4 text-sm leading-7 text-white/70">
            {species.description}
          </p>

          <div className="mt-4 space-y-1 text-xs text-white/60">
            <p>
              <strong>Habitat:</strong> {species.habitat}
            </p>
            <p>
              <strong>Trend:</strong> {species.trend}
            </p>
            <p>
              <strong>Threat:</strong> {species.threat}
            </p>
          </div>

          <p className="mt-3 text-xs italic text-[#f4c542]">
            {species.importance}
          </p>

          <div className="mt-5 text-sm text-[#f4c542]">Learn more →</div>
        </div>
      </Link>
    </article>
  )
}

export default function SpeciesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        {/* HERO */}
        <section className="py-20 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-5xl font-bold">Species We Protect</h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Discover the endangered wildlife of Bangladesh and learn how we
              are working to protect forests, wetlands, rivers, and the species
              that depend on them.
            </p>
          </div>
        </section>

        {/* THREATS SECTION WITH BACKGROUND */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0">
            <Image
              src="/images/threats-bg.jpg"
              alt="Deforestation and wildlife habitat loss"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-bold">Major Threats to Wildlife</h2>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="text-[#f4c542] transition-colors hover:text-[#ffd76a]"
              >
                Read full article →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Habitat destruction",
                "Climate change",
                "Human-wildlife conflict",
                "River pollution",
              ].map((item) => (
                <Link
                  key={item}
                  href="/insights/threats-to-wildlife-bangladesh"
                  className="rounded-xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm transition-colors hover:border-[#f4c542]/40 hover:bg-black/40"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED BLOG SECTION */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-white/10 bg-[#141611] p-8">
              <h2 className="text-3xl font-bold">
                Major Threats to Wildlife in Bangladesh
              </h2>

              <p className="mt-4 max-w-xl text-white/70">
                Learn how climate change, pollution, habitat destruction, and
                human pressure are impacting wildlife across Bangladesh.
              </p>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="mt-6 inline-block text-[#f4c542] transition-colors hover:text-[#ffd76a]"
              >
                Read full insight →
              </Link>
            </div>
          </div>
        </section>

        {/* SPECIES GRID */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">Featured Species</h2>
                <p className="mt-3 max-w-2xl text-white/70">
                  Explore species profiles, conservation status, habitat, and
                  the biggest threats facing Bangladesh’s wildlife.
                </p>
              </div>

              <p className="text-sm text-white/50">
                Showing {sortedSpecies.length} species
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {sortedSpecies.map((item) => (
                <SpeciesCard key={item.id} species={item} />
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-20 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold">
              Why Wildlife Conservation Matters
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Protecting wildlife helps preserve ecological balance,
              biodiversity, and a healthier future for forests, wetlands,
              rivers, and future generations.
            </p>
          </div>
        </section>

        {/* HOW TO HELP */}
        <section className="bg-[#11130f] py-20 text-center">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold">How You Can Help</h2>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
              {[
                "Support conservation",
                "Spread awareness",
                "Protect habitats",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 p-6"
                >
                  {item}
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
