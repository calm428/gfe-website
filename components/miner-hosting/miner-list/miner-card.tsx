"use client"

import Image from "next/image"
import { Lock } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"

import { Miner } from "."

export default function MinerCard({ miner }: { miner: Miner }) {
  const t = useTranslations("main")

  return (
    <div className="mx-auto flex w-full max-w-[350px] flex-col items-start gap-4 rounded-xl bg-[#E7F0FD] p-4">
      <Image
        src={miner.avatar}
        alt={miner.name}
        width={200}
        height={200}
        className="h-[120px] w-auto"
      />
      <div className="text-2xl font-semibold">{miner.name}</div>
      <div className="w-full border-b border-primary/60 py-2">
        <div className="flex w-full justify-between">
          <div className="auth text-sm font-medium text-muted-foreground">
            {t("miner_hosting.hashRate")}:
          </div>
          <div className="text-md auth font-semibold text-primary">
            {miner.hashrate} TH/s
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="auth text-sm font-medium text-muted-foreground">
            {t("miner_hosting.income")}:
          </div>
          <div className="text-md auth font-semibold text-primary">
            {miner.income} BTC/year
          </div>
        </div>
      </div>
      <div className="w-full border-b border-primary/60 py-2">
        <div className="flex w-full justify-between">
          <div className="auth text-sm font-medium text-muted-foreground">
            {t("miner_hosting.machinePrice")}:
          </div>
          <div className="text-md auth font-semibold text-primary">
            {miner.machine_price} USD
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="auth text-sm font-medium text-muted-foreground">
            {t("miner_hosting.accessoryPrice")}:
          </div>
          <div className="text-md auth font-semibold text-primary">
            {miner.accessory_price} USD
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <div className="flex w-full justify-between">
          <div className="auth text-sm font-medium text-muted-foreground">
            {t("miner_hosting.price")}:
          </div>
          <div className="text-md auth font-semibold text-primary">
            {miner.machine_price + miner.accessory_price} USD
          </div>
        </div>
        <div className="auth text-right text-sm font-medium text-muted-foreground">
          +{miner.profit} USD {t("miner_hosting.energyAnnually")}
        </div>
      </div>
      <div className="flex w-full justify-between py-2">
        <Button type="button" variant="secondary" className="font-bold">
          {t("miner_hosting.viewDetail")}
        </Button>
        <Button type="button" variant="secondary" size="icon" aria-label="Lock">
          <Lock />
        </Button>
      </div>
    </div>
  )
}
