import { ProposalStatusType } from "@/types"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  User,
} from "@nextui-org/react"
import dayjs from "dayjs"
import { RxDotFilled } from "react-icons/rx"

import StatusChip from "./status-chip"
import VoteModal from "./vote-modal"

export type ProposalHeaderProps = {
  proposalId: string
  title: string
  status: ProposalStatusType
  user: {
    name: string
    image: string
  }
  createdAt: Date
}

export default function ProposalHeader({
  proposalId,
  title,
  status,
  user,
  createdAt,
}: ProposalHeaderProps) {
  return (
    <Card className="mt-8 w-full border" shadow="none" radius="sm">
      <CardHeader className="flex w-full items-end gap-2">
        <div className="w-full">
          <StatusChip status={status} />
          <p className="text-xl font-semibold sm:text-2xl">{title}</p>
        </div>
        <div className="flex h-full justify-end">
          <VoteModal proposalId={proposalId}>
            <Button
              // color="primary"
              radius="sm"
              // className="ml-auto mt-4 w-fit bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            >
              Vote onchain
            </Button>
          </VoteModal>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex-row items-center justify-start gap-2 text-gray-500">
        <User
          name=""
          description={user.name}
          avatarProps={{
            size: "sm",
            src: user.image,
          }}
        />
        <RxDotFilled />
        <div>
          <span className="text-xs text-gray-500 sm:text-sm">
            Proposed on: {dayjs(createdAt).format("MMM D, YYYY")}
          </span>
        </div>
      </CardBody>
    </Card>
  )
}

ProposalHeader.defaultProps = {
  title:
    "[EP 5.5] Funding Request: ENS Public Goods Working Group Term 5(Q1/Q2)",
  status: "pending_queue",
  user: {
    name: "Oliver Cawson",
    image: "https://avatars.githubusercontent.com/u/30373425?v=4",
  },
  createdAt: new Date(),
}
