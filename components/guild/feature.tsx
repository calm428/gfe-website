import Image, { StaticImageData } from "next/image"
import heartIcon from "@/public/images/icons/heart-icon.png"
import speakerIcon from "@/public/images/icons/speaker-icon.png"
import starIcon from "@/public/images/icons/star-icon.png"
import { useTranslations } from "next-intl"

import SectionTitle from "../common/section-title"

const features = [
  {
    id: 1,
    icon: speakerIcon,
    title: "guild.local_economy",
    content: "guild.local_economy_description",
  },
  {
    id: 2,
    icon: heartIcon,
    title: "guild.connect_and_collab",
    content: "guild.connect_and_collab_description",
  },
  {
    id: 3,
    icon: starIcon,
    title: "guild.learn",
    content: "guild.learn_description",
  },
]

function FeatureCard({
  icon,
  title,
  content,
}: {
  icon: StaticImageData
  title: string
  content: string
}) {
  const t = useTranslations("main")

  return (
    <div className="mx-auto flex max-w-[320px] flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-md">
      <div className="flex size-12 items-center justify-center rounded-lg bg-primary bg-gradient-to-r from-[#2BADFD] to-[#1570EF]">
        <Image src={icon} alt="icon" className="mt-1 size-10" />
      </div>
      <h3 className="text-xl font-medium text-black">{t(title as any)}</h3>
      <p className="text-center text-sm text-muted-foreground">
        {t(content as any)}
      </p>
    </div>
  )
}

export default function FeatureSection() {
  const t = useTranslations("main")

  return (
    <section className="relative bg-[url('/images/guild/feature_bg.jpg')] bg-cover bg-center bg-no-repeat pb-16 pt-4">
      <div className="pb-10 md:pb-14">
        <SectionTitle>{t("guild.feature")}</SectionTitle>
      </div>

      <div className="mx-auto grid w-fit grid-cols-1 gap-2 md:grid-cols-3">
        {features.map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </div>
      <div className="absolute bottom-0 h-10 w-full bg-gradient-to-b from-transparent to-white"></div>
      <div className="absolute top-0 h-4 w-full bg-gradient-to-b from-white to-transparent"></div>
    </section>
  )
}
