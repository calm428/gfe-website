import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"
import { BiSolidFileDoc } from "react-icons/bi"
import { FaGuilded } from "react-icons/fa"
import { GrArticle } from "react-icons/gr"
import { HiUsers } from "react-icons/hi"
import { MdArrowOutward } from "react-icons/md"
import { RiGovernmentFill } from "react-icons/ri"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import ExpandableText from "./expandable-text"
import { LanguageSelector } from "./language"

export function MobileMenu({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const t = useTranslations("main")
  const pathname = usePathname()

  // nav style menu
  const navMenuStyle = cn(
    "mx-auto flex items-center rounded-lg p-2 font-mont font-medium text-muted-foreground hover:text-primary"
  )

  // menulist items

  const token_functionalities = siteConfig.token_functionalities
  const industry = siteConfig.industry
  const community = siteConfig.community

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="!p-0">
        <div className="sticky top-0 mt-5 bg-background">
          <div className="flex justify-between">
            <Link
              href="/"
              className="flex w-[150px] flex-col items-center justify-center gap-1"
              aria-label="Home"
            >
              <div className="flex flex-col gap-1">
                <Image src="/GFE.svg" alt="Logo" width={100} height={32} />
              </div>
            </Link>
          </div>
          <Separator
            orientation="vertical"
            className="mx-auto my-[16px] block h-[3px] w-[90%] bg-[#2BADFD]"
          />
        </div>
        <Accordion type="single" collapsible className="relative h-full px-2">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="justify-center text-muted-foreground !no-underline hover:text-primary">
              {t("header.ecosystem")}
            </AccordionTrigger>
            <AccordionContent className="bg-muted p-0">
              <div className="p-2">
                {token_functionalities.map((functionality, ind) => (
                  <Link
                    key={ind}
                    href={functionality.href}
                    className="flex gap-2 py-[10px]"
                  >
                    <div>
                      <Image
                        src={functionality.icon}
                        width={20}
                        height={20}
                        alt={functionality.title}
                        className=" min-w-5"
                      />
                    </div>
                    <div>
                      <p key={functionality.title}>
                        <p className=" font-mont text-[14px] font-semibold capitalize ">
                          {functionality.title}
                        </p>
                        <ExpandableText
                          description={functionality.desc}
                          maxChars={60}
                        />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <Link
            href={"/nft"}
            className={`justify-center ${navMenuStyle} ${
              "/nft" === pathname && "bg-primary/5 font-semibold text-primary"
            }`}
          >
            {t("header.nft")}
          </Link>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="justify-center text-muted-foreground !no-underline hover:text-primary">
              {t("header.community")}
            </AccordionTrigger>
            <AccordionContent className="bg-muted p-0">
              <div className="p-2">
                <Link
                  href={"#"}
                  className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                >
                  <div>
                    <RiGovernmentFill className="min-w-5 text-[#21b4fd]" />
                  </div>
                  <div>
                    <p>
                      <p className="font-mont text-[14px] font-semibold capitalize">
                        {t("header.governance")}
                      </p>
                      <p className="text-xs">
                        {t("header.governance_description")}
                      </p>
                    </p>
                  </div>
                </Link>
                <Link
                  href={"#"}
                  className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                >
                  <div>
                    <FaGuilded className="min-w-5 text-[#21b4fd]" />
                  </div>
                  <div>
                    <p>
                      <p className="font-mont text-[14px] font-semibold capitalize">
                        {t("header.guilds")}
                      </p>
                      <p className="text-xs">
                        {t("header.guilds_description")}
                      </p>
                    </p>
                  </div>
                </Link>
                <div className="mt-4 flex justify-center gap-3">
                  {community.map((community, ind) => (
                    <Link
                      href={community.href}
                      key={ind}
                      className="ml-4 flex w-fit gap-2 rounded-full bg-muted-foreground/10 p-2 hover:bg-muted-foreground/30"
                    >
                      <Image
                        src={community.icon}
                        width={20}
                        height={20}
                        alt={community.title}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="justify-center text-muted-foreground !no-underline hover:text-primary">
              {t("header.learn")}
            </AccordionTrigger>
            <AccordionContent className="bg-muted p-0">
              <div className="grid grid-cols-1 gap-2 p-2">
                <Link
                  href={"/about-us"}
                  className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                >
                  <div>
                    <HiUsers className="min-w-5 text-[#21b4fd]" />
                  </div>
                  <div>
                    <p>
                      <p className="font-mont text-[14px] font-semibold capitalize">
                        {t("header.about_us")}
                      </p>
                      <p className="text-xs">
                        {t("header.about_us_description")}
                      </p>
                    </p>
                  </div>
                </Link>
                <Link
                  href={"/blogs-and-news"}
                  className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                >
                  <div>
                    <GrArticle className="min-w-5 text-[#21b4fd]" />
                  </div>
                  <div>
                    <p>
                      <p className="font-mont text-[14px] font-semibold capitalize">
                        {t("header.blogs_and_news")}
                      </p>
                      <p className="text-xs">
                        {t("header.blogs_and_news_description")}
                      </p>
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://docs.gfe.foundation"
                  target="_blank"
                  className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                >
                  <div>
                    <BiSolidFileDoc className="min-w-5 text-[#21b4fd]" />
                  </div>
                  <div>
                    <p>
                      <p className="flex font-mont text-[14px] font-semibold capitalize">
                        {t("header.documentation")}
                        <MdArrowOutward className="size-4" />
                      </p>
                      <p className="text-xs">
                        {t("header.documentation_description")}
                      </p>
                    </p>
                  </div>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <Link
            href={"/contacts"}
            className={`justify-center ${navMenuStyle} ${
              "/contacts" === pathname &&
              "bg-primary/5 font-semibold text-primary"
            }`}
          >
            {t("header.contacts")}
          </Link>
          <div className="m-4 mx-auto flex justify-center">
            <LanguageSelector />
          </div>
          <Button
            variant="default"
            className="w-full whitespace-nowrap font-mont font-semibold"
            style={{
              background:
                "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
            asChild
          >
            <Link href="https://platform.gfe.foundation">
              {(session?.user as any)?.id
                ? t("header.launch_app")
                : t("header.sign_in")}
            </Link>
          </Button>
        </Accordion>
      </SheetContent>
    </Sheet>
  )
}
