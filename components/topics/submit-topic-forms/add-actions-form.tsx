"use client"

import React, { useState } from "react"
import { IProposal } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Listbox,
  ListboxItem,
  ListboxSection,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react"
import { Controller, useForm } from "react-hook-form"
import { BiReset } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa6"
import { IoMdTrash } from "react-icons/io"
import { SiGithubactions } from "react-icons/si"
import * as z from "zod"

function AddActionButton({
  onCreate,
}: {
  onCreate: (type: "WITHDRAW" | "MINT") => void
}) {
  return (
    <Card shadow="none" className="mx-auto mt-8 max-w-3xl border">
      <CardBody className="p-6">
        <SiGithubactions className="mx-auto my-12 text-6xl text-primary" />
        <p className="text-center text-3xl font-medium">Add action</p>
        <p className="text-center text-sm text-gray-500">
          This action will execute if the vote passes. A common automatic action
          is transferring funds to a guild or person if their proposal passes a
          vote
        </p>
        <Popover showArrow offset={10} placement="bottom" backdrop="opaque">
          <PopoverTrigger>
            <Button
              color="default"
              variant="flat"
              className="mx-auto mt-4 w-fit capitalize"
              startContent={<FaPlus />}
            >
              Add action
            </Button>
          </PopoverTrigger>
          <PopoverContent className="">
            {(titleProps) => (
              <div className="w-full px-1 py-2">
                <p
                  className="text-small font-bold text-foreground"
                  {...titleProps}
                >
                  Actions
                </p>
                <Listbox
                  variant="flat"
                  aria-label="Listbox menu with sections"
                  onAction={(key) =>
                    onCreate(
                      key.toString().toUpperCase() as "WITHDRAW" | "MINT"
                    )
                  }
                >
                  <ListboxSection>
                    <ListboxItem
                      key="withdraw"
                      description="Create a proposal to withdraw assets to a wallet."
                      // startContent={<BiMoneyWithdraw />}
                      endContent={<FaChevronRight className="text-gray-500" />}
                    >
                      Withdraw assets
                    </ListboxItem>
                    <ListboxItem
                      key="mint"
                      description="Mint more DAO tokens and distribute to
                                    wallets"
                      // startContent={<GiMining />}
                      endContent={<FaChevronRight className="text-gray-500" />}
                    >
                      Mint tokens
                    </ListboxItem>
                  </ListboxSection>
                </Listbox>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </CardBody>
    </Card>
  )
}

export default function AddActionsForm({
  data,
  updateData,
  goPrev,
  goNext,
}: {
  data: IProposal
  updateData: React.Dispatch<React.SetStateAction<any>>
  goPrev: () => void
  goNext: () => void
}) {
  const [actions, setActions] = useState<string[]>(
    data.actions.map((action) => action.type)
  )
  const formSchema = z.object({
    actions: z
      .array(
        z.object({
          type: z.string().min(1, "Type is required"),
          recipient: z.string().min(1, "Recipient's address is required"),
          amount: z.number().gt(0, "Amount must be greater than 0"),
        })
      )
      .optional(),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      actions: data.actions,
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

  const createEmptyAction = (type: "WITHDRAW" | "MINT") => {
    const currentActions = getValues("actions") || []
    setValue("actions", [
      ...currentActions,
      {
        type: "WITHDRAW",
        recipient: "",
        amount: 0,
      },
    ])

    setActions((actions) => [...actions, type])
  }

  const removeAction = (index: number) => {
    const currentActions = getValues("actions") || []
    setValue(
      "actions",
      currentActions.filter((_, i) => i !== index)
    )

    setActions((actions) => actions.filter((_, i) => i !== index))
  }

  const resetAction = (index: number) => {
    setValue(`actions.${index}`, {
      type: "WITHDRAW",
      recipient: "",
      amount: 0,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="mx-auto w-full max-w-4xl">
        {actions.length === 0 && (
          <AddActionButton onCreate={createEmptyAction} />
        )}
        {actions.map((action, index) => (
          <Card shadow="none" className="mx-auto mt-8 w-full max-w-3xl border">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md font-medium">Withdraw assets</p>
                <p className="text-xs text-default-500">
                  Withdraw assets from the DAO teasury
                </p>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="light"
                    isIconOnly
                    className="ml-auto rounded-full"
                  >
                    <BsThreeDotsVertical />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  variant="faded"
                  aria-label="Dropdown menu with icons"
                >
                  <DropdownItem
                    key="new"
                    startContent={<BiReset />}
                    onClick={() => resetAction(index)}
                  >
                    Reset Action
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    startContent={<IoMdTrash />}
                    onClick={() => removeAction(index)}
                  >
                    Remove Action
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>
            <Divider />
            <CardBody>
              <Controller
                name={`actions.${index}.recipient`}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    color={
                      errors.actions?.[index]?.recipient ? "danger" : "default"
                    }
                    label="Recipient"
                    labelPlacement="outside"
                    placeholder="Type wallet address or ENS ..."
                    description="The wallet that receives the tokens"
                  />
                )}
              />
              <Controller
                name={`actions.${index}.amount`}
                control={control}
                render={({ field }) => (
                  <Input
                    value={field.value.toString()} // Convert value to string
                    onChange={(e) =>
                      field.onChange(Number(e.target.value || 0))
                    }
                    type="number"
                    color={
                      errors.actions?.[index]?.amount ? "danger" : "default"
                    }
                    label="Amount"
                    labelPlacement="outside"
                    placeholder="0"
                    description="Amount is calculated in number of tokens, not dollar value"
                    className="!mt-8"
                  />
                )}
              />
            </CardBody>
            <Divider />
          </Card>
        ))}
      </div>
      <div className="mb-4 mt-8 flex w-full justify-between">
        <Button
          color="default"
          variant="flat"
          startContent={<FaChevronLeft />}
          onClick={goPrev}
        >
          Back
        </Button>
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
