"use client"

import React, { useState } from "react"
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"
import { GrFormEdit } from "react-icons/gr"
import { useTranslations } from "next-intl"

import FileUpload from "../file-upload"

export default function AvatarUploader() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [avatar, setAvatar] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const t = useTranslations("main.platform.setting.avatar")

  const handleAvatarUpload = async () => {
    setIsLoading(true)

    try {
      const res = await axios.put("/api/user/me", {
        avatar,
      })

      if (res.status === 200) {
        toast.success(t("avatar_updated_successfully"), {
          position: "top-right",
        })
      } else {
        toast.error(t("something_went_wrong"), {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error(t("user_not_found"), {
          position: "top-right",
        })
      } else {
        toast.error(t("something_went_wrong"), {
          position: "top-right",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button
        isIconOnly
        color="primary"
        variant="faded"
        aria-label="Take a photo"
        radius="full"
        size="sm"
        onPress={onOpen}
        className="absolute bottom-0 left-8"
      >
        <GrFormEdit className="size-4" />
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("change_avatar")}
              </ModalHeader>
              <ModalBody>
                <FileUpload value={avatar} onChange={setAvatar} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close")}
                </Button>
                <Button
                  color="primary"
                  className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
                  isDisabled={isLoading || avatar === ""}
                  isLoading={isLoading}
                  onPress={handleAvatarUpload}
                >
                  {t("save")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
