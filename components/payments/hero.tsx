import React from "react"

const HeroSection = () => {
  return (
    <div
      style={{
        background: "url(/images/blogs-and-news/background.png)",
      }}
      className="h-fit w-full !bg-cover !bg-no-repeat px-5"
    >
      <div className="py-16 md:py-28 max-w-3xl mx-auto">
        <div className="bg-[#E7F0FD] w-fit mx-auto px-3 rounded-full">
          <h1 className="font-monument tracking-wider text-center mt-3 text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            SUNBELT
          </h1>
        </div>
        <h1 className="font-monument tracking-wider text-center mt-3 text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          Payment Methods
        </h1>

        <p className="text-muted-foreground  md:text-xl text-center mt-3">
          Our goal is to offer the opportunity to invest in machines and then
          mine cryptocurrencies available to the general public
        </p>
      </div>
    </div>
  )
}

export default HeroSection
