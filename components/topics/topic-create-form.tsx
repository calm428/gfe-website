"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { IOption } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "@nextui-org/react"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { FaTag, FaTags } from "react-icons/fa6"
import { LuSend } from "react-icons/lu"
import { MdCategory } from "react-icons/md"
import Select, {
  components,
  MultiValueGenericProps,
  OptionProps,
  SingleValueProps,
} from "react-select"
import makeAnimated from "react-select/animated"
import CreatableSelect from "react-select/creatable"
import useSWR from "swr"
import { z } from "zod"

import "react-quill/dist/quill.bubble.css"

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false

const SingleValue = ({ children, ...props }: SingleValueProps<IOption>) => (
  <components.SingleValue {...props}>
    <MdCategory className="mr-2 inline-block size-4" />
    {children}
  </components.SingleValue>
)

const TOption = (props: OptionProps<IOption>) => {
  return (
    <components.Option {...props}>
      <FaTags className="mr-2 inline-block size-4 text-primary-600" />
      <span>{props.data.label}</span>
    </components.Option>
  )
}

const COption = (props: OptionProps<IOption>) => {
  return (
    <components.Option {...props}>
      <MdCategory className="mr-2 inline-block size-4 text-primary-600" />
      <span>{props.data.label}</span>
    </components.Option>
  )
}

const MultiValueLabel = (props: MultiValueGenericProps<IOption>) => {
  return (
    <components.MultiValueLabel {...props}>
      <FaTag className="mr-2 inline-block size-3" />
      <span>{props.data.label}</span>
    </components.MultiValueLabel>
  )
}

const animatedComponents = makeAnimated()

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

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function TopicCreateForm() {
  const router = useRouter()
  const [categoryOptions, setCategoryOptions] = useState<IOption[]>([])
  const [tagOptions, setTagOptions] = useState<IOption[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z
      .string()
      .refine((value) => value.replace(/<[^>]*>?/gm, "").trim(), {
        message: "You must input your content here",
      }),
    category: z
      .object({ value: z.string(), label: z.string() })
      .refine((value) => value !== null, {
        message: "You must select a category",
      }),
    tags: z.array(z.object({ value: z.string(), label: z.string() })).min(1, {
      message: "You must select at least one tag",
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

  const {
    data: fetchedTagsData,
    isLoading: fetchedTagsLoading,
    error: fetchedTagsError,
  } = useSWR("/api/tags/get", fetcher)
  const {
    data: fetchedCategoriesData,
    isLoading: fetchedCategoriesLoading,
    error: fetchedCategoriesError,
  } = useSWR("/api/categories/get", fetcher)

  const onSubmit = async (data: UserFormValue) => {
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/topics/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          category: data.category?.label,
          tags: data.tags.map((tag) => tag.label),
        }),
      })

      if (res.ok) {
        toast.success("Topic created successfully", {
          position: "top-right",
        })

        const data = await res.json()
        router.push(`/topics/${data.slug}`)
      } else {
        toast.error("Failed to create topic", {
          position: "top-right",
        })
      }
    } catch (error) {
      toast.error("Failed to create topic", {
        position: "top-right",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (fetchedCategoriesData) {
      const _categories = fetchedCategoriesData.map((category: any) => ({
        value: category._id,
        label: category.name,
      }))

      setCategoryOptions([..._categories])
    }
  }, [fetchedCategoriesData])

  useEffect(() => {
    if (fetchedTagsData) {
      const _tags = fetchedTagsData.map((tag: any) => ({
        value: tag._id,
        label: tag.name,
      }))

      setTagOptions([..._tags])
    }
  }, [fetchedTagsData])

  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full space-y-2"
      >
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <div className="flex w-full flex-col">
              <Input
                {...field}
                placeholder="Title"
                variant="flat"
                size="lg"
                classNames={{
                  inputWrapper: "!bg-white shadow-none",
                  input: "text-xl",
                }}
                className="w-full"
              />
              {errors.title && (
                <span className="px-4 text-xs text-red-500">
                  {errors.title.message}
                </span>
              )}
            </div>
          )}
        />
        <div className="my-2 flex items-center gap-2 px-2">
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <div className="flex w-full flex-col">
                <Select
                  {...field}
                  className="w-full"
                  components={{
                    ...animatedComponents,
                    Option: COption,
                    SingleValue,
                  }}
                  classNames={{
                    control: () => "w-full !border-none !outline-none !ring-0",
                  }}
                  isLoading={fetchedCategoriesLoading}
                  isSearchable
                  placeholder="Select category"
                  options={categoryOptions}
                />
                {errors.category && (
                  <span className="px-2 text-xs text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="my-2 flex items-center gap-2 px-2">
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <div className="flex w-full flex-col">
                <CreatableSelect
                  {...field}
                  className="w-full"
                  classNames={{
                    control: () => "w-full !border-none !outline-none !ring-0",
                  }}
                  components={{
                    ...animatedComponents,
                    Option: TOption,
                    MultiValueLabel,
                  }}
                  isLoading={fetchedTagsLoading}
                  isMulti
                  isClearable
                  isSearchable
                  placeholder="Select tags"
                  options={tagOptions}
                />
                {errors.tags && (
                  <span className="px-2 text-xs text-red-500">
                    {errors.tags.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
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
                placeholder="Type your content here..."
                style={{ minHeight: "calc(100vh - 21rem)" }}
              />
              {errors.content && (
                <span className="px-2 text-xs text-red-500">
                  {errors.content.message}
                </span>
              )}
            </div>
          )}
        />
        <div className="flex w-full justify-end">
          <Button
            color="primary"
            radius="sm"
            type="submit"
            className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            isLoading={isSubmitting}
            disabled={isSubmitting}
            startContent={!isSubmitting ? <LuSend className="size-4" /> : null}
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  )
}
