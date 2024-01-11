import React from "react"
import Image from "next/image"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Button } from "../ui/button"

function Introduction() {
  return (
    <div className="relative px-5 lg:px-24 pt-[100px] flex flex-col gap-12 items-center bg-[url('/images/bg-gradient.webp')] bg-cover">
      <div className="flex flex-col items-center gap-8 px-5 lg:px-16">
        <div className="relative auth flex justify-between items-center bg-primary/10 rounded-3xl md:rounded-full py-[25px]  md:py-[8px] pr-[16px] pl-[8px] shadow-lg lg:w-[629px]">
          <Button className="absolute -top-3 md:top-0 left-[40%] md:left-0 md:relative rounded-full py-[8px] px-[16px] bg-gradient-to-l from-[#2BADFD] to-[#1570EF] ">
            New
          </Button>
          <h1 className="text-muted-foreground font-mont ml-2 mt-2 md:mt-0 md:text-lg font-medium text-center">
            NFT Official landing page has officially launched!🎉
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl xs:text-5xl md:text-5xl font-goldman font-medium capitalize text-center text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Reshape the future of <br />
            clean energy with DAPPr NFT
          </h1>
          <p className="auth font-semibold text-md text-center text-muted-foreground w-full">
            Our Journey began with the design and construction of a
            sustainably-run server hosting environment prototype. NFT holders
            have the ownership of these units and earn a daily income.
          </p>
        </div>
      </div>
      <Image
        src="/images/nft/lifecycle.svg"
        alt="lifycycle"
        width={655}
        height={682}
        className="w-[90%] sm:w-[50%] lg:w-[30%]"
      />
      <div className="absolute -bottom-6  md:-bottom-10 lg:-bottom-16 w-full left-0 flex z-0">
        <Image
          src="/images/left.svg"
          alt="bottom-left"
          width={1010}
          height={232}
          className="w-1/2"
        />
        <Image
          src="/images/right.svg"
          alt="bottom-right"
          width={1010}
          height={232}
          className="w-1/2"
        />
      </div>
    </div>
  )
}

export default Introduction
