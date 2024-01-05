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
              <div className="text-3xl font-bold ">Start Mining!</div>
              <div> Continue Your Journey</div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Icons.google className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full mt-4">
              <Icons.apple className="mr-2 h-5 w-5" />
              Continue with Apple
            </Button>
            <div className="flex items-center justify-center gap-2 relative my-1">
              <div className="p-4 bg-white z-10">OR</div>
              <Separator
                orientation="vertical"
                className="absolute w-full mr-auto h-[1px] border-0"
              />
            </div>
            <div className="space-y-4 mb-4">
              <Input type="email" placeholder="Username or email" />
              <Input type="password" placeholder="Password" />
              <div className="flex justify-end">
                <button
                  className="text-[#333] text-sm hover:underline transition-all duration-300"
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
            <p className="text-[#333] text-sm">
              By signing up, you agree to the{" "}
              <Link href={"/"} className="underline text-[#111]">
                Terms of Service and
              </Link>{" "}
              <Link href={"/"} className="underline text-[#111]">
                Privacy Policy
              </Link>
              , including{" "}
              <Link href={"/"} className="underline text-[#111]">
                cookie use.
              </Link>
            </p>
            <div>
              Don't have an account?{" "}
              <Button
                variant="link"
                className=""
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
