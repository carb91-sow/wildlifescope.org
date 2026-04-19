import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Fishing Cat Bangladesh | Threats, Habitat & Conservation",
  description:
    "Learn about the Fishing Cat in Bangladesh, its wetland habitat, population status, and the major threats including habitat loss, human conflict, and pollution affecting its survival.",
}

const keyPoints = [
  "Fishing cats are wetland-dependent predators found across Bangladesh.",
  "Over 95% of their habitats lie outside protected areas.",
  "Human-wildlife conflict is one of the biggest threats.",
  "Wetland destruction and aquaculture expansion are shrinking habitats.",
  "Pollution is emerging as a serious long-term risk.",
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Rapid wetland destruction caused by urbanization, agriculture, and aquaculture expansion is reducing the natural habitat of fishing cats across Bangladesh.",
  },
  {
    id: "human-conflict",
    title: "Human-wildlife conflict",
    text: "Fishing cats are frequently killed due to fear and misunderstanding, often even without proven economic damage to livestock or poultry.",
  },
  {
    id: "accidental-capture",
    title: "Accidental trapping",
    text: "Fishing nets, traps, and aquaculture enclosures often capture fishing cats, leading to injury or death.",
  },
  {
    id: "illegal-trade",
    title: "Illegal captivity & trade",
    text: "Some fishing cats are captured and kept in poor conditions in private collections or illegal facilities.",
  },
  {
    id: "pollution",
    title: "Pollution",
    text: "Heavy metals, pesticides, and plastic pollution contaminate wetlands, affecting both fishing cats and their prey.",
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
            Bangladesh’s Fishing Cat: A Wetland Species Under Threat
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            The fishing cat, locally known as Mechho Bagh, is one of Bangladesh’s
            most unique wild predators. Living in wetlands, rivers, and marshes,
            this elusive feline is now facing increasing threats from habitat loss,
            human conflict, and environmental degradation.
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <Image
              src="/images/fishing-cat.jpg"
              alt="Fishing Cat in Bangladesh wetlands"
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

        {/* MAIN CONTENT */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-bold">
              A Species Living Outside Protection
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              The fishing cat (Prionailurus viverrinus) is widely distributed
              across Bangladesh, with confirmed populations in over 150
              subdistricts. However, this apparent distribution hides a serious
              problem. More than 95% of these populations exist outside protected
              areas, meaning they survive in landscapes dominated by humans.
              Wetlands are being rapidly transformed into agricultural land,
              aquaculture zones, and urban settlements, leaving fishing cats
              increasingly exposed to danger.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Globally, the fishing cat is classified as Vulnerable, but within
              Bangladesh, its situation is even more concerning. With a declining
              population trend and increasing human pressure, the species faces a
              growing risk of local extinction if conservation efforts are not
              strengthened.
            </p>

          </div>
        </section>

        {/* THREATS */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Major Threats to the Fishing Cat
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {threats.map((item) => (
                <div key={item.id} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl text-white/70 leading-8">
              <p>
                Habitat loss remains the most critical long-term threat. As wetlands
                are drained or converted, fishing cats are forced into closer contact
                with humans. This leads directly to increased conflict, where animals
                are often killed due to fear or misunderstanding.
              </p>

              <p className="mt-4">
                In many areas, fishing cats are trapped accidentally in nets or
                aquaculture enclosures. Even when captured unintentionally, they
                are frequently killed by farmers trying to protect their livelihoods.
                Illegal captivity and trade further worsen the situation, with animals
                being kept in poor conditions without proper care.
              </p>

              <p className="mt-4">
                Pollution is an emerging but serious threat. Contaminated water,
                heavy metals, and agricultural chemicals are entering wetland
                ecosystems, affecting fish populations and accumulating in the
                bodies of fishing cats. This not only threatens the species but
                also indicates broader environmental risks.
              </p>
            </div>
          </div>
        </section>

        {/* CONSERVATION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Conservation and the Way Forward
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Despite these challenges, conservation efforts are beginning to
              show promise. Rescue and release programs have successfully returned
              captured fishing cats to the wild, with some cases showing
              reunification of kittens with their mothers. These approaches
              demonstrate that practical, community-based solutions can work.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Protecting the fishing cat requires a combination of strategies,
              including wetland conservation, stronger law enforcement, and
              community awareness. Simple measures such as improved fencing around
              fish farms and better livestock protection can significantly reduce
              conflict.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Ultimately, the fishing cat represents more than a single species.
              It is a symbol of Bangladesh’s wetlands. Protecting it means
              preserving entire ecosystems that support biodiversity, water
              resources, and human livelihoods.
            </p>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="py-16 bg-[#11130f] text-center">
          <h2 className="text-3xl font-bold">
            Explore More
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/species/fishing-cat" className="text-[#f4c542]">
              Fishing Cat Profile →
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
