"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

import SectionBadge from "../common/section-badge"
import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { Input } from "../ui/input"

export default function HeroSection() {
  const t = useTranslations("main")
  const router = useRouter()

  const handleSearch = (keyword: string) => {
    const params = new URLSearchParams()
    params.set("q", keyword.trim())

    router.push(`/blogs-and-news?${params.toString()}`)
  }

  return (
    <section
      style={{
        background:
          "url('/images/bg-gradient.webp'),url(/images/blogs-and-news/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative flex  flex-col items-center  gap-12 bg-cover px-5 pb-[100px] pt-[50px] lg:px-0 lg:pt-[100px] "
    >
      <div className="mx-auto max-w-3xl py-16 md:py-28">
        <SectionBadge text={t("blogs_and_news.blogs_and_news")} />

        <SectionTitle>{t("blogs_and_news.blogs_and_news")}</SectionTitle>

        <SectionDescription>
          {t("blogs_and_news.blogs_and_news_description")}
        </SectionDescription>
        <div className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-3">
          <Input
            type="text"
            aria-label="search"
            placeholder={t("blogs_and_news.search")}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="absolute -bottom-6 left-0 z-0 flex w-full md:-bottom-10 lg:-bottom-16">
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
