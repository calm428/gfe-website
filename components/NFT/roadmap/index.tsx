import Image from "next/image"
import { useTranslations } from "next-intl"

import SectionTitle from "@/components/common/section-title"

import Step from "./step"

function Roadmap() {
  const t = useTranslations("main")

  return (
    <section className="container pb-24 lg:px-24">
      <SectionTitle>{t("nft.gfe_roadmap")}</SectionTitle>
      <div className="flex flex-col pt-24 xl:pt-32">
        <Image
          src="/images/nft/roadmap.svg"
          alt="roadmap"
          width={1535}
          height={326}
          className="hidden md:block"
        />
        <div className="grid gap-8 md:grid-cols-5 lg:pt-12 xl:pt-16">
          <Step
            step={1}
            desc="Description of the tasks. What to do. Why to do it How to achieve it"
          />
          <Step
            step={2}
            desc="Description of the tasks. What to do. Why to do it How to achieve it"
          />
          <Step
            step={3}
            desc="Description of the tasks. What to do. Why to do it How to achieve it"
          />
          <Step
            step={4}
            desc="Description of the tasks. What to do. Why to do it How to achieve it"
          />
          <Step
            step={5}
            desc="Description of the tasks. What to do. Why to do it How to achieve it"
          />
        </div>
      </div>
    </section>
  )
}

export default Roadmap
