import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { AdvantageCard } from "./advantage-card"

export default function MainBenefitSection() {
  const t = useTranslations("main")
  return (
    <section className="relative py-10">
      {/* <div className="overflow-hidden">
        <Image
          src="/images/miner-hosting/globe.gif"
          alt="globe"
          width={450}
          height={500}
          className="absolute -bottom-60 -right-36 z-[-1] w-1/2 opacity-10"
        />
      </div> */}
      <div className="container flex flex-col items-start justify-start px-10">
        <div className="pb-10 md:pb-14">
          <SectionTitle align="left">
            {t("minerHosting.mainBenefit.title")}
          </SectionTitle>
          <SectionDescription align="left">
            {t("minerHosting.mainBenefit.description")}
          </SectionDescription>
        </div>

        <div className="grid w-auto grid-cols-1 justify-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AdvantageCard
            icon="/images/home/Safety-icon.png"
            title={t("minerHosting.safety.title")}
            text={t("minerHosting.safety.description")}
          />
          <AdvantageCard
            icon="/images/home/Sustainability-icon.png"
            title={t("minerHosting.sustainability.title")}
            text={t("minerHosting.sustainability.description")}
          />
          <AdvantageCard
            icon="/images/home/MaxProfit-icon.png"
            title={t("minerHosting.max_profit.title")}
            text={t("minerHosting.max_profit.description")}
          />
        </div>
      </div>
    </section>
  )
}
