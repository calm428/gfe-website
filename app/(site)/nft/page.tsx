"use client"

import { ScrollToTop } from "react-simple-scroll-up"

import AboutDappr from "@/components/NFT/about-dappr"
import ContactUs from "@/components/NFT/contact-us"
import FAQ from "@/components/NFT/faq"
import Introduction from "@/components/NFT/introduction"
import Roadmap from "@/components/NFT/roadmap"
import ServerHosting from "@/components/NFT/server-hosting"

function page() {
  return (
    <section>
      <Introduction />
      <AboutDappr />
      <ServerHosting />
      <Roadmap />
      <div className=" bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px] lg:px-24">
        <div className="container">
          <FAQ />
          <ContactUs />
        </div>
      </div>
      <ScrollToTop
        className="!bottom-[50px] z-50"
        strokeFillColor="#21b4fd"
        strokeEmptyColor="#21b4fd55"
        bgColor="#21b4fd99"
      />
    </section>
  )
}

export default page
