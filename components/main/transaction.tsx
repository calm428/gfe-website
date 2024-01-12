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

const TransactionHistory = () => {
  return (
    <div className="w-3/5 rounded-md border border-[#E7F0FD] bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-[#383838]">
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
    <div className="my-1 flex items-center justify-between font-semibold ">
      <div className="flex items-center gap-2">
        {type === "Deposit" ? <Icons.deposit /> : <Icons.withdraw />}
        <div>
          <p className="text-sm text-[#111113]">
            {type === "Deposit" ? "Deposit" : "Withdraw"} # {id}
          </p>
          <p className="text-xs text-[#64748B]">
            {formatCustomDate(new Date(date))}
          </p>
        </div>
      </div>
      <div>
        <p className="text-xs text-[#111113]">
          {type === "Deposit" ? "+" : "-"} $ {amount}
        </p>
        <p
          className={`text-xs  ${
            type === "Deposit"
              ? " bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent"
              : "text-[#5A6778]"
          }`}
        >
          {type === "Deposit" ? "Recieve" : "Send"}
        </p>
      </div>
    </div>
  )
}

export default TransactionHistory
