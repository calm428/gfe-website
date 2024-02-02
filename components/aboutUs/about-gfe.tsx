"use client"

import Image from "next/image"
import { useTranslation } from "next-i18next"

const AboutGFE = () => {
  const { t } = useTranslation()

  return (
    <div className=" flex flex-col items-center gap-20 py-20 lg:py-24">
      <p className="auth container font-mont text-base font-semibold text-black md:text-lg">
        {t("about_us_page.GFE_section.para1")}
      </p>
      <div className="container flex flex-col-reverse justify-betwween  lg:flex-row ">
        <div className="flex flex-col p-0 gap-6 lg:w-2/3 justify-center container">
          <p className="auth font-mont text-base font-semibold text-muted-foreground md:text-lg">
            {t("about_us_page.GFE_section.para2")}
          </p>
          <p className="auth font-mont text-lg font-semibold text-muted-foreground">
            {t("about_us_page.GFE_section.para3")}
          </p>
          <div className="flex gap-6 rounded-md bg-gradient-to-br from-[#2BADFD] to-[#1570EF] p-6">
            <div>
              <img src="/icons/Buttons.svg" alt="image" className="" />
            </div>
            <p className="auth font-mont text-base font-semibold text-primary-foreground">
              {t("about_us_page.GFE_section.para4")}
            </p>
          </div>
        </div>
        <div className="flex justify-end lg:w-2/6">
          <Image
            src="/images/about-us/nft1.svg"
            alt="image"
            width={873}
            height={780}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutGFE
