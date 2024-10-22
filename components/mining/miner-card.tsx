import Image from "next/image"
import MinerPic_1 from "@/public/images/miners/miner1.png"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { useTranslations } from "next-intl"

function MinerCard() {
  const t = useTranslations("main.platform.mining.miner-card")

  return (
    <Card
      className="mx-auto my-1 w-full max-w-[300px] cursor-pointer p-4 hover:bg-primary/10"
      shadow="sm"
      isPressable
    >
      <CardHeader className="flex items-start gap-2 text-left">
        <div className="w-2/3">
          <p className="text-primary">ASIC-based:</p>
          <h4 className="text-large font-bold">Antminer KS3 8.2 TH/s</h4>
        </div>
        <div className="w-1/3">
          <Image src={MinerPic_1} alt="Antminer KS3 8.2 TH/s" />
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex w-full items-center justify-between">
          <p className="text-sm">{t("hashrate")}</p>
          <p className="font-semibold text-primary">8 TH/s</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-sm">{t("income")}</p>
          <p className="font-semibold text-primary">2 BTC/year</p>
        </div>
        <Divider className="my-2 bg-primary" />
        <div className="flex w-full items-center justify-between">
          <p className="text-sm">{t("machine_price")}</p>
          <p className="font-semibold text-primary">19,270 USD</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-sm">{t("accessory_price")}</p>
          <p className="font-semibold text-primary">3,550 USD</p>
        </div>
        <Divider className="my-2 bg-primary" />
        <div className="flex w-full items-center justify-between">
          <p className="text-sm">{t("price")}</p>
          <p className="font-semibold text-primary">22,850 USD</p>
        </div>
        <div className="mt-2 flex w-full justify-end">
          <p className="text-sm font-medium">+2,590 USD Energy annually</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default MinerCard
