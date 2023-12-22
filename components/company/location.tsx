"use client"

import { useState } from "react"
import Image from "next/image"

export default function LocationSection() {
  return (
    <div className="pb-14 pt-10 md:pt-24">
      <div className="md:pb-14 pb-10">
        <div className="text-xl text-primary text-center uppercase font-monument mt-4">
          Where We mine Our hosting
        </div>
        <div className="text-md text-muted-foreground text-center font-mont">
          Step into a comprehensive mining ecosystem designed to maximize
          efficiency, sustainability, and profitability. Our integrated platform
          offers a seamless blend of cutting-edge technology, sustainable
          practices, and user-friendly tools.
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-col xl:flex-row gap-4">
        <Image
          src="/images/company/where-sunbelt.png"
          alt="where-sunbelt"
          className="w-full max-w-5xl mx-auto"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
