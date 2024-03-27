"use client"

import { useTranslations } from "next-intl"
import { useQuery } from "react-query"

import SectionTitle from "@/components/common/section-title"

import BitcoinPriceGraph from "./bitcoin-price-graph"

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
  const t = useTranslations("main")

  const { isLoading, data: priceData } = useGetBitcoinData("bitcoin", {
    refetchInterval: 60 * 1000,
    staleTime: 60 * 1000,
    select: (data: any) => {
      price: data.current_price
      marketCap: data.market_cap
    },
  })

  return (
    <section className="container px-10 py-20">
      <SectionTitle>{t("miner_hosting.TrackBitcoinRates")}</SectionTitle>

      <div className="mt-4 grid w-full grid-cols-1 gap-10 rounded-xl bg-primary/5 p-4 xl:grid-cols-2">
        <BitcoinPriceGraph />

        <div className="w-full">
          <h3 className="font-semi bold bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-5 pt-10 font-goldman text-4xl tracking-wider text-transparent">
            {t("miner_hosting.bitcoin_price.title")}
          </h3>

          <div className="text-md mb-4">
            {t("miner_hosting.bitcoin_price.description")}
          </div>
          <div className="flex w-full justify-between">
            <div>
              <div className="font-mont text-xl font-semibold text-primary">
                $ {!isLoading && priceData ? priceData.price : 0}
              </div>
              <div className="text-md">{t("miner_hosting.CurrentPrice")}</div>
            </div>
            <div>
              <div className="font-mont text-xl font-semibold text-primary">
                $ {!isLoading && priceData ? priceData.marketCap : 0} B
              </div>
              <div className="text-md">{t("miner_hosting.MarketCap")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BitcoinRateSection
