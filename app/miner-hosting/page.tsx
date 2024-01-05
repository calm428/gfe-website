import AdvantagesSection from "@/components/miner-hosting/advantages"
import CalculatorSection from "@/components/miner-hosting/calculator"
import FaqSection from "@/components/miner-hosting/faq"
import IncomeComparison from "@/components/miner-hosting/income-comparison"
import HomeSection from "@/components/miner-hosting/intro"
import LogoSection from "@/components/miner-hosting/logo-section"
import MainBenifitSection from "@/components/miner-hosting/main-benifit"
import SliderSection from "@/components/miner-hosting/slider"
import SpecsSection from "@/components/miner-hosting/specs"
import WhySunbeltSection from "@/components/miner-hosting/why-sunbelt"
import MinerListSection from "@/components/miner/miner-list"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-4 pb-8 pt-6 md:py-10">
      <div className="container px-5 md:px-8">
        <img
          src="/images/bg-gradient.webp"
          alt=""
          className="absolute w-full top-0 left-0 -z-10"
        />
        <HomeSection />
        <SliderSection />
        <SpecsSection />
        <AdvantagesSection />
        <CalculatorSection />
        <MinerListSection />
        <WhySunbeltSection />
        <IncomeComparison />
        <MainBenifitSection />
      </div>
      <LogoSection />
      <div className="container px-5 md:px-8">
        <FaqSection />
      </div>
    </section>
  )
}
