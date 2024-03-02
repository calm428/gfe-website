import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import bottomSVG from "public/images/about-us/bottom.svg"
import { FiPlus } from "react-icons/fi"
import { LiaPuzzlePieceSolid } from "react-icons/lia"
import { RiRoadMapFill } from "react-icons/ri"
import { Tb3DCubeSphere } from "react-icons/tb"

import { siteConfig } from "@/config/site"

import PageTitle from "../common/page-title"
import SectionBadge from "../common/section-badge"
import SectionDescription from "../common/section-description"
import { Button } from "../ui/button"

export default function HeroSection() {
  const t = useTranslations("main")

  return (
    <section
      style={{
        background:
          "url('/images/bg-gradient.webp'),url(/images/guild/guild_bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative flex flex-col items-center gap-12 bg-cover bg-no-repeat px-5 pb-[100px] pt-[50px] lg:px-0 lg:pt-[100px] "
    >
      <div className="mx-auto max-w-3xl py-16 md:py-28">
        <SectionBadge text={t("guild.join_guild_in_your_area")} />
        <PageTitle>{t("guild.join_gfe_guild")}</PageTitle>
        <SectionDescription>
          {t("guild.join_gfe_guild_description")}
        </SectionDescription>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            variant="default"
            className="bg-gradient-to-l from-[#2BADFD] to-[#1570EF]"
            asChild
          >
            <Link href={siteConfig.links.googleForm} target="_blank">
              <FiPlus className="mr-2 size-5" />
              {t("guild.start_guild")}
            </Link>
          </Button>
          <Button variant="outline" className="border-primary bg-white" asChild>
            <Link href="#guild-map">
              <RiRoadMapFill className="mr-2 size-5 text-[#2BADFD]" />
              {t("guild.explore_guild_near_you")}
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 z-0 flex w-full">
        <Image src={bottomSVG} alt="bottom" className="w-full" />
      </div>
    </section>
  )
}
