"use client"

import React, { ReactElement, useState } from "react"
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import { BsReplyFill } from "react-icons/bs"

import "react-quill/dist/quill.bubble.css"

import { useRouter } from "next/navigation"
import replyTopic from "@/server/actions/replyTopic"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"
import { useTranslations } from "next-intl"

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video", "code-block"],
    ["clean"],
  ],
}

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
]

export default function TopicReplyModal({
  children,
  slug,
  replyId,
}: {
  children: React.ReactNode
  slug: string
  replyId?: string
}) {
  const router = useRouter()
  const t = useTranslations("main.forum.topic-reply-modal")
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const enhancedChild = React.cloneElement(children as ReactElement, {
    onPress: onOpen,
  })

  const formSchema = z.object({
    content: z
      .string()
      .refine((value) => value.replace(/<[^>]*>?/gm, "").trim(), {
        message: t("must_input_here"),
      }),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: UserFormValue) => {
    setIsSubmitting(true)

    try {
      const res = await replyTopic(slug, data.content, replyId)

      if (res.success) {
        onOpenChange()
        toast.success(t("reply_created_success"), {
          position: "top-right",
        })

        router.refresh()
      } else {
        toast.error(t("failed_to_create_reply"), {
          position: "top-right",
        })
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {enhancedChild}
      <Modal
        size="5xl"
        scrollBehavior="outside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          wrapper: "!items-end",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative w-full space-y-2"
            >
              <ModalHeader className="flex flex-col gap-1">
                {t("modal_title")}
              </ModalHeader>
              <ModalBody>
                <Controller
                  name="content"
                  control={control}
                  render={({ field }) => (
                    <div className="flex w-full flex-col">
                      <ReactQuill
                        {...field}
                        theme="bubble"
                        modules={modules}
                        formats={formats}
                        placeholder={t("type_here")}
                        style={{ height: "20vh" }}
                      />
                      {errors.content && (
                        <span className="px-2 text-xs text-red-500">
                          {errors.content.message}
                        </span>
                      )}
                    </div>
                  )}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("cancel")}
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  isLoading={isSubmitting}
                  startContent={
                    !isSubmitting && <BsReplyFill className="size-5" />
                  }
                  className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
                >
                  {t("reply")}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
