import Image, { StaticImageData } from "next/image"
import bookIcon from "@/public/images/icons/book-icon.png"
import boxIcon from "@/public/images/icons/box-icon.png"
import docIcon from "@/public/images/icons/doc-icon.png"
import { useTranslations } from "next-intl"

import SectionBadge from "../common/section-badge"
import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { Button } from "../ui/button"

const features = [
  {
    id: 1,
    icon: docIcon,
    content: "governance.propose_changes",
  },
  {
    id: 2,
    icon: boxIcon,
    content: "governance.documenting_community_sentiment",
  },
  {
    id: 3,
    icon: bookIcon,
    content: "governance.providing_technical_spec",
  },
]

function FeatureCard({
  icon,
  content,
}: {
  icon: StaticImageData
  content: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md">
      <div className="flex size-8 min-w-8 items-center justify-center rounded-lg bg-primary bg-gradient-to-r from-[#2BADFD] to-[#1570EF] md:size-12 md:min-w-12">
        <Image src={icon} alt="icon" className="mt-1 size-6 md:size-10" />
      </div>
      <div className="text-sm font-medium text-black md:text-base">
        {content}
      </div>
    </div>
  )
}

export default function AboutGIPSection() {
  const t = useTranslations("main")

  return (
    <section className="relative bg-[url('/images/governance/gip-bg.png')] bg-cover bg-center bg-no-repeat pb-16 pt-24">
      <div className="container flex flex-col items-center justify-between gap-12 xl:flex-row">
        <div className="flex flex-col gap-6 lg:px-24 xl:w-1/2 xl:px-0">
          <SectionBadge position="left" text={t("governance.about_gips")} />
          <SectionTitle align="left">
            {t("governance.what_are_gips")}
          </SectionTitle>
          <SectionDescription align="left">
            {t("governance.what_are_gips_description")}
          </SectionDescription>
          <Button className="mt-4 w-fit bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
            {t("governance.learn_more")}
          </Button>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-xl text-transparent md:text-3xl">
            {t("governance.gips_are_used_for")}
            {" : "}
          </h3>
          <div className="mt-4 space-y-2">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                content={t(feature.content as any)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-10 w-full bg-gradient-to-b from-transparent to-white"></div>
      <div className="absolute top-0 h-4 w-full bg-gradient-to-b from-white to-transparent"></div>
    </section>
  )
}
