import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

export default function CommunitySection() {
  const t = useTranslations("main")

  return (
    <div className="py-[60px]">
      <div className="flex flex-col justify-between rounded-xl bg-muted p-[60px] md:flex-row">
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <div className="bg-gradient-to-b  from-[#2BADFD]  to-[#1570EF] bg-clip-text font-monument text-3xl text-transparent">
            {t("footer.section1.title")}
          </div>
          <div className=" auth my-1 mb-5 font-mont text-sm font-medium md:mb-0 md:text-base">
            {t("footer.section1.description")}
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-[30%]">
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
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
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
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
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
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
