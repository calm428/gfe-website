import PartnersSection from "@/components/home/PartnersSection"
import AdvantagesSection from "@/components/home/advantages"
import CalculatorSection from "@/components/home/calculator"
import CommunitySection from "@/components/home/community"
import FaqSection from "@/components/home/faq"
import IncomeComparison from "@/components/home/income-comparison"
import HomeSection from "@/components/home/intro"
import LogoSection from "@/components/home/logo-section"
import MainBenifitSection from "@/components/home/main-benifit"
import SliderSection from "@/components/home/slider"
import SpecsSection from "@/components/home/specs"
import WhySunbeltSection from "@/components/home/why-sunbelt"
import MinerListSection from "@/components/miner/miner-list"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-4 pb-8">
      <div>
        <HomeSection />
        <SliderSection />
        <SpecsSection />
        <AdvantagesSection />
        <CalculatorSection />
        <PartnersSection />
        {/* <MinerListSection /> */}
        {/* <WhySunbeltSection /> */}
        {/* <IncomeComparison /> */}
        {/* <MainBenifitSection /> */}
      </div>
      {/* <LogoSection /> */}
      <div className=" px-5 lg:px-24 bg-[url('/bgs/bg.svg')] bg-cover pb-[300px] md:pb-[150px]">
        <FaqSection />
        <CommunitySection />
      </div>
    </section>
  )
}
