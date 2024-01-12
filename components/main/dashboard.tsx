"use client"

import { Icons } from "../icons"
import Balance from "./balance"
import BuyDapp from "./buyDapp"
import BuyGfeToken from "./buyGfe"
import BuyToken from "./buyToken"
import MiningPlan from "./miningPlan"
import TransactionHistory from "./transaction"

const Dashboard = () => {
  return (
    <div className="bg-[#FAFAFA] px-16 py-12">
      <p className="text-5xl font-semibold text-[#1E293B]">
        Hello, Jesse Lawson
      </p>
      <div className="items center flex gap-2 text-sm font-medium text-[#64748B]">
        <div className="flex items-center gap-1">
          <Icons.mail />
          <p>Jesselawson@gmail.com</p>
        </div>
        <div className="flex items-center gap-1">
          <Icons.location />
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        <Balance />
        <TransactionHistory />
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        <BuyGfeToken />
        <BuyDapp />
      </div>
      <div className=" mt-5">
        <p className="text-3xl font-semibold text-[#1E293B]">Btc Mining</p>
        <div className="mt-5 flex gap-5">
          <div className="flex w-1/4 flex-col gap-4">
            <div
              className="w-full rounded-md border border-[#E7F0FD] bg-white p-3 text-[#64748B]"
              style={{ boxShadow: "0px 1px 2px 0px rgba(51, 65, 86, 0.08)" }}
            >
              <div
                className="w-fit rounded-md p-2"
                style={{
                  background:
                    "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%), #1570EF",
                  boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.06)",
                }}
              >
                <Icons.miningProfit />
              </div>
              <p className="mb-4 mt-3 text-sm font-medium">Mining profit</p>
              <p className="mb-2 text-4xl font-semibold text-[#2C3B50]">
                $99,118.5
              </p>
              <div className="mb-4 flex items-center justify-between">
                <p className="font-medium">0.981239712 BTC</p>
                <div
                  className="flex items-center gap-1 rounded-md px-2 py-1 text-[#70FF29] "
                  style={{ background: "rgba(103, 194, 58, 0.08)" }}
                >
                  <Icons.up />
                  <p>10.5%</p>
                </div>
              </div>
            </div>
            <div
              className="w-full rounded-md border border-[#E7F0FD] bg-white p-3 text-[#64748B]"
              style={{ boxShadow: "0px 1px 2px 0px rgba(51, 65, 86, 0.08)" }}
            >
              <div
                className="w-fit rounded-md p-2"
                style={{
                  background:
                    "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%), #1570EF",
                  boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.06)",
                }}
              >
                <Icons.minTransLevel />
              </div>
              <p className="mb-4 mt-3 text-sm font-medium">
                Minimum Transaction Level
              </p>
              <p className="mb-2 text-4xl font-semibold text-[#2C3B50]">
                $99,118.5
              </p>
              <div className="mb-4 flex items-center justify-between">
                <p className="font-medium">0.981239712 BTC</p>
                <div
                  className="flex items-center gap-1 rounded-md px-2 py-1 text-[#1570EF] "
                  style={{ background: "rgba(21, 112, 239, 0.08)" }}
                >
                  <Icons.minLevelTrue />
                  <p>Lv. 3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4">
            <MiningPlan />
          </div>
          <div className="w-1/4">
            <BuyToken />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
