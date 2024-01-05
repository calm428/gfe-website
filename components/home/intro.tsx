import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function HomeSection() {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-6 justify-between items-center py-12 md:py-24">
      <div className="space-y-14">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl md:text-4xl font-monument font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Green Fungible <br className="hidden sm:inline" />
            Energy - GFE
          </h1>
          <p className="md:text-2xl text-lg max-w-xl text-muted-foreground font-mont">
            GFE is trailblazing initiative designed to tokenize green energy,
            Providing a unique investment opportunity that bridges the gap
            between environmental impact and economic incentive, while bringing
            the first global prospective to electrical costs.
          </p>
        </div>
        <div className="flex md:gap-10">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants(),
              "font-monument tracking-widest pt-2.5 font-normal hidden md:block"
            )}
            style={{
              background:
                "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
          >
            Audit
          </Link>

          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants(),
              "font-monument tracking-widest pt-2.5 font-normal md:hidden"
            )}
            style={{
              background:
                "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
          >
            Start Now
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-mont font-semibold text-muted-foreground text-lg hidden md:flex"
            )}
          >
            <Icons.play />
            <span className="ml-4">Whitepaper</span>
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src="/images/home/cube.png"
          alt="cube"
          width={512}
          height={256}
          className="mx-auto"
        />
      </div>
    </div>
  )
}
