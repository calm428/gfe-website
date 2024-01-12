import Link from "next/link"

import { Button } from "../ui/button"

function ContactUs() {
  return (
    <div className="py-[60px]">
      <div className="flex flex-col justify-between rounded-xl bg-muted p-[60px] md:flex-row">
        <div className="flex flex-col gap-2 lg:w-[60%]">
          <div className="auth bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-5xl font-bold text-transparent">
            Contact us
          </div>
          <div className=" auth my-1 mb-5 text-sm font-medium md:mb-0 md:text-base">
            For further information, plz contact us by email at{" "}
            <span className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent">
              info@gfe.foundation
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-5 md:w-[30%]	">
          <Button className="auth w-32 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-6">
            <Link href="/contact" className="flex items-center gap-3">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
