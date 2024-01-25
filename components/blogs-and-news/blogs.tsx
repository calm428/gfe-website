"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import useSWR from "swr"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import BlogCard, { BlogCardDataType } from "@/components/common/cards/blog-card"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const BlogsSection = () => {
  const [blogsData, setBlogsData] = useState<BlogCardDataType[]>([])
  const { data: fetchedData, error } = useSWR("/api/blogs/get", fetcher)

  useEffect(() => {
    if (!error && fetchedData) {
      setBlogsData(
        fetchedData.blogs.map((blog: any) => {
          return {
            id: blog._id,
            title: blog.title,
            desc: blog.subtitle,
            image: blog.previewImage,
            author: {
              name: blog.author.name,
              image: "",
            },
            date: new Date(blog.createdAt),
          }
        })
      )
    }
  }, [fetchedData])

  return (
    <div className="container py-14">
      <h1 className="bg-gradient-to-b from-[#2BADFD]  to-[#1570EF] bg-clip-text font-goldman text-5xl tracking-wider text-transparent">
        Blogs
      </h1>
      {blogsData && blogsData.length > 0 && (
        <HighlightsSection {...blogsData[blogsData.length - 1]} />
      )}
      <div className="grid mt-8 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {!error ? (
          fetchedData && blogsData ? (
            blogsData.map((blog) => <BlogCard {...blog} />)
          ) : (
            <div>loading...</div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default BlogsSection

function HighlightsSection({
  id,
  title,
  desc,
  image,
  author,
  date,
}: BlogCardDataType) {
  return (
    <div className="mt-5 grid max-w-3xl grid-cols-1 md:max-w-none md:grid-cols-2 md:gap-8">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src={image}
          alt="Photo by Drew Beamer"
          fill
          className="rounded-3xl object-cover"
        />
      </AspectRatio>
      <div className="pt-8">
        <h2 className="mb-3 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-lg tracking-wider text-transparent">
          Highlights
        </h2>
        <h2 className="mb-5  font-goldman text-2xl tracking-wider">{title}</h2>
        <p className="font-medium text-muted-foreground">{desc}</p>
        <Button
          variant={"ghost"}
          className=" mt-5 px-0 font-goldman text-base tracking-wider text-primary"
        >
          Read More
        </Button>
      </div>
    </div>
  )
}
