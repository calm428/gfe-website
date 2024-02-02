import Image from "next/image"
import VerificationInput from "react-verification-input"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function VerifyModal({
  open: open,
  setOpen: setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="mx-auto w-[90%] max-w-[900px] p-0">
        <div className="flex">
          <div
            className="hidden w-[55%] items-center justify-center bg-cover bg-center bg-no-repeat md:flex"
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
          <div className="w-full p-8 !py-24 sm:p-24 md:w-[45%] md:p-8">
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
              Didn{"'"}t receive code?{" "}
              <Button variant="link" className="">
                Resend
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
