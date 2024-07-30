import getReplies from "@/server/actions/getReplies"
import getTopic from "@/server/actions/getTopic"
import markAsViewTopic from "@/server/actions/markAsViewTopic"
import { authOptions } from "@/server/lib/authOptions"
import { processHeadingsInHtml } from "@/server/lib/utils"
import { Divider } from "@nextui-org/react"
import { getServerSession } from "next-auth"

import TopicDetailCard from "@/components/topics/topic-detail-card"
import RepliesComponent from "@/components/topics/topic-reply-card"
import TopicSidebar from "@/components/topics/topic-sidebar"
import TopicSummaryCard from "@/components/topics/topic-summary-card"
import TopicTags from "@/components/topics/topic-tags"

export default async function TopicDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const session = await getServerSession(authOptions)
  const topic = await getTopic(decodeURIComponent(params.slug))
  const replies = await getReplies(decodeURIComponent(params.slug))
  const { headings } = processHeadingsInHtml(topic?.content || "")

  await markAsViewTopic(decodeURIComponent(params.slug))

  return topic ? (
    <div className="w-full px-2 py-4 lg:w-[calc(100%-250px-2rem)]">
      <p className="mx-auto bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-left text-xl font-semibold tracking-wider text-transparent sm:text-3xl">
        {topic?.title}
      </p>
      <TopicTags topic={topic} />
      <Divider className="my-2 w-full md:w-[calc(100%-180px)]" />
      <div className="flex w-full items-start gap-4">
        <div className="w-full md:w-[calc(100%-180px)]">
          <TopicDetailCard topic={topic} />
          <TopicSummaryCard topic={topic} replies={replies} />
          <RepliesComponent replies={replies} slug={params.slug} />
        </div>
        <TopicSidebar headings={headings} />
      </div>
    </div>
  ) : (
    <div>Topic not found</div>
  )
}
