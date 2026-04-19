import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Asian Palm Civet Bangladesh | Habitat, Threats & Conservation",
  description:
    "Discover the Asian Palm Civet in Bangladesh, its forest and rural habitat, ecological role, major threats, and why protecting connected habitats matters for its survival.",
}

const keyPoints = [
  "The Asian Palm Civet is a shy, nocturnal mammal found in forests, village edges, and mixed landscapes.",
  "It plays an important ecological role by dispersing seeds and helping forest regeneration.",
  "Habitat loss, fragmentation, and persecution threaten its long-term survival.",
  "Because it is active at night, the species is often overlooked in public awareness and conservation planning.",
  "Protecting civets also supports biodiversity in both forest and human-dominated landscapes.",
]

const highlights = [
  {
    label: "Nocturnal mammal",
    text: "The Asian Palm Civet is mostly active at night, making it far less visible than many daytime wildlife species.",
  },
  {
    label: "Seed disperser",
    text: "By feeding on fruit and moving across landscapes, it helps disperse seeds and support natural regeneration.",
  },
  {
    label: "Adaptable but vulnerable",
    text: "It can survive in mixed habitats, but adaptation does not protect it from habitat destruction and conflict.",
  },
  {
    label: "Quiet ecological value",
    text: "The species contributes to ecosystem health in ways many people never notice, especially through diet and movement.",
  },
]

const bangladeshContext = [
  {
    year: "Forests and village edges",
    title: "Seen across mixed landscapes",
    text: "In Bangladesh, the Asian Palm Civet is associated with forests, secondary vegetation, orchards, and rural edges where tree cover and food sources remain available.",
  },
  {
    year: "Mostly nocturnal",
    title: "Low visibility in public awareness",
    text: "Because it is active mainly at night, many people are unfamiliar with its role in ecosystems, even when it lives close to human settlements.",
  },
  {
    year: "Human proximity",
    title: "Increasing contact with people",
    text: "As habitats shrink and become more fragmented, civets are more likely to move through farms, homesteads, and peri-urban areas.",
  },
  {
    year: "Conservation signal",
    title: "A species often overlooked",
    text: "The Asian Palm Civet reminds us that important wildlife conservation is not only about famous predators, but also about lesser-known species that support ecosystem function.",
  },
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Clearing forests, removing tree cover, and converting land for agriculture or development reduce the shelter and food sources the Asian Palm Civet depends on.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "When tree cover is broken into smaller patches, civets face more difficulty moving safely between feeding and resting areas.",
  },
  {
    id: "persecution",
    title: "Persecution and misunderstanding",
    text: "Because civets may enter orchards, rooftops, or village areas, they are sometimes treated as pests rather than recognized as native wildlife.",
  },
  {
    id: "road-risk",
    title: "Road mortality",
    text: "As roads expand through forest and rural landscapes, nocturnal mammals like civets face greater risk from vehicle collisions.",
  },
  {
    id: "weak-awareness",
    title: "Low conservation attention",
    text: "The Asian Palm Civet receives far less attention than larger mammals, which can leave threats unaddressed until populations decline.",
  },
]

const actions = [
  "Protect remaining tree cover, forest edges, and connected habitats across mixed landscapes.",
  "Reduce unnecessary killing through public awareness about the civet’s ecological role.",
  "Support surveys and night-time wildlife monitoring to better understand distribution and abundance.",
  "Improve habitat connectivity between forest fragments, orchards, and rural tree cover.",
  "Reduce road mortality in wildlife-sensitive areas through better planning and mitigation.",
  "Integrate lesser-known mammals like civets into broader wildlife conservation strategies.",
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
                Nocturnal Forest Mammal
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Asian Palm Civet in Bangladesh: A Quiet Night Wanderer Under Pressure
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                The Asian Palm Civet is one of Bangladesh&apos;s lesser-known
                wild mammals. Nocturnal, adaptable, and ecologically valuable,
                it moves through forests, orchards, and rural landscapes while
                helping shape the health of ecosystems in ways most people never
                see.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f4c542]/25 bg-[#f4c542]/10 px-4 py-2 text-sm text-[#f4c542]">
                  Nocturnal species
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Seed disperser
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Mixed-habitat mammal
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/asian-palm-civet.jpg"
                alt="Asian Palm Civet in Bangladesh habitat"
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
                A Hidden Mammal with an Important Ecological Role
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                The Asian Palm Civet is a small carnivorous mammal known for its
                night-time activity, climbing ability, and flexible diet. In
                Bangladesh, it can be associated with forests, tree-covered
                landscapes, orchards, and village edges where food and shelter
                remain available. Because it is usually active after dark, it is
                often present without being widely noticed.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                Despite its quiet nature, the species contributes to ecosystem
                health in meaningful ways. By feeding on fruit as well as small
                animals and insects, it participates in seed dispersal and helps
                maintain ecological processes across a variety of habitats.
                Wildlife like the Asian Palm Civet often supports biodiversity
                not through dramatic visibility, but through steady, everyday
                ecological function.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                That makes the civet important for conservation. Protecting it
                is not only about preserving one mammal. It is also about
                protecting the network of trees, forest edges, and connected
                habitats that many lesser-known species need to survive.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
              <h3 className="text-2xl font-bold">Quick Facts</h3>

              <div className="mt-6 space-y-5 text-white/78">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Common Name
                  </p>
                  <p className="mt-2">Asian Palm Civet</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Scientific Name
                  </p>
                  <p className="mt-2">
                    <em>Paradoxurus hermaphroditus</em>
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Main Habitat
                  </p>
                  <p className="mt-2">
                    Forests, orchards, village edges, and mixed tree-covered landscapes
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Activity Pattern
                  </p>
                  <p className="mt-2">Mostly nocturnal</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Ecological Role
                  </p>
                  <p className="mt-2">Seed dispersal and food-web support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Why the Asian Palm Civet Matters</h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/72">
              The Asian Palm Civet matters because ecosystems depend not only on
              famous predators or large mammals, but also on smaller species
              that carry out everyday ecological work. Civets help link
              habitats, disperse seeds, and support natural regeneration in
              areas where fruiting trees and mixed vegetation are present.
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

        {/* BANGLADESH CONTEXT */}
        <section className="bg-[#0f110d] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Bangladesh Context and Present-Day Pressure
              </h2>

              <p className="mt-6 leading-8 text-white/72">
                In Bangladesh, the Asian Palm Civet survives in a landscape that
                is changing quickly. Tree cover is reduced in many areas, forest
                edges are under pressure, and wildlife that can live near human
                settlements often faces both opportunity and risk. The civet’s
                adaptability helps it persist, but it does not remove the
                threats created by shrinking habitat and misunderstanding.
              </p>

              <p className="mt-6 leading-8 text-white/72">
                Because the species is active mainly at night, it often remains
                outside mainstream wildlife awareness. That low visibility can
                weaken conservation attention, even though civets still play an
                important role in ecosystem function across forested and
                semi-rural landscapes.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {bangladeshContext.map((item) => (
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
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Major Threats to the Asian Palm Civet
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                The Asian Palm Civet faces a quieter form of conservation risk
                than more famous wildlife. Its threats are often linked to
                everyday landscape change, reduced tree cover, and weak public
                recognition of its ecological value.
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
                Habitat loss is the most consistent threat. When forests are
                cleared, orchards are removed, or tree cover disappears from
                rural landscapes, civets lose both food sources and safe resting
                places. These changes may look small when viewed individually,
                but across a landscape they can steadily erode survival.
              </p>

              <p>
                Fragmentation compounds the problem by forcing civets to move
                across more exposed routes between feeding and shelter sites.
                This increases risk from roads, dogs, conflict with people, and
                general disturbance. Species that move mostly at night are
                especially vulnerable when safe cover is broken up.
              </p>

              <p>
                Another major challenge is misunderstanding. When civets appear
                in homes, fruit trees, or rooftops, they may be treated as
                nuisances rather than as part of Bangladesh’s native wildlife.
                Without stronger public awareness, such encounters can easily
                become harmful for the animal.
              </p>
            </div>
          </div>
        </section>

        {/* CONSERVATION CHALLENGE */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h2 className="text-3xl font-bold">
                The Conservation Challenge in Bangladesh
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                The Asian Palm Civet shows why conservation must go beyond
                headline species. Many important animals survive in fragmented,
                mixed, and human-influenced habitats where small changes can
                have big cumulative effects. Protecting these species requires a
                broader understanding of landscape health.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                Long-term survival depends on keeping tree cover connected,
                reducing unnecessary killing, and making sure lesser-known
                mammals are included in wildlife monitoring and habitat planning.
                If species like the civet are ignored, biodiversity can decline
                quietly without drawing much attention.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                Why urgent action matters
              </p>

              <p className="mt-5 leading-8 text-white/78">
                Nocturnal species are often overlooked because people rarely see
                them. But invisibility should never be mistaken for security.
              </p>

              <p className="mt-5 leading-8 text-white/78">
                Protecting the Asian Palm Civet now means safeguarding the small
                ecological processes that help forests, orchards, and connected
                habitats remain alive and resilient.
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
                With better awareness, stronger habitat protection, and more
                attention to lesser-known mammals, Bangladesh can improve the
                future of the Asian Palm Civet. Conserving this species means
                protecting the connected living landscapes that support both
                wildlife and ecological resilience.
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
                href="/species/asian-palm-civet"
                className="rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
              >
                Asian Palm Civet Profile →
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
