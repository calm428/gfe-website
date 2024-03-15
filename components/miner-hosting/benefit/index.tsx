import { useTranslations } from "next-intl"

import { BenefitCard } from "./benefit-card"

export default function BenefitSection() {
  const t = useTranslations("main")

  const CARDS_DATA = [
    {
      title: t("miner_hosting.highIncome.title"),
      description: t("miner_hosting.highIncome.subtitle"),
    },
    {
      title: t("miner_hosting.makeTheWorldBetter.title"),
      description: t("miner_hosting.makeTheWorldBetter.subtitle"),
    },
  ]
  return (
    <section className="container flex flex-col items-stretch justify-center gap-4 pb-32 md:flex-row">
      <div
        className="mx-auto h-96 max-w-sm rounded-xl bg-primary bg-cover bg-center bg-no-repeat p-4 md:mx-0 md:h-auto md:w-2/5"
        style={{ backgroundImage: "url(/images/how-it-works/bg2.png)" }}
      >
        <div className="font-goldman text-2xl text-white">
          {t("miner_hosting.benefitsOfHosting.title")}
        </div>
      </div>
      <div className="w-full space-y-4 md:w-3/5">
        {CARDS_DATA.map((card) => (
          <BenefitCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}
