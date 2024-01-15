"use client"

import Image from "next/image"

function MarketPlace() {
  return (
    <div className=" grid place-items-center gap-6 bg-gradient-to-t from-[#2BADFD] to-[#1570EF] pt-24 lg:grid-cols-2 lg:py-24 lg:pl-24">
      <div className="flex flex-col gap-8 px-5 text-primary-foreground lg:px-0">
        <h1 className="font-goldman text-5xl">Electricity Market Landscape</h1>
        <p className=" auth font-mont text-base lg:text-lg">
          The global energy market is estimated to be worth: $2trillion.
          However, it is largely centralized by a few corporations. These
          corporations often call themselves energy companies; but in our
          lifetime have migrated into profitable areas of the energy industry.
          They are drilling companies supplying an unfettered demand from grids.
          Energy is not oil, Oil is a profitable sector of the energy market.
          Our world needs to look beyond profit oriented corporate mandates. A
          corporation will not come naturally to a conversation about unpriced
          externalities in their process. Those conversations will only cost
          them money, and corporations are mandated by law to seek profit. They
          want to do things the same way.
        </p>
        <p className=" auth font-mont text-base lg:text-lg">
          The intensely local monopoly market for electricity is built for
          stability and convenience. Monopolies trade amongst themselves, at
          market rates, for concurrent delivery. The market price in the UK is
          near to .45 usd per kw and China’s power market is around .04 per kw.
          The power in the UK is not aging coal fired power, and China power is
          not deliverable to the UK. There is no global commodity market for
          electricity.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <img src="/icons/check.svg" alt="image" />
            <p className="auth font-mont text-base lg:text-lg">
              Consumption of power is convenient at the location a business
              operates.
            </p>
          </div>
          <div className="flex gap-3">
            <img src="/icons/check.svg" alt="image" />
            <p className="auth font-mont text-base lg:text-lg">
              Assembly plants often use steel produced from Chinese power for
              assembly in part due to the intensive energy requirements for
              steel.
            </p>
          </div>
          <div className="flex gap-3">
            <img src="/icons/check.svg" alt="image" />
            <p className="auth font-mont text-base lg:text-lg">
              Office spaces use servers powered in Iceland.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={"/images/about-us/nft4.svg"}
          width={808}
          height={943}
          alt="image"
        />
      </div>
    </div>
  )
}

export default MarketPlace
