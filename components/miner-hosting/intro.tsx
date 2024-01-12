import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function HomeSection() {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-6 justify-between items-center py-12 md:py-24">
      <div className="space-y-14">
        <div className="flex flex-col items-start gap-2">
          {/* TODO: Gradient is confusing */}
          <h1 className="text-3xl md:text-7xl	 font-goldman font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Bitcoin Mining <br className="hidden sm:inline" />
            Ecosystem
          </h1>
          <p className="md:text-2xl text-lg max-w-xl text-muted-foreground font-semibold font-mont">
            Reliable and profitable platform, providing several new miner
            hosting service for end users.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3 auth mb-7 md:mb-0">
          <Button className="w-32 h-12 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] font-bold">
            <Link href={siteConfig.links.docs} target="_blank" rel="noreferrer">
              Buy Energy
            </Link>
          </Button>

          <Button className="h-12 bg-backround bg-white hover:bg-muted border border-secondary-foreground text-muted-foreground font-bold">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className="flex items-center justify-between gap-3"
            >
              <Icons.play />
              <span>Intro to Sunbelt</span>
            </Link>
          </Button>
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
