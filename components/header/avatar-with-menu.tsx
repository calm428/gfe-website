"use client"

import Image from "next/image"
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

export default function AvatarWithMenu({
  user,
}: {
  user: {
    name: string
    email: string
    image: string
  }
}) {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={user.image}
            name={user.name}
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
              Electricity
            </DropdownItem>
            <DropdownItem
              key="team_settings"
              startContent={
                <Image src={miningPNG} className="size-5" alt="DAO" />
              }
              textValue="Mining"
            >
              Mining
            </DropdownItem>
            <DropdownItem
              key="analytics"
              startContent={<Image src={daoPNG} className="size-5" alt="DAO" />}
            >
              DAO
            </DropdownItem>
            <DropdownItem
              key="system"
              startContent={
                <Image src={settingPNG} className="size-5" alt="DAO" />
              }
              textValue="Setting"
            >
              Setting
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => {
                signOut()
              }}
              startContent={
                <Image src={signoutPNG} className="size-5" alt="DAO" />
              }
              textValue="Log Out"
            >
              Log Out
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
