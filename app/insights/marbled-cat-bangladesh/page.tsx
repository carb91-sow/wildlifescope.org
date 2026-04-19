import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Marbled Cat Bangladesh | Habitat, Threats & Conservation",
  description:
    "Discover the marbled cat in Bangladesh, its forest habitat, rare sightings, major threats, and why urgent research and conservation are needed to protect this elusive wild feline.",
}

const keyPoints = [
  "The marbled cat is one of the rarest and least understood wild cats in Bangladesh.",
  "It was first officially documented in the country in 2014.",
  "Dense evergreen forests in Sylhet, Chattogram, and the Chittagong Hill Tracts are its key habitat.",
  "Deforestation, fragmentation, roadkill, and poaching threaten its survival.",
  "A major conservation challenge is the lack of reliable scientific data.",
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "The marbled cat depends on dense forest cover, but Bangladesh continues to lose tree cover and natural forest landscapes in the very regions where the species occurs.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Roads, settlements, and agricultural expansion are breaking large forests into isolated patches, reducing safe movement and long-term survival.",
  },
  {
    id: "poaching",
    title: "Poaching and snaring",
    text: "Although not as heavily targeted as larger cats, the marbled cat still faces risks from illegal hunting, indiscriminate snaring, and wildlife trade pressure.",
  },
  {
    id: "roadkill",
    title: "Road collisions",
    text: "As more roads cut through hill forests, vehicle strikes are becoming a real danger, with at least one confirmed roadkill case in Chattogram.",
  },
  {
    id: "research-gap",
    title: "Research gap",
    text: "The lack of field data, monitoring, and species-specific conservation planning leaves the marbled cat vulnerable to decline without detection.",
  },
]

const sightings = [
  {
    year: "2014",
    text: "First documented record in Bangladesh after a rescued kitten was found in Srimangal.",
  },
  {
    year: "2016",
    text: "Camera traps recorded the species in the forests of Bandarban, confirming its presence in deeper hill forest habitat.",
  },
  {
    year: "2024",
    text: "A marbled cat was camera-trapped in Baraiyadhala National Park, adding an important modern record.",
  },
  {
    year: "Recent years",
    text: "A dead marbled cat was found on the Bayezid Link Road in Chattogram, highlighting the growing risk of road mortality.",
  },
]

