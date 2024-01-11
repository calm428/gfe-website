"use client"

import React from "react"

function MarketPlace() {
  return (
    <div className=" pt-24 lg:py-24 lg:pl-24 bg-gradient-to-t from-[#2BADFD] to-[#1570EF] grid lg:grid-cols-2 place-items-center gap-[150px]">
      <div className="flex px-5 lg:px-0 flex-col gap-8 text-primary-foreground">
        <h1 className="font-monument text-[40px]">
          Electricity Market Landscape
        </h1>
        <p className=" text-base lg:text-lg auth font-mont">
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
        <p className=" text-base lg:text-lg auth font-mont">
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
            <p className="text-base lg:text-lg auth font-mont">
              Consumption of power is convenient at the location a business
              operates.
            </p>
          </div>
          <div className="flex gap-3">
            <img src="/icons/check.svg" alt="image" />
            <p className="text-base lg:text-lg auth font-mont">
              Assembly plants often use steel produced from Chinese power for
              assembly in part due to the intensive energy requirements for
              steel.
            </p>
          </div>
          <div className="flex gap-3">
            <img src="/icons/check.svg" alt="image" />
            <p className="text-base lg:text-lg auth font-mont">
              Office spaces use servers powered in Iceland.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img src="/images/225.svg" alt="image" className="w-full" />
      </div>
    </div>
  )
}

export default MarketPlace
