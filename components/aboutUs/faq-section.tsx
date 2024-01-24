import Image from "next/image"
import { useTranslation } from "next-i18next"

function FaqSection() {
  const { t } = useTranslation()

  return (
    <div className="relative flex justify-center">
      <img src="/advantages/hue.svg" className="absolute left-0 h-96" />
      <img
        src="/advantages/hue.svg"
        className="absolute right-0 h-96 rotate-180	"
      />
      <div className="container flex flex-col-reverse py-14 xl:flex-row">
        <div className="z-20 -mt-[30%] rounded-[20px] border border-border bg-background p-11 shadow-lg xl:mt-0 xl:w-[80%]">
          <h1 className=" bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-monument text-[30px] text-transparent">
            La Paz BCS example:
          </h1>
          <div className="auth flex flex-col gap-4">
            <p className=" text-base font-medium lg:text-lg">
              {t("about_us_page.faq_section.question1")}
            </p>
            <p className=" text-base lg:text-lg">
              {t("about_us_page.faq_section.question2")}
            </p>
            <p className=" text-base lg:text-lg">
              {t("about_us_page.faq_section.question3")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center xl:justify-start">
          <Image
            src="/images/about-us/person.png"
            alt="image"
            width={534}
            height={654}
            className="w-auto xl:-ml-5 xl:h-[80%]"
          />
        </div>
      </div>
    </div>
  )
}

export default FaqSection
