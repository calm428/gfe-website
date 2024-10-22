"use client"

import dynamic from "next/dynamic"
import { Card, CardBody, CardHeader, cn, Divider } from "@nextui-org/react"
// import { Chrono } from "react-chrono"
import dayjs from "dayjs"
import { IconType } from "react-icons"
import { FaPlay, FaRegHourglass, FaRocket, FaStop } from "react-icons/fa6"
import { LuPlus } from "react-icons/lu"
import { MdElectricBolt } from "react-icons/md"
import { useTranslations } from "next-intl"

import "./proposal-status.style.css"

import { useEffect, useState } from "react"

const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
})

const proposalItems = [
  {
    title: "",
    cardTitle: "",
    cardSubtitle: "",
    cardDetailedText: "",
  },
  {
    title: "",
    cardTitle: "",
    cardSubtitle: "",
    cardDetailedText: "",
  },
  {
    title: "",
    cardTitle: "",
    cardSubtitle: "",
    cardDetailedText: "",
  },
  {
    title: "",
    cardTitle: "",
    cardSubtitle: "",
    cardDetailedText: "",
  },
  {
    title: "",
    cardTitle: "",
    cardSubtitle: "",
    cardDetailedText: "",
  },
  {
    title: "",
    cardTitle: "",
    cardSubtitle: "",
    cardDetailedText: "",
  },
]

function StatusIcon({ icon, active }: { icon: IconType; active?: boolean }) {
  const Icon = icon
  return (
    <div
      className={cn("flex size-9 items-center justify-center rounded-full", {
        "border-0 bg-primary-500 text-white": active,
        "border-2 border-default-500 bg-white text-default-500": !active,
      })}
    >
      <Icon />
    </div>
  )
}

export type StatusType = {
  timestamp: Date
  user?: {
    name: string
    avatar: string
  }
}

export type ProposalStatusProps<StatusType> = {
  draft?: StatusType
  published?: StatusType
  votingStarted?: StatusType
  votingEnded?: StatusType
  queue?: StatusType
  execute?: StatusType
}

export default function ProposalStatus({
  draft,
  published,
  votingStarted,
  votingEnded,
  queue,
  execute,
}: ProposalStatusProps<StatusType>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const t = useTranslations("main.platform.dao")

  const statusDescriptions = [
    t("draft_created"),
    t("published_onchain"),
    t("voting_period_started"),
    t("voting_period_ended"),
    t("proposal_queued"),
    t("execute_proposal")
  ]

  const allStatus = [
    draft,
    published,
    votingStarted,
    votingEnded,
    queue,
    execute,
  ]

  const renderCard = (
    status: StatusType | undefined,
    description: string,
    active: boolean = false
  ) => {
    return (
      <div key={description} className="ml-6 mr-auto">
        {status && (
          <span className="text-xs text-gray-500">
            {dayjs(status.timestamp).format("ddd MMM D, hh:mm a")}
          </span>
        )}
        <p className={cn("text-sm font-medium", { "text-primary": active })}>
          {description}
        </p>
        {status?.user && (
          <p className="text-xs text-gray-500">by {status?.user?.name}</p>
        )}
      </div>
    )
  }

  useEffect(() => {
    if (execute) {
      setActiveIndex(5)
    } else if (queue) {
      setActiveIndex(4)
    } else if (votingEnded) {
      setActiveIndex(3)
    } else if (votingStarted) {
      setActiveIndex(2)
    } else if (published) {
      setActiveIndex(1)
    } else if (draft) {
      setActiveIndex(0)
    }
  }, [])

  return (
    <Card className="mt-4 w-full border" shadow="none" radius="sm">
      <CardHeader className="flex w-full items-start gap-2">
        <p className="text-lg">{t("status")}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <Chrono
          items={proposalItems}
          theme={{
            primary: "gray",
            iconBackgroundColor: "transparent",
          }}
          mode="VERTICAL"
          lineWidth={1}
          timelinePointDimension={40}
          hideControls
          enableOutline
          borderLessCards
          allowDynamicUpdate
        >
          <div className="chrono-icons">
            <StatusIcon icon={LuPlus} active={activeIndex >= 0} />
            <StatusIcon icon={FaRocket} active={activeIndex >= 1} />
            <StatusIcon icon={FaPlay} active={activeIndex >= 2} />
            <StatusIcon icon={FaStop} active={activeIndex >= 3} />
            <StatusIcon icon={FaRegHourglass} active={activeIndex >= 4} />
            <StatusIcon icon={MdElectricBolt} active={activeIndex >= 5} />
          </div>
          {allStatus.map((status, index) =>
            renderCard(status, statusDescriptions[index], index <= activeIndex)
          )}
          {/* <div className="ml-6 mr-auto">
            {draft && (
              <span className="text-xs text-gray-500">
                {dayjs(draft.timestamp).format("ddd MMM D, hh:mm a")}
              </span>
            )}
            <p className="text-sm font-medium">Draft created</p>
          </div>
          <div className="ml-6 mr-auto">
            {published && (
              <span className="text-xs text-gray-500">
                {dayjs(published.timestamp).format("ddd MMM D, hh:mm a")}
              </span>
            )}
            <p className="text-sm font-medium">Published onchain</p>
          </div>
          <div className="ml-6 mr-auto">
            {votingStarted && (
              <span className="text-xs text-gray-500">
                {dayjs(votingStarted.timestamp).format("ddd MMM D, hh:mm a")}
              </span>
            )}
            <p className="text-sm font-medium">Voting period started</p>
          </div>
          <div className="ml-6 mr-auto">
            {votingEnded && (
              <span className="text-xs text-gray-500">
                {dayjs(votingEnded.timestamp).format("ddd MMM D, hh:mm a")}
              </span>
            )}
            <p className="text-sm font-medium">Voting period ended</p>
          </div>
          <div className="ml-6 mr-auto">
            {queue && (
              <span className="text-xs text-gray-500">
                {dayjs(queue.timestamp).format("ddd MMM D, hh:mm a")}
              </span>
            )}
            <p className="text-sm font-medium">Proposal queued</p>
          </div>
          <div className="ml-6 mr-auto">
            {execute && (
              <span className="text-xs text-gray-500">
                {dayjs(execute.timestamp).format("ddd MMM D, hh:mm a")}
              </span>
            )}
            <p className="text-sm font-medium">Execute proposal</p>
          </div> */}
        </Chrono>
      </CardBody>
    </Card>
  )
}
