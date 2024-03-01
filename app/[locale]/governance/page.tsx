import CommunitySection from "@/components/aboutUs/community-section"
import ScrollToTop from "@/components/common/scroll-to-top"
import AboutGIPSection from "@/components/governance/about-gip"
import HeroSection from "@/components/governance/hero"
import HowPaticipateSection from "@/components/governance/how-paticipate"

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
