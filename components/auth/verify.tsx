import Image from "next/image"
import VerificationInput from "react-verification-input"

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

export function VerifyModal() {
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
              src="/images/auth/verify-bg.png"
              width={256}
              height={32}
              alt="Logo"
              className="w-[80%]"
            />
          </div>
          <div className="md:w-[45%] w-full p-8 sm:p-24 md:p-8 !py-24">
            <div className="my-4">
              <div className="text-3xl font-bold">Verification</div>
              <div>Verify your number</div>
            </div>
            <div className="my-4 flex justify-center">
              <VerificationInput
                classNames={{
                  container: "w-full",
                  character: "border-1 rounded-md border-gray-200",
                  characterInactive: "",
                  characterSelected: "",
                }}
                placeholder="_"
              />
            </div>
            <Button className="w-full">Confirm</Button>
            <div className="mt-12">
              Didn't receive code?{" "}
              <Button variant="link" className="">
                Resend
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
