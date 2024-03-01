"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import { useTranslations } from "next-intl"
import { TbNewsOff } from "react-icons/tb"
import useSWR from "swr"

import { PaginationComponent } from "@/components/blogs-and-news/pagination"
import BlogCard, { BlogCardDataType } from "@/components/common/cards/blog-card"

import BlogCardSkeleton from "../common/cards/blog-card-skeleton"
import SectionTitle from "../common/section-title"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const NewsSection = () => {
  const t = useTranslations("main")

  const searchParams = useSearchParams()

  const [newsData, setNewsData] = useState<BlogCardDataType[]>([])
  const { data: fetchedData, error } = useSWR(
    `/api/blogs/get?category=news${searchParams?.get("q") ? `&keyword=${searchParams?.get("q")}` : ""}`,
    fetcher
  )

  const numberOfNewsPerPage = 6

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (fetchedData) {
      setNewsData(
        fetchedData.blogs.map((news: any) => {
          return {
            title: news.title,
            desc: news.subtitle,
            image: news.previewImage,
            author: {
              name: news.author.name,
              image: "",
            },
            date: new Date(news.createdAt),
          }
        })
      )
    }
  }, [fetchedData])

  return (
    <section className="bg-[#F9F9F9]">
      <div className="container py-24 ">
        <SectionTitle align="left">{t("blogs_and_news.news")}</SectionTitle>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {!error ? (
            fetchedData && newsData ? (
              newsData.length ? (
                newsData
                  .slice(
                    (currentPage - 1) * numberOfNewsPerPage,
                    currentPage * numberOfNewsPerPage
                  )
                  .map((news) => <BlogCard key={news.id} {...news} />)
              ) : (
                <div className="flex h-60 w-full items-center justify-center rounded-lg bg-muted md:col-span-2 xl:col-span-3">
                  <div className="flex flex-col items-center gap-2">
                    <TbNewsOff className="size-16 text-muted-foreground" />
                    {t("blogs_and_news.no_news_found")}
                  </div>
                </div>
              )
            ) : (
              <>
                <BlogCardSkeleton />
                <BlogCardSkeleton className="hidden md:flex" />
                <BlogCardSkeleton className="hidden xl:flex" />
              </>
            )
          ) : (
            <div></div>
          )}
        </div>
        <PaginationComponent
          currentPage={currentPage}
          maxPage={Math.ceil(newsData.length / numberOfNewsPerPage)}
          gotoPage={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  )
}

export default NewsSection
