"use client"

import React, { useState } from "react"

import "@radix-ui/react-icons"
import Image from "next/image"

import { SiteConfig, siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
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
    <div className="mx-auto pb-[32px] auth font-mont w-full lg:w-[500px] xl:w-[480px] bg-background rounded-lg overflow-hidden shadow-lg">
      <div className="p-[32px] flex flex-col gap-[24px] bg-[#F9FCFF]">
        <div className="text-center">
          <h2 className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Buy In Before Price Increases!
          </h2>
          <p className="font-mont font-medium text-[14px]">
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
      <div className="pt-[20px] px-[32px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between gap-1">
            {payments.map((payment) => (
              <div
                key={payment.name}
                className=" text-xs flex py-[5px] pr-[24px] pl-[] gap-[5px] items-center bg-muted rounded-[5px]"
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
              <h2 className=" text-muted-foreground font-semibold text-sm">
                Pay with BTC
              </h2>
              <Input
                type="number"
                placeholder="0"
                className="border border-border"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <h2 className=" text-muted-foreground font-semibold text-sm">
                Receive GFE
              </h2>
              <Input type="number" placeholder="0" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <h1 className=" text-muted-foreground font-medium">
              USDT Raised:
              <span className="font-bold">$5,667,950.07 / $6,258,616</span>
            </h1>
            <h1 className=" text-muted-foreground font-medium">
              Your Purchased GEF= <span className="font-bold">0</span>
            </h1>
            <h1 className=" text-muted-foreground font-medium">
              Your Stakeable GEF= <span className="font-bold">0</span>
            </h1>
            <h1 className=" text-muted-foreground font-medium">
              1 GEF = <span className="font-bold">$0.12 </span>
            </h1>
          </div>
        </div>

        {/* button */}
        <Button className="mt-[32px] w-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] py-[16px] px-[32px]">
          Buy Now
        </Button>
      </div>
    </div>
  )
}

export default Counter
