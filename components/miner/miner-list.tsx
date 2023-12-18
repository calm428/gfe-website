"use client"

import Image from "next/image"
import Link from "next/link"
import { Lock } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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
    <div className="flex flex-col items-start gap-4 bg-[#E7F0FD] p-4 min-w-[350px] w-auto rounded-xl">
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
          <div className="text-sm text-muted-foreground font-mont">
            Hashrate:
          </div>
          <div className="text-md text-primary font-semibold">
            {miner.hashrate} TH/s
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground font-mont">Income:</div>
          <div className="text-md text-primary font-semibold">
            {miner.income} BTC/year
          </div>
        </div>
      </div>
      <div className="w-full py-2 border-b border-primary/60">
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground font-mont">
            Machine Price:
          </div>
          <div className="text-md text-primary font-semibold">
            {miner.machine_price} USD
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground font-mont">
            Accessory Price:
          </div>
          <div className="text-md text-primary font-semibold">
            {miner.accessory_price} USD
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <div className="w-full flex justify-between">
          <div className="text-sm text-muted-foreground font-mont">Price:</div>
          <div className="text-md text-primary font-semibold">
            {miner.machine_price + miner.accessory_price} USD
          </div>
        </div>
        <div className="text-sm text-right text-muted-foreground font-mont">
          +{miner.profit} USD Energy annually
        </div>
      </div>
      <div className="w-full flex justify-between py-2">
        <Button type="button" variant="secondary">
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
  return (
    <div className="flex flex-col items-center gap-6 justify-between">
      <div className="text-2xl font-semibold my-4 text-primary mx-auto">
        List of Miners
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {miners.map((miner) => (
          <MinerCard key={miner.id} miner={miner} />
        ))}
      </div>
    </div>
  )
}
