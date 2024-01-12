"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Lock } from "lucide-react"
import Slider from "react-slick"

import { Button } from "@/components/ui/button"

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

function MinerCard({ miner }: { miner: Miner }) {
  return (
    <div className="flex flex-col items-start gap-4 bg-[#E7F0FD] p-4 max-w-[350px] w-full rounded-xl mx-auto">
      <Image
        src={miner.avatar}
        alt={miner.name}
        width={200}
        height={200}
        className="w-auto h-[120px]"
      />
      <div className="text-2xl font-semibold">{miner.name}</div>
      <div className="w-full py-2 border-b border-primary/60">
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground auth font-medium">
            Hashrate:
          </div>
          <div className="text-md text-primary font-semibold auth">
            {miner.hashrate} TH/s
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground auth font-medium">
            Income:
          </div>
          <div className="text-md text-primary font-semibold auth">
            {miner.income} BTC/year
          </div>
        </div>
      </div>
      <div className="w-full py-2 border-b border-primary/60">
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground auth font-medium">
            Machine Price:
          </div>
          <div className="text-md text-primary font-semibold auth">
            {miner.machine_price} USD
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground auth font-medium">
            Accessory Price:
          </div>
          <div className="text-md text-primary font-semibold auth">
            {miner.accessory_price} USD
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground auth font-medium">
            Price:
          </div>
          <div className="text-md text-primary font-semibold auth">
            {miner.machine_price + miner.accessory_price} USD
          </div>
        </div>
        <div className="text-sm text-right text-muted-foreground auth font-medium">
          +{miner.profit} USD Energy annually
        </div>
      </div>
      <div className="w-full flex justify-between py-2">
        <Button type="button" variant="secondary" className="font-bold">
          View Details
        </Button>
        <Button type="button" variant="secondary" size="icon">
          <Lock />
        </Button>
      </div>
    </div>
  )
}

export default function MinerListSection() {
  const [slider, setSlider] = useState<any>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
    <div className=" container flex flex-col items-center gap-10 justify-between md:mt-5">
      <div className="text-center font-goldman font-normal text-5xl md:pb-10 pb-5  text-primary">
        List of Miners
      </div>

      <div className="w-full max-w-[375px] md:max-w-[750px] lg:max-w-[1100px] ">
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

        <div className="w-fit mx-auto space-x-48 flex mt-[17px]">
          <button onClick={previous} className="cursor-pointer">
            <ChevronLeft color="#1570EF" />
          </button>

          <button onClick={next} className="cursor-pointer">
            <ChevronRight color="#1570EF" className="cursor-pointer" />
          </button>
        </div>

        <div className="w-full flex justify-center mt-10">
          <Button
            style={{
              background:
                "linear-gradient(9deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
          >
            Plan For Mining
          </Button>
        </div>
      </div>
    </div>
  )
}
