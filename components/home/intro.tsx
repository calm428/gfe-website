import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function HomeSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between">
      <div className="space-y-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold tracking-tighter md:text-4xl">
            Bitcoin Mining <br className="hidden sm:inline" />
            Ecosystem
          </h1>
          <p className="text-2xl max-w-xl text-muted-foreground">
            Reliable and profitable platform, providing several new miner
            hosting service for end users.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Buy Energy
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            Intro to Sunbelt
          </Link>
        </div>
      </div>
      <div>
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
