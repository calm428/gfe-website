import Image from "next/image"
import nftPic_5 from "@/public/images/about-us/nft5.svg"
import { getTranslations } from "next-intl/server"

export default async function PowerProduction() {
  const t = await getTranslations("main")

  return (
    <div className="flex flex-col-reverse justify-center pt-14 lg:flex-row">
      <div className=" h-fit">
        <Image src={nftPic_5} alt="image" className="lg:w-[80%]" />
      </div>
      <div className="container flex flex-col justify-center gap-8 lg:w-1/2 lg:px-0 lg:pr-24">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-5xl text-transparent">
          {t("about_us_page.power_section.title")}
        </h1>
        <p className="auth text-justify font-mont text-base font-medium md:text-lg">
          {t("about_us_page.power_section.description")}
        </p>
      </div>
    </div>
  )
}
