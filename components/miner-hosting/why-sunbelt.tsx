import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { AdvantageCard } from "./advantage-card"

export default function WhySunbeltSection() {
  const t = useTranslations("main")

  return (
    <section className="container pt-12 md:pt-20">
      <div className="pb-10 md:pb-14">
        <SectionTitle>{t("minerHosting.whySunbelt.title")}</SectionTitle>
        <SectionDescription>
          {t("minerHosting.whySunbelt.subtitle")}
        </SectionDescription>
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
    </section>
  )
}
