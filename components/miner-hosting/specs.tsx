"use client"

import { useState } from "react"
import Image from "next/image"

const CARDS_DATA = [
  {
    image: "/images/home/SolarPower.png",
    icon: "/images/home/SolarPower-icon.png",
    title: "Solar Power",
    description:
      "Solar energy harnesses sunlight through photovoltaic cells or solar thermal systems, providing renewable electricity and heat with minimal environmental impact.",
  },
  {
    image: "/images/home/ImmersionCooling.png",
    icon: "/images/home/ImmersionCooling-icon.png",
    title: "Immersion<br>Cooling",
    description:
      "Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence.",
  },
  {
    image: "/images/home/GeothermalHeatPump.png",
    icon: "/images/home/GeothermalHeatPump-icon.png",
    title: "Geothermal<br>Heat Pump",
    description:
      "Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence.",
  },
  {
    image: "/images/home/EarthshipBuilding.png",
    icon: "/images/home/EarthshipBuilding-icon.png",
    title: "Earthship<br>Building",
    description:
      "Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence.",
  },
]

export default function SpecsSection() {
  const [currentCard, setCurrentCard] = useState(0)

  const isCurrent = (index: number) => {
    return index == currentCard
  }

  return (
    <div className="bg-[url('/images/miner-hosting/bg2.png')] bg-cover bg-bottom bg-no-repeat pb-14 pt-10 md:pt-24">
      <div className="container">
        <div className="pb-10 md:pb-14">
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-2 text-center  font-goldman text-5xl font-normal text-transparent md:pb-3">
            Mining Ecosystem
          </h1>
          <h3 className="text-center font-mont text-lg font-medium text-muted-foreground md:text-xl">
            Step into a comprehensive mining ecosystem designed to maximize
            efficiency, sustainability, and profitability. Our integrated
            platform offers a seamless blend of cutting-edge technology,
            sustainable practices, and user-friendly tools.
          </h3>
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
                <h2
                  className={
                    "text-xl auth font-bold text-white mt-6 xl:mt-8 tracking-wider " +
                    `${isCurrent(index) ? "" : ""}`
                  }
                  dangerouslySetInnerHTML={{ __html: data.title }}
                ></h2>
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
    </div>
  )
}
