"use client"

import { useTranslation } from "react-i18next"

import { AdvantageCard } from "./advantage-card"

const WhySunbeltSection = () => {
  const { t } = useTranslation()
  return (
    <div className="container pt-12 md:pt-20">
      <div className="pb-10 md:pb-14">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-5  text-center font-goldman text-5xl font-normal text-transparent md:pb-10">
          {t("minerHosting.whySunbelt.title")}
        </h1>
        <h3 className="text-center font-mont text-lg">
          {t("minerHosting.whySunbelt.subtitle")}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        <AdvantageCard
          icon="/images/home/RenewableEnergy-icon.png"
          title={t("minerHosting.renewableEnergy.title")}
          text={t("minerHosting.renewableEnergy.subtitle")}
        />
        <AdvantageCard
          icon="/images/home/GeothermalCooling-icon.png"
          title={t("minerHosting.geothermalCooling.title")}
          text={t("minerHosting.geothermalCooling.subtitle")}
        />
        <AdvantageCard
          icon="/images/home/AfterSaleService-icon.png"
          title={t("minerHosting.afterSaleService.title")}
          text={t("minerHosting.afterSaleService.description")}
        />
        <AdvantageCard
          icon="/images/home/LowFee&HighProfit-icon.png"
          title={t("minerHosting.lowFeeHighProfit.title")}
          text={t("minerHosting.lowFeeHighProfit.description")}
        />
      </div>
    </div>
  )
}

export default WhySunbeltSection
