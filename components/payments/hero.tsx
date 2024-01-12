const HeroSection = () => {
  return (
    <div
      style={{
        background: "url(/images/blogs-and-news/background.png)",
      }}
      className="h-fit w-full !bg-cover !bg-no-repeat px-5"
    >
      <div className="mx-auto max-w-3xl py-16 md:py-28">
        <div className="mx-auto w-fit rounded-full bg-[#E7F0FD] px-3">
          <h1 className="mt-3 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-monument text-lg tracking-wider text-transparent">
            SUNBELT
          </h1>
        </div>
        <h1 className="mt-3 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-monument text-3xl tracking-wider text-transparent md:text-4xl">
          Payment Methods
        </h1>

        <p className="mt-3  text-center text-muted-foreground md:text-xl">
          Our goal is to offer the opportunity to invest in machines and then
          mine cryptocurrencies available to the general public
        </p>
      </div>
    </div>
  )
}

export default HeroSection
