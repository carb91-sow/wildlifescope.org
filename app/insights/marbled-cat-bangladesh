import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Marbled Cat Bangladesh | Habitat, Threats & Conservation",
  description:
    "Explore the marbled cat in Bangladesh, its rare forest habitat, conservation status, and major threats including deforestation, lack of research, and habitat fragmentation.",
}

const keyPoints = [
  "Marbled cats are among the rarest wild cats in Bangladesh.",
  "First officially recorded in the country in 2014.",
  "Highly dependent on dense evergreen forests.",
  "Major threats include deforestation and habitat fragmentation.",
  "Lack of research is one of the biggest conservation challenges.",
]

const threats = [
  {
    id: "habitat-loss",
    title: "Habitat loss",
    text: "Rapid deforestation and land conversion are shrinking the dense forest habitat the marbled cat depends on.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Roads, agriculture, and settlements are breaking forests into smaller isolated patches.",
  },
  {
    id: "poaching",
    title: "Poaching and hunting",
    text: "Illegal hunting and wildlife trade still pose risks despite legal protection.",
  },
  {
    id: "roadkill",
    title: "Road collisions",
    text: "New highways cutting through forest areas increase the risk of vehicle collisions.",
  },
  {
    id: "research-gap",
    title: "Lack of research",
    text: "Limited scientific data makes it difficult to design effective conservation strategies.",
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
            Marbled Cat in Bangladesh: A Hidden Forest Predator at Risk
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            The marbled cat is one of Bangladesh’s most mysterious and least
            understood wild felines. Living deep within forest ecosystems, this
            rare species faces growing threats from habitat loss, human pressure,
            and a critical lack of research.
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <Image
              src="/images/marbled-cat.jpg"
              alt="Marbled Cat in Bangladesh forest habitat"
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
              A Species Shrouded in Mystery
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              The marbled cat (Pardofelis marmorata) is one of the least studied
              wild cats in Bangladesh. First recorded in the country in 2014,
              this elusive species inhabits dense evergreen forests in Sylhet,
              Chattogram, and the Chittagong Hill Tracts. Despite its striking
              appearance and ecological importance, very few confirmed sightings
              exist.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              The species is globally classified as Near Threatened, but in
              Bangladesh it is considered Data Deficient due to the lack of
              reliable population data. Researchers have recorded only a handful
              of confirmed encounters in the last decade, highlighting how little
              is known about its distribution and survival.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              This lack of knowledge creates a major conservation challenge. A
              species that is not studied cannot be effectively protected. The
              marbled cat risks disappearing silently if action is not taken to
              better understand its ecology and threats.
            </p>

          </div>
        </section>

        {/* THREATS */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Major Threats to the Marbled Cat
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
                Habitat loss is the most serious threat facing the marbled cat.
                Bangladesh has already lost a significant portion of its forest
                cover, particularly in the Chittagong Hill Tracts where this
                species lives. As forests are cleared for agriculture and
                settlements, suitable habitat continues to shrink.
              </p>

              <p className="mt-4">
                Fragmentation further isolates populations, making it harder for
                the species to find food, reproduce, and maintain genetic
                diversity. At the same time, expanding road networks introduce
                new risks such as vehicle collisions.
              </p>

              <p className="mt-4">
                Unlike more well-known species, the marbled cat suffers from a
                major research gap. Without proper surveys and monitoring,
                conservation planning remains weak, leaving this rare feline
                vulnerable to unnoticed decline.
              </p>
            </div>
          </div>
        </section>

        {/* CONSERVATION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Conservation Gaps and the Way Forward
            </h2>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Despite legal protection under Bangladesh’s wildlife laws, the
              marbled cat receives little direct conservation attention. Limited
              enforcement, lack of funding, and insufficient monitoring systems
              mean that threats continue largely unchecked.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              To protect this species, urgent steps are needed. These include
              conducting ecological surveys, expanding protected areas, and
              integrating the marbled cat into existing conservation programs.
              Community-based forest management and stronger anti-poaching
              efforts can also play a key role.
            </p>

            <p className="mt-6 text-white/70 max-w-3xl leading-8">
              Ultimately, protecting the marbled cat means protecting Bangladesh’s
              remaining forests. These ecosystems are critical not only for
              wildlife but also for climate stability, biodiversity, and local
              communities.
            </p>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="py-16 bg-[#11130f] text-center">
          <h2 className="text-3xl font-bold">
            Explore More
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/species/marbled-cat" className="text-[#f4c542]">
              Marbled Cat Profile →
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
