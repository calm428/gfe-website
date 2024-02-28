import Image from "next/image"
import groupSVG from "@/public/advantages/Group.svg"
import hueSVG from "@/public/advantages/hue.svg"
import { useTranslations } from "next-intl"

import { Button } from "../../ui/button"
import ListItem from "./list-item"

export default function CalculatorSection() {
  const t = useTranslations("main")

  return (
    <div className=" relative bg-[url('/bgs/Features.svg')] bg-cover pb-60 sm:pt-[100px]">
      <Image src={hueSVG} alt="bg" className="absolute -left-5 top-0" />
      {/* image */}
      <div className="container flex flex-col-reverse  items-center justify-between  lg:flex-row">
        <div className="flex items-center justify-center lg:w-1/2">
          <Image src={groupSVG} alt="image" className="w-[90%]" />
        </div>
        {/* main */}
        <div className="px:[16rem] flex flex-col gap-12 lg:w-1/2">
          <div className="flex flex-col gap-6">
            <div className="mr-auto rounded-sm bg-[#EEF5FF]">
              <div className="rounded-md bg-primary/10 p-2">
                <p className="button-87 whitespace-nowrap !text-base !font-medium text-primary">
                  <span className="actual-text">{t("Future")}</span>
                  <span className="front-text">{t("Future")}</span>
                </p>
              </div>
            </div>
            <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman  text-6xl  font-normal text-transparent">
              {t("home_page.section4.title")}
            </h1>
            <p className=" auth text-lg font-medium text-muted-foreground">
              {t("home_page.section4.description")}
            </p>
            <p className="auth text-lg font-medium">
              {t("home_page.section4.description2")}
            </p>
            <div className="grid  sm:grid-cols-2">
              <ListItem text={t("home_page.section4.serverHosting")} />
              <ListItem text={t("home_page.section4.districtRuralPower")} />
              <ListItem text={t("home_page.section4.EVCharging")} />
              <ListItem text={t("home_page.section4.hydrocarbonProduction")} />
              <ListItem text={t("home_page.section4.brewingAndDistillation")} />
              <ListItem text={t("home_page.section4.fishFarming")} />
              <ListItem text={t("home_page.section4.commercialLaundry")} />
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
