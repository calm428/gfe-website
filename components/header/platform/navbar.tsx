import Image from "next/image"
import NextLink from "next/link"
import logoSVG from "@/public/images/logo.svg"
import { authOptions } from "@/server/lib/authOptions"
import User from "@/server/model/user.model"
import {
  Divider,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/react"
import { getServerSession } from "next-auth"

import AvatarWithMenu from "../avatar-with-menu"
import LanguageSelector from "./language-selector"
import MobileMenu from "./mobile-menu"
import NavLinks from "./nav-links"
import WalletConnectButton from "../wallet-connect-button"

async function getUser() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  const account = await User.findOne({
    email: session?.user?.email,
  })

  return account
}

export async function Navbar() {
  const user = await getUser()

  return (
    <NextUINavbar
      maxWidth="full"
      height="5rem"
      position="sticky"
      isBordered
      isBlurred
      classNames={{
        wrapper: "!container mx-auto",
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Image
              src={logoSVG}
              alt="GFE Foundation Logo"
              className="h-auto w-28 min-w-28"
            />
          </NextLink>
        </NavbarBrand>
        <Divider
          orientation="vertical"
          className="h-2/3 w-0.5 bg-gradient-to-b from-[#5EA2EF] to-[#0072F5]"
        />
        <NavLinks authenticated={!!user} />
      </NavbarContent>

      <NavbarContent className="hidden basis-1 pl-4 lg:flex" justify="end">
        <WalletConnectButton />
        <LanguageSelector />
        {user && (
          <AvatarWithMenu
            user={{
              name: user?.name || "",
              email: user?.email || "",
              image: user?.image || "",
            }}
          />
        )}
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 lg:hidden" justify="end">
        <div className="hidden sm:flex">
          <WalletConnectButton />
        </div>
        <LanguageSelector />
        <NavbarMenuToggle />
      </NavbarContent>

      <MobileMenu authenticated={!!user} />
    </NextUINavbar>
  )
}

export default Navbar
