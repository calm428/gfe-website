"use client"

import React, { useState } from "react"
import { CreditCard, HelpCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Progress } from "../ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

const OrderSection = () => {
  const [progress, setProgress] = useState(90)
  const [selected, setSelected] = useState("BTC")

  return (
    <div className="container">
      <h1 className="font-monument tracking-wider text-[#2BADFD] text-2xl">
        Your Order
      </h1>

      <div className="flex flex-col items-end gap-5">
        <div className="lg:w-[525px]">
          <div className="flex items-center gap-2 float-right pb-3">
            <p className="text-sm">You are almost done!</p>
            <p className="text-sm text-white px-2 rounded-full py-0.5 bg-[#68DE99]">
              {progress}%
            </p>
          </div>
          <Progress
            value={progress}
            className="w-full h-2 bg-[#E3E3E3] [&>div]:bg-[#68DE99]"
          />
        </div>

        <div className="flex w-full lg:flex-row flex-col gap-5">
          <div className="flex-1">
            <h2 className="font-monument tracking-wider text-xl mb-5">
              Contract Details
            </h2>
            <div className="p-5 rounded-lg bg-[#E7F0FD] space-y-2">
              <div className="gap-2 flex">
                <h3>Mining Plan:</h3>
                <h4 className="font-monument text-primary">140 TH/S</h4>
              </div>

              <h4>Plan is based on s19 K pro 106 TH/s</h4>
              <div className="w-full border-b border-primary" />

              <div className="py-2 space-y-4">
                <div className="justify-between flex">
                  <h3>Total Mining Power: </h3>
                  <h4 className="font-monument text-primary">11.75 TH/s</h4>
                </div>

                <div className="justify-between flex">
                  <h3>Bonus Mining Power:</h3>
                  <h4 className="font-monument text-primary">0.45 Th/s</h4>
                </div>

                <div className="justify-between flex">
                  <h3>Duration:</h3>
                  <h4 className="font-monument text-primary">60 months</h4>
                </div>

                <div className="justify-between flex">
                  <h3 className="flex items-center gap-2">
                    Service fee
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle size={18} className="cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>0.9% fees</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </h3>
                  <h4 className="font-monument text-primary">$0.064</h4>
                </div>
              </div>

              <div className="w-full border-b-2 border-primary" />

              <div className="justify-between flex pt-3">
                <h3>Price:</h3>
                <h4 className="font-monument text-primary text-xl">
                  7,470 USD
                </h4>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="font-monument tracking-wider text-xl mb-5">
              Contract Details
            </h2>
            <div className="p-5 rounded-md bg-[#E7F0FD] space-y-5 min-w-[525px] w-full">
              <div className="bg-white rounded-sm flex gap-5 px-5 py-3">
                <h4 className="flex gap-2 items-center py-2.5 px-2">
                  <CreditCard className="text-primary" />
                  VISA / MasterCard
                </h4>

                <h4 className="flex gap-2 items-center py-2.5 px-2">
                  <Icons.invoice height={18} className="text-primary" />
                  Invoice
                </h4>
              </div>

              <div className="bg-white px-5 py-3 rounded-sm flex gap-3">
                <Coin
                  icon={<Icons.btc height={22} />}
                  name="BTC"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Coin
                  icon={<Icons.eth height={22} />}
                  name="ETH"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Coin
                  icon={<Icons.usdt height={22} />}
                  name="USDT"
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>

              <div className="bg-white px-5 py-3 rounded-sm flex gap-3">
                <Coin
                  icon={<Icons.trc height={22} />}
                  name="USDT trc20"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Coin
                  icon={<Icons.bnb height={22} />}
                  name="BNB"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Coin
                  icon={<Icons.xrp height={22} />}
                  name="XRP"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Coin
                  icon={<Icons.ada height={22} />}
                  name="ADA"
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="font-semibold">I agree with</span> Term of
                    use <span className="font-semibold">and</span> Privacy
                    Policy
                  </label>
                </div>
              </div>

              <div>
                <Button
                  className="w-full py-7"
                  style={{
                    background:
                      "linear-gradient(275deg, #22B4FD 32.53%, #2D79FF 77.26%)",
                  }}
                >
                  Buy Now
                </Button>

                <p className="text-muted-foreground text-sm mt-2">
                  Your contract will be activated after 24h after payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSection

function Coin({
  icon,
  name,
  selected,
  setSelected,
}: {
  icon: any
  name: string
  selected: string
  setSelected: Function
}) {
  return (
    <button
      onClick={() => setSelected(name)}
      className={cn(
        "flex gap-2 py-2.5 px-2 items-center rounded-md hover:bg-[#E7F0FD] border-[2px] border-transparent",
        `${name == selected && "bg-[#E7F0FD] border-primary"}`
      )}
    >
      {icon}
      {name}
    </button>
  )
}
