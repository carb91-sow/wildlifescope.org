import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Major Threats to Wildlife in Bangladesh | Causes, Impact & Solutions",
  description:
    "Explore the major threats to wildlife in Bangladesh, including habitat destruction, climate change, human-wildlife conflict, pollution, poaching, and wetland loss.",
  alternates: {
    canonical: "/insights/threats-to-wildlife-bangladesh",
  },
  openGraph: {
    title: "Major Threats to Wildlife in Bangladesh",
    description:
      "A complete guide to the biggest threats facing wildlife in Bangladesh and the actions needed to protect endangered species.",
    url: "/insights/threats-to-wildlife-bangladesh",
    images: [
      {
        url: "/images/bengal-tiger.jpg",
        width: 1200,
        height: 630,
        alt: "Major threats to wildlife in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Major Threats to Wildlife in Bangladesh",
    description:
      "Learn about the biggest conservation challenges facing wildlife in Bangladesh.",
    images: ["/images/bengal-tiger.jpg"],
  },
}

const threats = [
  {
    title: "Habitat Destruction",
    severity: "High",
    description:
      "Habitat destruction is one of the greatest threats to wildlife in Bangladesh. Forest clearing, urban expansion, road development, and agricultural pressure are shrinking the natural homes of many species.",
    impacts: [
      "Loss of forest cover and breeding areas",
      "Fragmentation of migration routes",
      "Reduced food sources for wildlife",
      "Higher risk of human-animal conflict",
    ],
  },
  {
    title: "Climate Change",
    severity: "High",
    description:
      "Climate change is putting increasing pressure on ecosystems across Bangladesh. Rising sea levels, salinity intrusion, floods, and cyclones are affecting sensitive habitats, especially the Sundarbans.",
    impacts: [
      "Increased salinity in coastal ecosystems",
      "Damage to mangrove and wetland habitats",
      "Disruption of food chains",
      "Greater vulnerability for already endangered species",
    ],
  },
  {
    title: "Human-Wildlife Conflict",
    severity: "High",
    description:
      "As natural habitats become smaller, wildlife is forced into closer contact with people. This often leads to conflict involving elephants, tigers, and other species that enter human settlements in search of food or movement routes.",
    impacts: [
      "Injury or death for both people and animals",
      "Retaliatory killing of wildlife",
      "Disruption of wildlife movement corridors",
      "Fear and resistance to conservation efforts",
    ],
  },
  {
    title: "Water Pollution",
    severity: "High",
    description:
      "River and wetland pollution caused by industrial discharge, plastic waste, and agricultural runoff threatens aquatic biodiversity in Bangladesh. Freshwater species are especially vulnerable to declining water quality.",
    impacts: [
      "Harm to dolphins, fish, and river reptiles",
      "Decline in aquatic food sources",
      "Toxic contamination of habitats",
      "Reduced ecosystem resilience",
    ],
  },
  {
    title: "Illegal Hunting and Poaching",
    severity: "Medium",
    description:
      "Illegal hunting and poaching continue to threaten rare and vulnerable wildlife. Weak enforcement, illegal trade, and habitat access make some species more vulnerable to targeted killing.",
    impacts: [
      "Population decline of already rare species",
      "Loss of ecological balance",
      "Disruption of breeding populations",
      "Reduced long-term survival chances",
    ],
  },
  {
    title: "Wetland Loss",
    severity: "High",
    description:
      "Wetlands in Bangladesh are under growing pressure from land conversion, pollution, and unsustainable development. These ecosystems are essential for many birds, fish, mammals, and amphibians.",
    impacts: [
      "Loss of habitat for wetland-dependent species",
      "Declining biodiversity",
      "Damage to freshwater food webs",
      "Less natural flood protection",
    ],
  },
]

const relatedSpecies = [
  {
    name: "Royal Bengal Tiger",
    href: "/species/bengal-tiger",
    threat: "Habitat loss and climate change in the Sundarbans",
  },
  {
    name: "Ganges River Dolphin",
    href: "/species/ganges-dolphin",
    threat: "River pollution and ecosystem degradation",
  },
  {
    name: "Asian Elephant",
    href: "/species/asian-elephant",
    threat: "Habitat fragmentation and human-elephant conflict",
  },
  {
    name: "Fishing Cat",
    href: "/species/fishing-cat",
    threat: "Wetland destruction and pollution",
  },
]

function SeverityBadge({ severity }: { severity: string }) {
  const styles =
    severity === "High"
      ? "border-red-400/30 bg-red-400/10 text-red-200"
      : "border-yellow-400/30 bg-yellow-400/10 text-yellow-200"

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${styles}`}
    >
      {severity} Severity
    </span>
  )
}

export default function ThreatsToWildlifeBangladeshPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Major Threats to Wildlife in Bangladesh",
    description:
      "A complete guide to the major threats facing wildlife in Bangladesh, their impact, and possible solutions.",
    image: ["https://www.yourdomain.com/images/bengal-tiger.jpg"],
    author: {
      "@type": "Organization",
      name: "Wildlife NGO Bangladesh",
    },
    publisher: {
      "@type": "Organization",
      name: "Wildlife NGO Bangladesh",
      logo: {
        "@type": "ImageObject",
        url: "https://www.yourdomain.com/logo.png",
      },
    },
    mainEntityOfPage:
      "https://www.yourdomain.com/insights/threats-to-wildlife-bangladesh",
  }

  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d09]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,197,66,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#f4c542]">
              Conservation Insight
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Major Threats to Wildlife in Bangladesh
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              Bangladesh is home to extraordinary forests, rivers, wetlands, and
              mangroves. But many of its most iconic species now face growing
              pressure from habitat destruction, climate change, pollution, and
              human activity. Understanding these threats is essential for
              protecting biodiversity and building a sustainable future.
            </p>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
              <div className="relative aspect-[16/8]">
                <Image
                  src="/images/bengal-tiger.jpg"
                  alt="Wildlife conservation in Bangladesh"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11130f] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Main Focus
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Wildlife conservation in Bangladesh
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Key Ecosystems
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Mangroves, rivers, wetlands, forests
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Core Message
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Protecting wildlife means protecting ecosystems
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b0d09] py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_320px] lg:px-8">
            <article className="min-w-0">
              <div className="max-w-none">
                <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                  Why wildlife in Bangladesh is under pressure
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  Bangladesh supports remarkable biodiversity across a wide range
                  of ecosystems. From the Sundarbans to freshwater rivers and
                  hill forests, these habitats are home to endangered and
                  threatened species that play important ecological roles.
                  However, as natural systems face growing stress, wildlife
                  survival becomes more difficult.
                </p>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  The most serious threats are often interconnected. Habitat
                  destruction can increase human-wildlife conflict. Climate
                  change can intensify stress on already damaged ecosystems.
                  Pollution can weaken species that are already under pressure
                  from shrinking habitat. That is why wildlife conservation in
                  Bangladesh requires both awareness and long-term action.
                </p>

                <h2 className="mt-14 font-serif text-3xl font-bold text-white md:text-4xl">
                  The major threats to wildlife in Bangladesh
                </h2>

                <div className="mt-10 space-y-8">
                  {threats.map((item) => {
                    const sectionId = item.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "")

                    return (
                      <section
                        key={item.title}
                        id={sectionId}
                        className="scroll-mt-28 rounded-[28px] border border-white/10 bg-[#141611] p-8"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-serif text-2xl font-bold text-white">
                            {item.title}
                          </h3>
                          <SeverityBadge severity={item.severity} />
                        </div>

                        <p className="mt-5 text-base leading-8 text-white/75">
                          {item.description}
                        </p>

                        <div className="mt-6">
                          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f4c542]">
                            Key impacts
                          </p>
                          <ul className="mt-4 space-y-3 text-white/72">
                            {item.impacts.map((impact) => (
                              <li key={impact} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-[#f4c542]" />
                                <span className="leading-7">{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </section>
                    )
                  })}
                </div>

                <h2 className="mt-16 font-serif text-3xl font-bold text-white md:text-4xl">
                  Real examples from endangered species in Bangladesh
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  These threats are not abstract. They directly affect species
                  across Bangladesh. The Royal Bengal Tiger faces habitat change
                  and climate-related stress in the Sundarbans. The Ganges River
                  Dolphin is threatened by water pollution and degradation of
                  freshwater ecosystems. Asian Elephants face shrinking habitat
                  and growing conflict with people as movement routes disappear.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {relatedSpecies.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#f4c542]/35"
                    >
                      <p className="font-serif text-xl font-bold text-white">
                        {item.name}
                      </p>
                      <p className="mt-3 leading-7 text-white/70">
                        {item.threat}
                      </p>
                      <span className="mt-4 inline-flex text-sm font-medium text-[#f4c542]">
                        Read species profile →
                      </span>
                    </Link>
                  ))}
                </div>

                <h2 className="mt-16 font-serif text-3xl font-bold text-white md:text-4xl">
                  Why this matters
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  Wildlife is essential to ecological balance. Predators help
                  regulate food chains. Wetland species support healthy aquatic
                  systems. Forest species contribute to biodiversity and habitat
                  resilience. When wildlife declines, the health of the wider
                  ecosystem also weakens.
                </p>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  Protecting endangered animals in Bangladesh is not only about
                  saving individual species. It is also about preserving forests,
                  rivers, mangroves, wetlands, and the environmental stability
                  that communities depend on.
                </p>

                <h2 className="mt-16 font-serif text-3xl font-bold text-white md:text-4xl">
                  What can be done
                </h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {[
                    "Protect and restore critical habitats",
                    "Reduce river and wetland pollution",
                    "Support community-based conservation",
                    "Strengthen awareness and wildlife education",
                    "Improve monitoring and research",
                    "Promote stronger protection for threatened ecosystems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-[#141611] p-6"
                    >
                      <p className="leading-7 text-white/75">{item}</p>
                    </div>
                  ))}
                </div>

                <h2 className="mt-16 font-serif text-3xl font-bold text-white md:text-4xl">
                  Conclusion
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  The major threats to wildlife in Bangladesh are serious, but
                  they are not impossible to address. With stronger awareness,
                  habitat protection, research, and public support, it is
                  possible to reduce pressure on endangered species and protect
                  the ecosystems that sustain them.
                </p>
                <p className="mt-6 text-lg leading-8 text-white/75">
                  Conservation is not only about preserving nature. It is about
                  protecting the balance of life, strengthening resilience, and
                  ensuring that future generations inherit a richer and healthier
                  Bangladesh.
                </p>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  In this article
                </h2>
                <ul className="mt-6 space-y-4 text-white/72">
                  <li>
                    <a
                      href="#habitat-destruction"
                      className="transition-colors hover:text-[#f4c542]"
                    >
                      Habitat destruction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#climate-change"
                      className="transition-colors hover:text-[#f4c542]"
                    >
                      Climate change
                    </a>
                  </li>
                  <li>
                    <a
                      href="#human-wildlife-conflict"
                      className="transition-colors hover:text-[#f4c542]"
                    >
                      Human-wildlife conflict
                    </a>
                  </li>
                  <li>
                    <a
                      href="#water-pollution"
                      className="transition-colors hover:text-[#f4c542]"
                    >
                      Water pollution
                    </a>
                  </li>
                  <li>
                    <a
                      href="#illegal-hunting-and-poaching"
                      className="transition-colors hover:text-[#f4c542]"
                    >
                      Illegal hunting and poaching
                    </a>
                  </li>
                  <li>
                    <a
                      href="#wetland-loss"
                      className="transition-colors hover:text-[#f4c542]"
                    >
                      Wetland loss
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Related pages
                </h2>
                <div className="mt-6 space-y-4">
                  <Link
                    href="/species"
                    className="block text-white/75 transition-colors hover:text-[#f4c542]"
                  >
                    Species We Protect →
                  </Link>
                  <Link
                    href="/species/bengal-tiger"
                    className="block text-white/75 transition-colors hover:text-[#f4c542]"
                  >
                    Royal Bengal Tiger →
                  </Link>
                  <Link
                    href="/species/ganges-dolphin"
                    className="block text-white/75 transition-colors hover:text-[#f4c542]"
                  >
                    Ganges River Dolphin →
                  </Link>
                  <Link
                    href="/species/asian-elephant"
                    className="block text-white/75 transition-colors hover:text-[#f4c542]"
                  >
                    Asian Elephant →
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Take action
                </h2>
                <p className="mt-4 leading-7 text-white/72">
                  Support conservation through awareness, education, and habitat
                  protection. Every action helps reduce pressure on endangered
                  wildlife.
                </p>
                <Link
                  href="/donate"
                  className="mt-6 inline-flex rounded-full border border-[#f4c542]/30 bg-[#f4c542]/10 px-5 py-3 text-sm font-medium text-[#f4c542] transition-colors hover:bg-[#f4c542]/20"
                >
                  Support our mission
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
