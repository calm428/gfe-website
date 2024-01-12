"use client"

import { useState } from "react"
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
      <h1 className="font-monument text-2xl tracking-wider text-[#2BADFD]">
        Your Order
      </h1>

      <div className="flex flex-col items-end gap-5">
        <div className="lg:w-[525px]">
          <div className="float-right flex items-center gap-2 pb-3">
            <p className="text-sm">You are almost done!</p>
            <p className="rounded-full bg-[#68DE99] px-2 py-0.5 text-sm text-white">
              {progress}%
            </p>
          </div>
          <Progress
            value={progress}
            className="h-2 w-full bg-[#E3E3E3] [&>div]:bg-[#68DE99]"
          />
        </div>

        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-5 font-monument text-xl tracking-wider">
              Contract Details
            </h2>
            <div className="space-y-2 rounded-lg bg-[#E7F0FD] p-5">
              <div className="flex gap-2">
                <h3>Mining Plan:</h3>
                <h4 className="font-monument text-primary">140 TH/S</h4>
              </div>

              <h4>Plan is based on s19 K pro 106 TH/s</h4>
              <div className="w-full border-b border-primary" />

              <div className="space-y-4 py-2">
                <div className="flex justify-between">
                  <h3>Total Mining Power: </h3>
                  <h4 className="font-monument text-primary">11.75 TH/s</h4>
                </div>

                <div className="flex justify-between">
                  <h3>Bonus Mining Power:</h3>
                  <h4 className="font-monument text-primary">0.45 Th/s</h4>
                </div>

                <div className="flex justify-between">
                  <h3>Duration:</h3>
                  <h4 className="font-monument text-primary">60 months</h4>
                </div>

                <div className="flex justify-between">
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

              <div className="flex justify-between pt-3">
                <h3>Price:</h3>
                <h4 className="font-monument text-xl text-primary">
                  7,470 USD
                </h4>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="mb-5 font-monument text-xl tracking-wider">
              Contract Details
            </h2>
            <div className="w-full min-w-[525px] space-y-5 rounded-md bg-[#E7F0FD] p-5">
              <div className="flex gap-5 rounded-sm bg-white px-5 py-3">
                <h4 className="flex items-center gap-2 px-2 py-2.5">
                  <CreditCard className="text-primary" />
                  VISA / MasterCard
                </h4>

                <h4 className="flex items-center gap-2 px-2 py-2.5">
                  <Icons.invoice height={18} className="text-primary" />
                  Invoice
                </h4>
              </div>

              <div className="flex gap-3 rounded-sm bg-white px-5 py-3">
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

              <div className="flex gap-3 rounded-sm bg-white px-5 py-3">
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

                <p className="mt-2 text-sm text-muted-foreground">
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
        "flex items-center gap-2 rounded-md border-[2px] border-transparent px-2 py-2.5 hover:bg-[#E7F0FD]",
        `${name == selected && "border-primary bg-[#E7F0FD]"}`
      )}
    >
      {icon}
      {name}
    </button>
  )
}
