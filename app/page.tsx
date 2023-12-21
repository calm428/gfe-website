import AdvantagesSection from "@/components/home/advantages";
import CalculatorSection from "@/components/home/calculator";
import HomeSection from "@/components/home/intro";
import SliderSection from "@/components/home/slider";
import SpecsSection from "@/components/home/specs";
import WhySunbeltSection from "@/components/home/why-sunbelt";
import MinerListSection from "@/components/miner/miner-list";

export default function IndexPage() {
  return (
    <section
      className="grid items-center gap-4 pb-8 pt-6 md:py-10"
    >
      <div className="container px-5 md:px-8">
        <img src="/images/bg-gradient.webp" alt="" className="absolute w-full top-0 left-0 -z-10" />
        <HomeSection />
        <SliderSection />
        <SpecsSection />
        <AdvantagesSection />
        <CalculatorSection />
        <MinerListSection />
        <WhySunbeltSection />
      </div>
    </section>
  )
}
