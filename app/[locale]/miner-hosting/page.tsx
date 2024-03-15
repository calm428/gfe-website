import { Metadata } from "next"

import ContactUs from "@/components/common/contact-us"
import ScrollToTop from "@/components/common/scroll-to-top"
import AdvantagesSection from "@/components/miner-hosting/advantages"
import BenefitSection from "@/components/miner-hosting/benefit"
import BitcoinRateSection from "@/components/miner-hosting/bitcoin-rate"
import CalculatorSection from "@/components/miner-hosting/calculator"
import FaqSection from "@/components/miner-hosting/faq"
import GuideSection from "@/components/miner-hosting/guide"
import IncomeComparison from "@/components/miner-hosting/income-comparison"
import HomeSection from "@/components/miner-hosting/intro"
import LogoSection from "@/components/miner-hosting/logo-section"
import MainBenefitSection from "@/components/miner-hosting/main-benefit"
import MinerListSection from "@/components/miner-hosting/miner-list"
import SliderSection from "@/components/miner-hosting/slider"
import SpecsSection from "@/components/miner-hosting/specs"
import WhySunbeltSection from "@/components/miner-hosting/why-sunbelt"
import WorkFlowSection from "@/components/miner-hosting/work-flow"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
  title: "Miner Hosting",
  description:
    "Reliable and profitable platform, providing several new miner hosting service for end users.",
  openGraph: {
    title: "Miner Hosting",
    description:
      "Reliable and profitable platform, providing several new miner hosting service for end users.",
  },
}

export default function IndexPage() {
  return (
    <>
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
      <ScrollToTop />
    </>
  )
}
