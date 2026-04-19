import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Asian Golden Cat Bangladesh | Habitat, Threats & Conservation",
  description:
    "Discover the Asian Golden Cat in Bangladesh, its forest habitat, ecological role, major threats, and why protecting hill forests is essential for its survival.",
}

const keyPoints = [
  "The Asian Golden Cat is one of Bangladesh’s rare and elusive wild forest cats.",
  "It is associated with dense hill forests and low-disturbance habitats.",
  "Habitat loss and fragmentation are major threats to its survival.",
  "Limited research and low visibility make conservation more difficult.",
  "Protecting the Asian Golden Cat helps protect wider forest biodiversity.",
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Forest clearing, land conversion, and long-term degradation continue to reduce the habitat needed by the Asian Golden Cat.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Roads, settlements, and expanding human activity break forest landscapes into smaller patches, reducing safe movement and habitat quality.",
  },
  {
    id: "human-pressure",
    title: "Human pressure",
    text: "As forested landscapes become more disturbed, this secretive cat faces increased risk from encroachment, noise, and shrinking territory.",
  },
  {
    id: "poaching",
    title: "Poaching and hunting",
    text: "Although rarely seen, forest cats can still face pressure from illegal hunting, opportunistic trapping, and wildlife trade threats.",
  },
  {
    id: "research-gap",
    title: "Research gap",
    text: "The Asian Golden Cat receives far less public and scientific attention than larger carnivores, creating conservation blind spots.",
  },
]

const sightings = [
  {
    label: "Forest-dependent",
    text: "The species is strongly associated with healthy forest cover and low-disturbance landscapes.",
  },
  {
    label: "Rarely observed",
    text: "Its elusive behavior means confirmed records are limited and public awareness remains low.",
  },
  {
    label: "Eastern forests",
    text: "Bangladesh’s hill forest regions are considered the most likely strongholds for this species.",
  },
  {
    label: "Indicator species",
    text: "Its presence suggests forest ecosystems still retain enough structure and prey to support sensitive carnivores.",
  },
]

