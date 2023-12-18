import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HeroSection from "@/components/miner/hero"

export default function IndexPage() {
  return (
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
  )
}
