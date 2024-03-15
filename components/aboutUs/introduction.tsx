import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import SectionBadge from "../common/section-badge"
import SectionTitle from "../common/section-title"

export default function Introduction() {
  const t = useTranslations("main")

  return (
    <section
      className="relative flex flex-col items-center gap-12  bg-cover px-5 pb-[100px] pt-[50px] lg:px-0 lg:pb-[300px] lg:pt-[100px] "
      style={{
        backgroundImage:
          "url('/images/bg-gradient.webp'),url('/images/about-us/bg1.png')",
      }}
    >
      <div className="flex flex-col items-center gap-8 px-5 lg:px-16">
        <SectionBadge text={t("about_us.name")} />
        <div className="flex flex-col items-center gap-4">
          <SectionTitle>
            {t("about_us.title")} <br />
            {t("about_us.subtitle")}
          </SectionTitle>
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
    </section>
  )
}
