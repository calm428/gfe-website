"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTranslation } from "next-i18next"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const [langauge, setLanguage] = useState("en")
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
    localStorage.setItem("lang", lang)
  }
  useEffect(() => {
    let lang = localStorage.getItem("lang")
    if (lang) {
      setLanguage(lang)
      i18n.changeLanguage(lang)
    }
  }, [])
  return (
    <Select
      onValueChange={(value) => {
        changeLang(value)
      }}
      value={langauge}
      defaultValue="en"
    >
      <SelectTrigger className="w-auto gap-4 rounded-full">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <div className="flex w-full items-center pr-4">
              <Image
                src="https://flagcdn.com/us.svg"
                alt="en"
                width={24}
                height={24}
                className="mr-2 size-4"
              />
              English
            </div>
          </SelectItem>
          <SelectItem value="es">
            <div className="flex items-center pr-4">
              <Image
                src="https://flagcdn.com/es.svg"
                alt="es"
                width={24}
                height={24}
                className="mr-2 h-auto w-4"
              />
              Spanish
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
