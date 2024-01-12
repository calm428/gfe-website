import AboutDappr from "@/components/NFT/AboutDappr"
import ContactUs from "@/components/NFT/ContactUs"
import FAQ from "@/components/NFT/FAQ"
import Introduction from "@/components/NFT/Introduction"
import Roadmap from "@/components/NFT/Roadmap"
import ServerHosting from "@/components/NFT/ServerHosting"

function page() {
  return (
    <section>
      <Introduction />
      <AboutDappr />
      <ServerHosting />
      <Roadmap />
      <div className=" bg-[url('/images/nft/bg2.png')] bg-cover px-5 pb-[300px] md:pb-[150px] lg:px-24">
        <FAQ />
        <ContactUs />
      </div>
    </section>
  )
}

export default page
