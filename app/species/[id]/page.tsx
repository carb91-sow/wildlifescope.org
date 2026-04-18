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
  {item.id === "clouded-leopard" && (
  <div className="mt-10 rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
      Featured Insight
    </p>
    <h2 className="mt-3 font-serif text-2xl font-bold text-white">
      The Clouded Leopard: The Phantom of Bangladesh’s Forest Canopy
    </h2>
    <p className="mt-4 max-w-2xl leading-8 text-white/72">
      Discover how this elusive forest predator survives in Bangladesh’s wild
      hills and why urgent conservation is needed to protect its future.
    </p>
    <Link
      href="/insights/clouded-leopard-bangladesh"
      className="mt-6 inline-flex rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
    >
      Read full article →
    </Link>
  </div>
)}

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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
