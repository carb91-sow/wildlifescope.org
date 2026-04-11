import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { MissionSection } from "@/components/sections/mission"
import { WildlifeSection } from "@/components/sections/wildlife"
import { InitiativesSection } from "@/components/sections/initiatives"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <WildlifeSection />
        <InitiativesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
