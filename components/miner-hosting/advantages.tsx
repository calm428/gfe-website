import Image from "next/image"
import minerPic from "@/public/images/home/miner.png"
import { getTranslations } from "next-intl/server"

import { AdvantageCard } from "./advantage-card"

export default async function AdvantagesSection() {
  const t = await getTranslations("main")

  return (
    <div className="container py-10">
      <div className="pb-10 md:pb-14">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-2 text-center  font-goldman text-5xl font-normal text-transparent md:pb-3">
          {t("minerHosting.advantagesOfGFEMining.title")}
        </h1>
        <h3 className="text-center font-mont text-lg font-medium text-muted-foreground md:text-xl">
          {t("minerHosting.advantagesOfGFEMining.description")}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-2 gap-5">
          <AdvantageCard
            icon="/images/home/Specialization-icon.png"
            title={t("minerHosting.specialization.title")}
            text={t("minerHosting.specialization.description")}
          />
          <AdvantageCard
            icon="/images/home/EnergyEfficiency-icon.png"
            title={t("minerHosting.energyEfficiency.title")}
            text={t("minerHosting.energyEfficiency.description")}
          />
        </div>

        <div
          className="relative flex min-h-[525px] flex-col items-center rounded-3xl"
          style={{
            background: "linear-gradient(0deg, #2D79FF 10%, #22B4FD 50%)",
          }}
        >
          <div className="p-10">
            <h1 className="auth text-xl font-bold tracking-wider text-secondary">
              {t("minerHosting.sunbeltMiner.title")}
            </h1>
            <p className="auth mt-2 font-medium text-white transition-all duration-500">
              {t("minerHosting.sunbeltMiner.description")}
            </p>
          </div>
          <Image
            src={minerPic}
            className="absolute bottom-0 w-full max-w-[350px] px-2.5"
            alt="miner image"
          />
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-5">
          <AdvantageCard
            icon="/images/home/HighHashrate-icon.png"
            title={t("minerHosting.highHashrate.title")}
            text={t("minerHosting.highHashrate.description")}
          />
          <AdvantageCard
            icon="/images/home/RealTimeTrading-icon.png"
            title={t("minerHosting.realTimeTrading.title")}
            text={t("minerHosting.realTimeTrading.description")}
          />
        </div>
      </div>
    </div>
  )
}
