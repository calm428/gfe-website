import Image from "next/image"
import huePic from "@/public/advantages/hue.svg"
import personPic from "@/public/images/about-us/person.png"
import { useTranslations } from "next-intl"

import SectionTitle from "../common/section-title"

export default function LaPazSection() {
  const t = useTranslations("main")

  return (
    <section className="relative flex justify-center">
      <Image src={huePic} alt="image" className="absolute left-0 h-96" />
      <Image
        src={huePic}
        alt="image"
        className="absolute right-0 h-96 rotate-180	"
      />
      <div className="container flex flex-col-reverse py-14 xl:flex-row">
        <div className="z-20 mt-[-30%] rounded-[20px] border border-border bg-background p-11 shadow-lg xl:mt-0 xl:w-[80%]">
          <SectionTitle align="left">La Paz BCS example:</SectionTitle>
          <div className="auth flex flex-col gap-4">
            <p className="text-left text-base lg:text-lg">
              {t("about_us.faq_section.para1")}
            </p>
            <p className="text-left text-base lg:text-lg">
              {t("about_us.faq_section.para2")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center xl:justify-start">
          <Image
            src={personPic}
            alt="image"
            className="w-auto xl:-ml-5 xl:h-[80%]"
          />
        </div>
      </div>
    </section>
  )
}
