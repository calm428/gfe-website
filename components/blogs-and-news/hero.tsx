import React from "react"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

function HeroSection() {
  return (
    <div
      style={{
        background:
          "url('/images/bg-gradient.webp'),url(/images/blogs-and-news/background.png)",
      }}
      className="relative pb-[100px]  px-5 lg:px-0  pt-[50px] lg:pt-[100px] flex flex-col gap-12 items-center bg-cover "
    >
      <div className="py-16 md:py-28 max-w-3xl mx-auto">
        <div className="px-4 py-2 bg-primary/5 w-fit rounded-md mx-auto">
          <h1 className="font-medium text-center auth text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Blogs and News
          </h1>
        </div>

        <h1 className="font-goldman tracking-wider text-center mt-3 text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          Blogs and News
        </h1>

        <p className="auth font-medium md:text-xl text-center mt-3">
          In the ever-evolving realm of Bitcoin mining and the broader
          ecosystem, our blogs and news serve as a dynamic platform.
        </p>
        <div className="flex max-w-sm mx-auto mt-10 items-center justify-center gap-3">
          <Input type="text" placeholder="Search" className=" rounded-r-none" />
          <Button
            type="submit"
            className="w-12"
            style={{
              background: "linear-gradient(175deg, #2D79FF 10%, #22B4FD 90%)",
            }}
          >
            <Search />
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-6  md:-bottom-10 lg:-bottom-16 w-full left-0 flex z-0">
        <Image
          src="/images/about-us/bottom.svg"
          alt="bottom"
          width={1920}
          height={192}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default HeroSection
