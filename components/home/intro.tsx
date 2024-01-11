import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import Counter from "./Counter"

export default function HomeSection() {
  return (
    <div
      className="relative px-5 lg:px-12 flex flex-col lg:flex-row justify-between  lg:pt-24 pb-20 lg:pb-56 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bgs/Patterns.svg'),url('/bgs/intro.jpg')",
      }}
    >
      <div className="w-full lg:w-[45%] xl:w-[55%] flex flex-col justify-between">
        <div className="flex flex-col items-start gap-[56px] mb-5">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[42px] md:text-[52px] xl:text-[62px] font-monument font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
              Green Fungible <br className="hidden sm:inline" />
              Energy - GFE
            </h1>
            <p className="lg:text-[18px] xl:text-[20px] pr-5 font-semibold text-muted-foreground font-mont auth">
              GFE is trailblazing initiative designed to tokenize green energy,
              Providing a unique investment opportunity that bridges the gap
              between environmental impact and economic incentive, while
              bringing the first global prospective to electrical costs.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3 auth mb-7 md:mb-0">
            <Button className="w-[130px] h-[50px] bg-gradient-to-l from-[#2BADFD] to-[#1570EF] font-bold">
              <Link href={siteConfig.links.docs}>Audit</Link>
            </Button>

            <Button className="h-[50px] bg-backround bg-white hover:bg-muted border border-secondary-foreground text-muted-foreground font-bold">
              <Link
                href={siteConfig.links.docs}
                className="flex items-center justify-between gap-3"
              >
                <Icons.paper />
                <span>Whitepaper</span>
              </Link>
            </Button>
          </div>
        </div>
        {/* new nft landing page link be placed here */}
        <div>
          <div className=" relative auth flex justify-between items-center bg-background rounded-3xl md:rounded-full py-[25px]  md:py-[8px] pr-[16px] pl-[8px] shadow-lg">
            <Button className="absolute -top-3 md:top-0 left-5 md:left-0 md:relative rounded-full py-[8px] px-[16px] bg-gradient-to-l from-[#2BADFD] to-[#1570EF] ">
              New
            </Button>
            <h1 className="text-muted-foreground font-mont mt-2 md:mt-0 md:text-[20px] font-medium">
              NFT Official landing page has officially launched!🎉
            </h1>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className=" w-full mt-7 lg:mt-0 lg:w-[55%] xl:w-[45%] lg:flex lg:flex-col xl:items-end">
        <Counter />
      </div>
      <div className="absolute -bottom-6  md:-bottom-10 lg:-bottom-16 w-full left-0 flex z-0">
        <img src="/bgs/right.svg" alt="bg" className="w-1/2" />
        <img src="/bgs/left.svg" alt="bg" className="w-1/2" />
      </div>
    </div>
  )
}
