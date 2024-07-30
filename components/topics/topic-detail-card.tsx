import Link from "next/link"
import getProposalSummary from "@/server/actions/getProposalSummary"
import { authOptions } from "@/server/lib/authOptions"
import { Avatar, Button } from "@nextui-org/react"
import dayjs from "dayjs"
import { getServerSession } from "next-auth"
import { BiSolidEdit } from "react-icons/bi"
import { BsReplyFill, BsSendFill, BsTrash3Fill } from "react-icons/bs"
import { CgPushUp } from "react-icons/cg"
import { MdCancelScheduleSend } from "react-icons/md"

import CancelSubmissionConfirmModal from "./cancel-submission-confirm-modal"
import DeleteTopicConfirmModal from "./delete-topic-confirm-modal"
import SubmitTopicModal from "./submit-topic-modal"
import TopicLikeButton from "./topic-like-button"
import TopicPublishModal from "./topic-publish-modal"
import TopicReplyModal from "./topic-reply-modal"

export default async function TopicDetailCard({ topic }: { topic: any }) {
  const session = await getServerSession(authOptions)
  const { success, id, summary } = await getProposalSummary(topic?._id || "")

  return (
    <div>
      <div className="relative flex gap-2 pt-2">
        <Avatar
          as="button"
          className="sticky top-24 size-12 min-h-12 min-w-12 transition-transform"
          src={topic?.author?.image}
          name={topic?.author?.name}
        />
        <div
          className="prose mt-4"
          dangerouslySetInnerHTML={{ __html: topic?.content || "" }}
        />
        <span className="absolute right-0 top-0 text-sm text-gray-500">
          {dayjs(topic?.createdAt || "").format("MMM D, YYYY")}
        </span>
      </div>
      <div className="my-4 flex w-full justify-end gap-1">
        {/**
         * // TODO: add like and dislike button here
         */}
        <TopicLikeButton
          slug={topic?.slug}
          likes={topic?.likes}
          authenticated={!!session}
        />
        {/**
         * // * There is already a page to edit topic, just redirect to it
         */}
        {topic.author._id.toString() === (session?.user as any)?.id && (
          <Button isIconOnly variant="light" color="primary">
            <Link href="/forum/topic/edit/[slug]" as={`/forum/topic/edit/${topic?.slug}`}>
              <BiSolidEdit className="size-5" />
            </Link>
          </Button>
        )}

        {/**
         * // TODO: implement delete topic logic
         * */}
        {topic.author._id.toString() === (session?.user as any)?.id && (
          <DeleteTopicConfirmModal slug={topic?.slug}>
            <Button isIconOnly variant="light" color="danger">
              <BsTrash3Fill className="size-5" />
            </Button>
          </DeleteTopicConfirmModal>
        )}

        {/**
         * // * If the user is the owner of this proposal and proposal meets the requirements of submission, display a "Submit" button
         * // * After submission, display a "Cancel" button
         * // * If the admin review and approve the proposal, display a "Publish" button
         * // * If the admin review and reject the proposal, display nothing
         * // * Otherwise, it will show a "Reply" button in case of authorized users
         */}
        {session &&
          (topic.author._id.toString() === (session?.user as any)?.id ? (
            topic.status === "DRAFT" ? (
              <SubmitTopicModal topic={topic}>
                <Button
                  color="primary"
                  variant="light"
                  startContent={<BsSendFill />}
                >
                  Submit
                </Button>
              </SubmitTopicModal>
            ) : topic.status === "SUBMISSION" ? (
              <CancelSubmissionConfirmModal id={topic._id}>
                <Button
                  color="danger"
                  variant="light"
                  startContent={<MdCancelScheduleSend />}
                >
                  Cancel
                </Button>
              </CancelSubmissionConfirmModal>
            ) : topic.status === "SUBMISSION_APPROVED" ? (
              <TopicPublishModal
                id={id}
                data={JSON.stringify({
                  id,
                  title: topic.title,
                  summary: summary,
                })}
              >
                <Button
                  color="primary"
                  variant="light"
                  startContent={<CgPushUp />}
                >
                  Publish
                </Button>
              </TopicPublishModal>
            ) : topic.status === "SUBMISSION_CANCELED" ? (
              <SubmitTopicModal topic={topic}>
                <Button
                  color="primary"
                  variant="light"
                  startContent={<BsSendFill />}
                >
                  Submit
                </Button>
              </SubmitTopicModal>
            ) : null
          ) : (
            <TopicReplyModal slug={topic?.slug}>
              <Button
                variant="light"
                color="primary"
                startContent={<BsReplyFill className="size-5" />}
              >
                Reply
              </Button>
            </TopicReplyModal>
          ))}
      </div>
    </div>
  )
}
