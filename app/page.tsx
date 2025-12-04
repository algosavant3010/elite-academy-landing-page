import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import RiderTechSection from "@/components/rider-tech-section"
// import SignatureMarqueeSection from "@/components/signature-marquee-section"
import BikeShowcase from "@/components/bike-showcase"
import HelmetHall from "@/components/helmet-hall"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import MasonryGallerySection from "@/components/masonry-gallery-section"
import Image from "next/image"
import { RaceDayCountdown } from "@/components/race-day-countdown"
import { InteractiveSchedule } from "@/components/interactive-schedule"
import { HistoricalResultsAccordion } from "@/components/historical-results-accordion"
import AcademyHero from "@/components/academy-hero"
import ProgramsSection from "@/components/programs-section"
import InstructorsSection from "@/components/instructors-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="relative bg-academy-dark">
      <Header />
      <AcademyHero />
      <ProgramsSection />
      <InstructorsSection />
      <TestimonialsSection />
      <CTASection />
      <HeroSection />
      <div className="relative z-10">
        <MissionSection />
        <MasonryGallerySection />
        {/* <TrackSplitSection /> */}
        <RiderTechSection />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/trilha2.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <HelmetHall />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/splash.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center bg-lorenzo-dark"
            priority={false}
          />
        </div>
        <BikeShowcase />

        <RaceDayCountdown />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/trilhadiee.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center bg-lorenzo-dark"
            priority={false}
          />
        </div>
        <InteractiveSchedule />
        <HistoricalResultsAccordion />

        <SocialSection />
        <Footer />
      </div>
    </main>
  )
}
