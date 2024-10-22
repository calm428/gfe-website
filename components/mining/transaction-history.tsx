"use client"

import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { useTranslations } from "next-intl"

export default function TransactionHistory() {
  const t = useTranslations("main.platform.mining.trans_history")
  return (
    <Card className="mt-8 w-full p-4" shadow="sm">
      <CardHeader className="flex items-start gap-2 text-left">
        <p className="font-semibold">{t("title")}</p>
      </CardHeader>
      <CardBody>

      </CardBody>
    </Card>
  )
}
