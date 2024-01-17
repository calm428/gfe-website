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
    </section>
  )
}

export default page
