"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import axios from "axios"
import { allDocs } from "contentlayer/generated"
import useSWR from "swr"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import ContactUs from "@/components/NFT/contact-us"

import "react-quill/dist/quill.bubble.css"

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false

interface PageProps {
  params: {
    slug: string
  }
}

function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams == slug)

  if (!doc) notFound()

  return doc
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
    <div className="container mt-10 pb-32">
      <div className="mb-10 flex">
        <Link
          href="/blogs-and-news"
          className="border-r auth font-medium border-muted-foreground bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text px-5  tracking-wider text-transparent"
        >
          Blogs and News
        </Link>

        <div className="border-l auth font-medium text-muted-foreground border-muted-foreground px-5">
          {blogData?.author?.name}
        </div>
      </div>

      {!error ? (
        fetchedData && blogData ? (
          <>
            <div className="relative mb-10 w-full h-[300px] mx-auto">
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
    </div>
  )
}

export default Page