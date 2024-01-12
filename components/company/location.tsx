"use client"

import Image from "next/image"

export default function LocationSection() {
  return (
    <div className="pb-14 pt-10 md:pt-24">
      <div className="pb-10 md:pb-14">
        <div className="mt-4 text-center font-monument text-xl uppercase text-primary">
          Where We mine Our hosting
        </div>
        <div className="text-md text-center font-mont text-muted-foreground">
          Step into a comprehensive mining ecosystem designed to maximize
          efficiency, sustainability, and profitability. Our integrated platform
          offers a seamless blend of cutting-edge technology, sustainable
          practices, and user-friendly tools.
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-col gap-4 xl:flex-row">
        <Image
          src="/images/company/where-sunbelt.png"
          alt="where-sunbelt"
          className="mx-auto w-full max-w-5xl"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
