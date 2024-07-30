"use client"

import { useState } from "react"
import { UserProfile } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react"
import axios, { AxiosError } from "axios"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import useSWR from "swr"
import * as z from "zod"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export default function SecurityCard() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const { data: fetchedData, mutate } = useSWR("/api/user/me", fetcher)
  const [loading, setLoading] = useState(false)
  const [isOldVisible, setIsOldVisible] = useState<boolean>(false)
  const [isNewVisible, setIsNewVisible] = useState<boolean>(false)

  const formSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
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
    setLoading(true)

    try {
      const res = await axios.put("/api/user/me", data)

      if (res.status === 200) {
        toast.success("Password updated successfully!", {
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

      if ((err.response?.data as any)?.message === "incorrect_password") {
        toast.error("You have entered an incorrect password", {
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

  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-large font-bold">Security</h4>
        <small className="text-default-500">Setup your security settings</small>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full space-y-2"
        >
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Current Password"
                  variant="bordered"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => setIsOldVisible(!isOldVisible)}
                    >
                      {isOldVisible ? (
                        <IoMdEyeOff className="pointer-events-none text-2xl text-default-400" />
                      ) : (
                        <IoMdEye className="pointer-events-none text-2xl text-default-400" />
                      )}
                    </button>
                  }
                  type={isOldVisible ? "text" : "password"}
                  isInvalid={!!errors.password}
                  color={errors.password ? "danger" : "default"}
                  errorMessage={errors.password && errors.password.message}
                  className="w-full"
                />
              )}
            />
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="New Password"
                  variant="bordered"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => setIsNewVisible(!isNewVisible)}
                    >
                      {isNewVisible ? (
                        <IoMdEyeOff className="pointer-events-none text-2xl text-default-400" />
                      ) : (
                        <IoMdEye className="pointer-events-none text-2xl text-default-400" />
                      )}
                    </button>
                  }
                  type={isNewVisible ? "text" : "password"}
                  isInvalid={!!errors.newPassword}
                  color={errors.newPassword ? "danger" : "default"}
                  errorMessage={
                    errors.newPassword && errors.newPassword.message
                  }
                  className="w-full"
                />
              )}
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
              Submit
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
