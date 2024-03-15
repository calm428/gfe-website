import Image from "next/image"
import nftPic_5 from "@/public/images/about-us/nft5.svg"
import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"

export default function PowerProduction() {
  const t = useTranslations("main")

  return (
    <section className="flex flex-col-reverse justify-center pt-14 lg:flex-row">
      <div className="h-fit">
        <Image src={nftPic_5} alt="image" className="lg:w-[80%]" />
      </div>
      <div className="container flex flex-col justify-center gap-8 lg:w-1/2 lg:px-0 lg:pr-24">
        <SectionTitle>{t("about_us.power_section.title")}</SectionTitle>
        <SectionDescription align="left">
          {t("about_us.power_section.description")}
        </SectionDescription>
      </div>
    </section>
  )
}
