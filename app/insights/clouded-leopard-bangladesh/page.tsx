import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Clouded Leopard Bangladesh | Wildlife Scope",
  description:
    "Discover the rare clouded leopard in Bangladesh, its habitat in the Chittagong Hill Tracts, unique adaptations, major threats, and the conservation efforts working to protect this elusive forest predator.",
  keywords: [
    "clouded leopard Bangladesh",
    "Neofelis nebulosa",
    "Chittagong Hill Tracts wildlife",
    "endangered animals Bangladesh",
    "Bangladesh forest predator",
    "wildlife conservation Bangladesh",
  ],
  openGraph: {
    title: "Clouded Leopard Bangladesh | Wildlife Scope",
    description:
      "Discover the rare clouded leopard in Bangladesh, its habitat in the Chittagong Hill Tracts, unique adaptations, major threats, and the conservation efforts working to protect this elusive forest predator.",
    url: "https://www.wildlifescope.org/insights/clouded-leopard-bangladesh",
    siteName: "Wildlife Scope",
    images: [
      {
        url: "/images/clouded-leopard.jpg",
        width: 1200,
        height: 630,
        alt: "Clouded leopard in the forests of Bangladesh",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clouded Leopard Bangladesh | Wildlife Scope",
    description:
      "Discover the rare clouded leopard in Bangladesh, its habitat in the Chittagong Hill Tracts, unique adaptations, major threats, and conservation efforts.",
    images: ["/images/clouded-leopard.jpg"],
  },
}

export default function CloudedLeopardInsightPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Link
              href="/species/clouded-leopard"
              className="text-sm text-[#f4c542] transition-colors hover:text-[#ffd76a]"
            >
              ← Back to species
            </Link>

            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#f4c542]">
              Featured Insight
            </p>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-6xl">
              The Clouded Leopard: The Phantom of Bangladesh’s Forest Canopy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Hidden within the misty forests of the Chittagong Hill Tracts, the
              clouded leopard remains one of Bangladesh’s rarest and most elusive
              predators. This remarkable forest cat is a symbol of the country’s
              vanishing wilderness and a powerful reminder of why protecting wild
              habitats matters.
            </p>

            <div className="relative mt-10 min-h-[360px] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/clouded-leopard.jpg"
                alt="Clouded leopard in the forests of Bangladesh"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
              <h2 className="font-serif text-2xl font-bold text-white">
                Key Insights
              </h2>

              <ul className="mt-6 space-y-4 text-white/72">
                <li>
                  Clouded leopards are among Bangladesh’s rarest forest predators.
                </li>
                <li>
                  Their strongest remaining refuge is in the Chittagong Hill
                  Tracts.
                </li>
                <li>
                  Forest loss, fragmentation, and poaching are major threats.
                </li>
                <li>
                  They are highly specialized climbers adapted to life in the
                  forest canopy.
                </li>
                <li>
                  Protecting clouded leopards helps protect Bangladesh’s remaining
                  wild forests.
                </li>
              </ul>
            </div>

            <article className="mt-12 space-y-12">
              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  The Ghost of the Canopy
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  In the dense, rain-soaked forests of southeastern Bangladesh,
                  the clouded leopard moves almost unseen through the trees. For
                  years, many feared that this secretive predator had disappeared
                  from the country altogether. Recent camera trap evidence,
                  however, has confirmed that it still survives in the remote
                  hills of the Chittagong Hill Tracts.
                </p>
                <p className="mt-4 leading-8 text-white/72">
                  With fewer than 5,600 mature individuals remaining globally,
                  the clouded leopard is one of Asia’s most threatened wild cats.
                  Its survival in Bangladesh is both extraordinary and fragile.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Species Profile
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  Scientifically known as <em>Neofelis nebulosa</em>, the clouded
                  leopard occupies a unique place in the cat family. It is not a
                  true leopard, but a distinct species that bridges traits of
                  both big and small cats. In Bangladesh, it is regarded as a
                  rare apex forest predator with major ecological importance.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Distribution and Habitat
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  Historically, clouded leopards were reported from several
                  forested parts of Bangladesh, including Mymensingh, Sylhet, and
                  Cox’s Bazar. Today, their most important remaining refuge
                  appears to be the Sangu-Matamuhari forest range in the
                  Chittagong Hill Tracts.
                </p>
                <p className="mt-4 leading-8 text-white/72">
                  These cats depend on dense tropical forest with strong canopy
                  cover, rugged terrain, and healthy prey populations. Other
                  forest areas may still offer occasional refuge, but confirmed
                  sightings remain extremely rare.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Built for the Trees
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  The clouded leopard is one of the most specialized climbers
                  among wild cats. Its cloud-shaped markings help it blend into
                  dappled forest light, while its long tail provides balance in
                  the canopy.
                </p>
                <p className="mt-4 leading-8 text-white/72">
                  Flexible ankle joints allow it to descend trees headfirst, hang
                  from branches, and move with extraordinary agility. It also has
                  exceptionally long canine teeth relative to its skull size,
                  making it a powerful predator in forest ecosystems.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Diet and Behavior
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  Clouded leopards are solitary and mostly nocturnal. They hunt
                  both on the ground and in trees, preying on monkeys, squirrels,
                  birds, wild pigs, and small deer.
                </p>
                <p className="mt-4 leading-8 text-white/72">
                  Their stealth, strength, and climbing skill make them effective
                  ambush hunters, but they are shy animals and rarely pose a
                  threat to people.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Major Threats
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  The clouded leopard faces severe pressure in Bangladesh.
                  Deforestation, logging, agricultural expansion, and
                  infrastructure development continue to shrink and fragment its
                  forest habitat.
                </p>
                <p className="mt-4 leading-8 text-white/72">
                  Illegal poaching and wildlife trade add to these pressures. The
                  species is targeted for its striking coat, while weak
                  enforcement and limited research make conservation even more
                  difficult.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Conservation Efforts
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  Despite these challenges, recent camera trap records have
                  confirmed that clouded leopards still survive in Bangladesh.
                  This has renewed attention on the need for targeted protection.
                </p>
                <p className="mt-4 leading-8 text-white/72">
                  New conservation efforts are working to improve monitoring,
                  reduce poaching, and involve local communities in forest
                  protection, while also advocating for stronger habitat
                  safeguards.
                </p>
              </section>

              <section className="rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
                <h2 className="font-serif text-3xl font-bold text-white">
                  Why It Matters
                </h2>
                <p className="mt-4 leading-8 text-white/72">
                  The clouded leopard is more than a rare wild cat. It is a
                  flagship species for the health of Bangladesh’s forests. Its
                  presence signals the survival of rich, functioning ecosystems
                  filled with diverse plants and animals.
                </p>
                <p className="mt-4 leading-8 text-white/72">
                  Protecting the clouded leopard means protecting forests,
                  biodiversity, watersheds, and ecological balance for both
                  wildlife and people.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Explore More
                </h2>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/species/clouded-leopard"
                    className="inline-flex rounded-full border border-white/10 bg-[#141611] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#f4c542]/40 hover:text-[#f4c542]"
                  >
                    Clouded Leopard →
                  </Link>

                  <Link
                    href="/insights/threats-to-wildlife-bangladesh"
                    className="inline-flex rounded-full border border-white/10 bg-[#141611] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#f4c542]/40 hover:text-[#f4c542]"
                  >
                    Wildlife Threats →
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
