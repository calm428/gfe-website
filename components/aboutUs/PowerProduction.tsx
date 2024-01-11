import React from "react"
import Image from "next/image"

function PowerProduction() {
  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row pt-14">
      <div className=" h-fit">
        <Image
          src="/images/about-us/nft5.svg"
          alt="image"
          width={804}
          height={982}
          className="lg:w-[80%]"
        />
      </div>
      <div className="flex justify-center flex-col gap-8 px-5 lg:px-0 lg:pr-24 lg:w-1/2">
        <h1 className=" text-[40px] font-monument text-center text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          Unpriced Externalities in Power Production
        </h1>
        <p className="auth font-mont text-base text-center md:text-lg font-medium">
          Externalities are costs that are not present in the market price.
          There are externalities in production, transportation, consumption and
          disposal. Global warming and colonialism are in part attributable to
          these classifications of economic forces.
        </p>
      </div>
    </div>
  )
}

export default PowerProduction
