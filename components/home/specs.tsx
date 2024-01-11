"use client"

import { useState } from "react"

import { SiteConfig, siteConfig } from "@/config/site"

import FeatureDiv from "./FeatureDiv"

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

  const features = siteConfig.features
  return (
    // <div className="container pb-14 pt-10 md:pt-24">
    //   <div className="md:pb-14 pb-10">
    //     <h1 className="text-center font-monument font-normal text-2xl text-primary md:pb-3 pb-2 uppercase">
    //       Mining Ecosystem
    //     </h1>
    //     <h3 className="font-mont font-medium text-lg md:text-xl text-center">
    //       Step into a comprehensive mining ecosystem designed to maximize
    //       efficiency, sustainability, and profitability. Our integrated platform
    //       offers a seamless blend of cutting-edge technology, sustainable
    //       practices, and user-friendly tools.
    //     </h3>
    //   </div>

    //   {/* cards */}
    //   <div className="flex flex-col xl:flex-row gap-4">
    //     {CARDS_DATA.map((data, index: number) => (
    //       <div
    //         key={index}
    //         className={`!bg-cover !bg-no-repeat min-w-[256px] rounded-lg h-fit xl:h-[400px] transition-all duration-500 p-8 flex flex-col relative ${
    //           isCurrent(index) ? "flex-1 ease-out" : "ease-in"
    //         }`}
    //         style={{
    //           background: `url(${data.image})`,
    //           backgroundSize: "cover",
    //         }}
    //         onMouseOver={() => setCurrentCard(index)}
    //       >
    //         <div
    //           className={`xl:absolute transition-all duration-500 ${
    //             isCurrent(index) ? "bottom-6 ease-out" : "-bottom-20 ease-in"
    //           }`}
    //         >
    //           <img className="w-16" src={data.icon}></img>
    //           <h2
    //             className={
    //               "text-xl font-monument text-white mt-6 xl:mt-8 tracking-wider " +
    //               `${isCurrent(index) ? "" : ""}`
    //             }
    //             dangerouslySetInnerHTML={{ __html: data.title }}
    //           ></h2>
    //           <p
    //             className={`text-white mt-2 xl:mt-3 xl:w-80 transition-all duration-500 ${
    //               isCurrent(index)
    //                 ? "text-opacity-100 ease-out"
    //                 : "xl:text-opacity-0 ease-in"
    //             }`}
    //           >
    //             {data.description}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="relative px-5 lg:px-[96px] py-[100px] lg:py-[207px] bg-background flex flex-col  gap-12">
      <div className=" relative flex flex-col gap-[24px] z-30">
        <h1 className=" font-monument text-[30px] md:text-[45px] font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          Functionalities
        </h1>
        <p className="auth text-base lg:text-[20px] text-muted-foreground lg:w-1/2 font-medium">
          This twofold implication of GFE tokens mean that not only do they
          serve as tradable assets with income, they are reflective of
          sustainable practices and have tangible, real-world utility.
        </p>
      </div>
      <div className=" relative grid lg:grid-cols-2 xl:grid-cols-4  gap-6 z-30">
        {features.map((feature) => (
          <FeatureDiv
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            link={feature.link}
          />
        ))}
      </div>
      <img
        src="/bgs/grid.jpg"
        alt="bg"
        className=" hidden lg:block absolute top-0 left-0 w-1/2 "
      />
      <img
        src="/bgs/global.jpg"
        alt="bg"
        className=" absolute bottom-0 xl:top-0 -right-[100px] opacity-50 "
      />
      <img
        src="/bgs/right1.png"
        alt="bgs"
        className="absolute -bottom-5 w-full"
      />
    </div>
  )
}
