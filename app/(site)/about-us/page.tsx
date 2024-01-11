"use client"

import React from "react"

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
      <div className=" px-5 lg:px-24 bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px]">
        <FaqSection />
        <CommunitySection />
      </div>
    </section>
  )
}

export default page
