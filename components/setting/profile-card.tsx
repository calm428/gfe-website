"use client"

import { useEffect, useState } from "react"
import { UserProfile } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  User,
} from "@nextui-org/react"
import axios, { AxiosError } from "axios"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import useSWR from "swr"
import * as z from "zod"
import { useTranslations } from "next-intl"

import AvatarUploader from "./avatar-uploader"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export default function ProfileCard() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const { data: fetchedData, mutate } = useSWR("/api/user/me", fetcher)
  const [loading, setLoading] = useState(false)
  const t = useTranslations("main.platform.setting.profile")

  const formSchema = z.object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .regex(/^\p{Letter}*$/u, "Only alphabets are allowed and no spaces"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .regex(/^\p{Letter}*$/u, "Only alphabets are allowed and no spaces"),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: UserFormValue) => {
    setLoading(true)

    try {
      const res = await axios.put("/api/user/me", data)

      if (res.status === 200) {
        toast.success("Profile updated successfully!", {
          position: "top-right",
        })

        mutate()
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error("User not found", {
          position: "top-right",
        })
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (fetchedData) {
      setValue("firstName", fetchedData.name.split(" ")[0])
      setValue("lastName", fetchedData.name.split(" ")[1])
      setUser(fetchedData)
    }
  }, [fetchedData])

  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-large font-bold">{t("my_profile")}</h4>
        <small className="text-default-500">
          {t("setup")}
        </small>
      </CardHeader>
      <CardBody>
        <div className="relative w-fit">
          <User
            name={user?.name || ""}
            description={user?.email || ""}
            avatarProps={{
              src: user?.image || "",
              size: "lg",
            }}
          />
          <AvatarUploader />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full space-y-2"
        >
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  label={t("firstname")}
                  variant="bordered"
                  isInvalid={!!errors.firstName}
                  color={errors.firstName ? "danger" : "default"}
                  errorMessage={errors.firstName && errors.firstName.message}
                  labelPlacement="outside"
                  {...field}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  label={t("lastname")}
                  variant="bordered"
                  isInvalid={!!errors.lastName}
                  color={errors.lastName ? "danger" : "default"}
                  errorMessage={errors.lastName && errors.lastName.message}
                  labelPlacement="outside"
                  {...field}
                />
              )}
            />
            <Input
              type="email"
              label={t("email")}
              variant="bordered"
              isDisabled
              labelPlacement="outside"
              value={user?.email || ""}
            />
          </div>
          <div className="flex w-full justify-end">
            <Button
              type="submit"
              color="primary"
              radius="sm"
              isDisabled={loading}
              isLoading={loading}
              className="ml-auto mt-4 w-fit bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            >
              {t("submit")}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
