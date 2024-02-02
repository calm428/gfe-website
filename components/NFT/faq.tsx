"use client"

import { useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { useTranslation } from "next-i18next"

const FAQS = [
  {
    question: "nft_page.faq_section.question1",
    answer: "nft_page.faq_section.answer1",
  },
  {
    question: "nft_page.faq_section.question2",
    answer: "nft_page.faq_section.answer2",
  },
  {
    question: "nft_page.faq_section.question3",
    answer: "nft_page.faq_section.answer3",
  },
  {
    question: "nft_page.faq_section.question4",
    answer: "nft_page.faq_section.answer4",
  },
  {
    question: "nft_page.faq_section.question5",
    answer: "nft_page.faq_section.answer5",
  },
  {
    question: "nft_page.faq_section.question6",
    answer: "nft_page.faq_section.answer6",
  },
]

function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)
const {t} = useTranslation()
  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }
  return (
    <div className="flex flex-col  gap-[50px] px-5 py-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
          FAQ
        </h1>
        <p className="auth font-mont text-lg">
          {t("nft_page.faq_section.description")}
        </p>
      </div>
      <div>
        {/* <div className="py-[50px]"> */}
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
                  className="auth font-semibold text-secondary-foreground hover:no-underline"
                >
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="auth text-base text-muted-foreground">
                  {t(faq.answer)}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex items-center justify-center pt-[50px]">
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link href={siteConfig.links.docs}>View More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FAQ
