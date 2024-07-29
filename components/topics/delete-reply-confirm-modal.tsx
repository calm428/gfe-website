"use client"

import React from "react"
import { useRouter } from "next/navigation"
import deleteReply from "@/server/actions/deleteReply"
import toast from "react-hot-toast"

import ConfirmModal from "./confirm-modal"

/**
 * @param {React.ReactNode} children
 * @param {string} id // * reply id
 * @returns {React.ReactNode}
 */
export default function DeleteReplyConfirmModal({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  const router = useRouter()

  const onDelete = async () => {
    try {
      const res = await deleteReply(id)

      if (res.success) {
        toast.success("Reply deleted successfully", {
          position: "top-right",
        })

        router.refresh()
      } else {
        throw new Error(res.message)
      }
    } catch (error) {
      console.log(error, id)

      toast.error("Failed to delete reply", {
        position: "top-right",
      })
    }
  }

  return (
    <ConfirmModal
      title="Delete Reply"
      description="Are you sure you want to delete this reply? This action cannot be undone."
      onConfirm={onDelete}
    >
      {children}
    </ConfirmModal>
  )
}
