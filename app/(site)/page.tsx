'use client';
import AdvantagesSection from "@/components/home/advantages"
import CalculatorSection from "@/components/home/calculator"
import CommunitySection from "@/components/home/community"
import FaqSection from "@/components/home/faq"
import HomeSection from "@/components/home/intro"
import PartnersSection from "@/components/home/partnersSection"
import SliderSection from "@/components/home/slider"
import SpecsSection from "@/components/home/specs"
import { appWithTranslation } from "next-i18next"
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
        <div className="px-10 container ">
          <FaqSection />
          <CommunitySection />
        </div>
      </div>
    </section>
  )
}
// export default IndexPage
export default appWithTranslation(IndexPage)