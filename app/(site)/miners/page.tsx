import HeroSection from "@/components/miner/hero"
import InvestSection from "@/components/miner/invest"
import MinerListSection from "@/components/miner/miner-list"

export default function IndexPage() {
  return (
    <div>
      <section
        className="grid items-center gap-4 !bg-cover !bg-no-repeat !pb-0 pt-6 md:py-10"
        style={{
          background: "url(/images/bg-gradient.webp)",
        }}
      >
        <div className="container">
          <HeroSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 !bg-cover !bg-no-repeat py-4"
        style={{
          background: "url(/images/miners/bg1.png)",
        }}
      >
        <div className="container">
          <MinerListSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 !bg-cover !bg-no-repeat py-4"
        style={{
          background: "url(/images/miners/bg2.png)",
        }}
      >
        <div className="container">
          <InvestSection />
        </div>
      </section>
    </div>
  )
}
