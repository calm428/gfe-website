import Image from "next/image"
import infoButtonPic from "@/public/icons/Buttons.svg"
import nftPic_1 from "@/public/images/about-us/nft1.svg"
import { useTranslations } from "next-intl"

export default function AboutGFE() {
  const t = useTranslations("main")

  return (
    <section className=" flex flex-col items-center gap-20 py-20 lg:py-24">
      <p className="auth container text-justify font-mont text-base font-semibold text-black md:text-lg">
        {t("about_us.GFE_section.para1")}
      </p>
      <div className="justify-betwween container flex flex-col-reverse  lg:flex-row ">
        <div className="container flex flex-col justify-center gap-6 p-0 lg:w-2/3">
          <p className="auth text-justify font-mont text-base font-semibold text-muted-foreground md:text-lg">
            {t("about_us.GFE_section.para2")}
          </p>
          <p className="auth text-justify font-mont text-lg font-semibold text-muted-foreground">
            {t("about_us.GFE_section.para3")}
          </p>
          <p className="auth text-justify font-mont text-lg font-semibold text-muted-foreground">
            {t("about_us.GFE_section.para4")}
          </p>
          <div className="flex gap-6 rounded-md bg-gradient-to-br from-[#2BADFD] to-[#1570EF] p-6">
            <div>
              <Image src={infoButtonPic} alt="image" className="" />
            </div>
            <p className="auth font-mont text-base font-semibold text-primary-foreground">
              {t("about_us.GFE_section.para5")}
            </p>
          </div>
        </div>
        <div className="flex justify-end lg:w-2/6">
          <Image src={nftPic_1} alt="image" />
        </div>
      </div>
    </section>
  )
}
