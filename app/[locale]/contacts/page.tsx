import { Metadata } from "next"

import Introduction from "@/components/contact-us/introduction"
import FaqSection from "@/components/home/faq"
import SpecsSection from "@/components/home/specs"

import { openGraphImage } from "../../shared-metadata"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
  title: "Contact",
  description: "Get in touch with us",
  openGraph: {
    ...openGraphImage,
    title: "Contact",
  },
}

function page() {
  return (
    <>
      <Introduction />
      <div className="container pb-[300px] md:pb-[150px] lg:px-24">
        <FaqSection />
      </div>
    </>
  )
}

export default page
