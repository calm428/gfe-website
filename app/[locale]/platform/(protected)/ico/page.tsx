import Link from "next/link"
import { Button, Chip } from "@nextui-org/react"
import { FaChevronRight } from "react-icons/fa6"
import { HiOutlineNewspaper } from "react-icons/hi2"

import "@/styles/magic.css"

import ICOCard from "@/components/ico/ico-card"

export default function ICOPage() {
  return (
    <div className="h-[calc(100vh-5rem-1px)] w-full bg-[url('/images/ico/ico-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:flex-row lg:pt-24">
          <div className="flex w-full flex-col justify-between lg:w-[45%] xl:w-[55%]">
            <div className="mb-5 flex flex-col items-start gap-[56px]">
              <div className="flex flex-col gap-[16px]">
                <h1 className="mt-8 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl xl:text-6xl xl:leading-[72px]">
                  Green Fungible Energy - GFE
                </h1>
                <p className="mt-3 text-sm sm:text-base xl:text-xl">
                  GFE is a trailblazing initiative designed to tokenize green
                  energy. Providing a unique investment opportunity that bridges
                  the gap between environmental impact and economic incentive,
                  while bringing the first global perspective to electrical
                  costs.
                </p>
              </div>
              <div className="auth mb-7 flex w-full flex-col gap-2 md:mb-0 md:flex-row md:gap-3">
                <Link href={"#"} className="button-86">
                  Audit
                </Link>

                <Button
                  radius="sm"
                  className="h-12 border border-primary bg-white"
                >
                  <Link
                    href={"#"}
                    className="flex items-center justify-between gap-2"
                  >
                    <HiOutlineNewspaper className="size-4" />
                    <span>WhitePaper</span>
                  </Link>
                </Button>
              </div>
            </div>
            {/* new nft landing page link be placed here */}
            <div>
              <div className=" auth relative flex items-center justify-between rounded-3xl bg-background py-[25px] pl-[8px]  pr-[16px] shadow-lg md:rounded-full md:py-[8px]">
                <Chip
                  variant="shadow"
                  classNames={{
                    content: "drop-shadow shadow-black text-white",
                  }}
                  className="absolute -top-3 left-5 mr-4 rounded-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] md:relative md:left-0 md:top-0"
                >
                  New
                </Chip>
                <h2 className="text-muted-foreground mt-2 font-medium md:mt-0 md:text-[16px]">
                  NFT Official landing page has officially launched! 🎉
                </h2>
                <FaChevronRight />
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-7 w-full max-w-md items-end lg:mt-0 lg:flex lg:w-[55%] lg:flex-col xl:w-[45%] xl:items-end">
            <ICOCard />
          </div>
        </div>
      </div>
    </div>
  )
}
