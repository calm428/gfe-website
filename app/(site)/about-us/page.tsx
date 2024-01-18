"use client"

import AboutEnergy from "@/components/aboutUs/about-energy"
import AboutGFE from "@/components/aboutUs/about-gfe"
import CommunitySection from "@/components/aboutUs/community-section"
import FaqSection from "@/components/aboutUs/faq-section"
import Introduction from "@/components/aboutUs/introduction"
import MarketPlace from "@/components/aboutUs/market-place"
import PowerProduction from "@/components/aboutUs/power-production"

function page() {
  return (
    <section>
      <Introduction />
      <AboutGFE />
      <AboutEnergy />
      <MarketPlace />
      <PowerProduction />
      <FaqSection />
      <div className=" bg-[url('/images/nft/bg2.png')] bg-cover container pb-[300px] md:pb-[150px] lg:px-24">
        <CommunitySection />
      </div>
    </section>
  )
}

export default page
