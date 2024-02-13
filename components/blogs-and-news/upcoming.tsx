"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import { useTranslation } from "next-i18next"
import { MdOutlineEventBusy } from "react-icons/md"
import useSWR from "swr"

import { PaginationComponent } from "@/components/blogs-and-news/pagination"
import BlogCard, { BlogCardDataType } from "@/components/common/cards/blog-card"

import BlogCardSkeleton from "../common/cards/blog-card-skeleton"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const UpcomingSection = () => {
  const { t } = useTranslation()
  const searchParams = useSearchParams()

  const [eventsData, setEventsData] = useState<BlogCardDataType[]>([])
  const { data: fetchedData, error } = useSWR(
    `/api/blogs/get?category=event${searchParams?.get("q") ? `&keyword=${searchParams?.get("q")}` : ""}`,
    fetcher
  )

  const numberOfEventsPerPage = 6

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (fetchedData) {
      setEventsData(
        fetchedData.blogs.map((event: any) => {
          return {
            title: event.title,
            desc: event.subtitle,
            image: event.previewImage,
            author: {
              name: event.author.name,
              image: "",
            },
            date: new Date(event.createdAt),
          }
        })
      )
    }
  }, [fetchedData])

  return (
    <div className="bg-background-lighten-10 container mt-5">
      <h1 className="mt-20 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman  text-5xl uppercase tracking-wider text-transparent">
        {t("blogs_and_news.upcoming_events")}
      </h1>
      <p className="auth my-6 font-semibold">
        {t("blogs_and_news.upcoming_events_description")}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {!error ? (
          fetchedData && eventsData ? (
            eventsData.length > 0 ? (
              eventsData
                .slice(
                  (currentPage - 1) * numberOfEventsPerPage,
                  currentPage * numberOfEventsPerPage
                )
                .map((event) => <BlogCard key={event.id} {...event} />)
            ) : (
              <div className="flex h-60 w-full items-center justify-center rounded-lg bg-muted md:col-span-2 xl:col-span-3">
                <div className="flex flex-col items-center gap-2">
                  <MdOutlineEventBusy className="size-16 text-muted-foreground" />
                  {t("blogs_and_news.no_upcoming_events_found")}
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
          <></>
        )}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        maxPage={Math.ceil(eventsData.length / numberOfEventsPerPage)}
        gotoPage={(page) => setCurrentPage(page)}
      />
      <div className="my-12 border"></div>
    </div>
  )
}

export default UpcomingSection
