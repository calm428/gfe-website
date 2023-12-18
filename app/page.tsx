import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HomeSection from "@/components/home/intro"

export default function IndexPage() {
  return (
    <section
      className="grid items-center gap-4 pb-8 pt-6 md:py-10 !bg-cover !bg-no-repeat"
      style={{
        background: "url(/images/bg-gradient.webp)",
      }}
    >
      <div className="container">
        <HomeSection />
      </div>
    </section>
  )
}
