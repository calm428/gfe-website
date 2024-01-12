"use client"

import Image from "next/image"

import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"
import Card from "./Card"

const BlogsSection = () => {
  return (
    <div className="container py-14">
      <h1 className="bg-gradient-to-b from-[#2BADFD]  to-[#1570EF] bg-clip-text font-goldman text-5xl tracking-wider text-transparent">
        Blogs
      </h1>
      <HighlightsSection />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
    <div className="mt-5 grid max-w-3xl grid-cols-1 md:max-w-none md:grid-cols-2 md:gap-8">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="/images/blogs-and-news/highlights.png"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-3xl object-cover"
        />
      </AspectRatio>
      <div className="pt-8">
        <h2 className="mb-3 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-lg tracking-wider text-transparent">
          Highlights
        </h2>
        <h2 className="mb-5  font-goldman text-2xl tracking-wider">
          Omniscape Unveils Cutting-Edge AR Metaverse: A Revolutionary Leap into
          Interactive Realities
        </h2>
        <p className="font-medium text-muted-foreground">
          In a groundbreaking announcement, Omniscape has introduced a
          state-of-the-art Augmented Reality (AR) Metaverse, redefining the way
          we perceive and interact with digital spaces. The platform promises to
          revolutionize immersive experiences by seamlessly blending the
          physical and virtual worlds{" "}
        </p>
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
