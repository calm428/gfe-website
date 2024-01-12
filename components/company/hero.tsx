"use client"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="space-y-10">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="flex items-center gap-2">
            <Badge className="p-2 font-monument" variant="secondary">
              SUNBELT
            </Badge>
            <Separator
              orientation="vertical"
              className="h-6 w-[2px] bg-muted-foreground"
            />
            <div className="font-mont text-muted-foreground">
              Sunbelt Miners
            </div>
          </div>
          <h1
            className="pb-1 text-center font-monument text-3xl tracking-[-2%] sm:mt-5 md:text-left md:text-5xl lg:mt-6 xl:leading-[72px]"
            style={{
              background: "linear-gradient(180deg, #2BADFD 0%, #1570EF 88.02%)",
              backgroundClip: "text!important",
              color: "transparent",
            }}
          >
            Discover SUNBELT Miners
          </h1>
          <p className="text-md max-w-xl font-mont text-muted-foreground md:text-2xl">
            Our goal is to offer the opportunity to invest in machines and then
            mine cryptocurrencies available to the general public
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/images/company/pillar.png"
          alt="cube"
          width={500}
          height={256}
          className="mx-auto"
        />
      </div>
    </div>
  )
}
