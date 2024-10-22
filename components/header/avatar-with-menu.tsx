"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import daoPNG from "@/public/images/icons/dao.png"
import lightningPNG from "@/public/images/icons/lightning.png"
import miningPNG from "@/public/images/icons/mining.png"
import settingPNG from "@/public/images/icons/setting.png"
import signoutPNG from "@/public/images/icons/signout.png"
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from "@nextui-org/react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function AvatarWithMenu({
  user,
}: {
  user: {
    name: string
    email: string
    image: string
  }
}) {
  const router = useRouter()
  const t = useTranslations("main")

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="text-[16px] font-bold"
            size="md"
            src={user.image}
            name={user.name[0].toUpperCase()}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownSection showDivider>
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              textValue="Profile"
            >
              <User
                name={user.name}
                description={user.email}
                avatarProps={{
                  src: user.image,
                }}
              />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection showDivider>
            <DropdownItem
              key="settings"
              startContent={
                <Image src={lightningPNG} className="size-5" alt="DAO" />
              }
              textValue="Electricity"
            >
              <Link
                href = "/platform/electricity"
              >
                {t("header.electricity")}
              </Link>
            </DropdownItem>
            <DropdownItem
              key="team_settings"
              startContent={
                <Image src={miningPNG} className="size-5" alt="DAO" />
              }
              textValue="Mining"
            >
              <Link
                href = "/platform/mining"
              >
                {t("header.mining")}
              </Link>
            </DropdownItem>
            <DropdownItem
              key="analytics"
              startContent={<Image src={daoPNG} className="size-5" alt="DAO" />}
            >
              <Link
                href = "/platform/dao"
              >
                {t("header.dao")}
              </Link>
            </DropdownItem>
            <DropdownItem
              key="system"
              startContent={
                <Image src={settingPNG} className="size-5" alt="DAO" />
              }
              textValue="Setting"
            >
              <Link
                href = "/platform/setting"
              >
                {t("header.setting")}
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => {
                signOut({ redirect: false }).then(() => {
                  router.push("/")
                  router.refresh()
                })
              }}
              startContent={
                <Image src={signoutPNG} className="size-5" alt="DAO" />
              }
              textValue="Log Out"
            >
              {t("header.logout")}
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
