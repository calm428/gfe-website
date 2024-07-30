"use client"

import Image from "next/image"
import { Button } from "@nextui-org/react"
import { UploadDropzone } from "@uploadthing/react"
import toast from "react-hot-toast"
import { FaRegTrashCan } from "react-icons/fa6"

import { OurFileRouter } from "@/app/api/uploadthing/core"

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

export default function FileUpload({ onChange, value }: ImageUploadProps) {
  const onDeleteFile = () => {
    onChange("")
  }
  const onUpdateFile = (newFiles: any[]) => {
    onChange(newFiles[0].url)
  }
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value !== "" && (
          <div className="relative mx-auto h-[200px] w-[200px] overflow-hidden rounded-md">
            <div className="absolute right-2 top-2 z-10">
              <Button
                type="button"
                color="danger"
                isIconOnly
                onClick={() => onDeleteFile()}
                size="sm"
                aria-label="Delete image"
              >
                <FaRegTrashCan className="size-4" />
              </Button>
            </div>
            <div>
              <Image
                fill
                className="rounded-full border-2 border-dashed border-primary object-cover"
                alt="Image"
                src={value}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        {value === "" && (
          <UploadDropzone<OurFileRouter, any, any>
            className="ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300 py-2"
            endpoint="imageUploader"
            config={{ mode: "auto" }}
            onClientUploadComplete={(res) => {
              const data: any[] | undefined = res
              if (data) {
                onUpdateFile(data)
              }
            }}
            onUploadError={(error: Error) => {
              toast.error(error.message)
            }}
            onUploadBegin={() => {}}
          />
        )}
      </div>
    </div>
  )
}
