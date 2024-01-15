import AdvantagesSection from "@/components/home/Advantages"
import CalculatorSection from "@/components/home/Calculator"
import CommunitySection from "@/components/home/Community"
import FaqSection from "@/components/home/Faq"
import HomeSection from "@/components/home/Intro"
import PartnersSection from "@/components/home/PartnersSection"
import SliderSection from "@/components/home/Slider"
import SpecsSection from "@/components/home/Specs"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-4 pb-8">
      <div>
        <HomeSection />
        <SliderSection />
        <SpecsSection />
        <AdvantagesSection />
        <CalculatorSection />
        <PartnersSection />
      </div>
      <div className="bg-[url('/images/nft/bg2.png')] bg-cover px-5 pb-[300px] md:pb-[150px] lg:px-24">
        <FaqSection />
        <CommunitySection />
      </div>
    </section>
  )
}
