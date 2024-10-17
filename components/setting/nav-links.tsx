"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Listbox, ListboxItem } from "@nextui-org/react"
import { useLocale } from "next-intl"
import { CgProfile } from "react-icons/cg"
import { FaChevronRight } from "react-icons/fa6"
import { ImPower } from "react-icons/im"
import { MdNotifications, MdOutlineSecurity } from "react-icons/md"
import { PiWalletBold } from "react-icons/pi"
import { MdLanguage } from "react-icons/md";
import { useTranslations } from "next-intl"

export default function NavLinks() {
  const locale = useLocale()
  const searchParams = useSearchParams()
  const router = useRouter()
  const t = useTranslations("main.platform.setting")

  return (
    <Listbox
      aria-label="Setting Menu"
      onAction={(key) => {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("tab", key as string)

        if (newSearchParams.toString() !== searchParams.toString()) {
          router.push(`/platform/setting?${newSearchParams.toString()}`)
        }
      }}
      className="group hidden w-14 gap-0 divide-y divide-default-300/50 overflow-visible rounded-medium bg-content1 p-0 shadow-small dark:divide-default-100/80 sm:block md:w-full md:max-w-[250px]"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
      data-selected={searchParams.get("tab") || "profile"}
    >
      <ListboxItem
        key="profile"
        startContent={
          <div className="flex size-8 min-w-8 items-center justify-center rounded-small bg-primary/10 text-primary">
            <CgProfile className="text-lg" />
          </div>
        }
        endContent={
          <FaChevronRight className="hidden text-sm text-default-500 md:block" />
        }
        className="group-data-[selected=profile]:bg-primary/10 group-data-[selected=profile]:font-bold group-data-[selected=profile]:text-primary"
      >
        <span className="hidden md:block">{t("profile.title")}</span>
      </ListboxItem>
      <ListboxItem
        key="wallet"
        startContent={
          <div className="flex size-8 min-w-8 items-center justify-center rounded-small bg-primary/10 text-primary">
            <PiWalletBold className="text-lg" />
          </div>
        }
        endContent={
          <FaChevronRight className="hidden text-sm text-default-500 md:block" />
        }
        className="group-data-[selected=wallet]:bg-primary/10 group-data-[selected=wallet]:font-bold group-data-[selected=wallet]:text-primary"
      >
        <span className="hidden md:block">{t("wallet.title")}</span>
      </ListboxItem>
      <ListboxItem
        key="voting-power"
        startContent={
          <div className="flex size-8 min-w-8 items-center justify-center rounded-small bg-primary/10 text-primary">
            <ImPower className="text-lg" />
          </div>
        }
        endContent={
          <FaChevronRight className="hidden text-sm text-default-500 md:block" />
        }
        className="group-data-[selected=voting-power]:bg-primary/10 group-data-[selected=voting-power]:font-bold group-data-[selected=voting-power]:text-primary"
      >
        <span className="hidden md:block">{t("voting_power.title")}</span>
      </ListboxItem>
      <ListboxItem
        key="security"
        startContent={
          <div className="flex size-8 min-w-8 items-center justify-center rounded-small bg-primary/10 text-primary">
            <MdOutlineSecurity className="text-lg" />
          </div>
        }
        endContent={
          <FaChevronRight className="hidden text-sm text-default-500 md:block" />
        }
        className="group-data-[selected=security]:bg-primary/10 group-data-[selected=security]:font-bold group-data-[selected=security]:text-primary"
      >
        <span className="hidden md:block">{t("security.title")}</span>
      </ListboxItem>
      <ListboxItem
        key="notifications"
        startContent={
          <div className="flex size-8 min-w-8 items-center justify-center rounded-small bg-primary/10 text-primary">
            <MdNotifications className="text-lg" />
          </div>
        }
        endContent={
          <FaChevronRight className="hidden text-sm text-default-500 md:block" />
        }
        className="group-data-[selected=notifications]:bg-primary/10 group-data-[selected=notifications]:font-bold group-data-[selected=notifications]:text-primary"
      >
        <span className="hidden md:block">{t("notifications.title")}</span>
      </ListboxItem>
      <ListboxItem
        key="language"
        startContent={
          <div className="flex size-8 min-w-8 items-center justify-center rounded-small bg-primary/10 text-primary">
            <MdLanguage className="text-md" />
          </div>
        }
        endContent={
          <FaChevronRight className="hidden text-sm text-default-500 md:block" />
        }
        className="group-data-[selected=notifications]:bg-primary/10 group-data-[selected=notifications]:font-bold group-data-[selected=notifications]:text-primary"
      >
        <span className="hidden md:block">{t("language.title")}</span>
      </ListboxItem>
    </Listbox>
  )
}
