"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { usePathname } from "@/navigation"
import { useLocale } from "next-intl"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const changeLang = (lang: string) => {
    const newSearchParams = new URLSearchParams(searchParams).toString()
    router.push(
      `/${lang}/${pathname}${newSearchParams ? "?" + newSearchParams : ""}`
    )
  }

  return (
    <Select
      onValueChange={(value) => {
        changeLang(value)
      }}
      defaultValue={locale}
    >
      <SelectTrigger
        className="w-auto gap-4 rounded-full"
        aria-label="Language"
      >
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <div className="flex w-full items-center pr-4">
              <Image
                src="/images/flags/us.svg"
                alt="en"
                width={24}
                height={24}
                className="mr-2 h-auto w-4"
              />
              English
            </div>
          </SelectItem>
          <SelectItem value="cn">
            <div className="flex w-full items-center pr-4">
              <Image
                src="/images/flags/cn.svg"
                alt="cn"
                width={24}
                height={24}
                className="mr-2 h-auto w-4"
              />
              Chinese
            </div>
          </SelectItem>
          <SelectItem value="es">
            <div className="flex items-center pr-4">
              <Image
                src="/images/flags/es.svg"
                alt="es"
                width={24}
                height={24}
                className="mr-2 h-auto w-4"
              />
              Spanish
            </div>
          </SelectItem>
          <SelectItem value="in">
            <div className="flex items-center pr-4">
              <Image
                src="/images/flags/in.svg"
                alt="es"
                width={24}
                height={24}
                className="mr-2 h-auto w-4"
              />
              Hindi
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
