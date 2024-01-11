import React from "react"

import Introduction from "@/components/ContactUs/Introduction"
import FaqSection from "@/components/home/faq"

function page() {
  return (
    <section>
      <Introduction />
      <div className="px-5 lg:px-24 pb-[300px] md:pb-[150px]">
        <FaqSection />
      </div>
    </section>
  )
}

export default page
