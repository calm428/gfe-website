import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { Button } from "../ui/button"

function Introduction() {
  return (
    <div
      className="relative pb-[100px] lg:pb-[300px] px-5 lg:px-0  pt-[50px] lg:pt-[100px] flex flex-col gap-12 items-center bg-cover "
      style={{
        backgroundImage:
          "url('/images/bg-gradient.webp'),url('/images/about-us/bg1.png')",
      }}
    >
      <div className="flex flex-col items-center gap-8 px-5 lg:px-16">
        <h1 className="font-medium auth py-[8px] px-[16px] text-base md:text-[20px] w-fit rounded-sm bg-[#EEF5FF] text-primary">
          About Us
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-5xl font-goldman text-center text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Innovative <br />
            approach to global energy
          </h1>
          <Button className="bg-background hover:bg-muted border border-secondary-foreground text-secondary-foreground font mont auth">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center justify-between gap-3"
            >
              <Icons.play />
              <span>Whitepaper</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-6  md:-bottom-10 lg:-bottom-16 w-full left-0 flex z-0">
        <Image
          src="/images/about-us/bottom.svg"
          alt="bottom"
          width={1920}
          height={192}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default Introduction
