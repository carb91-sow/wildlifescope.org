import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Indian Leopard Bangladesh | Sightings, Habitat, Threats & Conservation",
  description:
    "Explore Indian Leopard sightings in Bangladesh, including recent records from the Chittagong Hill Tracts, along with habitat, threats, and conservation priorities.",
}

const keyPoints = [
  "The Indian Leopard is one of the most powerful and adaptable wild cats in Bangladesh.",
  "Recent camera-trap records confirm that leopards still survive in parts of the country.",
  "Habitat loss, fragmentation, and human conflict threaten long-term survival.",
  "As a top predator, the leopard plays an important role in ecological balance.",
  "Protecting leopards also protects forests, prey species, and wider biodiversity.",
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Deforestation, land conversion, and degradation of forest ecosystems continue to reduce the space leopards need for movement, shelter, and hunting.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Roads, settlements, and expanding human activity break continuous habitat into smaller patches, increasing pressure on already vulnerable leopard populations.",
  },
  {
    id: "human-conflict",
    title: "Human-leopard conflict",
    text: "As leopards lose habitat and move closer to settlements, conflict with people can increase, especially where livestock or fear-driven retaliation is involved.",
  },
  {
    id: "poaching",
    title: "Poaching and illegal killing",
    text: "Leopards remain at risk from illegal hunting, trade, and direct persecution in areas where awareness and law enforcement are weak.",
  },
  {
    id: "prey-decline",
    title: "Declining prey base",
    text: "A reduction in natural prey can push leopards into more difficult landscapes, increasing ecological stress and the likelihood of conflict.",
  },
]

const highlights = [
  {
    label: "Top predator",
    text: "The Indian Leopard helps regulate prey populations and supports ecological balance in forest ecosystems.",
  },
  {
    label: "Highly adaptable",
    text: "Compared with some other big cats, leopards can survive in a wider range of habitats, though they still depend on cover and prey.",
  },
  {
    label: "Forest strongholds",
    text: "Bangladesh’s remaining eastern and hilly forest regions are among the most important landscapes for leopard survival.",
  },
  {
    label: "Indicator of ecosystem health",
    text: "The presence of leopards often signals that a landscape still supports enough habitat structure and wildlife to sustain top carnivores.",
  },
]

const bangladeshSightings = [
  {
    year: "2025",
    title: "Camera-trap confirmation in the Chittagong Hill Tracts",
    text: "Camera traps photographed a leopard in the Chittagong Hill Tracts, giving conservationists an important modern confirmation that leopards still survive in Bangladesh’s southeastern forests.",
  },
  {
    year: "2025",
    title: "Sangu-Matamuhuri Reserve Forest record",
    text: "Public reporting described the image as the first confirmed leopard sighting in the Sangu-Matamuhuri Reserve Forest in nearly a decade, highlighting the importance of this forest landscape.",
  },
  {
    year: "Ongoing pattern",
    title: "Records remain scattered and rare",
    text: "Reviews and conservation reporting suggest leopard records in Bangladesh remain sparse, with occurrences linked to forested and border-adjacent landscapes rather than widespread stable populations.",
  },
  {
    year: "Conservation signal",
    title: "Sightings do not mean security",
    text: "A modern sighting is encouraging, but it does not mean the species is safe. Rare records often underline how little habitat remains and how urgently those landscapes need protection.",
  },
]

