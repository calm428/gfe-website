"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import useSWR from "swr"

import { PaginationComponent } from "@/components/blogs-and-news/pagination"
import BlogCard, { BlogCardDataType } from "@/components/common/cards/blog-card"

import BlogCardSkeleton from "../common/cards/blog-card-skeleton"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const NewsSection = () => {
  const [newsData, setNewsData] = useState<BlogCardDataType[]>([])
  const { data: fetchedData, error } = useSWR(
    "/api/blogs/get?category=news",
    fetcher
  )

  const numberOfNewsPerPage = 6

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (!error && fetchedData) {
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
    <div className="bg-[#F9F9F9]">
      <div className="container py-24 ">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  font-goldman text-5xl  tracking-wider">
          News
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {!error ? (
            fetchedData && newsData ? (
              newsData
                .slice(
                  (currentPage - 1) * numberOfNewsPerPage,
                  currentPage * numberOfNewsPerPage
                )
                .map((news) => <BlogCard {...news} />)
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
    </div>
  )
}

export default NewsSection
