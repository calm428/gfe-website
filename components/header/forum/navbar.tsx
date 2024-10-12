import Image from "next/image"
import { default as Link, default as NextLink } from "next/link"
import logoSVG from "@/public/images/logo.svg"
import { authOptions } from "@/server/lib/authOptions"
import User from "@/server/model/user.model"
import {
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/react"
import { getServerSession } from "next-auth"

import AvatarWithMenu from "../avatar-with-menu"
import MobileMenu from "./mobile-menu"
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
      maxWidth="xl"
      height="5rem"
      position="sticky"
      isBordered
      isBlurred
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
      </NavbarContent>

      <NavbarContent className="hidden basis-1 pl-4 lg:flex" justify="end">
        {user && <WalletConnectButton />}
        {user ? (
          <AvatarWithMenu
            user={{
              name: user?.name || "",
              email: user?.email || "",
              image: user?.image || "",
            }}
          />
        ) : (
          <Button
            color="primary"
            className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
          >
            <Link
              href={`/signin?callbackUrl=${encodeURIComponent(process.env.NEXT_PUBLIC_WEBSITE_URL || "")}`}
            >
              Sign in
            </Link>
          </Button>
        )}
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 lg:hidden" justify="end">
        <div className="hidden sm:flex">{user && <WalletConnectButton />}</div>
        <NavbarMenuToggle />
      </NavbarContent>

      <MobileMenu />
    </NextUINavbar>
  )
}

export default Navbar
