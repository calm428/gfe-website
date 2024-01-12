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

export function SignInModal({
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
      <DialogContent className="auth mx-auto h-[91%] w-[90%] max-w-[900px] p-0">
        <div className="flex h-[90%]">
          <div
            className="hidden w-[50%] items-center justify-center bg-cover bg-center bg-no-repeat md:flex"
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
          <div className="w-full p-8 !py-24 sm:p-24 md:w-[50%] md:p-8">
            <div className="my-4 text-center">
              <div className="text-3xl font-bold ">Welcome Back!</div>
              <div> Continue Your Journey</div>
            </div>
            <Button variant="outline" className="mt-4 w-full">
              <Icons.google className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            <Button variant="outline" className="mt-4 w-full">
              <Icons.apple className="mr-2 h-5 w-5" />
              Continue with Apple
            </Button>
            <div className="relative my-1 flex items-center justify-center gap-2">
              <div className="z-10 bg-white p-4">OR</div>
              <Separator
                orientation="vertical"
                className="absolute mr-auto h-[1px] w-full border-0"
              />
            </div>
            <div className="mb-4 space-y-4">
              <Input type="email" placeholder="Username or email" />
              <Input type="password" placeholder="Password" />
              <div className="flex justify-end">
                <button
                  className="text-sm text-[#333] transition-all duration-300 hover:underline"
                  onClick={() => {
                    setSignInModalOpen(false)
                    setForgotPwModalOpen(true)
                  }}
                >
                  Forgot Password
                </button>
              </div>
              <Button className="w-full">Sign In</Button>
            </div>
            <p className="text-sm text-[#333]">
              By signing up, you agree to the{" "}
              <Link href={"/"} className="text-[#111] underline">
                Terms of Service and
              </Link>{" "}
              <Link href={"/"} className="text-[#111] underline">
                Privacy Policy
              </Link>
              , including{" "}
              <Link href={"/"} className="text-[#111] underline">
                cookie use.
              </Link>
            </p>
            <div className=" flex items-center justify-center text-xs">
              <p> Don{"'"}t have an account?</p>
              <Button
                variant="link"
                className="text-xs"
                onClick={() => {
                  setSignInModalOpen(false)
                  setSignUpModalOpen(true)
                }}
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
