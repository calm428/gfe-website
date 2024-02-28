"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/custom-accordion"

import { Button } from "../ui/button"

const FAQS = [
  {
    question: "home_page.section5.question1",
    answer: "home_page.section5.answer1",
  },
  {
    question: "home_page.section5.question2",
    answer: "home_page.section5.answer2",
  },
  {
    question: "home_page.section5.question3",
    answer: "home_page.section5.answer3",
  },
  {
    question: "home_page.section5.question4",
    answer: "home_page.section5.answer4",
  },
]

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const t = useTranslations("main")

  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }

  return (
    <div className="py-[100px]">
      <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-[50px]  text-center font-goldman text-3xl uppercase text-transparent">
        {t("home_page.section5.title")} <br className="hidden sm:inline" />
        {t("home_page.section5.subtitle")}
      </h1>

      <Accordion type="single" collapsible className="auth mt-5 space-y-5">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={index}
            value={("0" + (index + 1)).toString()}
            className="auth accordion flex items-start rounded-lg"
            isOpen={index === openItem}
          >
            <div className="w-full">
              <AccordionTrigger
                onClick={() => handleAccordionItemClick(index)}
                className="auth  font-semibold hover:no-underline"
              >
                {t(faq.question as keyof IntlMessages["main"])}
              </AccordionTrigger>
              <AccordionContent className="auth text-base text-muted-foreground">
                {t(faq.answer as keyof IntlMessages["main"])}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center justify-center pt-[50px]">
        <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4 font-bold">
          <Link href={siteConfig.links.docs}>View All</Link>
        </Button>
      </div>
    </div>
  )
}

export default FaqSection
