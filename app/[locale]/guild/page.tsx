import { Metadata } from "next"
import dynamic from "next/dynamic"

import CommunitySection from "@/components/common/community"
import ScrollToTop from "@/components/common/scroll-to-top"
import BenefitSection from "@/components/guild/benefit"
import FeatureSection from "@/components/guild/feature"
// import GuildMap from "@/components/guild/guild-map"
import HeroSection from "@/components/guild/hero"
import LeadGuildSection from "@/components/guild/lead-guild"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
  title: "Guild",
  description: "Join the GFE Guild",
  openGraph: {
    title: "Guild",
    description: "Join the GFE Guild",
  },
}

const GuildMap = dynamic(() => import("@/components/guild/guild-map"), {
  ssr: false,
})

export default function GuildPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <LeadGuildSection />
      <BenefitSection />
      <div className="space-y-10 bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px]">
        <GuildMap />
        <CommunitySection />
      </div>
      <ScrollToTop />
    </>
  )
}
