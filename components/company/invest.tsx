"use client"

import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function InvestSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="relative rounded-xl bg-[#E7F0FD] px-8 py-12">
        <div className="my-4 text-2xl font-semibold text-primary">
          Willing to Invest More Than $100K?
        </div>
        <div className="text-md w-full font-mont text-muted-foreground md:w-1/2 lg:w-2/3">
          If you{"'"}re ready to invest more than $100K, seize the potential for
          substantial returns and accelerated growth. Explore strategic
          investment options with us to maximize your financial impact and
          secure a path to long-term success.
        </div>
        <Button
          variant="default"
          className="mt-4"
          style={{
            background: "linear-gradient(37deg, #22B4FD 2.42%, #2D79FF 80.84%)",
          }}
        >
          Make an Invest
        </Button>
        <Image
          src="/images/miners/miner4.png"
          alt="invest"
          width={500}
          height={500}
          className="-bottom-8 right-0 mx-auto mt-8 h-80 w-auto md:absolute"
        />
      </div>
    </div>
  )
}
