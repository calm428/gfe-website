"use client"

import { IProposal } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input, Textarea } from "@nextui-org/react"
import { Controller, useForm } from "react-hook-form"
import { FaChevronRight } from "react-icons/fa6"
import * as z from "zod"

export default function CreateProposalForm({
  data,
  updateData,
  goNext,
}: {
  data: IProposal
  updateData: React.Dispatch<React.SetStateAction<any>>
  goNext: () => void
}) {
  const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    summary: z.string().min(1, "Summary is required"),
    content: z.string().min(1, "Content is required"),
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
              label="Title"
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
              label="Summary"
              labelPlacement="outside"
              placeholder="Describe your proposal in 2-3 sentences. This will appear in the proposal overview"
              className="mt-4"
            />
          )}
        />
        <div className="mt-4">
          <label className="pb-1.5 text-sm text-foreground">Content</label>
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
          Next
        </Button>
      </div>
    </form>
  )
}
