"use client"

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
import { useTranslations } from "next-intl"
import { Line } from "react-chartjs-2"

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

const HistoricalPowerGraph = () => {
  const t = useTranslations("main")

  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        data: [0, 1, 3, 6, 10, 14, 20],
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
        position: "right",
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
    <div className="flex w-full flex-col justify-between space-y-5 bg-white p-10 drop-shadow-2xl">
      <p className="auth text-sm font-semibold tracking-wider text-primary">
        {t("miner_hosting.historicalPowerGraph.title")}
      </p>
      {/* @ts-ignore */}
      <Line id="myChart" data={data} options={options} />
    </div>
  )
}

export default HistoricalPowerGraph
