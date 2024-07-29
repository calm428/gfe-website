import { useState } from "react"
import createProposal from "@/server/actions/createProposal"
import { IProposal } from "@/types"
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { BsSendFill } from "react-icons/bs"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export default function ProposalSummary({
  data,
  goPrev,
  onSubmit,
}: {
  data: IProposal
  goPrev: () => void
  onSubmit: () => void
}) {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async () => {
    setLoading(true)

    await onSubmit()

    setLoading(false)
  }

  return (
    <div className="mt-4">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <div>
          <p className="text-md font-semibold">Title</p>
          <p className="text-sm">{data.title}</p>
        </div>
        <div>
          <p className="text-md font-semibold">Summary</p>
          <p className="text-sm">{data.summary}</p>
        </div>
        <div>
          <p className="text-md font-semibold">Content</p>
          <div
            className="prose max-h-[25vh] overflow-auto rounded-medium bg-default-100 px-3 py-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </div>
        {data.actions.length > 0 && (
          <div>
            <p className="text-md font-semibold">Actions</p>
            <>
              {data.actions.map((action, index) => (
                <Card
                  key={index}
                  shadow="none"
                  className="mx-auto w-full max-w-3xl border"
                >
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                      <p className="text-md font-medium">Withdraw assets</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="flex justify-between">
                      <p className="line-clamp-1 gap-4">{action.recipient}</p>
                      <p className="whitespace-nowrap">{action.amount} GFE</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </>
          </div>
        )}
      </div>
      <div className="mb-4 mt-8 flex w-full justify-between">
        <Button
          color="default"
          variant="flat"
          disabled={loading}
          startContent={<FaChevronLeft />}
          onClick={goPrev}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="flat"
          startContent={!loading && <BsSendFill />}
          isLoading={loading}
          disabled={loading}
          className="ml-auto"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
