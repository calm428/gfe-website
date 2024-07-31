import { getShortNumber } from "@/server/lib/utils"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io"

export type VoteStatisticsProps = {
  vFor: number
  vAgainst: number
  vAbstain: number
}

export default function VoteStatistics({
  vFor,
  vAgainst,
  vAbstain,
}: VoteStatisticsProps) {
  const vTotal = vFor + vAgainst + vAbstain
  const quorum = false
  const majoritySupport = vFor / vTotal >= 0.5

  return (
    <Card className="w-full border" shadow="none" radius="sm">
      <CardHeader className="flex w-full items-start gap-2">
        <p className="text-lg">Final votes</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="my-1 flex justify-between gap-2 text-sm">
          <div className="flex items-center gap-1">
            {quorum ? (
              <IoIosCheckmarkCircle className="size-5 text-primary-500" />
            ) : (
              <IoIosCloseCircle className="size-5 text-default-500" />
            )}
            <span>Quorum</span>
          </div>
          <span>
            {getShortNumber(vFor)} of {getShortNumber(vTotal)}
          </span>
        </div>
        <div className="my-1 flex justify-between gap-2 text-sm">
          <div className="flex items-center gap-1">
            {majoritySupport ? (
              <IoIosCheckmarkCircle className="size-5 text-primary-500" />
            ) : (
              <IoIosCloseCircle className="size-5 text-default-500" />
            )}
            <span>Majority support</span>
          </div>
          <div>{majoritySupport ? "Yes" : "No"}</div>
        </div>
        <div className="my-3 flex h-3 items-center overflow-hidden rounded-full bg-default-500">
          <div
            className="h-full bg-green-500"
            style={{ width: `${(vFor / vTotal) * 100}%` }}
          ></div>
          <div
            className="h-full bg-danger-500"
            style={{ width: `${(vAgainst / vTotal) * 100}%` }}
          ></div>
        </div>
        <div className="my-1 flex justify-between gap-2 text-sm">
          <div className="flex items-center gap-1 text-green-500">
            <div className="size-4 rounded-md bg-green-500"></div>
            <span>For</span>
          </div>
          <span>{getShortNumber(vFor)}</span>
        </div>
        <div className="my-1 flex justify-between gap-2 text-sm">
          <div className="flex items-center gap-1 text-danger-500">
            <div className="size-4 rounded-md bg-danger-500"></div>
            <span>Against</span>
          </div>
          <span>{getShortNumber(vAgainst)}</span>
        </div>
        <div className="my-1 flex justify-between gap-2 text-sm">
          <div className="flex items-center gap-1 text-default-500">
            <div className="size-4 rounded-md bg-default-500"></div>
            <span>Abstain</span>
          </div>
          <span>{getShortNumber(vAbstain)}</span>
        </div>
      </CardBody>
    </Card>
  )
}
