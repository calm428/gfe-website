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

import SectionTitle from "../common/section-title"
import { Button } from "../ui/button"

const FAQS = [
  {
    question: "home.section5.question1",
    answer: "home.section5.answer1",
  },
  {
    question: "home.section5.question2",
    answer: "home.section5.answer2",
  },
  {
    question: "home.section5.question3",
    answer: "home.section5.answer3",
  },
  {
    question: "home.section5.question4",
    answer: "home.section5.answer4",
  },
]

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const t = useTranslations("main")

  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }

  return (
    <section className="container py-[100px]">
      <SectionTitle>
        {t("home.section5.title")} <br className="hidden sm:inline" />
        {t("home.section5.subtitle")}
      </SectionTitle>

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
                {t(faq.question as any)}
              </AccordionTrigger>
              <AccordionContent className="auth text-base text-muted-foreground">
                {t(faq.answer as any)}
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
    </section>
  )
}

export default FaqSection
