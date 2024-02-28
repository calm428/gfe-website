import Image from "next/image"
import lifeCyclePic from "@/public/images/nft/lifecycle.svg"
import { useTranslation } from "next-i18next"
import { getTranslations } from "next-intl/server"

import { Button } from "../ui/button"

async function Introduction() {
  const t = await getTranslations("main")

  return (
    <div className="pcontainer relative flex flex-col items-center gap-12 bg-[url('/images/bg-gradient.webp')] bg-cover pt-[100px] lg:px-24">
      <div className="container flex flex-col items-center gap-8 lg:px-16">
        <div className="auth relative flex items-center justify-between rounded-3xl bg-primary/10 py-[25px] pl-[8px] pr-[16px] shadow-lg md:rounded-full md:py-[8px]">
          <Button className="absolute -top-3 left-[40%] rounded-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-[16px] py-[8px] md:relative md:left-0 md:top-0 ">
            {t("nft_page.new")}
          </Button>
          <h1 className="ml-2 mt-2 text-center font-mont font-medium text-muted-foreground md:mt-0 md:text-lg">
            {t("nft_page.badge")}
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="xs:text-5xl bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-4xl font-medium capitalize text-transparent md:text-5xl">
            {t("nft_page.title")} <br />
            {t("nft_page.subtitle")}
          </h1>
          <p className="auth text-md w-full text-center font-semibold text-muted-foreground">
            {t("nft_page.description")}
          </p>
        </div>
      </div>
      <Image
        src={lifeCyclePic}
        alt="lifycycle"
        className="w-[90%] sm:w-[50%] lg:w-[30%]"
      />
      <div className="absolute -bottom-6  left-0 z-0 flex w-full md:-bottom-10 lg:-bottom-16">
        <Image
          src="/images/left.svg"
          alt="bottom-left"
          width={1010}
          height={232}
          className="w-1/2"
        />
        <Image
          src="/images/right.svg"
          alt="bottom-right"
          width={1010}
          height={232}
          className="w-1/2"
        />
      </div>
    </div>
  )
}

export default Introduction
