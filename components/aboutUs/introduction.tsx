import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

function Introduction() {
  const { t } = useTranslation()
  return (
    <div
      className="relative flex flex-col items-center gap-12  bg-cover px-5 pb-[100px] pt-[50px] lg:px-0 lg:pb-[300px] lg:pt-[100px] "
      style={{
        backgroundImage:
          "url('/images/bg-gradient.webp'),url('/images/about-us/bg1.png')",
      }}
    >
      <div className="flex flex-col items-center gap-8 px-5 lg:px-16">
        <h1 className="auth w-fit rounded-sm bg-[#EEF5FF] px-[16px] py-[8px] text-base font-medium text-primary md:text-[20px]">
          {t("about_us_page.name")}
        </h1>
        <div className="flex flex-col items-center gap-4">
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-5xl text-transparent">
            {t("about_us_page.title")} <br />
            {t("about_us_page.subtitle")}
          </h1>
          <Button className="font mont auth border border-secondary-foreground bg-background text-secondary-foreground hover:bg-muted">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center justify-between gap-3"
            >
              <Icons.play />
              <span>{t("whitepaper")}</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-6  left-0 z-0 flex w-full md:-bottom-10 lg:-bottom-16">
        <Image
          src="/images/about-us/bottom.svg"
          alt="bottom"
          width={1920}
          height={192}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default Introduction
