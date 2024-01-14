"use client"

import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
]

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }
  return (
    <div className="container">
      <h1 className="pb-5 text-center font-goldman text-5xl font-normal text-primary  md:pb-10">
        Getting Started with sunbelt renewable mining
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
