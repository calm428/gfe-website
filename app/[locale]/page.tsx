"use client"

import { ScrollToTop } from "react-simple-scroll-up"

import AdvantagesSection from "@/components/home/advantages"
import CalculatorSection from "@/components/home/calculator"
import CommunitySection from "@/components/home/community"
import FaqSection from "@/components/home/faq"
import HomeSection from "@/components/home/intro"
import PartnersSection from "@/components/home/partnersSection"
import SliderSection from "@/components/home/slider"
import SpecsSection from "@/components/home/specs"

function IndexPage() {
  return (
    <section className="grid items-center gap-4 pb-8">
      <div>
        <HomeSection />
        <SliderSection />
        <SpecsSection />
        <AdvantagesSection />
        <CalculatorSection />
        <PartnersSection />
      </div>
      <div className="bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px] ">
        <div className="container px-10 ">
          <FaqSection />
          <CommunitySection />
        </div>
      </div>
      <ScrollToTop
        className="!bottom-[50px] z-50"
        strokeFillColor="#21b4fd"
        strokeEmptyColor="#21b4fd55"
        bgColor="#21b4fd99"
      />
    </section>
  )
}
// export default IndexPage
export default IndexPage
