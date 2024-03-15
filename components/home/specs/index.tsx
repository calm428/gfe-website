import Image from "next/image"
import globalPic from "@/public/bgs/global.jpg"
import gridPic from "@/public/bgs/grid.jpg"
import rightPic from "@/public/bgs/right1.png"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import SectionDescription from "@/components/common/section-description"
import SectionTitle from "@/components/common/section-title"

import FeatureCard from "./feature-card"

export default function SpecsSection() {
  const features = siteConfig.features
  const t = useTranslations("main")

  return (
    <div className="relative mt-0	 overflow-hidden bg-background lg:mt-40	">
      <div className="container  flex flex-col justify-between gap-12 space-y-14 py-[100px] pb-20 lg:py-[207px] lg:pb-56 lg:pt-24">
        <div className=" relative z-30 flex flex-col gap-[24px]">
          <SectionTitle align="left">{t("home.section2.title")}</SectionTitle>
          <SectionDescription align="left">
            {t("home.section2.description")}
          </SectionDescription>
        </div>
        <div className=" relative z-30 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, ind) => (
            <FeatureCard
              key={ind}
              icon={feature.icon}
              title={t(feature.title as any)}
              desc={t(feature.desc as any)}
              link={feature.link}
            />
          ))}
        </div>
      </div>

      <Image
        src={gridPic}
        alt="bg"
        className="absolute left-0 top-0 hidden w-1/2 lg:block "
      />
      <Image
        src={globalPic}
        alt="bg"
        className="absolute bottom-0 right-0 opacity-50 xl:top-0 "
      />
      <Image src={rightPic} alt="bgs" className="absolute bottom-0 w-full" />
    </div>
  )
}
