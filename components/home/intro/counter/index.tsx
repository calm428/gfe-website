"use client"

import { startTransition, useEffect, useRef, useState } from "react"

import "@radix-ui/react-icons"
import Image from "next/image"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"

import useICOWebSocket from "@/hooks/useICOWebSocket"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

import CounterCard from "./counter-card"

function formatNumber(value: number) {
  // Check if the value is an integer
  if (Number.isInteger(value)) {
    // If it's an integer, return it as is
    return value.toString()
  } else {
    // If it's not an integer, return it with two decimal places
    return value.toFixed(2)
  }
}

function Counter() {
  const t = useTranslations("main")
  const countdownInterval = useRef<number | null>(null)
  const { status, address, startTime, chainData } = useICOWebSocket(
    `${process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "wss://" : "wss://"}${process.env.NEXT_PUBLIC_WEBSOCKET_HOST}`
  )
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [selectedPayment, setSelectedPayment] = useState("matic")
  const [isCardPayment, setIsCardPayment] = useState(false)
  const [inputGFEValue, setInputGFEValue] = useState("")
  const [inputPaymentValue, setInputPaymentValue] = useState("")

  const targetDate = new Date().getTime()

  const handlePaymentValueChange = (value: string) => {
    setInputPaymentValue(value)

    let gfeTokens = 0

    if (isCardPayment) {
      if (chainData.price > 0) gfeTokens = Number(value) * chainData.price
    } else {
      if (selectedPayment === "matic") {
        gfeTokens = (Number(value) * chainData.tokenPerMatic) / 100
      } else {
        gfeTokens = Number(inputGFEValue || 0)
      }
    }

    setInputGFEValue(formatNumber(gfeTokens))
  }

  const handleGFEValueChange = (value: string) => {
    setInputGFEValue(value)

    let paymentValue = 0

    if (isCardPayment) {
      if (chainData.price > 0) paymentValue = Number(value) / chainData.price
    } else {
      if (selectedPayment === "matic") {
        if (chainData.tokenPerMatic > 0)
          paymentValue = (Number(value) / chainData.tokenPerMatic) * 100
      } else {
        paymentValue = Number(inputPaymentValue || 0)
      }
    }

    setInputPaymentValue(formatNumber(paymentValue))
  }

  useEffect(() => {
    // Define the function inside the effect so it captures the current state
    const updateCountdown = () => {
      const currentDate = new Date().getTime()
      // Use the most recent value of startTime here
      const timeDifference = startTime + 30 * 24 * 60 * 60 * 1000 - currentDate

      if (timeDifference <= 0 && countdownInterval.current) {
        // Time expired logic
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

    // Set up the interval
    countdownInterval.current = window.setInterval(updateCountdown, 1000)

    // Clean up
    return () => {
      if (countdownInterval.current)
        window.clearInterval(countdownInterval.current)
    }
    // Adding startTime to the dependency array so the effect is rerun when startTime changes
  }, [startTime])

  useEffect(() => {
    handlePaymentValueChange(inputPaymentValue)
  }, [isCardPayment, selectedPayment])

  return (
    <div className="relative overflow-hidden">
      {status !== "running" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-white/30 backdrop-blur-md">
          {status === "loading" && (
            <Loader2 className="size-10 animate-spin text-primary" />
          )}
          {status === "not_started" && (
            <p className="font-goldman text-lg text-primary">
              Not started yet...
            </p>
          )}
          {status === "ended" && (
            <p className="font-goldman text-lg text-primary">
              The ICO has ended
            </p>
          )}
          {status === "halted" && (
            <p className="font-goldman text-lg text-primary">
              The ICO has been halted
            </p>
          )}
          {status === "disconnected" && (
            <p className="font-goldman text-lg text-primary">
              Something went wrong
            </p>
          )}
        </div>
      )}
      <div className="auth relative w-full overflow-hidden rounded-lg bg-background/90 pb-6 font-mont shadow-lg backdrop-blur-3xl">
        <div className="flex flex-col gap-[24px] p-6">
          <div className="text-center">
            <p className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-[24px] font-bold text-transparent">
              {t("home.converter_section.title")}
            </p>
            <p className="font-mont text-[14px] font-medium">
              {t("home.converter_section.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <CounterCard count={time.days} title={t("days")} />
            <CounterCard count={time.hours} title={t("hours")} />
            <CounterCard count={time.minutes} title={t("minutes")} />
            <CounterCard count={time.seconds} title={t("seconds")} />
          </div>
        </div>
        <div className="px-6">
          {/* <Progress
            value={chainData.totalSupply / chainData.totalToken}
            className="w-full"
          /> */}
          <div className="h-5 w-full overflow-hidden rounded-full bg-white">
            <div
              className="h-full bg-gradient-to-b from-[#2BADFD] to-[#1570EF]"
              style={{
                width: `${chainData.totalSupply / chainData.totalToken}%`,
              }}
            ></div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-center gap-[5px]">
            <p className=" font-goldman text-muted-foreground">
              Minted GFE Tokens:{" "}
              <span>
                {Intl.NumberFormat().format(chainData.totalSupply)} /{" "}
                {Intl.NumberFormat().format(chainData.totalToken)}
              </span>
            </p>
          </div>
          <div className="my-4 flex items-center justify-between font-goldman">
            <div className="h-[1px] w-1/4 rounded-full bg-gray-500" />
            <p className="text-muted-foreground">
              1 GFE = ${chainData.price / 100}
            </p>
            <div className="h-[1px] w-1/4 rounded-full bg-gray-500" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-2 gap-2">
              <Select
                defaultValue={selectedPayment}
                onValueChange={(value) => {
                  setSelectedPayment(value)
                  setIsCardPayment(false)
                }}
              >
                <SelectTrigger className="" aria-label="Payment Type">
                  <div className="flex items-center gap-5 rounded-md text-sm">
                    {/*  */}
                    <Image
                      src={`/images/main/payments/${selectedPayment}.png`}
                      width={20}
                      height={20}
                      alt={"matic token"}
                    />
                    <p>{selectedPayment.toUpperCase()}</p>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="matic">
                      <div className="flex items-center gap-5 rounded-md text-sm">
                        <Image
                          src="/images/main/payments/matic.png"
                          width={20}
                          height={20}
                          alt={"matic token"}
                        />
                        <p>MATIC</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="eth">
                      <div className="flex items-center gap-5 rounded-md text-sm">
                        <Image
                          src="/images/main/payments/eth.png"
                          width={20}
                          height={20}
                          alt={"eth token"}
                        />
                        <p>ETH</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="usdt">
                      <div className="flex items-center gap-5 rounded-md text-sm">
                        <Image
                          src="/images/main/payments/usdt.png"
                          width={20}
                          height={20}
                          alt={"usdt token"}
                        />
                        <p>USDT</p>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div
                data-state={isCardPayment}
                className='flex cursor-pointer items-center gap-2 rounded-md border bg-white px-4 py-2 text-sm transition-all hover:bg-background/70 data-[state="true"]:border-primary/70'
                onClick={() => {
                  setIsCardPayment(!isCardPayment)
                }}
              >
                <Image
                  src="/images/main/payments/visa.png"
                  width={20}
                  height={20}
                  alt={"visa/mastercard payment icon"}
                />
                <p>Visa/MasterCard</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-[8px]">
                <p className=" text-sm font-semibold text-muted-foreground">
                  Pay with{" "}
                  {isCardPayment ? "USD" : selectedPayment.toUpperCase()}
                </p>
                <div className="relative">
                  <Input
                    type="number"
                    aria-label="Payment"
                    placeholder="0"
                    value={inputPaymentValue}
                    onChange={(e) => handlePaymentValueChange(e.target.value)}
                    className="border border-border pr-8"
                  />
                  {isCardPayment ? (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      $
                    </span>
                  ) : (
                    <Image
                      src={`/images/main/payments/${selectedPayment}.png`}
                      width={20}
                      height={20}
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      alt={`${selectedPayment.toUpperCase()} token`}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className=" text-sm font-semibold text-muted-foreground">
                  Receive GFE
                </p>
                <div className="relative">
                  <Input
                    type="number"
                    aria-label="GFE"
                    placeholder="0"
                    value={inputGFEValue}
                    onChange={(e) => handleGFEValueChange(e.target.value)}
                    className="border border-border pr-8"
                  />
                  <Image
                    src="/logo-small.png"
                    width={20}
                    height={20}
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    alt="GFE Logo"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <Button className="mt-[32px] w-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-[32px] py-[16px]">
            {t("buy_now")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Counter
