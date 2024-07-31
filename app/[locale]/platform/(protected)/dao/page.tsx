"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getShortNumber } from "@/server/lib/utils"
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Progress,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react"
import { useAsyncList } from "@react-stately/data"
import axios from "axios"
import dayjs from "dayjs"
import { useInView } from "react-intersection-observer"

import StatusChip from "@/components/dao/status-chip"

export default function DAOPage() {
  const router = useRouter()
  const [hasMore, setHasMore] = useState(true)
  const { ref: loaderRef, inView } = useInView()

  const limit = 20

  let list = useAsyncList({
    async load({ signal, cursor }: { signal: AbortSignal; cursor?: string }) {
      const res = await fetch(cursor || `/api/proposals/get?limit=${limit}`, {
        signal,
      })
      let json = await res.json()

      console.log(json)

      setHasMore(json.next !== null)

      return {
        items: json.proposals,
        cursor: json.next || undefined,
      }
    },
  })

  useEffect(() => {
    inView && list.loadMore()
  }, [inView])

  return (
    <div>
      <div className="container mx-auto max-w-7xl">
        <h1 className="w-fit bg-gradient-to-t from-[#1A88F9] to-[#76c8ff] bg-clip-text text-3xl font-semibold text-transparent">
          DAO
        </h1>
        <Card className="mt-8 w-full border p-4" shadow="none" radius="sm">
          <CardHeader className="flex items-start gap-2 text-left">
            <p className="font-semibold">Proposals</p>
          </CardHeader>
          <CardBody>
            <Table
              removeWrapper
              aria-label="Example static collection table"
              bottomContent={
                hasMore ? (
                  <div className="flex w-full justify-center">
                    <Spinner ref={loaderRef} color="primary" />
                  </div>
                ) : null
              }
            >
              <TableHeader>
                <TableColumn>Proposal</TableColumn>
                <TableColumn className="hidden md:table-cell">
                  Votes for
                </TableColumn>
                <TableColumn className="hidden md:table-cell">
                  Votes against
                </TableColumn>
                <TableColumn className="hidden sm:table-cell">
                  Total votes
                </TableColumn>
              </TableHeader>
              <TableBody items={list.items}>
                {(item: any) => (
                  <TableRow
                    key={item.id}
                    className="cursor-pointer rounded-md border-b hover:bg-primary-300/20"
                    onClick={() => {
                      router.push(`/platform/dao/${item.topic.slug}`)
                    }}
                  >
                    <TableCell className="w-full">
                      <p className="line-clamp-1 text-sm font-medium sm:text-base">
                        {item.topic.title}
                      </p>
                      <div>
                        <StatusChip status={item.topic.status} />
                        <span className="ml-3">
                          {dayjs(item.publishedAt).format("ddd MMM D, hh:mm a")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Progress
                        color="success"
                        size="sm"
                        label={getShortNumber(item.votes.voteFor)}
                        value={
                          (item.votes.voteFor / item.votes.totalVotes) * 100
                        }
                        className="w-20 min-w-20 max-w-20"
                        classNames={{
                          label: "text-green-500 font-medium",
                        }}
                      />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Progress
                        color="danger"
                        size="sm"
                        label={getShortNumber(item.votes.voteAgainst)}
                        value={
                          (item.votes.voteAgainst / item.votes.totalVotes) * 100
                        }
                        className="w-20 min-w-20 max-w-20"
                        classNames={{
                          label: "text-danger font-medium",
                        }}
                      />
                    </TableCell>
                    <TableCell className="hidden whitespace-nowrap text-right sm:table-cell">
                      <p className="font-medium">
                        {getShortNumber(item.votes.totalVotes)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.votes.voteAddresses} addresses
                      </p>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
