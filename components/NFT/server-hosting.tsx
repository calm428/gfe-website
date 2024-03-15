import Image from "next/image"
import bottomPic from "@/public/images/bottom.svg"
import serverHostingPic from "@/public/images/nft/server-hosting.svg"
import { useTranslations } from "next-intl"

import SectionBadge from "../common/section-badge"
import SectionTitle from "../common/section-title"

function ServerHosting() {
  const t = useTranslations("main")

  return (
    <section className="relative mb-24 flex flex-col-reverse gap-12 lg:flex-row lg:px-0">
      <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="hidden items-center justify-center lg:flex">
          <Image
            src={serverHostingPic}
            alt="how-it-works"
            className="mx-auto h-auto w-full"
          />
        </div>
        <div className="container flex max-w-xl flex-col justify-center gap-6 pt-5">
          <SectionBadge text={t("Future")} position="left" />
          <SectionTitle align="left">
            {t("nft.hosting_section.title")}
          </SectionTitle>
          <p className="auth text-justify font-mont text-lg">
            {t("nft.hosting_section.para1")}
          </p>
          <p className="auth text-justify font-mont text-lg">
            {t("nft.hosting_section.para2")}
          </p>
          <p className="auth text-justify font-mont text-lg">
            {t("nft.hosting_section.para3")}
          </p>
        </div>
      </div>
      <div className="absolute bottom-24 left-0 z-0 hidden w-full lg:-bottom-10 lg:flex 2xl:-bottom-6">
        <Image src={bottomPic} alt="bottom" className="w-full" />
      </div>
    </section>
  )
}

export default ServerHosting
