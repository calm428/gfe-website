"use client"

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react"
import { useTranslations } from "next-intl"

interface MiningPlanProps {}

export default function MiningPlan({}: MiningPlanProps) {
  const t = useTranslations("main.platform.mining.mining_plan")

  return (
    <Card className="mx-auto my-1 w-full max-w-[320px] p-4" shadow="sm">
      <CardHeader className="flex items-start gap-2 text-left">
        <p className="font-semibold">{t("title")}</p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-3">
          <Select
            labelPlacement="outside"
            label={t("type")}
            placeholder={t("select_miner")}
            className="w-full"
          >
            <SelectItem key="1" value="en">
              sdf
            </SelectItem>
          </Select>
          <Select
            labelPlacement="outside"
            label={t("power")}
            placeholder={t("select_power")}
            className="w-full"
          >
            <SelectItem key="1" value="en">
              sdf
            </SelectItem>
          </Select>
          <Select
            labelPlacement="outside"
            label={t("mining_period")}
            placeholder={t("select_period")}
            className="w-full"
          >
            <SelectItem key="1" value="en">
              sdf
            </SelectItem>
          </Select>
        </div>
        <Button
          type="submit"
          color="primary"
          className="mt-8 w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
        >
          {t("start_mining")}
        </Button>
      </CardBody>
    </Card>
  )
}
