"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

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
    <div
      style={{
        background:
          "url('/images/bg-gradient.webp'),url(/images/blogs-and-news/background.png)",
      }}
      className="relative flex  flex-col items-center  gap-12 bg-cover px-5 pb-[100px] pt-[50px] lg:px-0 lg:pt-[100px] "
    >
      <div className="mx-auto max-w-3xl py-16 md:py-28">
        <div className="mx-auto w-fit rounded-md bg-primary/10 p-2">
          <p className="button-87 whitespace-nowrap !text-base !font-medium text-primary">
            <span className="actual-text">
              {t("blogs_and_news.blogs_and_news")}
            </span>
            <span className="front-text">
              {t("blogs_and_news.blogs_and_news")}
            </span>
          </p>
        </div>

        <h1 className="mt-3 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-3xl tracking-wider text-transparent md:text-6xl">
          {t("blogs_and_news.blogs_and_news")}
        </h1>

        <p className="auth mt-3 text-center font-medium md:text-xl">
          {t("blogs_and_news.blogs_and_news_description")}
        </p>
        <div className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-3">
          <Input
            type="text"
            placeholder={t("blogs_and_news.search")}
            onChange={(e) => handleSearch(e.target.value)}
          />
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
