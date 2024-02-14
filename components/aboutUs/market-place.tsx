"use client"

import Image from "next/image"
import checkPic from "@/public/icons/check.svg"
import nftPic_4 from "@/public/images/about-us/nft4.svg"
import { useTranslation } from "next-i18next"

function MarketPlace() {
  const { t } = useTranslation()

  return (
    <div className=" grid place-items-center  gap-6 bg-gradient-to-t from-[#2BADFD] to-[#1570EF] pt-24 lg:grid-cols-2 lg:py-24 lg:pl-24">
      <div className="container flex flex-col gap-8 text-primary-foreground lg:px-0">
        <h1 className="font-goldman text-5xl">
          {t("about_us_page.market_section.title")}
        </h1>
        <p className=" auth text-justify font-mont text-base lg:text-lg">
          {t("about_us_page.market_section.para1")}
        </p>
        <p className=" auth text-justify font-mont text-base lg:text-lg">
          {t("about_us_page.market_section.para2")}
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image src={checkPic} alt="image" />
            <p className="auth font-mont text-base lg:text-lg">
              {t("about_us_page.market_section.point1")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={checkPic} alt="image" />
            <p className="auth font-mont text-base lg:text-lg">
              {t("about_us_page.market_section.point2")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image src={checkPic} alt="image" />
            <p className="auth font-mont text-base lg:text-lg">
              {t("about_us_page.market_section.point3")}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={nftPic_4} alt="image" />
      </div>
    </div>
  )
}

export default MarketPlace
