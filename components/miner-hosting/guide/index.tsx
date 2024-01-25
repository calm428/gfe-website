"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

import StepComponent from "./step"

export type Step = {
  index: number
  title: string
  description: string
  icon: string
}

export default function GuideSection() {
  const { t } = useTranslation()

  const steps: Step[] = [
    {
      index: 1,
      title: t("minerHosting.signUp.title"),
      description: t("minerHosting.signUp.subtitle"),
      icon: "/images/how-it-works/signup.svg",
    },
    {
      index: 2,
      title: t("minerHosting.buyPower.title"),
      description: t("minerHosting.buyPower.subtitle"),
      icon: "/images/how-it-works/buy-power.svg",
    },
    {
      index: 3,
      title: t('minerHosting.writeMiningPlan.title'),
      description:t('minerHosting.writeMiningPlan.subtitle'),
      icon: "/images/how-it-works/write-mining-plan.svg",
    },
    {
      index: 4,
      title: t('minerHosting.miningPool.title'),
      description:
        t('minerHosting.miningPool.subtitle'),
      icon: "/images/how-it-works/mining-pool.svg",
    },
    {
      index: 5,
      title: t('minerHosting.getReward.title'),
      description:
        t('minerHosting.getReward.subtitle'),
      icon: "/images/how-it-works/get-reward.svg",
    },
    {
      index: 6,
      title: t('minerHosting.maintenance.title'),
      description:
        t('minerHosting.maintenance.subtitle'),
      icon: "/images/how-it-works/maintenance.svg",
    },
  ]
  return (
    <div className="flex flex-col items-center justify-between pb-4">
      <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  pb-5 text-center font-goldman text-5xl font-normal md:pb-10">
        {t("minerHosting.miningStepByStep.title")}
      </div>
      <div className="text-md max-w-5xl text-center font-mont text-muted-foreground">
        {t("minerHosting.miningStepByStep.subtitle")}
      </div>
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
    </div>
  )
}
