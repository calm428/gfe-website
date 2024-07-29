"use client"

import React from "react"
import { useRouter } from "next/navigation"
import deleteTopic from "@/server/actions/deleteTopic"
import toast from "react-hot-toast"

import ConfirmModal from "./confirm-modal"

export default function DeleteTopicConfirmModal({
  children,
  slug,
}: {
  children: React.ReactNode
  slug: string
}) {
  const router = useRouter()

  const onDelete = async () => {
    try {
      const res = await deleteTopic(slug)

      if (res.success) {
        toast.success("Topic deleted successfully", {
          position: "top-right",
        })

        router.push("/")
      } else {
        throw new Error(res.message)
      }
    } catch (error) {
      console.log(error)

      toast.error("Failed to delete topic", {
        position: "top-right",
      })
    }
  }

  return (
    <ConfirmModal
      title="Delete topic"
      description="Are you sure you want to delete this topic? This action cannot be undone."
      onConfirm={onDelete}
    >
      {children}
    </ConfirmModal>
  )
}
