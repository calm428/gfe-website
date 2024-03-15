import Image from "next/image"
import bitfufuLogoPic from "@/public/images/home/bitfufu.com-logo.png"
import ecosAMLogoPic from "@/public/images/home/ecos.am-logo.png"
import { useTranslations } from "next-intl"

import SectionTitle from "../common/section-title"

export default function IncomeComparison() {
  const t = useTranslations("main")

  return (
    <section className="relative bg-[url('/images/miner-hosting/bg4.png')] bg-cover bg-bottom bg-no-repeat py-10 md:py-16">
      <div className="container">
        <SectionTitle>{t("miner_hosting.incomeComparison.title")}</SectionTitle>

        <div className="grid grid-cols-1 gap-7 py-10 xl:grid-cols-10 ">
          <div className="col-span-1 flex flex-col justify-between gap-10 rounded-3xl bg-[#E7F0FD] p-7 xl:col-span-3">
            <Image
              className="w-24"
              src={ecosAMLogoPic}
              alt="ecos am logo"
            ></Image>

            <div>
              <h3 className="font-monument text-lg tracking-wider text-muted-foreground">
                ecos.am
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    {t("miner_hosting.HashrateRentingPrice")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    83.6USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    {t("miner_hosting.ServiceFee")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    250USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    {t("miner_hosting.Bandwidth")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    120TH/s, 1month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-between gap-10 rounded-3xl bg-primary p-8 xl:col-span-4">
            <h3 className="font-monument text-5xl tracking-wide text-muted xl:text-6xl">
              SUNBELT
            </h3>

            <div>
              <h3 className="font-monument text-lg tracking-widest text-muted">
                {t("miner_hosting.ourCompany")}
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="font-mont text-muted">
                    {t("miner_hosting.HashrateRentingPrice")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-muted">
                    83.6USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted">
                    {t("miner_hosting.ServiceFee")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-muted">
                    250USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted">
                    {t("miner_hosting.Bandwidth")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-muted">
                    120TH/s, 1month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-between gap-10 rounded-3xl bg-[#E7F0FD] p-7 xl:col-span-3">
            <Image
              src={bitfufuLogoPic}
              className="w-24"
              alt="bitfufu logo"
            ></Image>
            <div>
              <h3 className="font-monument text-lg tracking-wider text-muted-foreground">
                bitfufu.com
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    {t("miner_hosting.HashrateRentingPrice")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    83.6USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    {t("miner_hosting.ServiceFee")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    250USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    {t("miner_hosting.Bandwidth")}
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    120TH/s, 1month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-10 w-full bg-gradient-to-b from-transparent to-white"></div>
    </section>
  )
}
