"use client"

import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { SunbeltContext } from "@/context/context"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

export function ForgotPwModal({
  open: open,
  setOpen: setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const { setSignInModalOpen, setSignUpModalOpen, setForgotPwModalOpen } =
    useContext(SunbeltContext)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[900px] mx-auto w-[90%] p-0">
        <div className="flex">
          <div
            className="w-[55%] hidden md:flex justify-center items-center bg-no-repeat bg-cover bg-center"
            style={{
              background:
                "url(/images/auth/auth-layer-bg.png), url(/images/bg-gradient.webp)",
            }}
          >
            <Image
              src="/images/auth/auth-bg.png"
              width={256}
              height={32}
              alt="Logo"
              className="w-[80%]"
            />
          </div>
          <div className="md:w-[45%] w-full p-8 sm:p-24 md:p-8 !py-24">
            <div className="my-4 text-center">
              <div className="text-3xl font-bold ">Check Email</div>
              <div> Verify your account</div>
            </div>
            <div className="space-y-4 mb-4">
              <Input type="email" placeholder="Email" />
              <Button className="w-full">Sign In</Button>
            </div>
            <div>
              Remember your password?{" "}
              <Button
                variant="link"
                className=""
                onClick={() => {
                  setForgotPwModalOpen(false)
                  setSignInModalOpen(true)
                }}
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
