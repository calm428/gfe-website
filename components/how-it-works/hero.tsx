"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 justify-center py-40">
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
            <div className="text-muted-foreground font-mont">
              Sunbelt Miners
            </div>
          </div>
          <h1
            className="font-medium text-5xl text-center font-monument tracking-[-2%] pb-1 sm:mt-5 sm:text-6xl lg:mt-6 xl:leading-[72px]"
            style={{
              background: "linear-gradient(180deg, #2BADFD 0%, #1570EF 88.02%)",
              backgroundClip: "text!important",
              color: "transparent",
            }}
          >
            How Sunbelt Works
          </h1>
          <p className="text-2xl max-w-3xl text-center font-mont text-muted-foreground">
            Our goal is to offer the opportunity to invest in machines and then
            mine cryptocurrencies available to the general public
          </p>
        </div>
      </div>
    </div>
  )
}
