import { useTranslation } from "next-i18next"

import AdvantageCard from "./advantage-card"

const AdvantagesSection = () => {
  const { t } = useTranslation()

  return (
    <div className="container grid gap-[50px] py-24 md:grid-cols-2">
      <AdvantageCard
        title={t("home_page.section3.card1title")}
        desc={t("home_page.section3.card1description")}
        image="/advantages/adv2.svg"
      />
      <AdvantageCard
        title={t("home_page.section3.card2title")}
        desc={t("home_page.section3.card2description")}
        image="/advantages/adv1.svg"
      />
    </div>
  )
}

export default AdvantagesSection
