import React from "react"
import Image from "next/image"

function AboutDappr() {
  return (
    <div className="relative pt-24 xl:pl-24 xl:flex gap-12 bg-[url('/images/nft/bg1.png')] bg-cover bg-no-repeat bg-center pb-[1500px] xl:pb-[900px]">
      <div className="flex px-5 lg:px-24  xl:px-0 flex-col gap-6 xl:w-1/2">
        <h1 className="font-medium auth py-[8px] px-[16px] text-base md:text-[20px] w-fit rounded-sm bg-[#EEF5FF] text-primary">
          About DAPPr NFT
        </h1>
        <h1 className="text-5xl font-goldman text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          About DAPPr NFT
        </h1>
        <p className="auth text-base md:text-lg font-mont ">
          <span className="font-medium">
            DAPPr unit - This is a solar/wind energy resource, an island of
            stability in an already stressed grid ecosystem so common in sunbelt
            countries.
          </span>
          <span className="font-muted-foreground">
            This unit will provide 150kw daytime renewable energy input and
            power storage for overnight operations. Utilizing cutting-edge
            technology, it delivers the best performance with high hash rate
            mining equipment and a novel and efficient cooling system that is
            evaporation free and mostly passive.
          </span>
        </p>
        <p className="auth text-base md:text-lg font-mont ">
          <span className="font-medium">
            The NFT our collective produces is a DAPPr unit, but the collective
            extends membership to any renewable producer
          </span>
          <span className="font-muted-foreground">
            By owning the DAPPr unit, you provide the land it sits upon, the
            solar panels, and maintain the solar panels on your site. Income is
            earned daily from collective operation of the units provided kw. We
            will manage the systems maintenance and operations on our side with
            fractional income. With DAPPr NFT, you can enjoy all of the benefits
            of our unit and contribute to the sustainable world. Its similar to
            owning a small farm, your crop is sunlight.
          </span>
        </p>
        <p className="auth text-base md:text-lg font-mont ">
          <span className="font-medium">
            We are the first to merge blockchain and real assets - It will be a
            unique chance for individuals
          </span>
          <span className="font-muted-foreground">
            You can become a DAO member in our group and contribute positively
            to a renewable future and enjoy tangible benefits from making the
            world better.
          </span>
        </p>
      </div>
      <div className="pl-16 lg:pl-0 flex justify-center items-center bg-opacity-45 backdrop-blur">
        <Image
          src="/images/nft/dappr.svg"
          alt="image"
          width={769}
          height={771}
          className=""
        />
      </div>
    </div>
  )
}

export default AboutDappr
