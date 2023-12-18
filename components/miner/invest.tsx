"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function InvestSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 justify-between pb-32">
      <div className="relative bg-[#E7F0FD] px-8 py-12 rounded-xl">
        <div className="text-2xl font-semibold my-4 text-primary">
          Willing to Invest More Than $100K?
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 text-md text-muted-foreground font-mont">
          If you're ready to invest more than $100K, seize the potential for
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
          className="md:absolute mt-8 h-80 w-auto mx-auto right-0 -bottom-8"
        />
      </div>
    </div>
  )
}
