import Image from "next/image"

const LogoSection = () => {
  return (
    <section
      className="relative my-10 h-32 overflow-hidden"
      style={{
        background: "linear-gradient(300deg, #22B4FD 32.53%, #2D79FF 77.26%)",
      }}
    >
      <div className="absolute -left-2 -z-10 h-32 w-[110vw] rotate-[2.55deg] bg-primary" />
      <div className="container flex h-full items-center justify-between font-monument text-lg text-muted lg:text-3xl ">
        <div className="w-40 px-5">
          <Image src="/GFE_white.svg" alt="logo" width={160} height={50} />
        </div>
        <div className="w-40 px-5">
          <Image src="/GFE_white.svg" alt="logo" width={160} height={50} />
        </div>
        <div className="hidden w-40 px-5 sm:block">
          <Image src="/GFE_white.svg" alt="logo" width={160} height={50} />
        </div>
        <div className="hidden w-40 px-5 lg:block">
          <Image src="/GFE_white.svg" alt="logo" width={160} height={50} />
        </div>
        <div className="hidden w-40 px-5 lg:block">
          <Image src="/GFE_white.svg" alt="logo" width={160} height={50} />
        </div>
      </div>
    </section>
  )
}

export default LogoSection
