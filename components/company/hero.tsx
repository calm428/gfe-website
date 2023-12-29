"use client"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
      <div className="space-y-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Badge className="p-2 font-monument" variant="secondary">
              SUNBELT
            </Badge>
            <Separator
              orientation="vertical"
              className="h-6 w-[2px] bg-muted-foreground"
            />
            <div className="text-muted-foreground font-mont">
              Sunbelt Miners
            </div>
          </div>
          <h1
            className="font-monument text-3xl text-center md:text-left tracking-[-2%] pb-1 sm:mt-5 md:text-5xl lg:mt-6 xl:leading-[72px]"
            style={{
              // background: "linear-gradient(180deg, #2BADFD 0%, #1570EF 88.02%)",
              backgroundClip: "text!important",
              // color: "transparent",
              color: "white",
            }}
          >
            Discover SUNBELT Miners
          </h1>
          <p className="text-md md:text-2xl max-w-xl font-mont text-muted-foreground">
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
