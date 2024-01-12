"use client"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="space-y-10">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Badge className="p-2" variant="secondary">
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
            className="pb-1 text-5xl font-bold tracking-[-2%] sm:mt-5 sm:text-6xl lg:mt-6 xl:leading-[72px]"
            style={{
              background:
                "conic-gradient(from 99.79deg at 0 0,#2f55ff 0deg,#47a8fe 1.91deg,#24bafe 4.21deg,#2b77ff 1turn),#175cd3",
              backgroundClip: "text!important",
              color: "transparent",
            }}
          >
            All In One Solution For <br className="hidden sm:inline" />
            Bitcoin Mining
          </h1>
          <p className="max-w-xl font-mont text-2xl text-muted-foreground">
            Focused on sustainable mining and eco-friendly options, contribute
            to making the world better
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/images/miners/pillar.png"
          alt="cube"
          width={360}
          height={256}
          className="mx-auto"
        />
      </div>
    </div>
  )
}
