"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/custom-accordion"

const FAQS = [
  {
    question: "nft_page.faq_section.question1",
    answers: [
      "nft_page.faq_section.answer1_1",
      "nft_page.faq_section.answer1_2",
      "nft_page.faq_section.answer1_3",
      "nft_page.faq_section.answer1_4",
    ],
  },
  {
    question: "nft_page.faq_section.question2",
    answers: [
      "nft_page.faq_section.answer2_1",
      "nft_page.faq_section.answer2_2",
    ],
  },
  {
    question: "nft_page.faq_section.question3",
    answers: [
      "nft_page.faq_section.answer3_1",
      "nft_page.faq_section.answer3_2",
      "nft_page.faq_section.answer3_3",
    ],
  },
  {
    question: "nft_page.faq_section.question4",
    answers: [
      "nft_page.faq_section.answer4_1",
      "nft_page.faq_section.answer4_2",
      "nft_page.faq_section.answer4_3",
    ],
  },
]

function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const t = useTranslations("main")
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
                  {t(faq.question as keyof IntlMessages["main"])}
                </AccordionTrigger>
                <AccordionContent className="auth flex flex-col gap-4 text-base text-muted-foreground">
                  {faq.answers.map((answer, index) => (
                    <p key={index} className="auth text-justify">
                      {t(answer as keyof IntlMessages["main"])}
                    </p>
                  ))}
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
