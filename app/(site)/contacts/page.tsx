import Introduction from "@/components/ContactUs/Introduction"
import FaqSection from "@/components/home/faq"

function page() {
  return (
    <section>
      <Introduction />
      <div className="px-5 pb-[300px] md:pb-[150px] lg:px-24">
        <FaqSection />
      </div>
    </section>
  )
}

export default page
