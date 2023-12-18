import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HeroSection from "@/components/miner/hero"
import MinerListSection from "@/components/miner/miner-list"

export default function IndexPage() {
  return (
    <div>
      <section
        className="grid items-center gap-4 pt-6 md:py-10 !pb-0 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/bg-gradient.webp)",
        }}
      >
        <div className="container">
          <HeroSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 pt-6 md:py-10 !pb-0 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/miners/bg1.png)",
        }}
      >
        <div className="container">
          <MinerListSection />
        </div>
      </section>
    </div>
  )
}
