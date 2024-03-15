import Image from "next/image"
import groupSVG from "@/public/advantages/Group.svg"
import hueSVG from "@/public/advantages/hue.svg"
import { useTranslations } from "next-intl"

import SectionBadge from "@/components/common/section-badge"
import SectionDescription from "@/components/common/section-description"
import SectionTitle from "@/components/common/section-title"

import { Button } from "../../ui/button"
import ListItem from "./list-item"

export default function CalculatorSection() {
  const t = useTranslations("main")

  return (
    <div className=" relative bg-[url('/bgs/Features.png')] bg-cover pb-60 sm:pt-[100px]">
      <Image src={hueSVG} alt="bg" className="absolute -left-5 top-0" />
      {/* image */}
      <div className="container flex flex-col-reverse  items-center justify-between  lg:flex-row">
        <div className="flex items-center justify-center lg:w-1/2">
          <Image src={groupSVG} alt="image" className="w-[90%]" />
        </div>
        {/* main */}
        <div className="px:[16rem] flex flex-col gap-12 lg:w-1/2">
          <div className="flex flex-col gap-6">
            <SectionBadge text={t("Future")} position="left" />
            <SectionTitle align="left">{t("home.section4.title")}</SectionTitle>
            <SectionDescription align="left">
              {t("home.section4.description")}
            </SectionDescription>
            <SectionDescription align="left" className="font-medium">
              {t("home.section4.description2")}
            </SectionDescription>
            <div className="grid  sm:grid-cols-2">
              <ListItem text={t("home.section4.serverHosting")} />
              <ListItem text={t("home.section4.districtRuralPower")} />
              <ListItem text={t("home.section4.EVCharging")} />
              <ListItem text={t("home.section4.hydrocarbonProduction")} />
              <ListItem text={t("home.section4.brewingAndDistillation")} />
              <ListItem text={t("home.section4.fishFarming")} />
              <ListItem text={t("home.section4.commercialLaundry")} />
            </div>
          </div>
          <div>
            <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
              Read More About Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
