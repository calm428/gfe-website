import ContactUs from "@/components/NFT/contact-us"
import BenefitSection from "@/components/miner-hosting/benefit"
import GuideSection from "@/components/miner-hosting/guide"
import WorkFlowSection from "@/components/miner-hosting/work-flow"
import AdvantagesSection from "@/components/miner-hosting/advantages"
import BitcoinRateSection from "@/components/miner-hosting/bitcoin-rate"
import CalculatorSection from "@/components/miner-hosting/calculator"
import FaqSection from "@/components/miner-hosting/faq"
import IncomeComparison from "@/components/miner-hosting/income-comparison"
import HomeSection from "@/components/miner-hosting/intro"
import LogoSection from "@/components/miner-hosting/logo-section"
import MainBenefitSection from "@/components/miner-hosting/main-benefit"
import MinerListSection from "@/components/miner-hosting/miner-list"
import SliderSection from "@/components/miner-hosting/slider"
import SpecsSection from "@/components/miner-hosting/specs"
import WhySunbeltSection from "@/components/miner-hosting/why-sunbelt"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-4">
      <HomeSection />
      <SliderSection />
      <SpecsSection />
      <AdvantagesSection />
      <CalculatorSection />
      <MinerListSection />
      <WorkFlowSection />
      <GuideSection />
      <BenefitSection />
      <WhySunbeltSection />
      <IncomeComparison />
      <MainBenefitSection />
      <BitcoinRateSection />
      <LogoSection />
      <div className="bg-[url('/images/nft/bg2.png')] bg-cover bg-bottom px-5 pb-[300px] md:pb-[150px] lg:px-24">
        <FaqSection />
        <ContactUs />
      </div>
    </section>
  )
}