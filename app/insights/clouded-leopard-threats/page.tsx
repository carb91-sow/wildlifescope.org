import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Clouded Leopard Threats in Bangladesh | Wildlife Scope",
  description:
    "Learn about the biggest threats to clouded leopards in Bangladesh, including habitat loss, poaching, prey depletion, and conservation challenges in the Chittagong Hill Tracts.",
  keywords: [
    "clouded leopard threats Bangladesh",
    "clouded leopard Bangladesh",
    "Neofelis nebulosa Bangladesh",
    "clouded leopard habitat loss",
    "clouded leopard poaching",
    "clouded leopard conservation Bangladesh",
    "Chittagong Hill Tracts wildlife",
    "Sangu Matamuhari clouded leopard",
    "endangered wildlife Bangladesh",
    "wildlife threats Bangladesh",
  ],
  alternates: {
    canonical: "https://www.wildlifescope.org/insights/clouded-leopard-threats",
  },
  openGraph: {
    title: "Clouded Leopard Threats in Bangladesh | Wildlife Scope",
    description:
      "Explore the major threats facing clouded leopards in Bangladesh, from deforestation and poaching to research gaps and conservation challenges.",
    url: "https://www.wildlifescope.org/insights/clouded-leopard-threats",
    siteName: "Wildlife Scope",
    images: [
      {
        url: "/images/clouded-leopard.jpg",
        width: 1200,
        height: 630,
        alt: "Clouded leopard in Bangladesh forest habitat",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clouded Leopard Threats in Bangladesh | Wildlife Scope",
    description:
      "Explore the biggest threats facing clouded leopards in Bangladesh, including habitat loss, poaching, and conservation gaps.",
    images: ["/images/clouded-leopard.jpg"],
  },
}

const keyInsights = [
  "Clouded leopards are globally listed as Vulnerable, but in Bangladesh they are treated as Critically Endangered.",
  "The biggest threat is rapid forest loss and fragmentation in their remaining habitat.",
  "Poaching and illegal wildlife trade target their pelts, bones, and teeth.",
  "Prey depletion makes survival harder even where forest cover still exists.",
  "Research gaps and weak long-term monitoring slow effective conservation action.",
]

const threatCards = [
  {
    id: "habitat-loss",
    title: "Catastrophic habitat loss",
    text: "Clouded leopards depend on dense forest, but deforestation, urbanization, industrial expansion, and land conversion continue to destroy and fragment their habitat in Bangladesh.",
  },
  {
    id: "poaching",
    title: "Poaching and illegal trade",
    text: "Their patterned coat, bones, and teeth make them targets in illegal wildlife trade networks, while opportunistic hunting in forest areas adds more pressure.",
  },
  {
    id: "prey-depletion",
    title: "Prey depletion",
    text: "Over-exploitation of forest resources reduces the birds, monkeys, and small ungulates clouded leopards rely on, weakening already fragile populations.",
  },
  {
    id: "research-gap",
    title: "Research and conservation gaps",
    text: "There is no official population estimate for clouded leopards in Bangladesh, and many records come from rare sightings rather than systematic long-term study.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the biggest threat to clouded leopards in Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest threat is habitat loss and fragmentation caused by deforestation, land conversion, and human expansion in forest regions.",
      },
    },
    {
      "@type": "Question",
      name: "Where do clouded leopards still survive in Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Their strongest remaining habitat is believed to be in the Chittagong Hill Tracts, especially the Sangu-Matamuhari forest range.",
      },
    },
    {
      "@type": "Question",
      name: "Are clouded leopards poached in Bangladesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. They are threatened by poaching and illegal wildlife trade for their pelts, bones, and teeth, as well as opportunistic hunting in forest areas.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* HERO */}
        <section className="py-20 text-center">
          <div className="mx-auto max-w-5xl px-6">
            <Link
              href="/insights/clouded-leopard-bangladesh"
              className="text-sm text-[#f4c542] transition-colors hover:text-[#ffd76a]"
            >
              ← Back to Clouded Leopard insight
            </Link>

            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#f4c542]">
              Threat Analysis
            </p>

            <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold leading-tight">
              Major Threats to Clouded Leopards in Bangladesh
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-white/70">
              The clouded leopard is one of Bangladesh’s rarest forest predators,
              but its future is under severe pressure. Habitat destruction,
              poaching, prey depletion, and weak long-term monitoring are pushing
              this elusive wild cat closer to local extinction.
            </p>

            <div className="mx-auto mt-10 max-w-4xl">
              <Image
                src="/images/clouded-leopard.jpg"
                alt="Clouded leopard in Bangladesh"
                width={1200}
                height={650}
                className="rounded-xl border border-white/10"
                priority
              />
            </div>
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="bg-[#11130f] py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold">Key Insights</h2>

            <ul className="mt-6 space-y-4">
              {keyInsights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f4c542]" />
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="text-2xl font-bold text-white">Status</h2>
                <p className="mt-4 leading-8 text-white/72">
                  Globally the clouded leopard is classified as Vulnerable, but
                  within Bangladesh it is recognized as Critically Endangered.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="text-2xl font-bold text-white">Core Range</h2>
                <p className="mt-4 leading-8 text-white/72">
                  Its strongest remaining refuge is believed to be in the
                  Chittagong Hill Tracts, especially the Sangu-Matamuhari forest
                  range.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="text-2xl font-bold text-white">Main Risk</h2>
                <p className="mt-4 leading-8 text-white/72">
                  Rapid habitat loss and fragmentation are the most serious
                  threats, pushing this forest-dependent cat into smaller,
                  isolated patches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THREAT CARDS */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">The Biggest Threats</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {threatCards.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 p-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAIL SECTIONS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-16">
              <section>
                <h2 className="text-3xl font-bold">
                  The Disappearing Stage: Habitat Loss
                </h2>
                <p className="mt-6 max-w-4xl text-white/70">
                  The clouded leopard is completely dependent on forest habitat,
                  yet Bangladesh has experienced fast regional deforestation.
                  Population growth, unplanned urbanization, industrialization,
                  and land conversion continue to shrink the dense habitat these
                  cats need to hunt, hide, and breed. As forests break into
                  smaller fragments, populations become isolated and more
                  vulnerable.
                </p>
                <p className="mt-4 max-w-4xl text-white/70">
                  Habitat fragmentation also increases the chance of
                  human-wildlife conflict. When clouded leopards are pushed
                  closer to settlements, they face a greater risk of being
                  killed by people who may mistake them for more dangerous cats.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Demand for Pelts and Bones
                </h2>
                <p className="mt-6 max-w-4xl text-white/70">
                  Poaching remains a major direct threat. Clouded leopards are
                  targeted for their striking coat, and body parts such as bones
                  and teeth may enter illegal trade networks. Historical
                  evidence shows this pressure is not new, and local hunting in
                  forest communities continues to add risk for a species that is
                  already extremely rare in Bangladesh.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Empty Forests and Prey Depletion
                </h2>
                <p className="mt-6 max-w-4xl text-white/70">
                  Even where patches of forest remain, over-exploitation of
                  natural resources can strip ecosystems of the animals clouded
                  leopards depend on. Small ungulates, monkeys, birds, and other
                  prey species decline when forests are heavily disturbed. That
                  leaves predators with less food and lowers their chances of
                  long-term survival.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Research Gaps Make Protection Harder
                </h2>
                <p className="mt-6 max-w-4xl text-white/70">
                  A major conservation challenge is the lack of systematic data.
                  Unlike Bengal tigers, clouded leopards in Bangladesh do not
                  have an official population estimate or consistent national
                  monitoring framework. Many records come from rare, opportunistic
                  sightings rather than long-term surveys, making it harder to
                  direct protection where it is most needed.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* HOPE / ACTION */}
        <section className="bg-[#11130f] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Conservation Action and Hope</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h3 className="text-2xl font-bold">Recent sightings</h3>
                <p className="mt-4 text-white/72">
                  Recent camera-trap records and field sightings have confirmed
                  that clouded leopards still survive in Bangladesh. These
                  records are vital because they raise awareness and help direct
                  conservation action to remaining habitat.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h3 className="text-2xl font-bold">Legal protection</h3>
                <p className="mt-4 text-white/72">
                  The Wildlife (Conservation and Security) Ordinance, 2026
                  strengthens the legal framework with penalties for hunting
                  clouded leopards and creates stronger institutions for tackling
                  wildlife crime.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h3 className="text-2xl font-bold">Cross-border project</h3>
                <p className="mt-4 text-white/72">
                  The Chittagong–Lushai Big Cat Conservation Project
                  (2025–2028) aims to improve scientific monitoring, anti-poaching
                  capacity, and community-based conservation for big cats across
                  the Bangladesh–India landscape.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h3 className="text-2xl font-bold">Why this matters now</h3>
                <p className="mt-4 text-white/72">
                  Bangladesh may still have a final viable refuge for clouded
                  leopards in the Sangu-Matamuhari forest range. Protecting that
                  landscape could determine whether the species survives in the
                  country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold">Why It Matters</h2>
            <p className="mt-6 text-white/70">
              The clouded leopard is not only one of Bangladesh’s most elusive
              wild cats, but also a symbol of the country’s remaining forest
              biodiversity. Protecting this predator means protecting habitat,
              prey species, ecological balance, and the future of the forests it
              still calls home.
            </p>
          </div>
        </section>

        {/* EXPLORE MORE */}
        <section className="bg-[#11130f] py-16 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold">Explore More</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/species/clouded-leopard"
                className="text-[#f4c542] transition-colors hover:text-[#ffd76a]"
              >
                Clouded Leopard →
              </Link>

              <Link
                href="/insights/clouded-leopard-bangladesh"
                className="text-[#f4c542] transition-colors hover:text-[#ffd76a]"
              >
                Clouded Leopard Overview →
              </Link>

              <Link
                href="/insights/threats-to-wildlife-bangladesh"
                className="text-[#f4c542] transition-colors hover:text-[#ffd76a]"
              >
                Wildlife Threats in Bangladesh →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
