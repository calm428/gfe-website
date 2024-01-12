"use client"

import React from "react"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"

import { AspectRatio } from "../ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

const Card = () => {
  return (
    <div className="">
      <AspectRatio ratio={16 / 9} className="">
        <Image
          src="/images/blogs-and-news/highlights.png"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-3xl rounded-b-none object-cover"
        />
      </AspectRatio>

      <div className="bg-[#E7F0FD] rounded-3xl rounded-t-none p-5 space-y-3">
        <h1 className="tracking-wider text-xl font-goldman text-primary">
          BSV Academy: Taking the lead on blockchain education
        </h1>
        <p className="text-muted-foreground font-medium">
          Renewable energy uses natural resources like sunlight and wind for
          sustainable power, reducing environmental impact and fostering energy
          independence.
        </p>

        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            <Avatar className="h-[50px] w-[50px]">
              <AvatarImage src="/images/blogs-and-news/avatar.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-sm">
              <span className="text-muted-foreground font-medium">
                MICHAEL SPRICK
              </span>
              <span className="text-muted-foreground font-medium">
                10 DEC 2023
              </span>
            </div>
          </div>

          <Button
            variant={"ghost"}
            className="px-0 py-0 mt-0 text-primary flex items-center text-base font-goldman tracking-wider"
          >
            Read More
            <ArrowRightIcon className="w-[20px] h-[20px] ml-1 stroke-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
