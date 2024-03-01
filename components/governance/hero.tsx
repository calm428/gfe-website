import Image from "next/image"
import { useTranslations } from "next-intl"
import bottomSVG from "public/images/about-us/bottom.svg"
import { LiaPuzzlePieceSolid } from "react-icons/lia"
import { Tb3DCubeSphere } from "react-icons/tb"

import PageTitle from "../common/page-title"
import SectionBadge from "../common/section-badge"
import SectionDescription from "../common/section-description"
import { Button } from "../ui/button"

export default function HeroSection() {
  const t = useTranslations("main")

  return (
    <section
      style={{
        background:
          "url('/images/bg-gradient.webp'),url('/images/governance/governance-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative flex flex-col items-center gap-12 px-5 pb-[100px] pt-[50px] lg:px-0 lg:pt-[100px] "
    >
      <div className="mx-auto max-w-3xl py-16 md:py-28">
        <SectionBadge text={t("governance.ecosystem")} />
        <PageTitle>{t("governance.gfe_governance")}</PageTitle>
        <SectionDescription>
          {t("governance.gfe_governance_description")}
        </SectionDescription>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="outline" className="border-primary bg-white">
            <Tb3DCubeSphere className="mr-2 size-5 text-primary" />
            {t("governance.robust_framework")}
          </Button>
          <Button variant="outline" className="border-primary bg-white">
            <LiaPuzzlePieceSolid className="mr-2 size-5 text-primary" />
            {t("governance.sub_dao")}
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-6  left-0 z-0 flex w-full md:-bottom-10 lg:-bottom-16">
        <Image src={bottomSVG} alt="bottom" className="w-full" />
      </div>
    </section>
  )
}
