import Image from "next/image"
import { useTranslations } from "next-intl"

import SectionDescription from "@/components/common/section-description"
import SectionTitle from "@/components/common/section-title"

import StepComponent from "./step"

export type Step = {
  index: number
  title: string
  description: string
  icon: string
}

export default function GuideSection() {
  const t = useTranslations("main")

  const steps: Step[] = [
    {
      index: 1,
      title: t("miner_hosting.signUp.title"),
      description: t("miner_hosting.signUp.subtitle"),
      icon: "/images/how-it-works/signup.svg",
    },
    {
      index: 2,
      title: t("miner_hosting.buyPower.title"),
      description: t("miner_hosting.buyPower.subtitle"),
      icon: "/images/how-it-works/buy-power.svg",
    },
    {
      index: 3,
      title: t("miner_hosting.writeMiningPlan.title"),
      description: t("miner_hosting.writeMiningPlan.subtitle"),
      icon: "/images/how-it-works/write-mining-plan.svg",
    },
    {
      index: 4,
      title: t("miner_hosting.miningPool.title"),
      description: t("miner_hosting.miningPool.subtitle"),
      icon: "/images/how-it-works/mining-pool.svg",
    },
    {
      index: 5,
      title: t("miner_hosting.getReward.title"),
      description: t("miner_hosting.getReward.subtitle"),
      icon: "/images/how-it-works/get-reward.svg",
    },
    {
      index: 6,
      title: t("miner_hosting.maintenance.title"),
      description: t("miner_hosting.maintenance.subtitle"),
      icon: "/images/how-it-works/maintenance.svg",
    },
  ]
  return (
    <section className="flex flex-col items-center justify-between pb-4">
      <SectionTitle>{t("miner_hosting.miningStepByStep.title")}</SectionTitle>
      <SectionDescription className="max-w-7xl">
        {t("miner_hosting.miningStepByStep.subtitle")}
      </SectionDescription>
      <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="hidden items-center justify-center lg:flex">
          <Image
            src="/images/how-it-works/bg1.png"
            alt="how-it-works"
            width={1072}
            height={1111}
            className="mx-auto h-auto w-full"
          />
        </div>
        <div>
          {steps.map((step) => (
            <StepComponent key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}
