import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import BecomeAMemberSection from "@/components/company/become-a-member"
import CertificateSection from "@/components/company/certificate"
import FormSection from "@/components/company/form"
import GoalSection from "@/components/company/goal"
import HeroSection from "@/components/company/hero"
import InvestSection from "@/components/company/invest"
import LocationSection from "@/components/company/location"
import OverviewSection from "@/components/company/overview"
import UpcomingEventsSection from "@/components/company/upcoming-events"

export default function IndexPage() {
  return (
    <div>
      <section
        className="grid items-center gap-4 pt-6 md:py-10 !pb-0 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/bg-gradient.webp)",
        }}
      >
        <div className="container">
          <HeroSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/bg-gradient.webp)",
        }}
      >
        <div className="container">
          <OverviewSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/company/bg1.png)",
        }}
      >
        <div className="container">
          <GoalSection />
        </div>
      </section>
      <section className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat">
        <div className="container">
          <LocationSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/company/bg2.png)",
        }}
      >
        <div className="container">
          <CertificateSection />
        </div>
      </section>
      <section className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat">
        <div className="container">
          <UpcomingEventsSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/company/bg3.png)",
        }}
      >
        <div className="container">
          <BecomeAMemberSection />
        </div>
      </section>
      <section
        className="grid items-center gap-4 py-4 !bg-cover !bg-no-repeat"
        style={{
          background: "url(/images/miners/bg2.png)",
        }}
      >
        <div className="container">
          <InvestSection />
        </div>

        <div className="container">
          <FormSection />
        </div>
      </section>
    </div>
  )
}
