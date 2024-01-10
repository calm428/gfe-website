import React from "react"

import AboutDappr from "@/components/NFT/AboutDappr"
import FAQ from "@/components/NFT/FAQ"
import Introduction from "@/components/NFT/Introduction"
import Roadmap from "@/components/NFT/Roadmap"
import ServerHosting from "@/components/NFT/ServerHosting"
import CommunitySection from "@/components/home/community"
import ContactUs from "@/components/NFT/ContactUs"

function page() {
  return (
    <section>
      <Introduction />
      <AboutDappr />
      <ServerHosting />
      <Roadmap />
      <div className=" px-5 lg:px-24 bg-[url('/bgs/bg.svg')] bg-cover pb-[300px] md:pb-[150px]">
        <FAQ />
        <ContactUs />
      </div>
    </section>
  )
}

export default page
