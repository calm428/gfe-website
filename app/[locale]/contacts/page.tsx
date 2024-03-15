import { Metadata } from "next"

import Introduction from "@/components/contact-us/introduction"
import FaqSection from "@/components/home/faq"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
  title: "Contact Us",
  description:
    "Reach out to us for any inquiries, questions, or just to say hello. We are here to assist you.",
  openGraph: {
    title: "Contact Us",
    description:
      "Reach out to us for any inquiries, questions, or just to say hello. We are here to assist you.",
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
