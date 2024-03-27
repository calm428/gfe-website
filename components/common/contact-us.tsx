import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import SectionTitle from "./section-title"

function ContactUs() {
  const t = useTranslations("main")

  return (
    <section className="py-[60px]">
      <div className="flex flex-col justify-between rounded-xl bg-muted p-[60px] md:flex-row md:items-end">
        <div className="flex flex-col gap-2 lg:w-[60%]">
          <SectionTitle align="left">{t("footer.contact_us")}</SectionTitle>
          <div className=" auth my-1 mb-5 text-sm font-medium md:mb-0 md:text-base">
            {t("footer.contact_detail_line")}{" "}
            <Link
              href={`mailto:${siteConfig.emails.contact}`}
              className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent"
            >
              {siteConfig.emails.contact}
            </Link>
          </div>
        </div>
        <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-6">
          <Link href="/contact" className="flex items-center gap-3">
            {t("footer.contact_us")}
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default ContactUs
