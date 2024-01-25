"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import useSWR from "swr"

import BlogCard, { BlogCardDataType } from "@/components/common/cards/blog-card"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const NewsSection = () => {
  const [newsData, setNewsData] = useState<BlogCardDataType[]>([])
  const { data: fetchedData, error } = useSWR(
    "/api/blogs/get?category=news",
    fetcher
  )

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
              newsData.map((news) => <BlogCard {...news} />)
            ) : (
              <div>loading...</div>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsSection
