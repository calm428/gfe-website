"use client"

import AboutEnergy from "@/components/aboutUs/AboutEnergy"
import AboutGFE from "@/components/aboutUs/AboutGFE"
import CommunitySection from "@/components/aboutUs/CommunitySection"
import FaqSection from "@/components/aboutUs/FaqSection"
import Introduction from "@/components/aboutUs/Introduction"
import MarketPlace from "@/components/aboutUs/MarketPlace"
import PowerProduction from "@/components/aboutUs/PowerProduction"

function page() {
  return (
    <section>
      <Introduction />
      <AboutGFE />
      <AboutEnergy />
      <MarketPlace />
      <PowerProduction />
      <div className=" bg-[url('/images/nft/bg2.png')] bg-cover px-5 pb-[300px] md:pb-[150px] lg:px-24">
        <FaqSection />
        <CommunitySection />
      </div>
    </section>
  )
}

export default page
