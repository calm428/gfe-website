import React from "react"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Button } from "../ui/button"

function Introduction() {
  return (
    <div className="relative px-5 lg:px-24 pt-[100px] flex flex-col gap-12 items-center bg-[url('/images/bg-gradient.webp')] bg-cover">
      <div className="flex flex-col items-center gap-8 px-5 lg:px-16">
        <div className=" relative auth flex justify-between items-center bg-background rounded-3xl md:rounded-full py-[25px]  md:py-[8px] pr-[16px] pl-[8px] shadow-lg lg:w-[629px]">
          <Button className="absolute -top-3 md:top-0 left-[40%] md:left-0 md:relative rounded-full py-[8px] px-[16px] bg-gradient-to-l from-[#2BADFD] to-[#1570EF] ">
            New
          </Button>
          <h1 className="text-muted-foreground font-mont mt-2 md:mt-0 md:text-[20px] font-medium">
            NFT Official landing page has officially launched!🎉
          </h1>
          <ChevronRightIcon />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className=" text-[30px] lg:text-[50px] font-monument text-center text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Reshape the future of <br />
            clean energy with DAPPr NFT
          </h1>
          <p className="auth font-semibold text-lg text-[24px] text-center text-muted-foreground w-full">
            Our Journey began with the design and construction of a
            sustainably-run server hosting environment prototype. NFT holders
            have the ownership of these units and earn a daily income.
          </p>
        </div>
      </div>
      <img src="/images/Frame.svg" alt="image" className=" w-[90%] sm:w-[50%] lg:w-[40%]" />
      <div className="absolute -bottom-5">
      <img src="/images/Union.svg" alt="image"/>
      </div>
    </div>
  )
}

export default Introduction
