import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ferret-Badger Bangladesh | Latest Sightings, Ecology & Conservation",
  description:
    "Explore the Ferret-Badger in Bangladesh, including confirmed records from Patharia Hill Reserve Forest, ecological niche, threats, and conservation importance.",
}

const quickFacts = [
  { label: "Common Name", value: "Burmese Ferret-Badger" },
  { label: "Scientific Name", value: "Melogale personata" },
  { label: "Family", value: "Mustelidae" },
  { label: "Status", value: "Least Concern (data limited)" },
  { label: "Habitat", value: "Forest floor, dense vegetation" },
  { label: "Activity", value: "Nocturnal" },
  { label: "Diet", value: "Insects, small animals, fruit" },
  { label: "Bangladesh Region", value: "Sylhet & Chittagong Hill Tracts" },
]

const keyPoints = [
  "The Burmese Ferret-Badger is one of the least studied mammals in Bangladesh.",
  "Confirmed records exist from Patharia Hill Reserve Forest.",
  "It is a nocturnal forest-floor predator with a highly flexible diet.",
  "Habitat loss and hunting threaten long-term survival.",
  "Lack of data is the biggest challenge for conservation.",
]

const latestInfo = [
  {
    title: "2024 Bangladesh confirmation",
    text: "Recent scientific observations confirmed the presence of Ferret-Badgers in Patharia Hill Reserve Forest in northeastern Bangladesh.",
  },
  {
    title: "Rare but present",
    text: "The species is not frequently recorded, but evidence suggests it persists in suitable forest habitats.",
  },
  {
    title: "Camera-trap importance",
    text: "Modern wildlife surveys using camera traps are beginning to reveal hidden species like the Ferret-Badger.",
  },
  {
    title: "Data gap",
    text: "Despite confirmed presence, population size and distribution remain largely unknown.",
  },
]

const nichePoints = [
  {
    title: "Nocturnal insectivore-omnivore",
    text: "Feeds heavily on insects, worms, snails, and small vertebrates, helping regulate forest floor ecosystems.",
  },
  {
    title: "Forest floor specialist",
    text: "Operates mainly on the ground, using dense vegetation and burrows for shelter.",
  },
  {
    title: "Opportunistic feeder",
    text: "Consumes fruit, eggs, carrion, and small animals, making it adaptable to changing environments.",
  },
  {
    title: "Hidden ecological role",
    text: "Supports ecosystem balance through pest control and food web connections.",
  },
]

const threats = [
  {
    title: "Deforestation",
    text: "Forest clearing removes habitat and shelter needed for survival.",
  },
  {
    title: "Habitat fragmentation",
    text: "Breaking forests into patches limits movement and increases risk.",
  },
  {
    title: "Hunting and trapping",
    text: "The species is sometimes hunted or caught unintentionally in snares.",
  },
  {
    title: "Lack of research",
    text: "Without data, conservation planning remains weak and incomplete.",
  },
]

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] pt-20 text-white">

        {/* HERO */}
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h1 className="text-5xl font-bold">
                Ferret-Badger in Bangladesh
              </h1>
              <p className="mt-6 text-white/70">
                One of the least understood mammals in Bangladesh, the Ferret-Badger
                lives quietly within forest ecosystems. Rarely seen but ecologically
                important, it represents a hidden layer of biodiversity.
              </p>
            </div>

            <Image
              src="/images/ferret-badger.jpg"
              alt="Ferret-Badger"
              width={1200}
              height={800}
              className="rounded-xl"
            />
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="py-16 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Quick Facts</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((item) => (
                <div key={item.label} className="p-5 border border-white/10 rounded-xl">
                  <p className="text-xs text-[#f4c542] uppercase">{item.label}</p>
                  <p className="mt-2 text-white/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Key Insights</h2>

            <ul className="mt-6 space-y-3">
              {keyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#f4c542] rounded-full"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LATEST INFO */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Latest Bangladesh Evidence</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {latestInfo.map((item) => (
                <div key={item.title} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOLOGICAL NICHE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Ecological Niche</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {nichePoints.map((item) => (
                <div key={item.title} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREATS */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Major Threats</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {threats.map((item) => (
                <div key={item.title} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold">Explore More</h2>

          <div className="mt-6">
            <Link href="/species/ferret-badger" className="text-[#f4c542]">
              Species Profile →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
