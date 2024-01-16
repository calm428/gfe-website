import Image from "next/image"

import { Button } from "../ui/button"

function Introduction() {
  return (
    <div className="relative flex flex-col items-center gap-12 bg-[url('/images/bg-gradient.webp')] bg-cover pcontainer pt-[100px] lg:px-24">
      <div className="flex flex-col items-center gap-8 container lg:px-16">
        <div className="auth relative flex items-center justify-between rounded-3xl bg-primary/10 py-[25px] pl-[8px]  pr-[16px] shadow-lg md:rounded-full md:py-[8px] lg:w-[629px]">
          <Button className="absolute -top-3 left-[40%] rounded-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-[16px] py-[8px] md:relative md:left-0 md:top-0 ">
            New
          </Button>
          <h1 className="ml-2 mt-2 text-center font-mont font-medium text-muted-foreground md:mt-0 md:text-lg">
            NFT Official landing page has officially launched!🎉
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="xs:text-5xl bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-4xl font-medium capitalize text-transparent md:text-5xl">
            Reshape the future of <br />
            clean energy with DAPPr NFT
          </h1>
          <p className="auth text-md w-full text-center font-semibold text-muted-foreground">
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
      <div className="absolute -bottom-6  left-0 z-0 flex w-full md:-bottom-10 lg:-bottom-16">
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
