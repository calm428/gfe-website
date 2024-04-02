import adv1SVG from "@/public/advantages/adv1.svg"
import adv2SVG from "@/public/advantages/adv2.svg"
import { useTranslations } from "next-intl"

import AdvantageCard from "./advantage-card"

export default function AdvantagesSection() {
  const t = useTranslations("main")

  return (
    <div className="container grid gap-[50px] py-24 md:grid-cols-2">
      <AdvantageCard
        title={t("home.section3.card1title")}
        desc={t("home.section3.card1description")}
        image={adv2SVG}
      />
      <AdvantageCard
        title={t("home.section3.card2title")}
        desc={t("home.section3.card2description")}
        image={adv1SVG}
      />
    </div>
  )
}
