import { useContext } from "react"
import Image from "next/image"
import { SunbeltContext } from "@/context/context"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

export function SignUpModal({
  open: open,
  setOpen: setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const { setSignInModalOpen, setSignUpModalOpen } = useContext(SunbeltContext)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="auth mx-auto h-[91%]  w-[90%] max-w-[900px] p-0">
        <div className="flex h-[90%]">
          <div
            className="hidden h-[100%] w-[50%] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:flex"
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
          <div className="w-full p-8 !pb-24 sm:px-24 md:w-[50%] md:p-8">
            <div className="my-4 text-center">
              <div className="text-3xl font-bold ">Register Now</div>
              <div>Join us today</div>
            </div>
            <Button variant="outline" className="mt-4 w-full">
              <Icons.google className="mr-2 h-4 w-4" />
              Sign Up with Google
            </Button>
            <Button variant="outline" className="mt-4 w-full">
              <Icons.apple className="mr-2 h-5 w-5" />
              Sign Up with Apple
            </Button>
            <div className="relative my-1 flex items-center justify-center gap-2">
              <div className="z-10 bg-white p-4">OR</div>
              <Separator
                orientation="vertical"
                className="absolute mr-auto h-[1px] w-full border-0"
              />
            </div>
            <div className="mb-4 space-y-4">
              <Input type="username" placeholder="Username" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <div className="text-xs text-muted-foreground">
                <div className="flex">
                  <Check className="mr-2 h-4 w-4" />
                  At least 8 characters in length
                </div>
                <div className="flex">
                  <Check className="mr-2 h-4 w-4" />
                  At least 1 uppercase character
                </div>
                <div className="flex">
                  <Check className="mr-2 h-4 w-4" />
                  At least 1 lowercase character
                </div>
                <div className="flex">
                  <Check className="mr-2 h-4 w-4" />
                  At least 1 number
                </div>
                <div className="flex">
                  <Check className="mr-2 h-4 w-4" />
                  At least 1 special character (Valid: !@#$%^&*)
                </div>
              </div>
              <Button className="w-full">Sign Up</Button>
            </div>
            <div className=" flex items-center justify-center text-xs">
              <p>Already have an account?</p>
              <Button
                variant="link"
                className="text-xs"
                onClick={() => {
                  setSignInModalOpen(true)
                  setSignUpModalOpen(false)
                }}
              >
                Sign In Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
