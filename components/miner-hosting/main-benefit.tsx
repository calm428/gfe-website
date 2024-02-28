import { useTranslations } from "next-intl"

import { AdvantageCard } from "./advantage-card"

export default function MainBenefitSection() {
  const t = useTranslations("main")
  return (
    <div className="relative py-24">
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
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-5  font-goldman text-5xl font-normal text-transparent md:pb-10">
            {t("minerHosting.mainBenefit.title")}
          </h1>
          <h3 className="text-start font-mont font-medium text-muted-foreground md:text-xl">
            {t("minerHosting.mainBenefit.description")}
          </h3>
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
    </div>
  )
}
