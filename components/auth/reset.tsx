"use client"

import { useContext } from "react"
import Image from "next/image"
import { SunbeltContext } from "@/context/context"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function ResetModal({
  open: open,
  setOpen: setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const { setSignInModalOpen, setForgotPwModalOpen } =
    useContext(SunbeltContext)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="auth mx-auto w-[90%] max-w-[900px] p-0">
        <div className="flex">
          <div
            className="hidden w-[55%] items-center justify-center bg-cover bg-center bg-no-repeat md:flex"
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
          <div className="w-full p-8 !py-24 sm:p-24 md:w-[45%] md:p-8">
            <div className="my-4 text-center">
              <div className="text-3xl font-bold ">Reset Password</div>
              <div>Change your password</div>
            </div>
            <div className="mb-4 space-y-4">
              <Input type="password" placeholder="New Password" />
              <Input type="password" placeholder="Confirm Password" />
              <Button className="w-full">Change Password</Button>
            </div>
            <div>
              Didn’t receive code yet?{" "}
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
