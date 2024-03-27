"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/custom-accordion"

import SectionTitle from "../common/section-title"

const FaqSection = () => {
  const t = useTranslations("main")

  const [openItem, setOpenItem] = useState<number | null>(null)

  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }

  const FAQS = [
    {
      question: t("miner_hosting.bitcoin_mining01.question"),
      answer: t("miner_hosting.bitcoin_mining01.answer"),
    },
    {
      question: t("miner_hosting.bitcoin_mining02.question"),
      answer: t("miner_hosting.bitcoin_mining02.answer"),
    },
    {
      question: t("miner_hosting.bitcoin_mining03.question"),
      answer: t("miner_hosting.bitcoin_mining03.answer"),
    },
    {
      question: t("miner_hosting.bitcoin_mining04.question"),
      answer: t("miner_hosting.bitcoin_mining04.answer"),
    },
  ]
  return (
    <section className="container">
      <SectionTitle>{t("miner_hosting.sunbeltRenewableMining")}</SectionTitle>

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
    </section>
  )
}

export default FaqSection
