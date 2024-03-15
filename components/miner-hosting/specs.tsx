"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"

export default function SpecsSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const t = useTranslations("main")

  const isCurrent = (index: number) => {
    return index == currentCard
  }
  const CARDS_DATA = [
    {
      image: "/images/home/SolarPower.png",
      icon: "/images/home/SolarPower-icon.png",
      title: t("miner_hosting.solarPower.title"),
      description: t("miner_hosting.solarPower.description"),
    },
    {
      image: "/images/home/ImmersionCooling.png",
      icon: "/images/home/ImmersionCooling-icon.png",
      title: t("miner_hosting.immersionCooling.title"),
      description: t("miner_hosting.immersionCooling.description"),
    },
    {
      image: "/images/home/GeothermalHeatPump.png",
      icon: "/images/home/GeothermalHeatPump-icon.png",
      title: t("miner_hosting.geothermalHeatPump.title"),
      description: t("miner_hosting.geothermalHeatPump.description"),
    },
    {
      image: "/images/home/EarthshipBuilding.png",
      icon: "/images/home/EarthshipBuilding-icon.png",
      title: t("miner_hosting.earthshipBuilding.title"),
      description: t("miner_hosting.earthshipBuilding.description"),
    },
  ]
  return (
    <section className="bg-[url('/images/miner-hosting/bg2.png')] bg-cover bg-bottom bg-no-repeat pb-14 pt-10 md:pt-24">
      <div className="container">
        <div className="pb-10 md:pb-14">
          <SectionTitle>
            {t("miner_hosting.miningEcosystem.title")}
          </SectionTitle>
          <SectionDescription>
            {t("miner_hosting.miningEcosystem.description")}
          </SectionDescription>
        </div>

        {/* cards */}
        <div className="flex flex-col justify-center gap-4 xl:flex-row">
          {CARDS_DATA.map((data, index: number) => (
            <div
              key={index}
              className={`relative flex h-fit min-w-[256px] flex-col rounded-lg !bg-cover !bg-no-repeat p-8 transition-all duration-500 xl:h-[400px] ${
                isCurrent(index) ? "flex-1 ease-out" : "ease-in"
              }`}
              style={{
                background: `url(${data.image})`,
                backgroundSize: "cover",
              }}
              onMouseOver={() => setCurrentCard(index)}
            >
              <div
                className={`transition-all duration-500 xl:absolute ${
                  isCurrent(index) ? "bottom-6 ease-out" : "-bottom-20 ease-in"
                }`}
              >
                <Image
                  src={data.icon}
                  className="w-16"
                  alt="icon"
                  width={50}
                  height={50}
                />
                <h3
                  className={
                    "auth mt-6 text-xl font-bold tracking-wider text-white xl:mt-8 " +
                    `${isCurrent(index) ? "" : ""}`
                  }
                  dangerouslySetInnerHTML={{ __html: data.title }}
                ></h3>
                <p
                  className={`mt-2 text-white transition-all duration-500 xl:mt-3 xl:w-80 ${
                    isCurrent(index)
                      ? "text-opacity-100 ease-out"
                      : "ease-in xl:text-opacity-0"
                  }`}
                >
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
