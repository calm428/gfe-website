import Image from "next/image"
import ballonPNG from "@/public/images/guild/ballon.png"
import coffeePNG from "@/public/images/guild/coffee.png"
import globePNG from "@/public/images/guild/globe.png"
import printingPNG from "@/public/images/guild/printing.png"
import representPNG from "@/public/images/guild/represent.png"
import robotPNG from "@/public/images/guild/robot.png"
import { useTranslations } from "next-intl"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"

const features = [
  {
    id: 1,
    icon: representPNG,
    content: "guild.represent_gfe_community",
  },
  {
    id: 2,
    icon: ballonPNG,
    content: "guild.take_on_leadership_roles",
  },
  {
    id: 3,
    icon: coffeePNG,
    content: "guild.organize_guild_meetups",
  },
  {
    id: 4,
    icon: robotPNG,
    content: "guild.teach_others",
  },
  {
    id: 5,
    icon: globePNG,
    content: "guild.host_twitter_spaces",
  },
]

export default function LeadGuildSection() {
  const t = useTranslations("main")

  return (
    <section className="relative py-10">
      <div className="pb-10 md:pb-14">
        <SectionTitle>{t("guild.ready_to_lead_guild")}</SectionTitle>
        <SectionDescription>
          {t("guild.ready_to_lead_guild_description")}
        </SectionDescription>
        <div className="mt-6 grid w-full items-center justify-between gap-4 lg:grid-cols-2">
          <div className="flex w-full flex-wrap justify-center">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="mx-4 my-8 flex max-w-[150px] flex-col items-center justify-start xl:mx-16"
              >
                <Image src={feature.icon} alt="image" className="size-16" />
                <p className="mt-4 text-center text-sm font-semibold">
                  {t(feature.content as any)}
                </p>
              </div>
            ))}
          </div>
          <div className="relative w-full bg-[url('/images/guild/grid-bg.png')] bg-cover bg-no-repeat sm:max-w-[800px]">
            <Image
              src={printingPNG}
              alt="printing"
              className="mr-auto max-w-[320px] sm:max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
