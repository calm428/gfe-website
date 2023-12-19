"use client";

import { useState } from "react";

const CARDS_DATA = [
    {
        image: "/images/home/SolarPower.png",
        icon: "/images/home/SolarPower-icon.png",
        title: "Solar Power",
        description: "Solar energy harnesses sunlight through photovoltaic cells or solar thermal systems, providing renewable electricity and heat with minimal environmental impact."
    },
    {
        image: "/images/home/ImmersionCooling.png",
        icon: "/images/home/ImmersionCooling-icon.png",
        title: "Immersion<br>Cooling",
        description: "Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence."
    },
    {
        image: "/images/home/GeothermalHeatPump.png",
        icon: "/images/home/GeothermalHeatPump-icon.png",
        title: "Geothermal<br>Heat Pump",
        description: "Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence."
    },
    {
        image: "/images/home/EarthshipBuilding.png",
        icon: "/images/home/EarthshipBuilding-icon.png",
        title: "Earthship<br>Building",
        description: "Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence."
    }
];

export default function SpecsSection() {
    const [currentCard, setCurrentCard] = useState(0);

    const isCurrent = (index: number) => {
        return index == currentCard;
    };

    return (<div className="pb-14 pt-10 md:pt-24">
        <div className="md:pb-14 pb-10">
            <h1 className="text-center font-monument font-normal text-2xl text-primary md:pb-3 pb-2">Mining Ecosystem</h1>
            <h3 className="font-mont font-medium text-lg md:text-xl text-center">Step into a comprehensive mining ecosystem designed to maximize efficiency, sustainability, and profitability. Our integrated platform offers a seamless blend of cutting-edge technology, sustainable practices, and user-friendly tools.</h3>
        </div>

        {/* cards */}
        <div className="flex flex-col xl:flex-row gap-4">
            {CARDS_DATA.map((data, index: number) => (
                <div
                    className={`!bg-cover !bg-no-repeat min-w-[256px] rounded-lg h-fit xl:h-[400px] transition-all duration-500 p-8 flex flex-col relative ${isCurrent(index) ? "flex-1 ease-out" : "ease-in"}`}
                    style={{
                        background: `url(${data.image})`,
                        backgroundSize: "cover"
                    }}
                    onMouseOver={() => setCurrentCard(index)}
                >
                    <div className={`xl:absolute transition-all duration-500 ${isCurrent(index) ? "bottom-6 ease-out" : "-bottom-20 ease-in"}`}>
                        <img className="w-16" src={data.icon}></img>
                        <h2 className={"text-xl font-monument text-white mt-6 xl:mt-8 tracking-wider " + `${isCurrent(index) ? "" : ""}`} dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                        <p className={`text-white mt-2 xl:mt-3 xl:w-80 transition-all duration-500 ${isCurrent(index) ? "text-opacity-100 ease-out" : "xl:text-opacity-0 ease-in"}`}>{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>);
};