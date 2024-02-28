import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default async function HomeSection() {
  const t = await getTranslations("main")

  return (
    <div className="relative flex flex-col items-center justify-between gap-20 bg-[url('/images/bg-gradient.webp')] bg-cover bg-no-repeat py-48 pb-[300px] md:flex-row md:gap-6 md:pb-48">
      <Image
        src={"/images/miner-hosting/nft.svg"}
        alt="nft"
        width={1849}
        height={1065}
        className="absolute bottom-0 right-0 top-auto z-[-1] md:bottom-auto md:top-0"
      />
      <div className="container space-y-14">
        <div className="flex flex-col items-start gap-2">
          {/* TODO: Gradient is confusing */}
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-5  font-goldman text-5xl font-normal text-transparent md:pb-10">
            {/* Bitcoin Mining <br className="hidden sm:inline" />
            Ecosystem */}
            {t("minerHosting.bitcoinMining.title")}
          </h1>
          <p className="max-w-xl font-mont text-lg font-semibold text-muted-foreground md:text-2xl">
            {t("minerHosting.bitcoinMining.description")}
          </p>
        </div>
        <div className="auth mb-7 flex w-full flex-row gap-2 md:mb-0 md:gap-3">
          <Button className="h-12 w-32 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] font-bold">
            <Link href={siteConfig.links.docs} target="_blank" rel="noreferrer">
              {t("minerHosting.buyEnergy")}
            </Link>
          </Button>

          <Button className="h-12 border border-secondary-foreground bg-white font-bold text-muted-foreground hover:bg-muted">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className="flex items-center justify-between gap-3"
            >
              <Icons.play />
              <span>{t("minerHosting.introToSunbelt")}</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
