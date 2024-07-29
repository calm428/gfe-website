import { authOptions } from "@/server/lib/authOptions"
import { Avatar, Button, Divider } from "@nextui-org/react"
import dayjs from "dayjs"
import { getServerSession } from "next-auth"
import { BiSolidEdit } from "react-icons/bi"
import { BsReplyFill, BsTrash3Fill } from "react-icons/bs"

import TopicReplyModal from "@/components/topics/topic-reply-modal"

import CollapsibleReplyGroup from "./collapsible-reply-group"
import DeleteReplyConfirmModal from "./delete-reply-confirm-modal"
import ReplyEditModal from "./reply-edit-modal"

// Assuming `replies` is the prop passed to the component that includes top-level replies
async function ReplyComponent({ reply, slug }: { reply: any; slug: string }) {
  const session = await getServerSession(authOptions)

  return (
    <div key={reply._id.toString()} className="relative">
      <Divider className="my-2" />
      <div className="relative flex gap-2">
        <Avatar
          as="button"
          className="sticky top-24 size-12 min-h-12 min-w-12 transition-transform"
          src={reply?.author?.image}
          name={reply?.author?.name}
        />
        <div
          className="prose mt-4 overflow-auto"
          dangerouslySetInnerHTML={{ __html: reply?.content || "" }}
        />
        <span className="absolute right-2 top-0 text-sm text-gray-500">
          {dayjs(reply?.createdAt || "").format("MMM D, YYYY")}
        </span>
      </div>
      <div className="relative my-2">
        {/**
         * // * If there are child replies, render them recursively
         */}
        {reply?.childReplies && reply.childReplies.length > 0 ? (
          <CollapsibleReplyGroup
            title={`${reply?.childReplies?.length} replies`}
          >
            <div className="ml-8">
              {reply.childReplies?.map((childReply: any) => (
                <ReplyComponent
                  key={childReply._id.toString()}
                  reply={childReply}
                  slug={slug}
                />
              ))}
            </div>
          </CollapsibleReplyGroup>
        ) : (
          // * Add empty div to keep the reply card height
          <div className="h-10 w-full"></div>
        )}

        <div className="absolute right-0 top-0 flex w-fit justify-end gap-2">
          {reply.author._id.toString() === (session?.user as any)?.id && (
            <ReplyEditModal id={reply._id.toString()} content={reply.content}>
              <Button isIconOnly variant="light" color="primary">
                <BiSolidEdit className="size-5" />
              </Button>
            </ReplyEditModal>
          )}
          {reply.author._id.toString() === (session?.user as any)?.id && (
            <DeleteReplyConfirmModal id={reply._id.toString()}>
              <Button isIconOnly variant="light" color="danger">
                <BsTrash3Fill className="size-5" />
              </Button>
            </DeleteReplyConfirmModal>
          )}
          {session && (
            <TopicReplyModal slug={slug} replyId={reply._id.toString()}>
              <Button
                variant="light"
                color="primary"
                startContent={<BsReplyFill className="size-5" />}
              >
                Reply
              </Button>
            </TopicReplyModal>
          )}
        </div>
      </div>
    </div>
  )
}

// To render at top level, mapping through top-level replies
function RepliesComponent({ replies, slug }: { replies: any; slug: string }) {
  return (
    <div>
      {replies?.map((reply: any) => (
        <ReplyComponent key={reply._id.toString()} reply={reply} slug={slug} />
      ))}
    </div>
  )
}

export default RepliesComponent