const actions = [
  "Strengthen forest protection in key hill forest landscapes.",
  "Expand camera-trap surveys and ecological monitoring for small wild cats.",
  "Include the Asian Golden Cat in wider conservation planning across eastern Bangladesh.",
  "Reduce habitat fragmentation through better land-use planning and forest connectivity.",
  "Support community-based forest stewardship and anti-poaching efforts.",
  "Increase public awareness about lesser-known wild cats and their ecological importance.",
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        {/* HERO */}
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c542]">
                Rare Forest Predator
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Asian Golden Cat in Bangladesh: A Silent Hunter of the Hill Forests
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                The Asian Golden Cat is one of the most striking yet least seen
                wild felines of South and Southeast Asia. In Bangladesh, it
                represents the hidden richness of the country’s remaining hill
                forests, where survival depends on intact habitat, low
                disturbance, and stronger conservation attention.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f4c542]/25 bg-[#f4c542]/10 px-4 py-2 text-sm text-[#f4c542]">
                  Near Threatened globally
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Forest-dependent species
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Rare and elusive
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/asian-golden-cat.jpg"
                alt="Asian Golden Cat in Bangladesh forest habitat"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="bg-[#11130f] py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold">Key Insights</h2>

            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {keyPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-[#141611] p-5"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f4c542]"></span>
                  <span className="leading-7 text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INTRO + QUICK FACTS */}
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold">A Hidden Cat of Bangladesh’s Forests</h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                The Asian Golden Cat (<em>Catopuma temminckii</em>) is a rare
                wild feline associated with forest ecosystems across parts of
                Asia. In Bangladesh, it is believed to persist mainly in the
                eastern hill forests, where dense vegetation, prey availability,
                and lower levels of human disturbance provide the conditions it
                needs to survive.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                Unlike more famous carnivores, the Asian Golden Cat rarely
                appears in public conversation. That does not make it less
                important. In fact, its rarity and low visibility make it even
                more vulnerable to being overlooked in conservation planning.
                Species that remain hidden are often the easiest to lose without
                warning.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                As a forest predator, the Asian Golden Cat is part of a larger
                ecological network. Protecting it means safeguarding the habitat,
                structure, and biodiversity of Bangladesh’s remaining hill
                forests. Its future is closely tied to whether these forests
                stay connected, functional, and resilient.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
              <h3 className="text-2xl font-bold">Quick Facts</h3>

              <div className="mt-6 space-y-5 text-white/78">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Common Name
                  </p>
                  <p className="mt-2">Asian Golden Cat</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Scientific Name
                  </p>
                  <p className="mt-2">
                    <em>Catopuma temminckii</em>
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Main Habitat
                  </p>
                  <p className="mt-2">Tropical and hill forests</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Likely Strongholds
                  </p>
                  <p className="mt-2">
                    Chittagong Hill Tracts and other eastern forest landscapes
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Conservation Focus
                  </p>
                  <p className="mt-2">
                    Habitat protection, research, and forest connectivity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Why the Asian Golden Cat Matters</h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/72">
              The Asian Golden Cat matters because it depends on landscapes that
              are becoming increasingly fragile. Forest carnivores need more
              than just trees. They need cover, prey, and enough connected space
              to move safely. When such species begin to disappear, it often
              reflects deeper ecological decline across the whole system.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {sightings.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-[#141611] p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f4c542]">
                    {item.label}
                  </p>
                  <p className="mt-4 leading-7 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Major Threats to the Asian Golden Cat
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                The biggest threats facing the Asian Golden Cat in Bangladesh
                are linked to shrinking forest landscapes, increasing
                disturbance, and limited species-specific conservation focus.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {threats.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[24px] border border-white/10 bg-[#141611] p-7"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/72">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-4xl space-y-5 leading-8 text-white/72">
              <p>
                Habitat loss remains the primary challenge. As forests are
                cleared, degraded, or converted to other land uses, the Asian
                Golden Cat loses the dense habitat structure it depends on.
                Species that rely on forest cover tend to be especially
                vulnerable when disturbance becomes permanent.
              </p>

              <p>
                Fragmentation adds another layer of risk. Even when some forest
                remains, broken habitat patches can isolate wildlife
                populations, reduce movement, and expose animals to more human
                activity. Over time, that can weaken the ecological conditions
                needed for survival.
              </p>

              <p>
                Low visibility also creates a conservation problem. Compared with
                larger and more iconic animals, the Asian Golden Cat receives
                less research, less public attention, and often less targeted
                planning. That can delay action until habitat damage has already
                become severe.
              </p>
            </div>
          </div>
        </section>

        {/* CONSERVATION GAP */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h2 className="text-3xl font-bold">
                The Conservation Challenge in Bangladesh
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                The Asian Golden Cat highlights a wider conservation challenge:
                lesser-known species often depend on the same threatened forests
                as more famous wildlife, yet they receive less dedicated
                attention. Without better surveys, ecological monitoring, and
                habitat-focused planning, such species may continue to decline
                quietly.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                Long-term protection will depend on conserving forest blocks,
                reducing fragmentation, and recognizing the importance of small
                and medium-sized predators in Bangladesh’s ecosystems. Protecting
                the Asian Golden Cat is not only about one species. It is also
                about the health of the whole forest community.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                Why urgent action matters
              </p>

              <p className="mt-5 leading-8 text-white/78">
                Rare forest species can decline long before they become widely
                known. By the time they receive major attention, habitat damage
                may already be difficult to reverse.
              </p>

              <p className="mt-5 leading-8 text-white/78">
                Protecting the Asian Golden Cat now means acting before silence
                becomes disappearance.
              </p>
            </div>
          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">What Should Happen Next</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {actions.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-[#141611] p-5"
                >
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f4c542]/15 text-sm font-semibold text-[#f4c542]">
                    ✓
                  </span>
                  <p className="leading-7 text-white/80">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-4xl leading-8 text-white/72">
              <p>
                Stronger forest conservation, more research, and better public
                awareness can all help secure a future for the Asian Golden Cat
                in Bangladesh. As with the marbled cat and other elusive forest
                species, early action is far more effective than late rescue.
              </p>
            </div>
          </div>
        </section>

        {/* CTA / RELATED */}
        <section className="bg-[#11130f] py-16 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold">Explore More</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/68">
              Continue exploring the species, habitats, and conservation stories
              shaping Bangladesh’s wildlife future.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/species/asian-golden-cat"
                className="rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
              >
                Asian Golden Cat Profile →
              </Link>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                Wildlife Threats →
              </Link>

              <Link
                href="/insights/marbled-cat-bangladesh"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                Marbled Cat →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
