import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import BenefitSection from "@/components/how-it-works/benefit"
import GuideSection from "@/components/how-it-works/guide"
import HeroSection from "@/components/how-it-works/hero"
import WorkFlowSection from "@/components/how-it-works/workflow"
import InvestSection from "@/components/miner/invest"
import MinerListSection from "@/components/miner/miner-list"

export default function IndexPage() {
  return (
    <div>
      <section
        className="grid items-center gap-4 md:py-10 !pb-0 !bg-cover !bg-no-repeat"
        style={{
          background:
            "url(/images/bg-gradient.webp), url(/images/how-it-works/hero-bg.png)",
        }}
      >
        <div className="container">
          <HeroSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/miners/bg1.png)",
        }}
      >
        <div className="container">
          <WorkFlowSection />
        </div>
      </section>
      <section className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat">
        <div className="container">
          <GuideSection />
        </div>
      </section>
      <section className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat">
        <div className="container">
          <BenefitSection />
        </div>
      </section>
    </div>
  )
}
