"use client"

import React from "react"
import { useRouter } from "next/navigation"
import cancelProposalSubmission from "@/server/actions/cancelProposalSubmission"
import { useTranslations } from "next-intl"
import toast from "react-hot-toast"

import ConfirmModal from "./confirm-modal"

export default function CancelSubmissionConfirmModal({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  const t = useTranslations("main.forum.cancel-submission-confirm-modal")
  const router = useRouter()

  const onCancelSubmission = async () => {
    try {
      const res = await cancelProposalSubmission(id)

      if (res.success) {
        toast.success(t("proposal_submission"), {
          position: "top-right",
        })

        router.refresh()
      } else {
        throw new Error(res.message)
      }
    } catch (error) {
      console.log(error)

      toast.error(t("failed_cancel"), {
        position: "top-right",
      })
    }
  }

  return (
    <ConfirmModal
      title={t("confirmmodal_title")}
      description={t("confirmmodal_description")}
      onConfirm={onCancelSubmission}
    >
      {children}
    </ConfirmModal>
  )
}
