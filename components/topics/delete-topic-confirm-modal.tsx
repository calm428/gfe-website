"use client"

import React from "react"
import { useRouter } from "next/navigation"
import deleteTopic from "@/server/actions/deleteTopic"
import toast from "react-hot-toast"
import { useTranslations } from "next-intl"

import ConfirmModal from "./confirm-modal"

export default function DeleteTopicConfirmModal({
  children,
  slug,
}: {
  children: React.ReactNode
  slug: string
}) {
  const router = useRouter()
  const t = useTranslations("main.forum.delete-topic-confirm-modal")

  const onDelete = async () => {
    try {
      const res = await deleteTopic(slug)

      if (res.success) {
        toast.success(t("topic_deleted_success"), {
          position: "top-right",
        })

        router.push("/forum")
      } else {
        throw new Error(res.message)
      }
    } catch (error) {
      console.log(error)

      toast.error(t("topic_deleted_failed"), {
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
