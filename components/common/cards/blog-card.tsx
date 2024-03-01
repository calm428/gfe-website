"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { formatCustomDate, getInitials } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export interface BlogCardDataType {
  id: string
  title: string
  desc: string
  image: string
  author: {
    name: string
    image: string
  }
  date: Date
}

export default function BlogCard({
  id,
  title,
  desc,
  image,
  author,
  date,
}: BlogCardDataType) {
  const t = useTranslations("main")

  return (
    <div className="relative mx-auto flex size-full max-w-[320px] flex-col sm:max-w-[400px]">
      <AspectRatio ratio={16 / 9} className="relative">
        <Image
          src={image}
          alt="Photo by Drew Beamer"
          fill
          className="rounded-3xl rounded-b-none object-cover"
        />
      </AspectRatio>

      <div className="relative flex h-full flex-col justify-between space-y-3 rounded-3xl rounded-t-none bg-[#E7F0FD] p-5">
        <div>
          <h2 className="line-clamp-2 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-xl tracking-wider text-transparent ">
            {title}
          </h2>
          <p className="line-clamp-3 font-medium text-muted-foreground">
            {desc}
          </p>
        </div>

        <div className="relative mt-auto flex items-end justify-between">
          <div className="mt-auto flex gap-2">
            <Avatar className="size-[50px]">
              <AvatarImage src={author?.image} />
              <AvatarFallback>{getInitials(author?.name)}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-center text-sm">
              <span className="font-medium text-muted-foreground">
                {author?.name}
              </span>
              <span className="font-medium text-muted-foreground">
                {formatCustomDate(date || new Date())}
              </span>
            </div>
          </div>

          <Button
            variant={"ghost"}
            className="mt-0 flex items-center p-0 font-goldman text-base tracking-wider text-primary"
            asChild
          >
            <Link href="/blogs-and-news/[slug]" as={`/blogs-and-news/${id}`}>
              {t("blogs_and_news.read_more")}
              <ArrowRightIcon className="ml-1 size-[20px] stroke-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
