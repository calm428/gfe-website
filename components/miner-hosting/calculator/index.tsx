"use client"

import { useState } from "react"

import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Slider } from "../../ui/slider"
import HistoricalPowerGraph from "./historical-power-graph"

function CalculatorSection() {
  const [amount, setAmount] = useState<number | null>(null)
  return (
    <div className="container px-10 py-20">
      <h1 className="pb-5 text-center font-goldman text-5xl font-normal text-primary  md:pb-10">
        Buy Our <br className="hidden sm:inline" /> Energy & Save Per Machine
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 xl:grid-cols-2">
        <HistoricalPowerGraph />

        <div className="w-full">
          <h1 className="auth pb-5 pt-10 text-sm font-semibold tracking-wider text-primary">
            Calculate
          </h1>

          <div className="flex items-start gap-3">
            <div className="w-full">
              <div className="auth w-full space-y-2">
                <Label className="auth font-semibold text-muted-foreground">
                  Amount
                </Label>
                <div className="relative flex h-full w-full items-center">
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    className={
                      "w-full h-14 text-primary font-mont text-lg " +
                      `${amount && amount > 0 && "font-bold text-lg"}`
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
                Bonus
              </Label>
              <span className="flex items-center justify-center bg-[#D8FFB4] px-5 py-[13px] font-mont text-lg font-bold text-[#479A0B]">
                11%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1  gap-3">
            <div className="flex justify-between rounded-md bg-accent p-4">
              <span className="auth text-lg font-medium text-muted-foreground">
                Bonus Energy
              </span>
              <span className="auth text-lg font-bold text-primary">
                2720 Kwh
              </span>
            </div>

            <div className="flex justify-between rounded-md bg-accent p-4">
              <span className="auth text-lg font-medium text-muted-foreground">
                Total Energy
              </span>
              <span className="auth text-lg font-bold text-primary">
                2720 Kwh
              </span>
            </div>
          </div>

          <div className="mt-5 flex justify-between rounded-md bg-blue-100 p-4">
            <span className="auth text-lg font-medium text-muted-foreground">
              Price
            </span>
            <span className="auth text-lg font-bold text-primary">$ 2720</span>
          </div>

          <Button className="auth mt-5 h-14 w-28 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] text-lg font-bold">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorSection
