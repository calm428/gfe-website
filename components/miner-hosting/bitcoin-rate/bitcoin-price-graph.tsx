"use client"

import { useState } from "react"
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  ScriptableContext,
  Tooltip,
} from "chart.js"
import { format } from "date-fns/format"
import { Line } from "react-chartjs-2"
import { useQuery } from "react-query"

import { Button } from "../../ui/button"

ChartJS.register(
  ArcElement,
  Tooltip,
  Filler,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

const useGetChartData = (
  cryptoName: string,
  interval: number,
  options: any
) => {
  return useQuery(
    ["chartData", interval],
    async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=${interval}`
      )
      return await response.json()
    },
    options
  )
}

const BitcoinPriceGraph = () => {
  const [interval, setInterval] = useState<number>(7)
  const { isLoading, data: priceData } = useGetChartData("bitcoin", interval, {
    refetchInterval: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
    select: (data: any) =>
      data?.prices?.map((item: number[]) => ({
        x: item[0],
        y: item[1],
      })),
  })

  const handleIntervalChange = (value: number) => {
    setInterval(value)
  }

  const formatDate = (value: number) => {
    if (interval === 1) return format(value, "p")
    else if (interval === 3 || interval === 7 || interval === 30)
      return format(value, "MM/dd")
  }

  const filteredData =
    !isLoading && priceData
      ? priceData.filter(
          (
            value: { x: number; y: number },
            index: number,
            array: { x: number; y: number }[]
          ) =>
            array.findIndex(
              (item) => formatDate(item.x) === formatDate(value.x)
            ) === index
        )
      : []

  const labels = (priceData ?? [])?.reduce(
    (acc: string[], p: { x: number; y: number }) => {
      const formatedLabel = formatDate(p.x) as string
      const itemTobeAddedd = acc.includes(formatedLabel) ? "" : formatedLabel
      acc.push(itemTobeAddedd)
      return acc
    },
    []
  )

  const data = {
    labels: labels,
    datasets: [
      {
        data: priceData?.map((item: { x: number; y: number }) => item.y),
        pointRadius: 2,
        pointHoverRadius: 4,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const { ctx, data, chartArea } = context.chart

          const gradient = ctx.createLinearGradient(
            0,
            chartArea?.top || 0,
            0,
            chartArea?.bottom || 250
          )
          gradient.addColorStop(0, "rgba(21, 112, 239, 0.6)")
          gradient.addColorStop(1, "rgba(115, 169, 243, 0.1)")
          return gradient
        },
        borderColor: "rgba(21, 112, 239, 1)",
        fill: true,
      },
    ],
  }

  // const options = {
  //   scales: {
  //     x: {
  //       display: true,
  //       grid: {
  //         display: false,
  //       },
  //     },
  //     y: {
  //       display: true,
  //       grid: {
  //         display: false,
  //       },
  //       ticks: {
  //         // Format the y-axis ticks with the dollar sign ('$')
  //         callback: function (value: number) {
  //           return "$ " + value
  //         },
  //       },
  //       position: "left",
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     tooltip: {
  //       enabled: false, // Disable tooltips
  //     },
  //   },
  // }

  const options = {
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
        position: "left",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  }

  return (
    <div className="flex w-full flex-col justify-between space-y-5 rounded-xl bg-white p-10 drop-shadow-md">
      <h3 className="auth text-xl  tracking-wider text-primary">
        Bitcoin Chart
      </h3>
      <div className="ml-auto flex space-x-3">
        <Button
          className={`rounded-lg px-3 py-2 ${
            interval === 1 ? "bg-primary/10 text-primary" : ""
          }`}
          variant="ghost"
          onClick={() => handleIntervalChange(1)}
        >
          1d
        </Button>
        <Button
          className={`rounded-lg px-3 py-2 ${
            interval === 3 ? "bg-primary/10 text-primary" : ""
          }`}
          variant="ghost"
          onClick={() => handleIntervalChange(3)}
        >
          3d
        </Button>
        <Button
          className={`rounded-lg px-3 py-2 ${
            interval === 7 ? "bg-primary/10 text-primary" : ""
          }`}
          variant="ghost"
          onClick={() => handleIntervalChange(7)}
        >
          1W
        </Button>
        <Button
          className={`rounded-lg px-3 py-2 ${
            interval === 30 ? "bg-primary/10 text-primary" : ""
          }`}
          variant="ghost"
          onClick={() => handleIntervalChange(30)}
        >
          1M
        </Button>
      </div>
      {/* @ts-ignore */}
      <Line id="myChart" data={data} options={options} />
    </div>
  )
}

export default BitcoinPriceGraph
