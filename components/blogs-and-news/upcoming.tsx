"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import useSWR from "swr"

import BlogCard, { BlogCardDataType } from "@/components/common/cards/blog-card"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const UpcomingSection = () => {
  const [eventsData, setEventsData] = useState<BlogCardDataType[]>([])
  const { data: fetchedData, error } = useSWR(
    "/api/blogs/get?category=event",
    fetcher
  )

  useEffect(() => {
    if (!error && fetchedData) {
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
      <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  mt-20 font-goldman text-5xl tracking-wider">
        UPCOMING EVENTS
      </h1>
      <p className="auth my-6 font-semibold">
        Stay tuned for our next exciting event, where innovation meets
        community! Join us for an enriching experience filled with insights,
        networking opportunities, and the latest developments in the world of
        cryptocurrency mining.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {!error ? (
          fetchedData && eventsData ? (
            eventsData.map((event) => <BlogCard {...event} />)
          ) : (
            <div>loading...</div>
          )
        ) : (
          <></>
        )}
      </div>
      <div className="my-12 border"></div>
    </div>
  )
}

export default UpcomingSection
