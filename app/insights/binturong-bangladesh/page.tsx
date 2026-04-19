import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Binturong Bangladesh | Latest Sighting, Ecological Niche & Conservation",
  description:
    "Explore the Binturong in Bangladesh, including the latest publicly reported sighting, its ecological niche as an arboreal seed disperser, major threats, and conservation priorities.",
}

const keyPoints = [
  "The Binturong is a rare, tree-dwelling mammal found in Bangladesh’s forests.",
  "The latest publicly reported Bangladesh evidence is camera-trap footage from the Hill Tracts.",
  "Binturongs are important seed dispersers, especially for figs.",
  "They depend heavily on connected forest canopy and tree cover.",
  "Deforestation and habitat fragmentation are the biggest threats to their survival.",
]

const highlights = [
  {
    label: "Arboreal mammal",
    text: "The Binturong spends much of its life in trees and is strongly adapted to canopy movement.",
  },
  {
    label: "Fig specialist role",
    text: "Figs are a major food source, making the species especially important for seed dispersal in tropical forests.",
  },
  {
    label: "Nocturnal and elusive",
    text: "Because it is hard to detect, the species can persist unnoticed and still remain underprotected.",
  },
  {
    label: "Forest-health indicator",
    text: "Its presence often suggests that a landscape still retains enough canopy structure to support sensitive mammals.",
  },
]

const latestBangladeshInfo = [
  {
    label: "Latest public record",
    title: "Hill Tracts camera-trap footage",
    text: "Public reporting in Bangladesh highlighted Creative Conservation Alliance camera-trap footage from the Hill Tracts showing a Binturong, including unusual ground movement behavior.",
  },
  {
    label: "What it means",
    title: "Evidence of persistence, not security",
    text: "The footage is encouraging because it confirms persistence in Bangladesh, but a rare appearance should not be mistaken for population stability.",
  },
  {
    label: "Why records are scarce",
    title: "Low detectability",
    text: "The species is nocturnal, arboreal, and secretive, which makes recent records difficult to collect and easy to underestimate.",
  },
  {
    label: "Best interpretation",
    title: "Use cautious wording",
    text: "It is safer to describe this as the latest publicly reported Bangladesh evidence rather than claim a live or continuously updated sighting record.",
  },
]

const nichePoints = [
  {
    title: "Canopy-dependent frugivore-omnivore",
    text: "Binturongs use forest canopy as their main movement space while feeding on fruits, especially figs, along with other plant and animal matter.",
  },
  {
    title: "Seed dispersal specialist value",
    text: "By consuming fruit and passing seeds through the gut, they help regenerate forest vegetation and support long-term ecosystem resilience.",
  },
  {
    title: "Edge-sensitive forest mammal",
    text: "Research suggests the long-term conservation value of seed-dispersing mammals like binturongs becomes especially important in fragmented and degraded forests.",
  },
  {
    title: "Bridge between species and forest recovery",
    text: "Their ecological niche links wildlife survival directly to forest restoration, because losing binturongs can weaken natural seed movement across landscapes.",
  },
]

const threats = [
  {
    id: "deforestation",
    title: "Deforestation",
    text: "Clearing forests removes essential habitat and breaks the canopy routes Binturongs rely on for feeding, resting, and movement.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "When forests are divided into smaller patches, Binturongs struggle to move safely between trees and become more exposed on the ground.",
  },
  {
    id: "hunting",
    title: "Hunting and capture",
    text: "In some areas, Binturongs face pressure from opportunistic hunting or capture, adding stress to already vulnerable populations.",
  },
  {
    id: "low-awareness",
    title: "Low awareness",
    text: "Because the species is not widely known, it often receives less conservation attention than larger mammals despite its ecological importance.",
  },
]

const actions = [
  "Protect remaining forest ecosystems and canopy connectivity in Bangladesh.",
  "Support targeted monitoring to improve Bangladesh-specific records of the species.",
  "Treat the latest Bangladesh sightings as a signal for stronger habitat protection, not proof that populations are secure.",
  "Increase awareness about the Binturong’s role in seed dispersal and forest regeneration.",
  "Strengthen protection against hunting, capture, and habitat degradation.",
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
                Arboreal Seed Disperser
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Binturong in Bangladesh: Latest Evidence, Ecological Niche, and Why It Matters
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                The Binturong is one of Bangladesh&apos;s most unusual forest
                mammals. Elusive, mostly arboreal, and ecologically important,
                it helps forests regenerate while depending on the very canopy
                systems that are under pressure across the region.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f4c542]/25 bg-[#f4c542]/10 px-4 py-2 text-sm text-[#f4c542]">
                  Tree-dwelling mammal
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Fig seed disperser
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Rare Bangladesh record
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/binturong.jpg"
                alt="Binturong in Bangladesh forest habitat"
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

        {/* INTRO */}
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold">
                A Hidden Forest Mammal with Outsized Ecological Value
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                The Binturong is often overlooked because it is difficult to see,
                active at low-light hours, and spends much of its time in the
                canopy. Yet ecologically it matters far more than its low public
                profile suggests. Across tropical forests, binturongs are closely
                tied to fruit resources, especially figs, and their movement
                through the canopy helps disperse seeds across the landscape.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                That makes the species important not only as wildlife, but as a
                contributor to forest regeneration. Where tree cover remains
                connected and fruiting resources are available, Binturongs can
                help maintain ecological processes that support wider biodiversity.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
              <h3 className="text-2xl font-bold">Quick Facts</h3>

              <div className="mt-6 space-y-5 text-white/78">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Common Name
                  </p>
                  <p className="mt-2">Binturong</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Scientific Name
                  </p>
                  <p className="mt-2">
                    <em>Arctictis binturong</em>
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Main Niche
                  </p>
                  <p className="mt-2">Arboreal omnivore and forest seed disperser</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Key Food Resource
                  </p>
                  <p className="mt-2">Figs and other fruit</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Bangladesh Takeaway
                  </p>
                  <p className="mt-2">Rarely reported, but ecologically important</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Why the Binturong Matters</h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/72">
              The Binturong matters because forests do not persist through trees
              alone. They also depend on animals that move seeds, link habitat
              patches, and support natural regeneration. In that sense, the
              Binturong is part of the machinery of forest resilience.
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

        {/* LATEST BANGLADESH EVIDENCE */}
        <section className="bg-[#0f110d] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Latest Publicly Reported Bangladesh Evidence
              </h2>

              <p className="mt-6 leading-8 text-white/72">
                Publicly available Bangladesh reporting points to camera-trap
                footage from the Hill Tracts, highlighted by The Business
                Standard, as a notable modern record of the species. That report
                referenced footage shared by Creative Conservation Alliance and
                described a rare behavioral view of a Binturong moving on the
                ground. That makes it useful as the latest broadly visible public
                evidence, even though it should not be treated as a live tracking
                feed or a full national population update.
              </p>

              <p className="mt-6 leading-8 text-white/72">
                The most careful way to present this on your site is to describe
                it as the latest publicly reported Bangladesh evidence rather
                than as real-time monitoring. That keeps the page accurate while
                still giving readers a current and meaningful update.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {latestBangladeshInfo.map((item) => (
                <div
                  key={`${item.label}-${item.title}`}
                  className="rounded-[24px] border border-white/10 bg-[#141611] p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f4c542]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOLOGICAL NICHE */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Ecological Niche: What the Binturong Does in a Forest
              </h2>

              <p className="mt-6 leading-8 text-white/72">
                The Binturong’s ecological niche is not just “living in trees.”
                It is better understood as a canopy-linked omnivore with major
                seed-dispersal value. Research has repeatedly emphasized its role
                in moving fig seeds, which is especially important because figs
                are year-round food resources for many forest animals and help
                stabilize food webs.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {nichePoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-[#141611] p-7"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/72">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREATS */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">Major Threats</h2>
              <p className="mt-6 leading-8 text-white/72">
                For a canopy-dependent species, even moderate habitat damage can
                have outsized consequences. The Binturong is especially
                vulnerable when connected tree cover disappears.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          </div>
        </section>

        {/* ACTION */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">What Needs to Happen Next</h2>

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
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#11130f] py-16 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold">Explore More</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/species/binturong"
                className="rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
              >
                Binturong Profile →
              </Link>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                Wildlife Threats →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
