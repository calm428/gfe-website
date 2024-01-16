import Image from "next/image"

function PowerProduction() {
  return (
    <div className="flex flex-col-reverse justify-center pt-14 lg:flex-row">
      <div className=" h-fit">
        <Image
          src="/images/about-us/nft5.svg"
          alt="image"
          width={804}
          height={982}
          className="lg:w-[80%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-8 container lg:w-1/2 lg:px-0 lg:pr-24">
        <h1 className=" bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-monument text-[40px] text-transparent">
          Unpriced Externalities in Power Production
        </h1>
        <p className="auth text-center font-mont text-base font-medium md:text-lg">
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
