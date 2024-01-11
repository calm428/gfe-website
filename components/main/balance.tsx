import React from "react"

import { Icons } from "../icons"
import { Button } from "../ui/button"

const Balance = () => {
  return (
    <div
      className="p-4 rounded-md w-2/5 text-white"
      style={{
        background:
          "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%), #1570EF",
        boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Icons.balance />
      <p className="text-sm font-medium mt-3 mb-4">Current Balance</p>
      <p className="font-semibold text-4xl mb-2">$99,118.5</p>
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium">Current Balance</p>
        <div
          className="px-2 py-1 rounded-md text-[#70FF29] flex gap-1 items-center "
          style={{ background: "rgba(46, 255, 92, 0.08)" }}
        >
          <Icons.up />
          <p>10.5%</p>
        </div>
      </div>
      <div
        className="h-1 w-full my-3"
        style={{ background: "rgba(46, 255, 92, 0.08)" }}
      ></div>
      <div className="grid grid-cols-2 gap-5">
        <Button className="w-full" variant={"secondary"}>
          <Icons.add />
          Deposit
        </Button>
        <Button className="w-full " variant={"secondary"}>
          <Icons.send />
          Withdraw
        </Button>
      </div>
    </div>
  )
}

export default Balance
