"use client"

import React from "react"
import { useRouter } from "next/navigation"
import cancelProposalSubmission from "@/server/actions/cancelProposalSubmission"
import deleteTopic from "@/server/actions/deleteTopic"
import toast from "react-hot-toast"

import ConfirmModal from "./confirm-modal"

export default function CancelSubmissionConfirmModal({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  const router = useRouter()

  const onCancelSubmission = async () => {
    try {
      const res = await cancelProposalSubmission(id)

      if (res.success) {
        toast.success("Proposal submission canceled successfully", {
          position: "top-right",
        })

        router.refresh()
      } else {
        throw new Error(res.message)
      }
    } catch (error) {
      console.log(error)

      toast.error("Failed to cancel submission", {
        position: "top-right",
      })
    }
  }

  return (
    <ConfirmModal
      title="Cancel proposal submission"
      description="Are you sure you want to cancel the submission? This action cannot be undone."
      onConfirm={onCancelSubmission}
    >
      {children}
    </ConfirmModal>
  )
}
