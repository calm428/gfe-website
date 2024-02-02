"use client"

import { useQuery } from "react-query"

import BitcoinPriceGraph from "./bitcoin-price-graph"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()
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
      <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  pb-5 text-center font-goldman text-5xl font-normal md:pb-10">
        {t("minerHosting.TrackBitcoinRates")}
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 rounded-xl bg-primary/5 p-4 xl:grid-cols-2">
        <BitcoinPriceGraph />

        <div className="w-full">
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent font-semi bold pb-5 pt-10 font-goldman text-4xl tracking-wider">
            {t('minerHosting.bitcoin_price.title')}
          </h1>

          <div className="text-md mb-4">
          {t('minerHosting.bitcoin_price.description')}
          </div>
          <div className="flex w-full justify-between">
            <div>
              <div className="font-mont text-xl font-semibold text-primary">
                $ {!isLoading && priceData ? priceData.price : 0}
              </div>
              <div className="text-md">{t('minerHosting.CurrentPrice')}</div>
            </div>
            <div>
              <div className="font-mont text-xl font-semibold text-primary">
                $ {!isLoading && priceData ? priceData.marketCap : 0} B
              </div>
              <div className="text-md">{t('minerHosting.MarketCap')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BitcoinRateSection
