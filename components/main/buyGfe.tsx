import React, { useState } from "react"

import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "../ui/button"
import { Input } from "../ui/input"
import { p } from "../ui/label"
import { Slider } from "../ui/slider"
import HistoricalPowerGraph from "./HistoricalPowerGraph"

const BuyGfeToken = () => {
  const [amount, setAmount] = useState<number | null>(null)
  return (
    <div className="rounded-md p-4 bg-white border border-[#E7F0FD] shadow-md w-2/3">
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#383838] font-semibold">
          Transaction History
        </p>
        <Button variant="link" className="">
          View All
        </Button>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-3">
        <HistoricalPowerGraph />
        <div className="xl:w-2/3 w-full">
          <h1 className="text-xl font-monument tracking-wider text-primary pt-10 pb-5">
            Calculate
          </h1>

          <div className="flex items-start gap-3">
            <div className="w-full">
              <div className="w-full space-y-2">
                <p className="text-[#5A6778] text-sm font-medium">Amount</p>
                <div className="relative flex w-full h-full items-center">
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    className={
                      "w-full py-6 text-primary font-mont text-lg " +
                      `${amount && amount > 0 && "font-bold text-lg"}`
                    }
                    value={amount || ""}
                    onChange={(e) => setAmount(e.target.value as any)}
                  />
                  {amount && amount > 0 && (
                    <span className="absolute ml-3 font-mont text-primary font-bold text-base">
                      <span className="text-transparent mr-2">{amount}</span>Kwh
                    </span>
                  )}
                </div>
              </div>
              <Slider defaultValue={[33]} max={100} step={1} className="my-6" />
            </div>
            <div className="space-y-2">
              <p className="text-[#5A6778] text-sm font-medium">Bonus</p>
              <span className="p-3 bg-[rgba(103,194,58,0.08)] font-bold text-lg flex items-center justify-center font-mont text-[#479A0B]">
                11%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            <div className="flex justify-between bg-accent p-2 rounded-md">
              <span className="text-lg">Bonus Energy</span>
              <span className="font-mont text-primary font-bold text-lg">
                2720 Kwh
              </span>
            </div>

            <div className="flex justify-between bg-accent p-2 rounded-md">
              <span className="text-lg">Total Energy</span>
              <span className="font-mont text-primary font-bold text-lg">
                2720 Kwh
              </span>
            </div>
          </div>

          <div className="flex justify-between bg-blue-100 p-4 rounded-md mt-5">
            <span className="text-lg">Price</span>
            <span className="font-mont text-primary font-bold text-lg">
              $ 2720
            </span>
          </div>

          <Button
            className={cn(
              buttonVariants(),
              "font-monument tracking-widest pt-2.5 font-normal hidden md:block mt-10"
            )}
            style={{
              background: "linear-gradient(75deg, #22B4FD 10%, #2D79FF 90%)",
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BuyGfeToken
