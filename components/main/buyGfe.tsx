import { useState } from "react"

import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "../ui/button"
import { Input } from "../ui/input"
import { Slider } from "../ui/slider"
import HistoricalPowerGraph from "./HistoricalPowerGraph"

const BuyGfeToken = () => {
  const [amount, setAmount] = useState<number | null>(null)
  return (
    <div className="w-2/3 rounded-md border border-[#E7F0FD] bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-[#383838]">
          Transaction History
        </p>
        <Button variant="link" className="">
          View All
        </Button>
      </div>
      <div className="flex w-full flex-col gap-3 xl:flex-row">
        <HistoricalPowerGraph />
        <div className="w-full xl:w-2/3">
          <h1 className="pb-5 pt-10 font-monument text-xl tracking-wider text-primary">
            Calculate
          </h1>

          <div className="flex items-start gap-3">
            <div className="w-full">
              <div className="w-full space-y-2">
                <p className="text-sm font-medium text-[#5A6778]">Amount</p>
                <div className="relative flex h-full w-full items-center">
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
                    <span className="absolute ml-3 font-mont text-base font-bold text-primary">
                      <span className="mr-2 text-transparent">{amount}</span>Kwh
                    </span>
                  )}
                </div>
              </div>
              <Slider defaultValue={[33]} max={100} step={1} className="my-6" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#5A6778]">Bonus</p>
              <span className="flex items-center justify-center bg-[rgba(103,194,58,0.08)] p-3 font-mont text-lg font-bold text-[#479A0B]">
                11%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
            <div className="flex justify-between rounded-md bg-accent p-2">
              <span className="text-lg">Bonus Energy</span>
              <span className="font-mont text-lg font-bold text-primary">
                2720 Kwh
              </span>
            </div>

            <div className="flex justify-between rounded-md bg-accent p-2">
              <span className="text-lg">Total Energy</span>
              <span className="font-mont text-lg font-bold text-primary">
                2720 Kwh
              </span>
            </div>
          </div>

          <div className="mt-5 flex justify-between rounded-md bg-blue-100 p-4">
            <span className="text-lg">Price</span>
            <span className="font-mont text-lg font-bold text-primary">
              $ 2720
            </span>
          </div>

          <Button
            className={cn(
              buttonVariants(),
              "mt-10 hidden pt-2.5 font-monument font-normal tracking-widest md:block"
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