const actions = [
  "Conduct dedicated ecological surveys across Sylhet, Chattogram, and the Chittagong Hill Tracts.",
  "Include the marbled cat in active regional conservation planning, not only larger cat species.",
  "Strengthen anti-poaching patrols and snare removal in critical forest habitat.",
  "Identify roadkill hotspots and introduce mitigation near high-risk forest roads.",
  "Support Indigenous and community-led forest protection systems such as Village Common Forests.",
  "Allocate funding for data-deficient species research before the next Red List update cycle.",
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#f4c542]">
                Rare Forest Feline
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Marbled Cat in Bangladesh: A Hidden Forest Predator at Risk
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                The marbled cat is one of Bangladesh&apos;s most mysterious wild
                felines. Beautiful, elusive, and rarely documented, it survives
                in shrinking forest habitats where scientific knowledge remains
                dangerously limited.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f4c542]/25 bg-[#f4c542]/10 px-4 py-2 text-sm text-[#f4c542]">
                  Near Threatened globally
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Data Deficient in Bangladesh
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                  Forest-dependent species
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/marbled-cat.jpg"
                alt="Marbled cat in Bangladesh forest habitat"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

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

        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold">A Species Shrouded in Mystery</h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                The marbled cat (<em>Pardofelis marmorata</em>) is among the
                least understood wild cats in Bangladesh. Unlike larger and more
                visible predators, it has remained almost invisible in both
                public awareness and conservation planning. That invisibility is
                part of the problem. The species is not only rare, but also
                understudied, which makes it harder to protect before populations
                decline further.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                In Bangladesh, confirmed records remain extremely limited. Since
                its first documentation in 2014, only a handful of sightings,
                camera-trap records, and mortality incidents have confirmed its
                presence. This means the marbled cat could be more widespread
                than currently known, or it could already be in serious decline.
                Right now, the country simply does not have enough data to say
                with confidence.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                That is why the marbled cat represents more than a single rare
                animal. It symbolizes a wider conservation blind spot: species
                can disappear from landscapes long before science, policy, or
                the public fully notices.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
              <h3 className="text-2xl font-bold">Quick Facts</h3>

              <div className="mt-6 space-y-5 text-white/78">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Local Names
                  </p>
                  <p className="mt-2">Marbel Biral, Chopjukta Biral</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Main Habitat
                  </p>
                  <p className="mt-2">
                    Dense evergreen and hill forests in eastern Bangladesh
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Key Regions
                  </p>
                  <p className="mt-2">
                    Sylhet, Chattogram, and the Chittagong Hill Tracts
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Bangladesh Status
                  </p>
                  <p className="mt-2">Data Deficient</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f4c542]">
                    Global Status
                  </p>
                  <p className="mt-2">Near Threatened</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Why the Marbled Cat Matters</h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/72">
              The marbled cat is strongly tied to healthy forest ecosystems. It
              depends on cover, prey availability, and intact habitat structure,
              which makes it a meaningful indicator of forest condition. If such
              a species can no longer survive in an area, that often signals
              wider ecological degradation affecting many other animals too.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {sightings.map((item) => (
                <div
                  key={item.year}
                  className="rounded-[24px] border border-white/10 bg-[#141611] p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f4c542]">
                    {item.year}
                  </p>
                  <p className="mt-4 leading-7 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Major Threats to the Marbled Cat
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                The threats facing the marbled cat are not always dramatic or
                visible, but they are serious. Forest loss, weak monitoring, and
                limited policy attention together create a quiet conservation
                crisis.
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
                Habitat loss is the primary driver. The species is closely
                associated with intact forest, yet Bangladesh continues to lose
                tree cover in exactly the landscapes where the marbled cat is
                found. In the Chittagong Hill Tracts, forest decline, land-use
                change, and settlement expansion place continuous pressure on
                remaining habitat.
              </p>

              <p>
                Another growing issue is fragmentation. Even where forest still
                exists, broken and isolated habitat patches make movement harder
                and expose rare species to greater risk from people, roads, and
                reduced ecological connectivity. The reported road mortality in
                Chattogram shows how infrastructure expansion can become a direct
                threat for elusive forest wildlife.
              </p>

              <p>
                Perhaps the most overlooked threat is the research gap itself.
                Bangladesh currently lacks a strong research program for many
                data-deficient species, including the marbled cat. Without field
                surveys, population baselines, and habitat mapping, protection
                tends to remain generic and reactive rather than targeted and
                effective.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#11130f] py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h2 className="text-3xl font-bold">
                The Conservation Gap in Bangladesh
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                Although the marbled cat is legally protected, legal protection
                alone is not enough. Enforcement remains limited, field capacity
                is weak, and much of the species&apos; likely habitat exists
                outside protected areas. That means the marbled cat may be
                surviving in landscapes where laws are harder to implement and
                habitat change happens quickly.
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-white/72">
                There is also a policy gap. Existing regional conservation
                efforts have focused more strongly on larger cats, leaving small
                and less visible felines without the same dedicated attention.
                Yet these species share the same forests, face the same habitat
                threats, and need the same urgency before their populations fall
                beyond recovery.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                Why urgent action matters
              </p>

              <p className="mt-5 leading-8 text-white/78">
                A species that is rarely seen can easily be overlooked in policy,
                funding, and public awareness. But rarity does not reduce
                importance. It increases urgency.
              </p>

              <p className="mt-5 leading-8 text-white/78">
                If research is delayed for years, Bangladesh may reach the next
                Red List cycle still not knowing whether the marbled cat is
                stable, declining, or already in severe trouble.
              </p>
            </div>
          </div>
        </section>

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
                Protecting the marbled cat will require more than symbolic
                protection. It needs real ecological surveys, habitat
                safeguarding, stronger enforcement, and inclusion in regional
                conservation strategies. It also needs public attention. Species
                that remain hidden are often the easiest to lose.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#11130f] py-16 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold">Explore More</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/68">
              Continue exploring the species, habitats, and conservation stories
              shaping Bangladesh&apos;s wildlife future.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/species/marbled-cat"
                className="rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
              >
                Marbled Cat Profile →
              </Link>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                Wildlife Threats →
              </Link>

              <Link
                href="/insights/clouded-leopard-bangladesh"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                Clouded Leopard →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
