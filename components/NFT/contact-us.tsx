import Link from "next/link"
import { getTranslations } from "next-intl/server"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

async function ContactUs() {
  const t = await getTranslations("main")

  return (
    <div className="py-[60px]">
      <div className="flex flex-col justify-between rounded-xl bg-muted p-[60px] md:flex-row">
        <div className="flex flex-col gap-2 lg:w-[60%]">
          <div className="auth bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-5xl font-bold text-transparent">
            {t("footer_section.contact_us")}
          </div>
          <div className=" auth my-1 mb-5 text-sm font-medium md:mb-0 md:text-base">
            {t("footer_section.contact_detail_line")}{" "}
            <Link
              href={`mailto:${siteConfig.emails.contact}`}
              className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent"
            >
              {siteConfig.emails.contact}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-5 md:w-[30%]	">
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-6">
            <Link href="/contact" className="flex items-center gap-3">
              {t("footer_section.contact_us")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
