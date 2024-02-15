"use client"

import { useTranslation } from "react-i18next"

import { Button } from "../../ui/button"
import ListItem from "./list-item"

function CalculatorSection() {
  const { t } = useTranslation()

  return (
    <div className=" relative bg-[url('/bgs/Features.svg')] bg-cover pb-60 sm:pt-[100px]">
      <img
        src="/advantages/hue.svg"
        alt="bg"
        className="absolute -left-5 top-0"
      />
      {/* image */}
      <div className="container flex flex-col-reverse  items-center justify-between  lg:flex-row">
        <div className="flex items-center justify-center lg:w-1/2">
          <img src="/advantages/Group.svg" alt="image" className="w-[90%]" />
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
              <ListItem text={t("serverHosting")} />
              <ListItem text={t("districtRuralPower")} />
              <ListItem text={t("EVCharging")} />
              <ListItem text={t("hydrocarbonProduction")} />
              <ListItem text={t("brewingAndDistillation")} />
              <ListItem text={t("fishFarming")} />
              <ListItem text={t("commercialLaundry")} />
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

export default CalculatorSection
