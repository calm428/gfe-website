"use client"

import { useTranslation } from "next-i18next"

function Page() {
  const { t } = useTranslation()

  return (
    <section className="container pb-[300px] pt-10 md:pb-[200px] lg:px-24">
      <h1 className="text-3xl font-bold md:text-5xl">
        {t("terms.terms_and_conditions")}
      </h1>

      <p className="mt-4 text-sm italic text-gray-500 md:text-base">
        {t("terms.last_updated")}: Feb 12, 2024
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        1. {t("terms.acceptance_of_terms")}
      </h2>

      <p className="text-sm md:text-base">
        {t("terms.acceptance_of_terms_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">2. {t("terms.use_license")}</h2>

      <p className="text-sm md:text-base">
        {t("terms.use_license_content")}
        <li>{t("terms.use_license_content_list_1")}</li>
        <li>{t("terms.use_license_content_list_2")}</li>
        <li>{t("terms.use_license_content_list_3")}</li>
        <li>{t("terms.use_license_content_list_4")}</li>
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">3. {t("terms.disclaimer")}</h2>

      <p className="text-sm md:text-base">{t("terms.disclaimer_content")}</p>

      <h2 className="mt-8 text-xl md:text-2xl">4. {t("terms.limitations")}</h2>

      <p className="text-sm md:text-base">{t("terms.limitations_content")}</p>

      <h2 className="mt-8 text-xl md:text-2xl">
        5. {t("terms.revisions_and_errata")}
      </h2>

      <p className="text-sm md:text-base">
        {t("terms.revisions_and_errata_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">6. {t("terms.links")}</h2>

      <p className="text-sm md:text-base">{t("terms.links_content")}</p>

      <h2 className="mt-8 text-xl md:text-2xl">
        7. {t("terms.site_terms_of_use_modifications")}
      </h2>

      <p className="text-sm md:text-base">
        {t("terms.site_terms_of_use_modifications_content")}
      </p>

      <h2 className="mt-8 text-xl md:text-2xl">
        8. {t("terms.governing_law")}
      </h2>

      <p className="text-sm md:text-base">{t("terms.governing_law_content")}</p>

      <h2 className="mt-8 text-xl md:text-2xl">9. {t("terms.contact_us")}</h2>

      <p className="text-sm md:text-base">{t("terms.contact_us_content")}</p>
      <p className="mt-4 text-sm md:text-base">
        <b>{t("terms.note")}</b>
      </p>
    </section>
  )
}

export default Page
