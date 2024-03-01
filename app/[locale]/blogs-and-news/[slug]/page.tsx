"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import useSWR from "swr"

import ContactUs from "@/components/common/contact-us"

import "react-quill/dist/quill.bubble.css"
import { ScrollToTop } from "react-simple-scroll-up"

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false

interface PageProps {
  params: {
    slug: string
  }
}

interface BlogDataType {
  title: string
  desc: string
  content: string
  image: string
  author: {
    name: string
    image: string
  }
  date: Date
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const Page: FC<PageProps> = ({ params }) => {
  // const doc = getDocFromParams(params.slug)
  const [blogData, setBlogData] = useState<BlogDataType>({} as BlogDataType)

  const { data: fetchedData, error } = useSWR(
    `/api/blogs/get?id=${params.slug}`,
    fetcher
  )

  const modules = {
    toolbar: false,
  }

  useEffect(() => {
    if (!error && fetchedData) {
      setBlogData({
        title: fetchedData?.blog?.title,
        desc: fetchedData?.blog?.subtitle,
        content: fetchedData?.blog?.content,
        image: fetchedData?.blog?.previewImage,
        author: {
          name: fetchedData?.blog?.author?.name,
          image: "",
        },
        date: new Date(fetchedData?.blog?.createAt),
      })

      console.log(fetchedData)
    }
  }, [fetchedData])

  return (
    <section className="container mt-10 pb-32">
      <div className="mb-10 flex">
        <Link
          href="/blogs-and-news"
          className="auth border-r border-muted-foreground bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text px-5 font-medium  tracking-wider text-transparent"
        >
          Blogs and News
        </Link>

        <div className="auth border-l border-muted-foreground px-5 font-medium text-muted-foreground">
          {blogData?.author?.name}
        </div>
      </div>

      {!error ? (
        fetchedData && blogData ? (
          <>
            <div className="relative mx-auto mb-10 h-[300px] w-full">
              <Image
                src={blogData?.image}
                alt="Photo by Drew Beamer"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="font-goldman text-4xl tracking-wider">
              {blogData?.title}
            </div>

            <div className="w-full">
              {/* <div className="flex w-80 flex-col gap-2">
                <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  mb-3 border-t-2 pt-4 font-monument">
                  Table of content
                </h1>
                {doc?.headings?.map((heading: any, index: number) => (
                  <Link
                    href={`#${heading.slug}`}
                    className="p-2 hover:bg-accent"
                  >
                    {heading.text}
                  </Link>
                ))}
              </div> */}
              <ReactQuill
                theme="bubble"
                value={blogData?.content}
                modules={modules}
                readOnly
                placeholder="Type your content here..."
              />
            </div>
          </>
        ) : (
          <div>loading...</div>
        )
      ) : (
        <></>
      )}
      <ContactUs />
      <ScrollToTop
        className="!bottom-[50px] z-50"
        strokeFillColor="#21b4fd"
        strokeEmptyColor="#21b4fd55"
        bgColor="#21b4fd99"
      />
    </section>
  )
}

export default Page
