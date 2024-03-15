import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

import SectionDescription from "./section-description"
import SectionTitle from "./section-title"

export default function CommunitySection() {
  const t = useTranslations("main")

  return (
    <div className="py-[60px]">
      <div className="container flex flex-col justify-between gap-4 rounded-xl bg-muted p-[60px] md:flex-row md:items-end">
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <SectionTitle align="left">{t("footer.section1.title")}</SectionTitle>
          <SectionDescription align="left" className="xl:text-base">
            {t("footer.section1.description")}
          </SectionDescription>
        </div>
        <div className="flex flex-col gap-2 md:w-[30%]">
          <Button className="w-full min-w-40 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] p-4">
            <Link
              href={siteConfig.links.discord}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/discord.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Discord
            </Link>
          </Button>
          <Button className="w-full min-w-40 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] p-4">
            <Link
              href={siteConfig.links.telegram}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/Telegram.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Telegram
            </Link>
          </Button>
          <Button className="w-full min-w-40 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] p-4">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/twitter.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Twitter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
