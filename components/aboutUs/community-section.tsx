import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

function CommunitySection() {
  return (
    <div className="py-[60px] lg:px-24">
      <div className="flex flex-col justify-between rounded-xl bg-muted p-[60px] md:flex-row">
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <div className="bg-gradient-to-b  from-[#2BADFD]  to-[#1570EF] bg-clip-text font-monument text-3xl text-transparent">
            Join our Community
          </div>
          <div className=" auth my-1  mb-5 font-mont text-sm md:mb-0 md:text-base">
            By joining the GFE project, investors and environmental advocates
            alike can contribute to the development of a sustainable energy
            ecosystem while receiving the economic benefits afforded by
            blockchain technology and server hosting with an ecologically sound
            and ethically backed global commodity price for extraction free
            power.
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-[30%]">
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link
              href={siteConfig.links.discord}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/discord.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Discord
            </Link>
          </Button>
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link
              href={siteConfig.links.telegram}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/Telegram.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Telegram
            </Link>
          </Button>
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/twitter.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Twitter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CommunitySection
