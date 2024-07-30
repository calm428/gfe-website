import getTopic from "@/server/actions/getTopic"
import { authOptions } from "@/server/lib/authOptions"
import { getServerSession } from "next-auth"

import TopicEditForm from "@/components/topics/topic-edit-form"

export default async function TopicEditPage({
  params,
}: {
  params: { slug: string }
}) {
  const session = await getServerSession(authOptions)
  const topic = await getTopic(params.slug)

  return topic &&
    topic?.author?._id?.toString() === (session?.user as any)?.id ? (
    <TopicEditForm
      topic={{
        title: topic?.title,
        content: topic?.content,
        slug: params.slug,
        category: {
          value: topic?.category._id.toString() || "",
          label: topic?.category.name || "",
        },
        tags: topic?.tags?.map((tag: any) => ({
          value: tag._id.toString() || "",
          label: tag.name || "",
        })),
      }}
    />
  ) : (
    <div>Topic not found</div>
  )
}
