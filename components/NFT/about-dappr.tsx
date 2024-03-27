import Image from "next/image"
import dapprPic from "@/public/images/nft/dappr.svg"
import { useTranslations } from "next-intl"

import SectionBadge from "../common/section-badge"
import SectionTitle from "../common/section-title"

function AboutDappr() {
  const t = useTranslations("main")

  return (
    <section className="relative bg-[url('/images/nft/bg1.png')] bg-cover bg-center bg-no-repeat pb-[1500px] pt-24 xl:pb-[900px]">
      <div className="container items-center justify-between gap-12 xl:flex">
        <div className="flex flex-col gap-6 lg:px-24 xl:w-1/2 xl:px-0">
          <SectionBadge text={t("nft.about_section.title")} position="left" />
          <SectionTitle align="left">
            {t("nft.about_section.title")}
          </SectionTitle>
          <p className="auth text-justify font-mont text-base md:text-lg">
            {t("nft.about_section.para1")}
          </p>
          <p className="auth text-justify font-mont text-base md:text-lg">
            <span className="font-muted-foreground">
              {t("nft.about_section.para2")}
            </span>
          </p>
          <p className="auth text-justify font-mont text-base md:text-lg">
            <span className="font-muted-foreground">
              {t("nft.about_section.para3")}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center bg-opacity-45 backdrop-blur">
          <Image src={dapprPic} alt="image" className="" />
        </div>
      </div>
    </section>
  )
}

export default AboutDappr
