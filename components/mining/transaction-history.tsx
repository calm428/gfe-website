"use client"

import { Card, CardBody, CardHeader } from "@nextui-org/react"

export default function TransactionHistory() {
  return (
    <Card className="mt-8 w-full p-4" shadow="sm">
      <CardHeader className="flex items-start gap-2 text-left">
        <p className="font-semibold">Transaction History</p>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  )
}
