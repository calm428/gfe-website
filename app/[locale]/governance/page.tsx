import { Metadata } from "next"

import CommunitySection from "@/components/common/community"
import ScrollToTop from "@/components/common/scroll-to-top"
import AboutGIPSection from "@/components/governance/about-gip"
import HeroSection from "@/components/governance/hero"
import HowPaticipateSection from "@/components/governance/how-paticipate"

import { openGraphImage } from "../../shared-metadata"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
  title: "Governance",
  description:
    "GFE Governance is the framework and processes responsible for contributing to the green energy world and facilitating changes to the GFE ecosystem.",
  openGraph: {
    ...openGraphImage,
    title: "Governance",
  },
}

export default function GovernancePage() {
  return (
    <>
      <HeroSection />
      <AboutGIPSection />
      <div className="space-y-10 bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px]">
        <HowPaticipateSection />
        <CommunitySection />
      </div>
      <ScrollToTop />
    </>
  )
}
