"use client"

import { useQuery } from "react-query"

import BitcoinPriceGraph from "./BitcoinPriceGraph"

const useGetBitcoinData = (cryptoName: string, options: any) => {
  return useQuery(
    ["BitcoinData"],
    async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoName}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
      )
      return await response.json()
    },
    options
  )
}

function BitcoinRateSection() {
  const { isLoading, data: priceData } = useGetBitcoinData("bitcoin", {
    refetchInterval: 60 * 1000,
    staleTime: 60 * 1000,
    select: (data: any) => {
      price: data.current_price
      marketCap: data.market_cap
    },
  })

  return (
    <div className="container px-10 py-20">
      <h1 className="pb-5 text-center font-goldman text-5xl font-normal text-primary  md:pb-10">
        Track Bitcoin Rates
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 rounded-xl bg-primary/10 p-4 xl:grid-cols-2">
        <BitcoinPriceGraph />

        <div className="w-full">
          <h1 className="font-semi bold pb-5 pt-10 font-goldman text-3xl tracking-wider text-primary">
            Bitcoin Price
          </h1>

          <div className="text-md mb-4">
            Bitcoin, created in 2009, is a decentralized digital currency
            facilitating peer-to-peer transactions on a transparent blockchain.
            Capped at 21 million coins, it serves as a borderless store of value
            and potential hedge against inflation.
          </div>
          <div className="flex w-full justify-between">
            <div>
              <div className="font-mont text-xl font-semibold text-primary">
                $ {!isLoading && priceData ? priceData.price : 0}
              </div>
              <div className="text-md">Current Price</div>
            </div>
            <div>
              <div className="font-mont text-xl font-semibold text-primary">
                $ {!isLoading && priceData ? priceData.marketCap : 0} B
              </div>
              <div className="text-md">Market Cap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BitcoinRateSection
