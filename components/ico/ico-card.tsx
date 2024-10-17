"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button, Input, Select, SelectItem, Spinner } from "@nextui-org/react"
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react"
import { BrowserProvider, Contract, ethers } from "ethers"
import toast from "react-hot-toast"

import GFEICO from "@/config/contract/GFEICO.json"
import useICOWebSocket from "@/hooks/useICOWebSocket"

import CounterCard from "./counter-card"

const cryptoPaymentMethods = [
  {
    icon: "/images/icons/matic.png",
    name: "MATIC",
  },
  {
    icon: "/images/icons/eth.png",
    name: "ETH",
  },
  {
    icon: "/images/icons/usdt.png",
    name: "USDT",
  },
]

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

function ICOCard() {
  const countdownInterval = useRef<number | null>(null)
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [signer, setSigner] = useState<any>(null)
  const [contract, setContract] = useState<Contract | null>(null)
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const {
    status,
    startTime,
    address: contractAddress,
    chainData,
  } = useICOWebSocket(
    `${process.env.NODE_ENV === "production" ? "wss://" : "wss://"}${process.env.NEXT_PUBLIC_WEBSOCKET_HOST}`
  )
  const [selectedPayment, setSelectedPayment] = useState("MATIC")
  const [isCardPayment, setIsCardPayment] = useState(false)
  const [inputGFEValue, setInputGFEValue] = useState("")
  const [inputPaymentValue, setInputPaymentValue] = useState("")
  const [isLoadingBuy, setIsLoadingBuy] = useState(false)
  const t = useTranslations("main.platform.ico")

  const handlePaymentValueChange = (value: string) => {
    if (status !== "running") return
    setInputPaymentValue(value)

    let gfeTokens = 0

    if (isCardPayment) {
      if (chainData.price > 0) gfeTokens = Number(value) * chainData.price
    } else {
      if (selectedPayment === "MATIC") {
        gfeTokens = (Number(value) * chainData.tokenPerMatic) / 100
      } else {
        gfeTokens = Number(inputGFEValue || 0)
      }
    }

    setInputGFEValue(formatNumber(gfeTokens))
  }

  const handleGFEValueChange = (value: string) => {
    if (status !== "running") return
    setInputGFEValue(value)

    let paymentValue = 0

    if (isCardPayment) {
      if (chainData.price > 0) paymentValue = Number(value) / chainData.price
    } else {
      if (selectedPayment === "MATIC") {
        if (chainData.tokenPerMatic > 0)
          paymentValue = (Number(value) / chainData.tokenPerMatic) * 100
      } else {
        paymentValue = Number(inputPaymentValue || 0)
      }
    }

    setInputPaymentValue(formatNumber(paymentValue))
  }

  const handleBuyGFETokens = async () => {
    if (status !== "running") return

    if (isConnected) {
      if (!contract) return

      setIsLoadingBuy(true)
      if (selectedPayment === "MATIC") {
        try {
          const tx = await contract.invest({
            value: ethers.parseEther(inputPaymentValue || "0"),
            gasLimit: 1500000,
            gasPrice: ethers.parseUnits("0.0000003", "ether"), // total gas cost = gas * gasPrice = 0.45 eth
          })

          // Wait for the transaction to be mined
          const receipt = await tx.wait()

          toast.success(
            `Your Transaction completed successfully with transaction hash: ${receipt.transactionHash}`,
            {
              position: "top-right",
            }
          )

          console.log("Invest Transaction completed: ", receipt)
        } catch (error) {
          toast.error(t("sth_wrong"), {
            position: "top-right",
          })

          console.error("Invest Transaction error: ", error)
        }
      }
    } else {
      toast.error("Please connect your wallet", {
        position: "top-right",
      })
    }

    setIsLoadingBuy(false)
  }

  // useEffect(() => {
  //   countdownInterval.current = window.setInterval(updateCountdown, 1000)
  //   return () => {
  //     if (countdownInterval.current)
  //       window.clearInterval(countdownInterval.current)
  //   }
  // }, [])

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

  useEffect(() => {
    if (walletProvider) {
      const _provider = new BrowserProvider(walletProvider)
      setProvider(_provider)

      _provider.getSigner().then((_signer) => {
        setSigner(_signer)
      })
    }
  }, [walletProvider])

  useEffect(() => {
    if (contractAddress && contractAddress.GFEICOContractAddress && signer) {
      const _contract = new ethers.Contract(
        contractAddress.GFEICOContractAddress,
        GFEICO.abi,
        signer
      )
      setContract(_contract)
    }
  }, [contractAddress, signer])

  return (
    <div className="relative overflow-hidden">
      {status !== "running" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-white/30 backdrop-blur-md">
          {status === "loading" && <Spinner color="primary" size="lg" />}
          {status === "not_started" && (
            <p className="font-sans text-lg text-primary">Not started yet...</p>
          )}
          {status === "ended" && (
            <p className="font-sans text-lg text-primary">The ICO has ended</p>
          )}
          {status === "halted" && (
            <p className="font-sans text-lg text-primary">
              The ICO has been halted
            </p>
          )}
          {status === "disconnected" && (
            <p className="font-sans text-lg text-primary">
              {t("sth_wrong")}
            </p>
          )}
        </div>
      )}
      <div className="auth relative w-full overflow-hidden rounded-lg bg-background bg-opacity-75 pb-6 shadow-lg backdrop-blur-3xl">
        <div className="flex flex-col gap-[24px] p-6">
          <div className="text-center">
            <h2 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-[24px] font-bold text-transparent">
              Buy In Before Price Increases!
            </h2>
            <p className="font-sans text-[14px] font-medium">
              Countdown until price increases
            </p>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <CounterCard count={time.days} title="days" />
            <CounterCard count={time.hours} title="hours" />
            <CounterCard count={time.minutes} title="minutes" />
            <CounterCard count={time.seconds} title="seconds" />
          </div>
        </div>
        <div className="px-6">
          <div className="h-5 w-full overflow-hidden rounded-full bg-primary/10">
            <div
              className="h-full bg-gradient-to-b from-[#2BADFD] to-[#1570EF]"
              style={{
                width: `${chainData.totalSupply / chainData.totalToken}%`,
              }}
            ></div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-center gap-[5px]">
            <p className=" text-muted-foreground">
              Minted GFE Tokens:{" "}
              <span>
                {Intl.NumberFormat().format(chainData.totalSupply)} /{" "}
                {Intl.NumberFormat().format(chainData.totalToken)}
              </span>
            </p>
          </div>
          <div className="my-4 flex items-center justify-between">
            <div className="h-[1px] w-1/4 rounded-full bg-gray-500" />
            <p className="text-muted-foreground">
              1 GFE = ${chainData.price / 100}
            </p>
            <div className="h-[1px] w-1/4 rounded-full bg-gray-500" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-2 gap-2">
              <Select
                startContent={
                  <Image
                    src={`/images/icons/${selectedPayment.toLowerCase()}.png`}
                    width={20}
                    height={20}
                    alt={selectedPayment}
                  />
                }
                size="sm"
                defaultSelectedKeys={["MATIC"]}
                onChange={(value) => {
                  setSelectedPayment(value.target.value)
                  setIsCardPayment(false)
                }}
                renderValue={() => (
                  <p className="ml-4 font-semibold">{selectedPayment}</p>
                )}
                disabled={status !== "running"}
              >
                {cryptoPaymentMethods.map((payment) => (
                  <SelectItem key={payment.name} textValue={payment.name}>
                    <div className="flex gap-4">
                      <Image
                        src={`/images/icons/${payment.name.toLowerCase()}.png`}
                        width={20}
                        height={20}
                        alt="btc"
                      />
                      {payment.name}
                    </div>
                  </SelectItem>
                ))}
              </Select>
              <Button
                startContent={
                  <Image
                    src="/images/icons/visa.png"
                    width={30}
                    height={20}
                    alt="btc"
                  />
                }
                radius="sm"
                size="lg"
                variant={isCardPayment ? "bordered" : "flat"}
                className="border-primary/50"
                onClick={() => setIsCardPayment(!isCardPayment)}
                disabled={status !== "running"}
              >
                Visa/MasterCard
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-[8px]">
                <p className=" text-muted-foreground text-sm font-semibold">
                  Pay with {selectedPayment}
                </p>
                <Input
                  type="number"
                  variant="faded"
                  aria-labelledby="Payment Token Amount"
                  classNames={{
                    inputWrapper: "bg-white",
                  }}
                  endContent={
                    !isCardPayment ? (
                      <Image
                        src={`/images/icons/${selectedPayment.toLowerCase()}.png`}
                        width={20}
                        height={20}
                        alt={selectedPayment}
                      />
                    ) : (
                      "$"
                    )
                  }
                  value={inputPaymentValue}
                  onChange={(e) => handlePaymentValueChange(e.target.value)}
                  placeholder="0"
                  disabled={status !== "running"}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className=" text-muted-foreground text-sm font-semibold">
                  Receive GFE
                </p>
                <Input
                  type="number"
                  variant="faded"
                  aria-labelledby="GFE Token Amount"
                  classNames={{
                    inputWrapper: "bg-white",
                  }}
                  endContent={
                    <Image
                      src="/images/round-logo.png"
                      width={20}
                      height={20}
                      alt="GFE Token"
                    />
                  }
                  value={inputGFEValue}
                  onChange={(e) => handleGFEValueChange(e.target.value)}
                  placeholder="0"
                  disabled={status !== "running"}
                />
              </div>
            </div>
          </div>
          <Button
            className="mt-[32px] w-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-[32px] py-[16px] text-white"
            onClick={handleBuyGFETokens}
            isLoading={isLoadingBuy}
            disabled={status !== "running"}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ICOCard
