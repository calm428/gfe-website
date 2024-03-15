import Image from "next/image"
import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"

export default function WorkFlowSection() {
  const t = useTranslations("main")

  return (
    <section className="container flex flex-col items-center justify-between py-8 pt-10">
      <SectionTitle>
        {t("miner_hosting.howSunbeltMinersWork.title")}
      </SectionTitle>
      <SectionDescription>
        {t("miner_hosting.howSunbeltMinersWork.subtitle")}
      </SectionDescription>
      <div className="mt-12 w-full">
        <Image
          src="/images/how-it-works/workflow.png"
          alt="how-it-works"
          width={1517}
          height={642}
          className="mx-auto h-auto w-full max-w-5xl"
        />
      </div>
    </section>
  )
}
