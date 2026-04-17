"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, HeartHandshake } from "lucide-react"

export default function DonatePage() {
  return (
    <>
      <Header />

      <main className="bg-[#0b0d09] text-white">

        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center">
          <Image
            src="/images/donate-field.jpg"
            alt="Wildlife conservation fieldwork in Bangladesh"
            fill
            className="object-cover brightness-110"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b0d09]" />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold max-w-4xl">
              Support wildlife conservation in Bangladesh
            </h1>

            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Your support helps protect vulnerable species, strengthen field research,
              and expand conservation awareness across Bangladesh.
            </p>

            <Link
              href="#donate-options"
              className="inline-flex mt-8 items-center gap-2 bg-[#f4c542] text-black px-6 py-3 rounded-full font-semibold"
            >
              Donate Now <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* WHY DONATE */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Why your support matters
          </h2>

          <p className="text-white/70 max-w-3xl mb-12">
            Wildlife in Bangladesh faces increasing threats from habitat loss,
            environmental pressure, and human–wildlife conflict. Conservation
            requires both research and awareness — and your support helps make
            both possible.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#151813] p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Protect Wildlife</h3>
              <p className="text-white/60">
                Support efforts to protect endangered species and their habitats
                across Bangladesh.
              </p>
            </div>

            <div className="bg-[#151813] p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Support Field Research</h3>
              <p className="text-white/60">
                Help fund biodiversity monitoring, ecological research, and field-based
                conservation work.
              </p>
            </div>

            <div className="bg-[#151813] p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Build Awareness</h3>
              <p className="text-white/60">
                Enable conservation storytelling and environmental education that
                inspires communities and future generations.
              </p>
            </div>

          </div>
        </section>

        {/* DONATION OPTIONS */}
        <section id="donate-options" className="py-20 bg-[#11130f]">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-serif font-bold mb-6">
              Choose how you want to support
            </h2>

            <p className="text-white/70 max-w-2xl mb-12">
              Every contribution helps strengthen conservation impact and
              awareness across Bangladesh.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Option 1 */}
              <div className="bg-[#171a15] p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3">One-time Donation</h3>
                <p className="text-white/60 mb-6">
                  Make a direct contribution to support ongoing conservation work.
                </p>
                <button className="bg-[#f4c542] text-black px-5 py-2 rounded-full">
                  Donate Now
                </button>
              </div>

              {/* Option 2 */}
              <div className="bg-[#171a15] p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Monthly Support</h3>
                <p className="text-white/60 mb-6">
                  Provide continuous support for long-term conservation impact.
                </p>
                <button className="bg-[#f4c542] text-black px-5 py-2 rounded-full">
                  Become a Supporter
                </button>
              </div>

              {/* Option 3 */}
              <div className="bg-[#171a15] p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                <p className="text-white/60 mb-6">
                  Collaborate with WildlifeScope for conservation and awareness initiatives.
                </p>
                <Link href="/contact" className="border border-white/30 px-5 py-2 rounded-full">
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <HeartHandshake className="text-[#f4c542]" />
            <h2 className="text-4xl font-serif font-bold">
              Your impact
            </h2>
          </div>

          <p className="text-white/70 max-w-3xl">
            Your support contributes to real conservation outcomes — from protecting
            species and habitats to strengthening awareness and education.
            Every donation helps build a stronger future for wildlife in Bangladesh.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center bg-[#0a0b08]">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Together we can protect wildlife
          </h2>

          <p className="text-white/70 mb-8">
            Join WildlifeScope in building a stronger future for biodiversity.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#f4c542] text-black px-6 py-3 rounded-full font-semibold"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
        </section>

      </main>

      <Footer />
    </>
  )
}
