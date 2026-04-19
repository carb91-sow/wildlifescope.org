import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Clouded Leopard Bangladesh | Sightings, Habitat & Conservation",
  description:
    "Explore confirmed clouded leopard sightings in Bangladesh, including camera-trap records, habitat, threats, and conservation insights.",
}

const keyPoints = [
  "Clouded leopards are among Bangladesh’s rarest forest predators.",
  "They survive mainly in the forests of the Chittagong Hill Tracts.",
  "Most confirmed records come from camera trap evidence.",
  "Forest loss and fragmentation are major threats.",
  "Protecting them helps preserve entire ecosystems.",
]

const threats = [
  {
    id: "forest-loss",
    title: "Forest loss",
    text: "Deforestation and land conversion continue to reduce dense habitats required by clouded leopards.",
  },
  {
    id: "fragmentation",
    title: "Habitat fragmentation",
    text: "Development divides forests into smaller patches, isolating populations.",
  },
  {
    id: "poaching",
    title: "Poaching",
    text: "Illegal hunting for fur and body parts remains a serious threat.",
  },
  {
    id: "low-data",
    title: "Limited monitoring",
    text: "Lack of consistent research makes conservation difficult.",
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
            The Clouded Leopard: Bangladesh’s Most Elusive Wild Cat
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            Hidden deep within the forests of the Chittagong Hill Tracts, the
            clouded leopard remains one of the rarest and least understood
            predators in Bangladesh.
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <Image
              src="/images/clouded-leopard.jpg"
              alt="Clouded Leopard"
              width={1200}
              height={600}
              className="rounded-xl"
            />
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="py-16 bg-[#11130f]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Key Insights</h2>

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

        {/* SIGHTINGS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Confirmed Sightings in Bangladesh (2015–2025)
            </h2>

            <p className="mt-6 text-white/70">
              Verified sightings rely mainly on camera trap records from the
              Chittagong Hill Tracts, especially the Sangu-Matamuhuri forest.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full border border-white/10">
                <thead>
                  <tr className="bg-[#141611] text-[#f4c542]">
                    <th className="p-4 text-left">Year</th>
                    <th className="p-4 text-left">Location</th>
                    <th className="p-4 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["2015", "Sangu-Matamuhuri", "First confirmed camera trap record (CCA)"],
                    ["2018", "Sangu-Matamuhuri", "Single individual recorded"],
                    ["2021", "Sangu & Kaptai", "Multiple individuals recorded"],
                    ["2022", "Rangamati", "Confirmed sighting"],
                    ["2023", "Eastern Bangladesh", "Recorded by Dr. Muntasir Akash"],
                    ["2025", "Sangu-Matamuhuri", "Latest confirmed camera trap image"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-white/10">
                      <td className="p-4">{row[0]}</td>
                      <td className="p-4 text-white/80">{row[1]}</td>
                      <td className="p-4 text-white/70">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-white/10 rounded-xl">
                <h3 className="text-xl font-bold">Live Capture (2023)</h3>
                <p className="mt-3 text-white/70">
                  A live clouded leopard was captured in Rangamati and is now
                  kept at Dulahazara Safari Park.
                </p>
              </div>

              <div className="p-6 border border-white/10 rounded-xl">
                <h3 className="text-xl font-bold">Earlier Records</h3>
                <p className="mt-3 text-white/70">
                  Past encounters were reported from Jamalpur, Bandarban, and
                  Kaptai National Park.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#f4c542]/10 border border-[#f4c542]/30 rounded-xl">
              <p className="text-white/80">
                Key contributors include the Creative Conservation Alliance and
                Dr. Muntasir Akash, whose research has helped confirm the
                species’ presence in Bangladesh.
              </p>
            </div>
          </div>
        </section>

        {/* ROLE */}
        <section className="py-20 bg-[#11130f]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Ecological Role</h2>

            <p className="mt-6 text-white/70 max-w-3xl">
              As a mid-to-top predator, the clouded leopard helps regulate prey
              populations, maintaining ecological balance in forest ecosystems.
            </p>
          </div>
        </section>

        {/* RESEARCH GAPS */}
<section className="bg-[#11130f] py-20">
  <div className="mx-auto max-w-6xl px-6">

    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold">
        Research Gaps & Knowledge Limitations
      </h2>

      <p className="mt-6 leading-8 text-white/72">
        Although there have been confirmed sightings, the Clouded Leopard in
        Bangladesh remains critically understudied. Most available knowledge is
        based on scattered records, highlighting major scientific gaps that must
        be addressed for effective conservation.
      </p>
    </div>

    {/* GRID */}
    <div className="mt-12 grid gap-8 md:grid-cols-2">

      {/* FOUNDATIONAL */}
      <div className="rounded-2xl border border-white/10 bg-[#141611] p-6">
        <h3 className="text-xl font-bold text-[#f4c542]">
          Foundational Knowledge & Taxonomy
        </h3>

        <ul className="mt-4 space-y-3 text-white/75 leading-7">
          <li>• No reliable population estimate or baseline data</li>
          <li>• Population trends remain completely unknown</li>
          <li>• Subspecies identity has not been genetically verified</li>
        </ul>
      </div>

      {/* DISTRIBUTION */}
      <div className="rounded-2xl border border-white/10 bg-[#141611] p-6">
        <h3 className="text-xl font-bold text-[#f4c542]">
          Distribution & Habitat Ecology
        </h3>

        <ul className="mt-4 space-y-3 text-white/75 leading-7">
          <li>• True distribution range remains uncertain</li>
          <li>• Habitat preferences and movement patterns unknown</li>
          <li>• Fragmentation impacts not studied</li>
        </ul>
      </div>

      {/* ECOLOGY */}
      <div className="rounded-2xl border border-white/10 bg-[#141611] p-6">
        <h3 className="text-xl font-bold text-[#f4c542]">
          Population Ecology & Behavior
        </h3>

        <ul className="mt-4 space-y-3 text-white/75 leading-7">
          <li>• No Bangladesh-specific data on diet or reproduction</li>
          <li>• Survival rates and mortality causes unknown</li>
          <li>• No behavioral or ecological field studies</li>
        </ul>
      </div>

      {/* THREATS */}
      <div className="rounded-2xl border border-white/10 bg-[#141611] p-6">
        <h3 className="text-xl font-bold text-[#f4c542]">
          Threats & Human Interaction
        </h3>

        <ul className="mt-4 space-y-3 text-white/75 leading-7">
          <li>• Poaching and trade pressure not quantified</li>
          <li>• Human-wildlife conflict not studied</li>
          <li>• Local ecological knowledge undocumented</li>
        </ul>
      </div>

      {/* POLICY */}
      <div className="rounded-2xl border border-white/10 bg-[#141611] p-6">
        <h3 className="text-xl font-bold text-[#f4c542]">
          Conservation & Policy
        </h3>

        <ul className="mt-4 space-y-3 text-white/75 leading-7">
          <li>• No national conservation action plan</li>
          <li>• Legal protection clarity is limited</li>
          <li>• Weak enforcement against poaching risks</li>
        </ul>
      </div>

      {/* METHODS */}
      <div className="rounded-2xl border border-white/10 bg-[#141611] p-6">
        <h3 className="text-xl font-bold text-[#f4c542]">
          Research & Methodological Gaps
        </h3>

        <ul className="mt-4 space-y-3 text-white/75 leading-7">
          <li>• Lack of systematic camera trap surveys</li>
          <li>• No long-term monitoring programs</li>
          <li>• Absence of genetic sampling and DNA data</li>
        </ul>
      </div>

    </div>

    {/* SUMMARY */}
    <div className="mt-12 max-w-4xl space-y-5 leading-8 text-white/72">
      <p>
        These gaps highlight that the Clouded Leopard is not only rare but also
        scientifically underrepresented. Without basic population, ecological,
        and threat data, conservation strategies remain incomplete and uncertain.
      </p>

      <p>
        Addressing these challenges requires systematic camera-trap surveys,
        genetic research, habitat monitoring, and stronger integration of local
        communities into conservation efforts. Protecting the species depends not
        only on preserving forests, but also on understanding how it survives
        within them.
      </p>
    </div>

  </div>
</section>
        
        {/* THREATS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Major Threats</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {threats.map((t) => (
                <div key={t.id} className="p-6 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold">{t.title}</h3>
                  <p className="mt-3 text-white/70">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#11130f]">
          <h2 className="text-3xl font-bold">Explore More</h2>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/species/clouded-leopard" className="text-[#f4c542]">
              Species Profile →
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
