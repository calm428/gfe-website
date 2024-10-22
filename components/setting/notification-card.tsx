"use client"

import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { useTranslations } from "next-intl"

export default function NotificationCard() {
  const t = useTranslations("main.platform.setting.notifications")
  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-large font-bold">{t("title")}</h4>
        <small className="text-default-500">{t("manage")}</small>
      </CardHeader>
      <CardBody>
        <p>{t("coming_soon")}</p>
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full space-y-2"
        >
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  label="First name"
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
                  label="Last name"
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
              label="Email"
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
              Submit
            </Button>
          </div>
        </form> */}
      </CardBody>
    </Card>
  )
}
