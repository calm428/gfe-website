"use client"

import { IProposal } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input, Textarea } from "@nextui-org/react"
import { Controller, useForm } from "react-hook-form"
import { FaChevronRight } from "react-icons/fa6"
import * as z from "zod"
import { useTranslations } from "next-intl"

export default function CreateProposalForm({
  data,
  updateData,
  goNext,
}: {
  data: IProposal
  updateData: React.Dispatch<React.SetStateAction<any>>
  goNext: () => void
}) {
  const t = useTranslations("main.forum.submit_topic_proposal.create_proposal")

  const formSchema = z.object({
    title: z.string().min(1, t("title_required")),
    summary: z.string().min(1, t("summary_required")),
    content: z.string().min(1, t("content_required")),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data.title,
      summary: data.summary,
      content: data.content,
    },
  })

  const onSubmit = async (data: UserFormValue) => {
    try {
      updateData((prev: any) => {
        return { ...prev, ...data }
      })

      goNext()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="mx-auto w-full max-w-4xl">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label={t("title")}
              labelPlacement="outside"
              readOnly
            />
          )}
        />
        <Controller
          name="summary"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              color={errors.summary ? "danger" : "default"}
              variant="flat"
              label={t("summary")}
              labelPlacement="outside"
              placeholder={t("summary_placeholder")}
              className="mt-4"
            />
          )}
        />
        <div className="mt-4">
          <label className="pb-1.5 text-sm text-foreground">{t("content")}</label>
          <div
            className="prose max-h-[25vh] overflow-auto rounded-medium bg-default-100 px-3 py-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </div>
      </div>
      <div className="mb-4 mt-8 flex w-full justify-between">
        <Button
          type="submit"
          color="primary"
          variant="flat"
          endContent={<FaChevronRight />}
          className="ml-auto"
        >
          {t("next")}
        </Button>
      </div>
    </form>
  )
}
