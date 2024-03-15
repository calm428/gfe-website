import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import SectionTitle from "@/components/common/section-title"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
  title: "Privacy Policy",
  description:
    "Learn about how your personal data is protected on this GFE Foundation website. Read our Privacy Policy to understand how we handle your personal information.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn about how your personal data is protected on this GFE Foundation website. Read our Privacy Policy to understand how we handle your personal information.",
  },
}

export default async function PrivacyPage() {
  const t = await getTranslations("main")

  return (
    <section className="container pb-[300px] pt-10 md:pb-[200px] lg:px-24">
      <SectionTitle align="left">{t("privacy.privacy_policy")}</SectionTitle>

      <p className="mt-4 text-sm italic text-gray-500 md:text-base">
        {t("privacy.last_updated")}: Feb 12, 2024
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        1. {t("privacy.introduction")}
      </h2>

      <p className="text-sm md:text-base">
        {t("privacy.introduction_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        2. {t("privacy.information_collection_and_use")}
      </h2>

      <p className="text-sm md:text-base">
        {t("privacy.information_collection_and_use_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        3. {t("privacy.how_we_use_your_information")}
      </h2>

      <p className="text-sm md:text-base">
        {t("privacy.how_we_use_your_information_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        4. {t("privacy.disclosure_of_your_information")}
      </h2>

      <p className="text-sm md:text-base">
        {t("privacy.disclosure_of_your_information_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        5. {t("privacy.security_of_your_information")}
      </h2>

      <p className="text-sm md:text-base">
        {t("privacy.security_of_your_information_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">6. {t("privacy.cookies")}</h2>

      <p className="text-sm md:text-base">{t("privacy.cookies_content")}</p>

      <h2 className="mt-8 text-xl md:text-2xl">
        7. {t("privacy.links_to_other_sites")}
      </h2>

      <p className="text-sm md:text-base">
        {t("privacy.links_to_other_sites_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        8. {t("privacy.changes_to_this_privacy_policy")}
      </h2>

      <p className="text-sm md:text-base">
        {t("privacy.changes_to_this_privacy_policy_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">9. {t("privacy.contact_us")}</h2>

      <p className="text-sm md:text-base">{t("privacy.contact_us_content")}</p>
    </section>
  )
}
