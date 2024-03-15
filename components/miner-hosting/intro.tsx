import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import PageTitle from "../common/page-title"
import SectionDescription from "../common/section-description"

export default function HomeSection() {
  const t = useTranslations("main")

  return (
    <section className="relative flex flex-col items-center justify-between gap-20 overflow-hidden bg-[url('/images/bg-gradient.webp')] bg-cover bg-no-repeat py-48 pb-[300px] md:flex-row md:gap-6 md:pb-48">
      <Image
        src={"/images/miner-hosting/nft.svg"}
        alt="nft"
        width={1849}
        height={1065}
        className="absolute bottom-0 right-0 top-auto z-[-1] md:bottom-auto md:top-0"
      />
      <div className="container space-y-14">
        <div className="flex flex-col items-start gap-2">
          <PageTitle align="left" className="max-w-3xl">
            {t("miner_hosting.bitcoinMining.title")}
          </PageTitle>
          <SectionDescription align="left" className="max-w-xl">
            {t("miner_hosting.bitcoinMining.description")}
          </SectionDescription>
        </div>
        <div className="auth mb-7 flex w-full flex-row gap-2 md:mb-0 md:gap-3">
          <Button className="h-12 w-32 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] font-bold">
            <Link href={siteConfig.links.docs} target="_blank" rel="noreferrer">
              {t("miner_hosting.buyEnergy")}
            </Link>
          </Button>

          <Button className="h-12 border border-secondary-foreground bg-white font-bold text-muted-foreground hover:bg-muted">
            <Link
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex items-center justify-between gap-3"
            >
              <Icons.play />
              <span>{t("miner_hosting.introToSunbelt")}</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
