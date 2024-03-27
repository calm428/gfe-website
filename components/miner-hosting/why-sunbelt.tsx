import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { AdvantageCard } from "./advantage-card"

export default function WhySunbeltSection() {
  const t = useTranslations("main")

  return (
    <section className="container pt-12 md:pt-20">
      <div className="pb-10 md:pb-14">
        <SectionTitle>{t("miner_hosting.whySunbelt.title")}</SectionTitle>
        <SectionDescription>
          {t("miner_hosting.whySunbelt.subtitle")}
        </SectionDescription>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        <AdvantageCard
          icon="/images/home/RenewableEnergy-icon.png"
          title={t("miner_hosting.renewableEnergy.title")}
          text={t("miner_hosting.renewableEnergy.subtitle")}
        />
        <AdvantageCard
          icon="/images/home/GeothermalCooling-icon.png"
          title={t("miner_hosting.geothermalCooling.title")}
          text={t("miner_hosting.geothermalCooling.subtitle")}
        />
        <AdvantageCard
          icon="/images/home/AfterSaleService-icon.png"
          title={t("miner_hosting.afterSaleService.title")}
          text={t("miner_hosting.afterSaleService.description")}
        />
        <AdvantageCard
          icon="/images/home/LowFee&HighProfit-icon.png"
          title={t("miner_hosting.lowFeeHighProfit.title")}
          text={t("miner_hosting.lowFeeHighProfit.description")}
        />
      </div>
    </section>
  )
}
