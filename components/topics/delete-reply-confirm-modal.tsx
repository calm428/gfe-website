"use client"

import React from "react"
import { useRouter } from "next/navigation"
import deleteReply from "@/server/actions/deleteReply"
import toast from "react-hot-toast"
import { useTranslations } from "next-intl"
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
  const t = useTranslations("main.forum.delete-reply-confirm-modal")

  const onDelete = async () => {
    try {
      const res = await deleteReply(id)

      if (res.success) {
        toast.success(t("reply_deleted_success"), {
          position: "top-right",
        })

        router.refresh()
      } else {
        throw new Error(res.message)
      }
    } catch (error) {
      console.log(error, id)

      toast.error(t("reply_deleted_failed"), {
        position: "top-right",
      })
    }
  }

  return (
    <ConfirmModal
      title={t("confirmmodal_title")}
      description={t("confirmmodal_description")}
      onConfirm={onDelete}
    >
      {children}
    </ConfirmModal>
  )
}
