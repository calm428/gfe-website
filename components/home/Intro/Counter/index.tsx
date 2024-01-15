"use client"

import { useState } from "react"

import "@radix-ui/react-icons"
import Image from "next/image"

import { siteConfig } from "@/config/site"

import { Button } from "../../../ui/button"
import { Input } from "../../../ui/input"
import CounterDiv from "./CounterDiv"

function Counter() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  // counter
  const targetDate = new Date("2024-12-31T00:00:00").getTime()
  const countdownInterval = setInterval(updateCountdown, 1000)
  function updateCountdown() {
    const currentDate = new Date().getTime()
    const timeDifference = targetDate - currentDate
    if (timeDifference <= 0) {
      clearInterval(countdownInterval)
    } else {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      )
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({
        days,
        hours,
        minutes,
        seconds,
      })
    }
  }
  const payments = siteConfig.payments
  return (
    <div className="auth mx-auto w-full overflow-hidden rounded-lg bg-background pb-[32px] font-mont shadow-lg lg:w-[500px] xl:w-[480px]">
      <div className="flex flex-col gap-[24px] bg-[#F9FCFF] p-[32px]">
        <div className="text-center">
          <h2 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-[24px] font-bold text-transparent">
            Buy In Before Price Increases!
          </h2>
          <p className="font-mont text-[14px] font-medium">
            countdown until price increases
          </p>
        </div>
        {/* countdown */}
        <div className="grid grid-cols-4 gap-1">
          <CounterDiv count={time.days} title={"Days"} />
          <CounterDiv count={time.hours} title={"Hours"} />
          <CounterDiv count={time.minutes} title={"Minutes"} />
          <CounterDiv count={time.seconds} title={"Seconds"} />
        </div>
      </div>
      {/* bottom div */}
      <div className="px-[32px] pt-[20px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between gap-1">
            {payments.map((payment) => (
              <div
                key={payment.name}
                className=" flex items-center gap-[5px] rounded-[5px] bg-muted py-[5px] pl-[] pr-[24px] text-xs"
              >
                <Image
                  src={payment.icon}
                  width={20}
                  height={20}
                  alt={payment.name}
                />
                <h2>{payment.title}</h2>
              </div>
            ))}
          </div>
          <div className="flex gap-[10px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className=" text-sm font-semibold text-muted-foreground">
                Pay with BTC
              </h2>
              <Input
                type="number"
                placeholder="0"
                className="border border-border"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <h2 className=" text-sm font-semibold text-muted-foreground">
                Receive GFE
              </h2>
              <Input type="number" placeholder="0" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <h1 className=" font-medium text-muted-foreground">
              USDT Raised:
              <span className="font-bold">$5,667,950.07 / $6,258,616</span>
            </h1>
            <h1 className=" font-medium text-muted-foreground">
              Your Purchased GEF= <span className="font-bold">0</span>
            </h1>
            <h1 className=" font-medium text-muted-foreground">
              Your Stakeable GEF= <span className="font-bold">0</span>
            </h1>
            <h1 className=" font-medium text-muted-foreground">
              1 GEF = <span className="font-bold">$0.12 </span>
            </h1>
          </div>
        </div>

        {/* button */}
        <Button className="mt-[32px] w-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-[32px] py-[16px]">
          Buy Now
        </Button>
      </div>
    </div>
  )
}

export default Counter
