import React from "react"

import { Icons } from "../icons"
import { Button } from "../ui/button"

const TransactionHistory = () => {
  return (
    <div className="rounded-md p-4 bg-white border border-[#E7F0FD] shadow-md">
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#383838] font-semibold">
          Transaction History
        </p>
        <Button variant="link" className="">
          View All
        </Button>
      </div>
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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {type === "Deposit" ? <Icons.deposit /> : <Icons.withdraw />}
        <div>
          <p className="text-[#111113] text-sm">
            {type === "Deposit" ? "Deposit" : "Withdraw"} # {id}
          </p>
          <p className="text-[#64748B] text-xs">{new Date(date).}</p>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory
