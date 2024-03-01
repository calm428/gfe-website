import Introduction from "@/components/contact-us/introduction"
import FaqSection from "@/components/home/faq"

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
