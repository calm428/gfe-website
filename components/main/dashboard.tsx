"use client"

import React from "react"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import Balance from "./balance"
import BuyDapp from "./buyDapp"
import BuyGfeToken from "./buyGfe"
import BuyToken from "./buyToken"
import MiningPlan from "./miningPlan"
import TransactionHistory from "./transaction"

const Dashboard = () => {
  return (
    <div className="bg-[#FAFAFA] px-16 py-12">
      <p className="text-[#1E293B] font-semibold text-5xl">
        Hello, Jesse Lawson
      </p>
      <div className="flex items center gap-2 text-sm text-[#64748B] font-medium">
        <div className="flex items-center gap-1">
          <Icons.mail />
          <p>Jesselawson@gmail.com</p>
        </div>
        <div className="flex items-center gap-1">
          <Icons.location />
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <Balance />
        <TransactionHistory />
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <BuyGfeToken />
        <BuyDapp />
      </div>
      <div className=" mt-5">
        <p className="text-[#1E293B] text-3xl font-semibold">Btc Mining</p>
        <div className="flex gap-5 mt-5">
          <div className="w-1/4 flex flex-col gap-4">
            <div
              className="p-3 rounded-md w-full text-[#64748B] bg-white border border-[#E7F0FD]"
              style={{ boxShadow: "0px 1px 2px 0px rgba(51, 65, 86, 0.08)" }}
            >
              <div
                className="p-2 rounded-md w-fit"
                style={{
                  background:
                    "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%), #1570EF",
                  boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.06)",
                }}
              >
                <Icons.miningProfit />
              </div>
              <p className="text-sm font-medium mt-3 mb-4">Mining profit</p>
              <p className="font-semibold text-4xl mb-2 text-[#2C3B50]">
                $99,118.5
              </p>
              <div className="flex justify-between items-center mb-4">
                <p className="font-medium">0.981239712 BTC</p>
                <div
                  className="px-2 py-1 rounded-md text-[#70FF29] flex gap-1 items-center "
                  style={{ background: "rgba(103, 194, 58, 0.08)" }}
                >
                  <Icons.up />
                  <p>10.5%</p>
                </div>
              </div>
            </div>
            <div
              className="p-3 rounded-md w-full text-[#64748B] bg-white border border-[#E7F0FD]"
              style={{ boxShadow: "0px 1px 2px 0px rgba(51, 65, 86, 0.08)" }}
            >
              <div
                className="p-2 rounded-md w-fit"
                style={{
                  background:
                    "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%), #1570EF",
                  boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.06)",
                }}
              >
                <Icons.minTransLevel />
              </div>
              <p className="text-sm font-medium mt-3 mb-4">
                Minimum Transaction Level
              </p>
              <p className="font-semibold text-4xl mb-2 text-[#2C3B50]">
                $99,118.5
              </p>
              <div className="flex justify-between items-center mb-4">
                <p className="font-medium">0.981239712 BTC</p>
                <div
                  className="px-2 py-1 rounded-md text-[#1570EF] flex gap-1 items-center "
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
