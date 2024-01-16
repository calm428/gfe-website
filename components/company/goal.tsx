"use client"

import { useState } from "react"

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

export default function GoalSection() {
  const [currentCard, setCurrentCard] = useState(0)

  const isCurrent = (index: number) => {
    return index == currentCard
  }

  return (
    <div className="pb-14 pt-10 md:pt-24">
      <div className="pb-10 md:pb-14">
        <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  mt-4 font-monument text-xl text-primary">Our Goal</div>
        <div className="text-md font-mont text-muted-foreground">
          At SUNBELT Miner, our goal is a multifaceted commitment to lead the
          way in the cryptocurrency mining landscape. We strive to pioneer
          sustainability by adopting eco-friendly practices, drive innovation
          through cutting-edge technologies, and foster financial prosperity for
          our community.
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-col gap-4 xl:flex-row">
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
              <img className="w-16" src={data.icon}></img>
              <h2
                className={
                  "text-xl font-monument text-white mt-6 xl:mt-8 tracking-wider " +
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
  )
}
