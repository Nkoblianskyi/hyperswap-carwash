import Hero from "@/components/hero"
import ServicesOverview from "@/components/services-overview"
import AboutSection from "@/components/about-section"
import TechniquesSection from "@/components/techniques-section"
import CarCareSection from "@/components/car-care-section"
import CookieBanner from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <TechniquesSection />
      <CarCareSection />
      <AboutSection />
      <CookieBanner />
    </main>
  )
}
