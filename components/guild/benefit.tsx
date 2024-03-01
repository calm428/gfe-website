import Image, { StaticImageData } from "next/image"
import energySourcePNG from "@/public/images/guild/energy-source.png"
import docIcon from "@/public/images/icons/doc-icon.png"
import giftIcon from "@/public/images/icons/gift-icon.png"
import usersIcon from "@/public/images/icons/users-icon.png"
import { useTranslations } from "next-intl"

import SectionTitle from "../common/section-title"

const features = [
  {
    id: 1,
    icon: docIcon,
    content: "guild.learning_resources",
  },
  {
    id: 2,
    icon: usersIcon,
    content: "guild.meeting_and_learning",
  },
  {
    id: 3,
    icon: giftIcon,
    content: "guild.exclusive_merch",
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
    <div className="flex w-full items-center gap-4 rounded-lg bg-[#E9F2FD] p-4 shadow-md">
      <div className="flex size-8 min-w-8 items-center justify-center rounded-lg bg-primary bg-gradient-to-r from-[#2BADFD] to-[#1570EF] md:size-12 md:min-w-12">
        <Image src={icon} alt="icon" className="mt-1 size-6 md:size-10" />
      </div>
      <p className="text-sm font-medium text-black md:text-base">{content}</p>
    </div>
  )
}

export default function BenefitSection() {
  const t = useTranslations("main")

  return (
    <section className="relative bg-[url('/images/guild/grid-bg.png')] bg-[length:100%] bg-[bottom] bg-no-repeat pb-10 pt-24 lg:bg-[length:55%] lg:bg-left">
      <div className="container grid items-center justify-between gap-12 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <Image
            src={energySourcePNG}
            alt="energy source"
            className="mr-auto w-4/5"
          />
        </div>
        <div className="relative flex flex-col items-start">
          <SectionTitle align="left">
            {t("guild.benefit_of_guild_leader")}
          </SectionTitle>
          <div className="mt-6 flex w-full flex-col gap-2">
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
    </section>
  )
}
