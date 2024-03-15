"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { Button } from "../ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/custom-accordion"

const FAQS = [
  {
    question: "nft.faq_section.question1",
    answers: [
      "nft.faq_section.answer1_1",
      "nft.faq_section.answer1_2",
      "nft.faq_section.answer1_3",
      "nft.faq_section.answer1_4",
    ],
  },
  {
    question: "nft.faq_section.question2",
    answers: ["nft.faq_section.answer2_1", "nft.faq_section.answer2_2"],
  },
  {
    question: "nft.faq_section.question3",
    answers: [
      "nft.faq_section.answer3_1",
      "nft.faq_section.answer3_2",
      "nft.faq_section.answer3_3",
    ],
  },
  {
    question: "nft.faq_section.question4",
    answers: [
      "nft.faq_section.answer4_1",
      "nft.faq_section.answer4_2",
      "nft.faq_section.answer4_3",
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
    <section className="flex flex-col  gap-[50px] px-5 py-24">
      <div className="flex flex-col items-center gap-4">
        <SectionTitle>FAQ</SectionTitle>
        <SectionDescription>
          {t("nft.faq_section.description")}
        </SectionDescription>
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
                  {t(faq.question as any)}
                </AccordionTrigger>
                <AccordionContent className="auth flex flex-col gap-4 text-base text-muted-foreground">
                  {faq.answers.map((answer, index) => (
                    <p key={index} className="auth text-justify">
                      {t(answer as any)}
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
    </section>
  )
}

export default FAQ
