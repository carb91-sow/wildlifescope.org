import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans",
  description:
    "Learn how Bengal Tigers regulate prey populations, reduce overgrazing, and maintain ecosystem balance in the Sundarbans.",
}

const keyPoints = [
  "Bengal tigers are apex predators in the Sundarbans.",
  "They control prey populations like deer and wild boar.",
  "This reduces overgrazing of vegetation.",
  "Healthy vegetation supports biodiversity.",
  "Protecting tigers protects the whole ecosystem.",
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Mangrove forests are shrinking due to human activity and environmental change.",
  },
  {
    id: "human-conflict",
    title: "Human-wildlife conflict",
    text: "Tigers sometimes enter villages, leading to conflict and retaliatory killing.",
  },
  {
    id: "poaching",
    title: "Poaching",
    text: "Illegal hunting threatens tiger populations.",
  },
  {
    id: "climate-change",
    title: "Climate change",
    text: "Sea-level rise and salinity changes impact the Sundarbans ecosystem.",
  },
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white pt-20">

        {/* HERO */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold max-w-4xl mx-auto">
            How Bengal Tigers Maintain Ecosystem Balance in the Sundarbans
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            Bengal Tigers play a crucial role as apex predators, helping regulate prey populations
            and maintain ecological balance in the Sundarbans mangrove forest.
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <Image
              src="/images/bengal-tiger.jpg"
              alt="Bengal Tiger"
              width={1200}
              height={600}
              className="rounded-xl"
            />
          </div>
        </section>

        {/* KEY POINTS */}
        <section className="py-16 bg-[#11130f]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Key Insights
            </h2>

            <ul className="mt-6 space-y-3">
              {keyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#f4c542] rounded-full"></span>
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TROPHIC CASCADE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              The Trophic Cascade Effect
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl">
              Tigers regulate herbivores like deer. When herbivore populations are controlled,
              vegetation recovers. This supports biodiversity and strengthens the entire ecosystem.
            </p>

            <div className="grid md:grid-cols-5 gap-4 mt-10">
              {[
                "Tiger",
                "Herbivores",
                "Less grazing",
                "Plants grow",
                "Healthy ecosystem",
              ].map((item) => (
                <div key={item} className="p-4 border border-white/10 rounded-lg text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Major Threats
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {threats.map((item) => (
                <div key={item.id} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold">
            Why It Matters
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            If Bengal Tigers disappear, herbivore populations can grow unchecked,
            leading to overgrazing and ecosystem collapse. Protecting tigers helps
            protect forests, biodiversity, and ecological balance.
          </p>
        </section>

        {/* RELATED LINKS */}
        <section className="py-16 bg-[#11130f] text-center">
          <h2 className="text-3xl font-bold">
            Explore More
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/species/bengal-tiger" className="text-[#f4c542]">
              Bengal Tiger →
            </Link>

            <Link href="/insights/threats-to-wildlife-bangladesh" className="text-[#f4c542]">
              Wildlife Threats →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
