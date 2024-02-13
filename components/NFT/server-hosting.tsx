"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

function ServerHosting() {
  const { t } = useTranslation()

  return (
    <div className="relative mb-24 flex flex-col-reverse gap-12 lg:flex-row lg:px-0">
      <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="hidden items-center justify-center lg:flex">
          <Image
            src="/images/nft/server-hosting.svg"
            alt="how-it-works"
            width={1072}
            height={1111}
            className="mx-auto h-auto w-full"
          />
        </div>
        <div className="container flex max-w-xl flex-col justify-center gap-6 pt-5">
          <h1 className="auth w-fit rounded-sm bg-[#EEF5FF] px-[16px] py-[8px] text-base font-medium text-primary md:text-[20px]">
            {t("Future")}
          </h1>
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
            {t("nft_page.hosting_section.title")}
          </h1>
          <p className="auth font-mont text-lg">
            {t("nft_page.hosting_section.para1")}
          </p>
          <p className="auth font-mont text-lg ">
            {t("nft_page.hosting_section.para2")}
          </p>
        </div>
      </div>
      <div className="absolute bottom-24 left-0 z-0 hidden w-full lg:-bottom-10 lg:flex 2xl:bottom-0">
        <Image
          src="/images/bottom.svg"
          alt="bottom"
          width={1010}
          height={232}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default ServerHosting
