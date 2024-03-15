import Image from "next/image"
import minerPic from "@/public/images/home/miner.png"
import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { AdvantageCard } from "./advantage-card"

export default function AdvantagesSection() {
  const t = useTranslations("main")

  return (
    <section className="container py-10">
      <div className="pb-10 md:pb-14">
        <SectionTitle>
          {t("miner_hosting.advantagesOfGFEMining.title")}
        </SectionTitle>
        <SectionDescription>
          {t("miner_hosting.advantagesOfGFEMining.description")}
        </SectionDescription>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-2 gap-5">
          <AdvantageCard
            icon="/images/home/Specialization-icon.png"
            title={t("miner_hosting.specialization.title")}
            text={t("miner_hosting.specialization.description")}
          />
          <AdvantageCard
            icon="/images/home/EnergyEfficiency-icon.png"
            title={t("miner_hosting.energyEfficiency.title")}
            text={t("miner_hosting.energyEfficiency.description")}
          />
        </div>

        <div
          className="relative flex min-h-[525px] flex-col items-center rounded-3xl"
          style={{
            background: "linear-gradient(0deg, #2D79FF 10%, #22B4FD 50%)",
          }}
        >
          <div className="p-10">
            <p className="auth text-xl font-bold tracking-wider text-secondary">
              {t("miner_hosting.sunbeltMiner.title")}
            </p>
            <p className="auth mt-2 font-medium text-white transition-all duration-500">
              {t("miner_hosting.sunbeltMiner.description")}
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
            title={t("miner_hosting.highHashrate.title")}
            text={t("miner_hosting.highHashrate.description")}
          />
          <AdvantageCard
            icon="/images/home/RealTimeTrading-icon.png"
            title={t("miner_hosting.realTimeTrading.title")}
            text={t("miner_hosting.realTimeTrading.description")}
          />
        </div>
      </div>
    </section>
  )
}
