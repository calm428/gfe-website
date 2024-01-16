import BenefitSection from "@/components/how-it-works/benefir/benefit"
import GuideSection from "@/components/how-it-works/guide"
import HeroSection from "@/components/how-it-works/hero"
import WorkFlowSection from "@/components/how-it-works/work-flow"

export default function IndexPage() {
  return (
    <div>
      <section
        className="grid items-center gap-4 !bg-cover !bg-no-repeat !pb-0 md:py-10"
        style={{
          background:
            "url(/images/bg-gradient.webp), url(/images/how-it-works/hero-bg.png)",
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
          <WorkFlowSection />
        </div>
      </section>
      <section className="grid items-center gap-4 !bg-cover !bg-no-repeat py-4">
        <div className="container">
          <GuideSection />
        </div>
      </section>
      <section className="grid items-center gap-4 !bg-cover !bg-no-repeat py-4">
        <div className="container">
          <BenefitSection />
        </div>
      </section>
    </div>
  )
}
