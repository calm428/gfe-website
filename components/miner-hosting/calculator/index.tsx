"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

import SectionTitle from "@/components/common/section-title"

import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Slider } from "../../ui/slider"
import HistoricalPowerGraph from "./historical-power-graph"

function CalculatorSection() {
  const [amount, setAmount] = useState<number | null>(null)
  const t = useTranslations("main")

  return (
    <section className="container px-10 py-20">
      <SectionTitle>{t("miner_hosting.buyOurEnergy.title")}</SectionTitle>

      <div className="grid w-full grid-cols-1 gap-10 xl:grid-cols-2">
        <HistoricalPowerGraph />

        <div className="w-full">
          <h2 className="auth pb-5 pt-10 text-sm font-semibold tracking-wider text-primary">
            {t("miner_hosting.calculate")}
          </h2>

          <div className="flex items-start gap-3">
            <div className="w-full">
              <div className="auth w-full space-y-2">
                <Label className="auth font-semibold text-muted-foreground">
                  {t("miner_hosting.amount")}
                </Label>
                <div className="relative flex size-full items-center">
                  <Input
                    type="number"
                    aria-label="Amount"
                    placeholder={t("miner_hosting.enterAmount")}
                    className={
                      "h-14 w-full font-mont text-lg text-primary " +
                      `${amount && amount > 0 && "text-lg font-bold"}`
                    }
                    value={amount || ""}
                    onChange={(e) => setAmount(e.target.value as any)}
                  />
                  {amount && amount > 0 && (
                    <span className="absolute ml-3 font-mont text-lg font-bold text-primary">
                      <span className="mr-2 text-transparent">{amount}</span>Kwh
                    </span>
                  )}
                </div>
              </div>
              <Slider defaultValue={[33]} max={100} step={1} className="my-6" />
            </div>

            <div className="space-y-2">
              <Label className="auth font-semibold text-muted-foreground">
                {t("miner_hosting.bonus")}
              </Label>
              <span className="flex items-center justify-center bg-[#D8FFB4] px-5 py-[13px] font-mont text-lg font-bold text-[#479A0B]">
                11%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1  gap-3">
            <div className="flex justify-between rounded-md bg-accent p-4">
              <span className="auth text-lg font-medium text-muted-foreground">
                {t("miner_hosting.bonusEnergy")}
              </span>
              <span className="auth text-lg font-bold text-primary">
                2720 Kwh
              </span>
            </div>

            <div className="flex justify-between rounded-md bg-accent p-4">
              <span className="auth text-lg font-medium text-muted-foreground">
                {t("miner_hosting.totalEnergy")}
              </span>
              <span className="auth text-lg font-bold text-primary">
                2720 Kwh
              </span>
            </div>
          </div>

          <div className="mt-5 flex justify-between rounded-md bg-blue-100 p-4">
            <span className="auth text-lg font-medium text-muted-foreground">
              {t("miner_hosting.price")}
            </span>
            <span className="auth text-lg font-bold text-primary">$ 2720</span>
          </div>

          <Button className="auth mt-5 h-14 w-28 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] text-lg font-bold">
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CalculatorSection
