"use client"

import React from "react"
import Image from "next/image"

import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"
import Card from "./Card"

const BlogsSection = () => {
  return (
    <div className="container py-14">
      <h1 className="font-goldman tracking-wider  text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
        Blogs
      </h1>
      <HighlightsSection />
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default BlogsSection

function HighlightsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 max-w-3xl md:max-w-none mt-5">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="/images/blogs-and-news/highlights.png"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-3xl object-cover"
        />
      </AspectRatio>
      <div className="pt-8">
        <h2 className="font-goldman tracking-wider mb-3 text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          Highlights
        </h2>
        <h2 className="font-goldman  tracking-wider mb-5 text-2xl">
          Omniscape Unveils Cutting-Edge AR Metaverse: A Revolutionary Leap into
          Interactive Realities
        </h2>
        <p className="text-muted-foreground font-medium">
          In a groundbreaking announcement, Omniscape has introduced a
          state-of-the-art Augmented Reality (AR) Metaverse, redefining the way
          we perceive and interact with digital spaces. The platform promises to
          revolutionize immersive experiences by seamlessly blending the
          physical and virtual worlds{" "}
        </p>
        <Button
          variant={"ghost"}
          className=" px-0 mt-5 text-primary text-base font-goldman tracking-wider"
        >
          Read More
        </Button>
      </div>
    </div>
  )
}
