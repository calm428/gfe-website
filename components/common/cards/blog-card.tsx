"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

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
  return (
    <div className="relative w-full h-full max-w-[320px] sm:max-w-[400px] mx-auto flex flex-col">
      <AspectRatio ratio={16 / 9} className="relative">
        <Image
          src={image}
          alt="Photo by Drew Beamer"
          fill
          className="rounded-3xl rounded-b-none object-cover"
        />
      </AspectRatio>

      <div className="relative space-y-3 rounded-3xl rounded-t-none bg-[#E7F0FD] p-5 h-full flex flex-col justify-between">
        <div>
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] line-clamp-2 bg-clip-text text-transparent font-goldman text-xl tracking-wider ">
            {title}
          </h1>
          <p className="font-medium text-muted-foreground line-clamp-3">
            {desc}
          </p>
        </div>

        <div className="relative mt-auto flex items-end justify-between">
          <div className="flex gap-2 mt-auto">
            <Avatar className="h-[50px] w-[50px]">
              <AvatarImage src={author?.image} />
              <AvatarFallback>{getInitials(author?.name)}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-sm justify-center">
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
              Read More
              <ArrowRightIcon className="ml-1 h-[20px] w-[20px] stroke-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
