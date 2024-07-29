"use client"

import React, { ReactElement, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"

export default function ConfirmModal({
  children,
  title,
  description,
  onConfirm,
}: {
  children: React.ReactNode
  title: string
  description: string
  onConfirm: () => void
}) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const enhancedChild = React.cloneElement(children as ReactElement, {
    onPress: onOpen,
  })

  const handleConfirm = async () => {
    setLoading(true)

    await onConfirm()

    setLoading(false)
  }

  return (
    <>
      {enhancedChild}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  disabled={loading}
                  isLoading={loading}
                  onPress={handleConfirm}
                >
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
