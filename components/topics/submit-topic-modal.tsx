"use client"

import React, { ReactElement, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import createProposal from "@/server/actions/createProposal"
import { IProposal } from "@/types"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Listbox,
  ListboxItem,
  ListboxSection,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Textarea,
  useDisclosure,
} from "@nextui-org/react"
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react"
import toast from "react-hot-toast"
import { BiMoneyWithdraw, BiReset } from "react-icons/bi"
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs"
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa6"
import { GiMining } from "react-icons/gi"
import { IoMdTrash } from "react-icons/io"
import { SiGithubactions } from "react-icons/si"

import AddActionsForm from "./submit-topic-forms/add-actions-form"
import CreateProposalForm from "./submit-topic-forms/create-proposal-form"
import ProposalSummary from "./submit-topic-forms/proposal-summary"
import { useTranslations } from "next-intl"

/**
 * @param {React.ReactNode} children
 * @param {any} topic
 * @returns {React.ReactNode}
 */
export default function SubmitTopicModal({
  children,
  topic,
}: {
  children: React.ReactNode
  topic: any
}) {
  const router = useRouter()
  const t = useTranslations("main.forum.submit_topic_proposal")
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [step, setStep] = useState(1)
  const [proposalData, setProposalData] = useState<IProposal>({
    title: topic?.title,
    summary: "",
    content: topic?.content,
    actions: [],
  })

  const steps = [
    {
      title: t("title1"),
      description: t("description1"),
    },
    {
      title: t("title2"),
      description: t("description2"),
    },
    {
      title: t("title3"),
      description: t("description3"),
    },
  ]

  const enhancedChild = React.cloneElement(children as ReactElement, {
    onPress: () => {
      if (isConnected) onOpen()
      else
        toast.error("You have to connect your wallet first", {
          position: "top-right",
        })
    },
  })

  const onSubmit = async () => {
    const res = await createProposal(
      topic?._id || "",
      proposalData.summary,
      proposalData.actions
    )

    console.log(res)

    if (res.success) {
      toast.success("Your proposal has submitted successfully!", {
        position: "top-right",
      })

      router.refresh()
    } else
      toast.error("Something went wrong!", {
        position: "top-right",
      })
  }

  return (
    <>
      {enhancedChild}
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Card shadow="none" className="border">
                  <CardBody className="p-6">
                    <div className="flex w-full items-end justify-between">
                      <p className="mb-2 text-sm text-primary">{t("new_proposal")}</p>
                      <span className="text-xs text-gray-500">
                        {t("step")} {step} {t("of")} {steps.length}
                      </span>
                    </div>
                    <Progress
                      aria-label="Proposal step progress"
                      value={step * (100 / steps.length)}
                      className="w-full"
                    />
                    <div className="mt-4">
                      <p className="text-3xl font-semibold">
                        {steps[step - 1].title}
                      </p>
                      <span className="text-sm">
                        {steps[step - 1].description}
                      </span>
                    </div>
                  </CardBody>
                </Card>
                {step === 1 && (
                  <CreateProposalForm
                    data={proposalData}
                    updateData={setProposalData}
                    goNext={() => setStep((step) => step + 1)}
                  />
                )}
                {step === 2 && (
                  <AddActionsForm
                    data={proposalData}
                    updateData={setProposalData}
                    goPrev={() => setStep((step) => step - 1)}
                    goNext={() => setStep((step) => step + 1)}
                  />
                )}
                {step === 3 && (
                  <ProposalSummary
                    data={proposalData}
                    goPrev={() => setStep((step) => step - 1)}
                    onSubmit={onSubmit}
                  />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
