"use client"

import React from "react"

import AboutGFE from "@/components/aboutUs/AboutGFE"
import Introduction from "@/components/aboutUs/Introduction"
import AboutEnergy from "@/components/aboutUs/AboutEnergy"
import MarketPlace from "@/components/aboutUs/MarketPlace"
import PowerProduction from "@/components/aboutUs/PowerProduction"
import CommunitySection from "@/components/aboutUs/CommunitySection"
import FaqSection from "@/components/aboutUs/FaqSection"

function page() {
  return (
    <section>
      <Introduction />
      <AboutGFE />
      <AboutEnergy/>
      <MarketPlace/>
      <PowerProduction/>
      <div className=" px-5 lg:px-24 bg-[url('/bgs/bg.svg')] bg-cover pb-[300px] md:pb-[150px]">
        <FaqSection />
        <CommunitySection/>
      </div>
    </section>
  )
}

export default page
