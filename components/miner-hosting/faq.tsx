"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  const { t } = useTranslation()
  const [openItem, setOpenItem] = useState<number | null>(null)

  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }

  const FAQS = [
    {
      question: t("minerHosting.bitcoin_mining01.question"),
      answer: t("minerHosting.bitcoin_mining01.answer"),
    },
    {
      question: t("minerHosting.bitcoin_mining02.question"),
      answer: t("minerHosting.bitcoin_mining02.answer"),
    },
    {
      question: t("minerHosting.bitcoin_mining03.question"),
      answer: t("minerHosting.bitcoin_mining03.answer"),
    },
    {
      question: t("minerHosting.bitcoin_mining04.question"),
      answer: t("minerHosting.bitcoin_mining04.answer"),
    },
  ]
  return (
    <div className="container">
      <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent pb-5 text-center font-goldman text-5xl font-normal md:pb-10">
        {t("minerHosting.sunbeltRenewableMining")}
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
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="auth text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FaqSection