const actions = [
  "Protect remaining forest landscapes and prevent further habitat degradation.",
  "Improve habitat connectivity between important leopard areas.",
  "Strengthen anti-poaching enforcement and wildlife crime monitoring.",
  "Reduce conflict through awareness, livestock protection, and rapid response systems.",
  "Support long-term monitoring of leopard populations and prey abundance.",
  "Integrate leopard conservation into broader landscape and forest management planning.",
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
                Powerful Forest Predator
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Indian Leopard in Bangladesh: A Powerful Predator Under Pressure
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                The Indian Leopard is one of Bangladesh&apos;s most iconic wild
                carnivores. Strong, adaptable, and elusive, it represents the
                resilience of the country&apos;s remaining forests while also
                highlighting the growing pressure placed on top predators by
                habitat loss and human expansion.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f4c542]/25 bg-[#f4c542]/10 px-4 py-2 text-sm text-[#f4c542]">
                  Top predator
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Forest-dependent
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  High conservation value
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/indian-leopard.jpg"
                alt="Indian Leopard in Bangladesh forest habitat"
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
              <h2 className="text-3xl font-bold">
                A Predator of Strength, Balance, and Survival
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                The Indian Leopard is one of the most important carnivores in
                South Asian ecosystems. In Bangladesh, it symbolizes both the
                richness of the country&apos;s remaining forests and the
                vulnerability of species that require space, cover, and prey to
                survive. Though more adaptable than some other large cats, the
                leopard still depends on stable habitat and low levels of
                disturbance.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                Leopards are powerful and versatile hunters. Their presence
                contributes to ecological balance by helping regulate prey
                populations and maintaining the structure of food webs. When top
                predators disappear from a landscape, the effects are often felt
                across many other species and habitats.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                In Bangladesh, protecting the Indian Leopard means conserving
                more than one species. It means defending entire forest
                landscapes that also support deer, monkeys, birds, reptiles, and
                countless smaller forms of life. The leopard stands near the top
                of that system, and its survival reflects the wider condition of
                the ecosystem below it.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
              <h3 className="text-2xl font-bold">Quick Facts</h3>

              <div className="mt-6 space-y-5 text-white/78">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Common Name
                  </p>
                  <p className="mt-2">Indian Leopard</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Scientific Name
                  </p>
                  <p className="mt-2">
                    <em>Panthera pardus fusca</em>
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Main Habitat
                  </p>
                  <p className="mt-2">
                    Forests, hill forests, and wild landscapes with cover
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Ecological Role
                  </p>
                  <p className="mt-2">
                    Top predator helping maintain ecological balance
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Main Challenge
                  </p>
                  <p className="mt-2">
                    Habitat pressure and increasing human conflict
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Why the Indian Leopard Matters</h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/72">
              The Indian Leopard matters because it holds an important place in
              the food chain. As a top predator, it influences the abundance and
              behavior of prey species, which in turn shapes vegetation, habitat
              use, and ecological interactions across the forest landscape.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
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

        {/* PRESENT SIGHTINGS IN BANGLADESH */}
        <section className="bg-[#0f110d] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Present Sightings in Bangladesh
              </h2>

              <p className="mt-6 leading-8 text-white/72">
                Leopard records in Bangladesh are rare, which is why every
                confirmed sighting carries major conservation value. Recent
                camera-trap photographs from the Chittagong Hill Tracts
                provided an important reminder that the species still persists
                in the country, even if in very small and fragile numbers.
              </p>

              <p className="mt-6 leading-8 text-white/72">
                Reports in 2025 described a leopard photographed in the
                Chittagong Hill Tracts and linked that confirmation to the
                Sangu-Matamuhuri Reserve Forest area. Some coverage described it
                as the first confirmed record in that forest in nearly ten
                years. Other conservation reporting has noted that leopard
                records in Bangladesh remain scattered, with additional concern
                around northern and northwestern border districts where conflict
                and survival pressures are also part of the story.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {bangladeshSightings.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="rounded-[24px] border border-white/10 bg-[#141611] p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f4c542]">
                    {item.year}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-4xl space-y-5 leading-8 text-white/72">
              <p>
                These sightings matter because they show that Bangladesh still
                holds habitats capable of supporting large carnivores. But they
                also show how narrow that survival margin may be. A leopard
                appearing on camera after years without confirmation is not just
                exciting news — it is a warning that remaining forest
                strongholds must be protected before they shrink further.
              </p>

              <p>
                In practical terms, present sightings should lead to more
                monitoring, more habitat protection, and stronger conflict
                prevention. When records are this rare, every confirmed presence
                should help guide conservation priorities on the ground.
              </p>
            </div>
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Major Threats to the Indian Leopard
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                Although leopards are adaptable, adaptation has limits. In
                Bangladesh, the species faces mounting pressure from habitat
                change, shrinking wild space, and closer contact with people.
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
                Habitat loss is the biggest long-term threat. As forests are
                cleared, degraded, or converted for other uses, leopards lose
                essential cover and hunting ground. Even a species known for
                adaptability cannot thrive without enough wild space.
              </p>

              <p>
                Fragmentation makes the problem worse. When forests are broken
                into smaller disconnected patches, movement becomes harder and
                encounters with people become more likely. This can increase
                conflict, retaliatory killing, and stress on already limited
                leopard populations.
              </p>

              <p>
                The decline of natural prey also affects survival. If prey
                becomes scarce, leopards may move into riskier landscapes in
                search of food. That can deepen conflict and reduce the
                long-term stability of populations across fragmented habitats.
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
                The Indian Leopard faces a conservation challenge shared by many
                large carnivores: it needs broad, connected, functioning
                landscapes, but those landscapes are becoming smaller and more
                disturbed. Effective conservation therefore cannot focus only on
                individual animals. It must protect habitat systems at the
                landscape scale.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                Long-term survival depends on forest protection, better
                ecological monitoring, reduced conflict, and stronger law
                enforcement. It also depends on recognizing that predators are
                not separate from ecosystems. They are part of what keeps those
                ecosystems healthy.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                Why urgent action matters
              </p>

              <p className="mt-5 leading-8 text-white/78">
                When top predators decline, the damage is rarely isolated. It
                can ripple across prey populations, vegetation patterns, and the
                wider ecological balance of a landscape.
              </p>

              <p className="mt-5 leading-8 text-white/78">
                Protecting the Indian Leopard now means protecting the health,
                resilience, and biodiversity of Bangladesh&apos;s remaining wild
                forests.
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
                With stronger habitat protection, better monitoring, and
                practical conflict reduction, Bangladesh can improve the future
                of the Indian Leopard. Conserving this predator is ultimately
                about keeping forest ecosystems alive, connected, and capable of
                supporting wildlife for generations to come.
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
              shaping Bangladesh&apos;s wildlife future.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/species/indian-leopard"
                className="rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
              >
                Indian Leopard Profile →
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
