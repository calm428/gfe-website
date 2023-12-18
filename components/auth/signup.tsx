import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

export function SignUpModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px] mx-auto w-[90%] p-0">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
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
            <div className="my-4">
              <div className="text-3xl font-bold">Start Mining!</div>
              <div>Join us today</div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Icons.google className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            <div className="flex items-center justify-center gap-2 relative my-1">
              <div className="p-4 bg-white z-10">OR</div>
              <Separator
                orientation="vertical"
                className="absolute w-full mr-auto h-[1px] border-0"
              />
            </div>
            <div className="space-y-4 mb-12">
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
            <div>
              Already have an account?{" "}
              <Button variant="link" className="">
                Sign In Now
              </Button>
            </div>
          </div>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
