import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans",
  description:
    "Learn how the Royal Bengal Tiger helps regulate prey populations, reduce overgrazing, and support ecosystem balance in the Sundarbans mangrove forest.",
  alternates: {
    canonical: "/insights/tiger-role-ecosystem-sundarbans",
  },
  openGraph: {
    title: "How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans",
    description:
      "A research-based article on the ecological role of Bengal tigers in the Sundarbans.",
    url: "/insights/tiger-role-ecosystem-sundarbans",
    images: [
      {
        url: "/images/bengal-tiger.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Bengal Tiger in the Sundarbans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans",
    description:
      "Explore the tiger's role as an apex predator and why it matters for the Sundarbans ecosystem.",
    images: ["/images/bengal-tiger.jpg"],
  },
}

const keyPoints = [
  "Bengal tigers are apex predators in the Sundarbans.",
  "They regulate prey populations such as deer and wild boar.",
  "This reduces overgrazing pressure on mangrove vegetation.",
  "Healthier vegetation improves biodiversity and ecosystem stability.",
  "Protecting tigers helps protect the wider Sundarbans ecosystem.",
]

const threats = [
  {
    title: "Habitat degradation and loss",
    id: "habitat-degradation-and-loss",
    text: "Mangrove habitat in the Sundarbans is under pressure from illegal logging, land conversion, aquaculture expansion, salinity stress, and forest degradation.",
  },
  {
    title: "Human-tiger conflict and poaching",
    id: "human-tiger-conflict-and-poaching",
    text: "Where human settlements overlap with tiger territory, conflict increases. Poaching and retaliatory killing also threaten tiger survival.",
  },
  {
    title: "Genetic isolation and inbreeding",
    id: "genetic-isolation-and-inbreeding",
    text: "When populations become small and isolated, long-term genetic viability declines, increasing conservation risk.",
  },
  {
    title: "Climate change and environmental stress",
    id: "climate-change-and-environmental-stress",
    text: "Sea-level rise, salinity changes, and environmental stress affect forest health, prey availability, and habitat quality.",
  },
]

const conservationActions = [
  "Protect and restore mangrove habitat.",
  "Reduce human-tiger conflict through community outreach and rapid response systems.",
  "Support wildlife corridors and genetic connectivity.",
  "Monitor prey populations and ecosystem health.",
  "Use adaptive conservation strategies for climate-related change.",
]

export default function TigerRoleEcosystemSundarbansPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans",
    description:
      "A research-based article on how Bengal tigers regulate prey populations and support ecological balance in the Sundarbans.",
    image: ["https://www.yourdomain.com/images/bengal-tiger.jpg"],
    author: {
      "@type": "Organization",
      name: "Wildlife NGO Bangladesh",
    },
    publisher: {
      "@type": "Organization",
      name: "Wildlife NGO Bangladesh",
    },
    mainEntityOfPage:
      "https://www.yourdomain.com/insights/tiger-role-ecosystem-sundarbans",
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
              Ecosystem Insight
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              The Royal Bengal Tiger is more than an iconic species. In the
              Sundarbans, it acts as an apex predator that helps regulate prey
              populations, reduce overgrazing, and support healthier mangrove
              ecosystems. :contentReference[oaicite:1]{index=1}
            </p>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
              <div className="relative aspect-[16/8]">
                <Image
                  src="/images/bengal-tiger.jpg"
                  alt="Royal Bengal Tiger in the Sundarbans"
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
                  Ecosystem
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Sundarbans mangrove forest
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Tiger Role
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Apex predator and ecological regulator
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4c542]">
                  Main Insight
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Protecting tigers helps protect the whole ecosystem
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b0d09] py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_320px] lg:px-8">
            <article className="min-w-0">
              <div className="max-w-none">
                <section id="why-the-tiger-matters" className="scroll-mt-28">
                  <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                    Why the tiger matters in the Sundarbans
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    The Sundarbans is the world&apos;s largest mangrove forest
                    and one of the most important ecosystems in the region. Your
                    PDF describes the Bengal tiger as a flagship species and
                    apex predator whose presence is central to ecological
                    balance. :contentReference[oaicite:2]{index=2}
                  </p>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    As a top predator, the tiger shapes the ecosystem by
                    regulating prey populations and influencing herbivore
                    behavior. This helps maintain the structure and function of
                    the mangrove landscape. :contentReference[oaicite:3]{index=3}
                  </p>
                </section>

                <div className="mt-10 rounded-[28px] border border-white/10 bg-[#141611] p-8">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Key takeaways
                  </h3>

                  <ul className="mt-6 space-y-3 text-white/72">
                    {keyPoints.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#f4c542]" />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <section id="trophic-cascade" className="scroll-mt-28 mt-16">
                  <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                    The trophic cascade
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    The document explains a clear ecological chain: tiger
                    predation regulates herbivore populations, which reduces
                    overgrazing, supports vegetation recovery, improves mangrove
                    health, and strengthens biodiversity and ecosystem
                    stability. A diagram on page 3 visualizes this flow from
                    tiger predation to ecosystem stability. :contentReference[oaicite:4]{index=4}
                  </p>

                  <div className="mt-8 grid gap-5 md:grid-cols-5">
                    {[
                      "Tiger predation",
                      "Herbivore regulation",
                      "Reduced overgrazing",
                      "Vegetation recovery",
                      "Ecosystem stability",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#141611] p-5 text-center"
                      >
                        <p className="text-sm leading-6 text-white/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="territory-and-prey" className="scroll-mt-28 mt-16">
                  <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                    Territory, prey, and ecological balance
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    Your PDF also notes that tiger territory size is closely
                    linked to prey abundance and habitat quality. Where prey is
                    more abundant, tigers can maintain smaller territories.
                    This shows how predator ecology and prey availability are
                    tightly connected. :contentReference[oaicite:5]{index=5}
                  </p>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    In the Sundarbans, prey such as spotted deer, barking deer,
                    and wild boar are part of that balance. If tiger numbers
                    decline, vegetation may face more grazing pressure, which
                    weakens ecosystem resilience. :contentReference[oaicite:6]{index=6}
                  </p>
                </section>

                <section id="major-threats" className="scroll-mt-28 mt-16">
                  <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                    Major threats to Bengal tigers in the Sundarbans
                  </h2>

                  <div className="mt-10 space-y-6">
                    {threats.map((item) => (
                      <section
                        key={item.id}
                        id={item.id}
                        className="scroll-mt-28 rounded-[28px] border border-white/10 bg-[#141611] p-8"
                      >
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-base leading-8 text-white/75">
                          {item.text}
                        </p>
                      </section>
                    ))}
                  </div>

                  <p className="mt-8 text-lg leading-8 text-white/75">
                    The source identifies habitat degradation, human conflict,
                    poaching, genetic challenges, and environmental stress as
                    major threats, and links them directly to both tiger
                    survival and ecosystem health. :contentReference[oaicite:7]{index=7}
                  </p>
                </section>

                <section id="conservation-focus" className="scroll-mt-28 mt-16">
                  <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                    What conservation should focus on
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    According to your document, effective conservation in the
                    Sundarbans should combine habitat protection,
                    conflict-reduction, genetic connectivity, ecosystem
                    monitoring, and adaptive management. :contentReference[oaicite:8]{index=8}
                  </p>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {conservationActions.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#141611] p-6"
                      >
                        <p className="leading-7 text-white/75">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="why-protection-matters" className="scroll-mt-28 mt-16">
                  <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                    Why protecting tigers means protecting the Sundarbans
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    Bengal tigers are not just charismatic animals. In the
                    Sundarbans, they are ecological regulators whose presence
                    helps shape prey behavior, support vegetation recovery, and
                    sustain biodiversity. :contentReference[oaicite:9]{index=9}
                  </p>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    That makes tiger conservation bigger than a single-species
                    issue. Protecting tigers also helps protect mangroves, prey
                    species, and the natural processes that keep the Sundarbans
                    healthy. :contentReference[oaicite:10]{index=10}
                  </p>
                </section>

                <div className="mt-12 rounded-[28px] border border-[#f4c542]/20 bg-[#f4c542]/10 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f4c542]">
                    Related reading
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                    Explore more conservation insights
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/species/bengal-tiger"
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition-colors hover:border-[#f4c542]/35"
                    >
                      Royal Bengal Tiger profile
                    </Link>
                    <Link
                      href="/insights/threats-to-wildlife-bangladesh"
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition-colors hover:border-[#f4c542]/35"
                    >
                      Major threats to wildlife
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  In this article
                </h2>
                <ul className="mt-6 space-y-4 text-white/72">
                  <li>
                    <a href="#why-the-tiger-matters" className="transition-colors hover:text-[#f4c542]">
                      Why the tiger matters
                    </a>
                  </li>
                  <li>
                    <a href="#trophic-cascade" className="transition-colors hover:text-[#f4c542]">
                      The trophic cascade
                    </a>
                  </li>
                  <li>
                    <a href="#territory-and-prey" className="transition-colors hover:text-[#f4c542]">
                      Territory and prey
                    </a>
                  </li>
                  <li>
                    <a href="#major-threats" className="transition-colors hover:text-[#f4c542]">
                      Major threats
                    </a>
                  </li>
                  <li>
                    <a href="#conservation-focus" className="transition-colors hover:text-[#f4c542]">
                      Conservation focus
                    </a>
                  </li>
                  <li>
                    <a href="#why-protection-matters" className="transition-colors hover:text-[#f4c542]">
                      Why protection matters
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Source basis
                </h2>
                <p className="mt-4 leading-7 text-white/72">
                  This page is adapted from your uploaded PDF about Bengal tiger
                  ecology, trophic cascades, threats, and conservation in the
                  Sundarbans. :contentReference[oaicite:11]{index=11}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#141611] p-8">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Take action
                </h2>
                <p className="mt-4 leading-7 text-white/72">
                  Support science-based conservation, habitat protection, and
                  awareness for endangered wildlife in Bangladesh.
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
