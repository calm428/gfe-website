import React from "react"

import { formatCustomDate } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "../ui/button"

const dummyData: OneTransaction[] = [
  { id: 1, type: "Deposit", date: new Date("2023-01-01"), amount: 100 },
  { id: 2, type: "Withdraw", date: new Date("2023-02-15"), amount: 50 },
  { id: 3, type: "Deposit", date: new Date("2023-03-20"), amount: 75 },
  { id: 4, type: "Withdraw", date: new Date("2023-04-10"), amount: 30 },
  { id: 5, type: "Deposit", date: new Date("2023-05-05"), amount: 120 },
]

const BuyDapp = () => {
  return (
    <div className="rounded-md p-4 bg-white border border-[#E7F0FD] shadow-md w-1/3">
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#383838] font-semibold">
          Transaction History
        </p>
        <Button variant="link" className="">
          View All
        </Button>
      </div>
      {dummyData.map((transaction) => (
        <ATransaction key={transaction.id} {...transaction} />
      ))}
    </div>
  )
}

interface OneTransaction {
  id: number
  type: "Withdraw" | "Deposit"
  date: Date
  amount: number
}

const ATransaction: React.FC<OneTransaction> = ({ id, type, date, amount }) => {
  return (
    <div className="flex items-center justify-between my-1 font-semibold ">
      <div className="flex items-center gap-2">
        {type === "Deposit" ? <Icons.deposit /> : <Icons.withdraw />}
        <div>
          <p className="text-[#111113] text-sm">
            {type === "Deposit" ? "Deposit" : "Withdraw"} # {id}
          </p>
          <p className="text-[#64748B] text-xs">
            {formatCustomDate(new Date(date))}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#111113] text-xs">
          {type === "Deposit" ? "+" : "-"} $ {amount}
        </p>
        <p
          className={`text-xs  ${
            type === "Deposit"
              ? " text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]"
              : "text-[#5A6778]"
          }`}
        >
          {type === "Deposit" ? "Recieve" : "Send"}
        </p>
      </div>
    </div>
  )
}

export default BuyDapp
