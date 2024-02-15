"use client"

import Image from "next/image"
import bottomPic from "@/public/images/bottom.svg"
import serverHostingPic from "@/public/images/nft/server-hosting.svg"
import { useTranslation } from "next-i18next"

function ServerHosting() {
  const { t } = useTranslation()

  return (
    <div className="relative mb-24 flex flex-col-reverse gap-12 lg:flex-row lg:px-0">
      <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="hidden items-center justify-center lg:flex">
          <Image
            src={serverHostingPic}
            alt="how-it-works"
            className="mx-auto h-auto w-full"
          />
        </div>
        <div className="container flex max-w-xl flex-col justify-center gap-6 pt-5">
          <div className="mr-auto rounded-md bg-primary/10 p-2">
            <p className="button-87 whitespace-nowrap !text-base !font-medium text-primary">
              <span className="actual-text">{t("Future")}</span>
              <span className="front-text">{t("Future")}</span>
            </p>
          </div>
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
            {t("nft_page.hosting_section.title")}
          </h1>
          <p className="auth text-justify font-mont text-lg">
            {t("nft_page.hosting_section.para1")}
          </p>
          <p className="auth text-justify font-mont text-lg">
            {t("nft_page.hosting_section.para2")}
          </p>
          <p className="auth text-justify font-mont text-lg">
            {t("nft_page.hosting_section.para3")}
          </p>
        </div>
      </div>
      <div className="absolute bottom-24 left-0 z-0 hidden w-full lg:-bottom-10 lg:flex 2xl:-bottom-6">
        <Image src={bottomPic} alt="bottom" className="w-full" />
      </div>
    </div>
  )
}

export default ServerHosting
