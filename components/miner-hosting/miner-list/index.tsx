"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Slider from "react-slick"

import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/common/section-title"

import MinerCard from "./miner-card"

export interface Miner {
  id: number
  name: string
  avatar: string
  hashrate: number
  income: number
  machine_price: number
  accessory_price: number
  profit: number
}

const miners: Miner[] = [
  {
    id: 1,
    name: "Antminer KS3 8.2 TH/s",
    avatar: "/images/miners/miner1.png",
    hashrate: 8,
    income: 2,
    machine_price: 19270,
    accessory_price: 3550,
    profit: 2590,
  },
  {
    id: 2,
    name: "Antminer S19 XP Hydro",
    avatar: "/images/miners/miner2.png",
    hashrate: 255,
    income: 0.205,
    machine_price: 7020,
    accessory_price: 5100,
    profit: 3195,
  },
  {
    id: 3,
    name: "Antminer S19 XP",
    avatar: "/images/miners/miner3.png",
    hashrate: 8,
    income: 2,
    machine_price: 19270,
    accessory_price: 3550,
    profit: 2590,
  },
  {
    id: 4,
    name: "Antminer KS3 8.2 TH/s",
    avatar: "/images/miners/miner1.png",
    hashrate: 8,
    income: 2,
    machine_price: 19270,
    accessory_price: 3550,
    profit: 2590,
  },
  {
    id: 5,
    name: "Antminer S19 XP Hydro",
    avatar: "/images/miners/miner2.png",
    hashrate: 8,
    income: 2,
    machine_price: 19270,
    accessory_price: 3550,
    profit: 2590,
  },
  {
    id: 6,
    name: "Antminer S19 XP",
    avatar: "/images/miners/miner3.png",
    hashrate: 8,
    income: 2,
    machine_price: 19270,
    accessory_price: 3550,
    profit: 2590,
  },
]

export default function MinerListSection() {
  const [slider, setSlider] = useState<any>(null)
  const t = useTranslations("main")

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const next = () => {
    slider?.slickNext()
  }

  const previous = () => {
    slider?.slickPrev()
  }

  return (
    <section className="relative bg-[url('/images/miner-hosting/bg3.png')] bg-cover bg-bottom bg-no-repeat">
      <div className="container flex flex-col items-center justify-between gap-10 px-10 py-16">
        <SectionTitle>{t("miner_hosting.minerList")}</SectionTitle>

        <div className="mx-auto w-full max-w-[375px] md:max-w-[750px] lg:max-w-[968px] xl:max-w-6xl">
          <Slider {...settings} ref={(c) => setSlider(c)}>
            {miners.map((miner) => (
              <MinerCard key={miner.id} miner={miner} />
            ))}
          </Slider>

          <style jsx global>{`
            .slick-dots {
              bottom: -48px !important;
            }

            .slick-dots li button:before {
              content: " ";
              border: 1px solid #5093f3;
              line-height: 2px;
              height: 2px;
            }
          `}</style>

          <div className="mx-auto mt-[17px] flex w-fit space-x-48">
            <button onClick={previous} className="cursor-pointer">
              <ChevronLeft color="#1570EF" />
            </button>

            <button onClick={next} className="cursor-pointer">
              <ChevronRight color="#1570EF" className="cursor-pointer" />
            </button>
          </div>

          <div className="mt-10 flex w-full justify-center">
            <Button
              style={{
                background:
                  "linear-gradient(9deg, #22B4FD 32.53%, #2D79FF 77.26%)",
              }}
            >
              {t("miner_hosting.planForMining")}
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-10 w-full bg-gradient-to-b from-transparent to-white"></div>
    </section>
  )
}
