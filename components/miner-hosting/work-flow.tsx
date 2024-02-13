"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function WorkFlowSection() {
  const { t } = useTranslation()
  return (
    <div className="container flex flex-col items-center justify-between py-8">
      <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-5  text-center font-goldman text-5xl font-normal text-transparent md:pb-10">
        {t("minerHosting.howSunbeltMinersWork.title")}
      </div>
      <div className="text-md max-w-5xl text-center font-mont text-muted-foreground">
        {t("minerHosting.howSunbeltMinersWork.subtitle")}
      </div>
      <div className="mt-12 w-full">
        <Image
          src="/images/how-it-works/workflow.png"
          alt="how-it-works"
          width={1517}
          height={642}
          className="mx-auto h-auto w-full max-w-5xl"
        />
      </div>
    </div>
  )
}
