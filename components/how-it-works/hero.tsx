"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-40 md:flex-row">
      <div className="space-y-10">
        <div className="flex flex-col items-center gap-2">
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
            className="pb-1 text-center font-monument text-5xl font-medium tracking-[-2%] sm:mt-5 sm:text-6xl lg:mt-6 xl:leading-[72px]"
            style={{
              background: "linear-gradient(180deg, #2BADFD 0%, #1570EF 88.02%)",
              backgroundClip: "text!important",
              color: "transparent",
            }}
          >
            How Sunbelt Works
          </h1>
          <p className="max-w-3xl text-center font-mont text-2xl text-muted-foreground">
            Our goal is to offer the opportunity to invest in machines and then
            mine cryptocurrencies available to the general public
          </p>
        </div>
      </div>
    </div>
  )
}
