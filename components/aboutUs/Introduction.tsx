import React from "react"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Button } from "../ui/button"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "../icons"

function Introduction() {
  return (
    <div
      className="relative pb-[100px] lg:pb-[300px] px-5 lg:px-0  pt-[50px] lg:pt-[100px] flex flex-col gap-12 items-center bg-cover "
      style={{
        backgroundImage:
          "url('/images/bg-gradient.webp'),url('/bgs/about.svg')",
      }}
    >
      <div className="flex flex-col items-center gap-8 px-5 lg:px-16">
        <h1 className="font-medium auth py-[8px] px-[16px] text-base md:text-[20px] w-fit rounded-sm bg-[#EEF5FF] text-primary">
          About Us
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <h1 className=" text-[30px] lg:text-[50px] font-monument text-center text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Innovative <br />
            approach to global energy
          </h1>
          <Button className="bg-background hover:bg-muted border border-secondary-foreground text-secondary-foreground font mont auth">
              <Link href={siteConfig.links.docs} className="flex items-center justify-between gap-3">
                <Icons.play />
                <span>Whitepaper</span>
              </Link>
            </Button>
        </div>
      </div>
      <div className="absolute -bottom-5">
        <img src="/images/Union.svg" alt="image" className="w-full" />
      </div>
    </div>
  )
}

export default Introduction
