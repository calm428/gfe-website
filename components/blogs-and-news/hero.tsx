import React from "react"
import { Search } from "lucide-react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

function HeroSection() {
  return (
    <div
      style={{
        background: "url(/images/blogs-and-news/background.png)",
      }}
      className="h-fit w-full !bg-cover !bg-no-repeat px-5"
    >
      <div className="py-16 md:py-28 max-w-3xl mx-auto">
        <div className="px-4 py-2 bg-primary/5 w-fit rounded-md mx-auto">
          <h1 className="font-semibold text-center  text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Blogs and News
          </h1>
        </div>

        <h1 className="font-monument tracking-wider text-center mt-3 text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          Blogs and News
        </h1>

        <p className="text-muted-foreground  md:text-xl text-center mt-3">
          In the ever-evolving realm of Bitcoin mining and the broader
          ecosystem, our blogs and news serve as a dynamic platform.
        </p>
        <div className="flex max-w-sm mx-auto mt-10 items-center justify-center gap-3">
          <Input
            type="text"
            placeholder="Search"
            className="bg-transparent rounded-r-none"
          />
          <Button
            type="submit"
            className=""
            style={{
              background: "linear-gradient(175deg, #2D79FF 10%, #22B4FD 90%)",
            }}
          >
            <Search />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
