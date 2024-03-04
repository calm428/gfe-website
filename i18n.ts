import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import { locales } from "./navigation"

type Locale = "en" | "es" | "cn" | "in"

const getLocaleData = async (locale: Locale) => {
  return (await import(`./messages/${locale}.json`)).default
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: await getLocaleData(locale as Locale),
  }
})
