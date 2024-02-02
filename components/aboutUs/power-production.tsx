import Image from "next/image"
import { useTranslation } from "next-i18next"

function PowerProduction() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col-reverse justify-center pt-14 lg:flex-row">
      <div className=" h-fit">
        <Image
          src="/images/about-us/nft5.svg"
          alt="image"
          width={804}
          height={982}
          className="lg:w-[80%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-8 container lg:w-1/2 lg:px-0 lg:pr-24">
        <h1 className=" bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-monument text-[40px] text-transparent">
          {t("about_us_page.power_section.title")}
        </h1>
        <p className="auth text-center font-mont text-base font-medium md:text-lg">
          {t("about_us_page.power_section.description")}
        </p>
      </div>
    </div>
  )
}

export default PowerProduction
