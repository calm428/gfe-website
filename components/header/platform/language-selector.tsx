"use client"

import Image from "next/image"
import enFlagSVG from "@/public/images/flags/en.svg"
import esFlagSVG from "@/public/images/flags/es.svg"
import { Select, SelectedItems, SelectItem } from "@nextui-org/react"

type LanguageOption = {
  value: string
  label: string
}

const FLAGs: { [key: string]: string } = {
  en: enFlagSVG,
  es: esFlagSVG,
}

export default function LanguageSelector() {
  const languages: LanguageOption[] = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "es",
      label: "Spanish",
    },
  ]

  return (
    <Select
      items={languages}
      selectionMode="single"
      defaultSelectedKeys={["en"]}
      disallowEmptySelection
      classNames={{
        label: "group-data-[filled=true]:-translate-y-5",
        trigger: "h-fit bg-transparent w-20 shadow-none",
        listboxWrapper: "max-h-[400px]",
        mainWrapper: "w-20",
        base: "w-20",
      }}
      listboxProps={{
        itemClasses: {
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      popoverProps={{
        classNames: {
          base: "before:bg-default-200 w-40 -translate-x-10",
          content:
            "p-0 border-small border-divider bg-background -translate-x-20",
        },
      }}
      renderValue={(items: SelectedItems<LanguageOption>) => {
        return items.map((item) => (
          <div key={item.data?.value} className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={FLAGs[item.data?.value as string]}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt={item.data?.label as string}
              />
            </div>
          </div>
        ))
      }}
    >
      {(language) => (
        <SelectItem
          key={language.value}
          textValue={language.value}
          value={language.value}
          aria-labelledby="language"
        >
          <div className="flex items-center gap-2">
            <Image
              src={FLAGs[language.value as string]}
              alt={language.label}
              className="h-auto w-6"
            />
            <span>{language.label}</span>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}
