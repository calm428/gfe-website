"use server"

import dbConnect from "@/server/dbConnect"
import Replies from "@/server/model/reply.model"
import User from "@/server/model/user.model"
import { getServerSession } from "next-auth"

import { authOptions } from "../lib/authOptions"
import getTopic from "./getTopic"

export default async function replyTopic(
  slug: string,
  content: string,
  replyId?: string
) {
  if (!slug || !content)
    return {
      success: false,
      message: "invalid_params",
    }

  const session = await getServerSession(authOptions)

  if (!session)
    return {
      success: false,
      message: "unauthorized",
    }

  await dbConnect()

  const author = await User.findOne({ email: session?.user?.email })

  if (!author)
    return {
      success: false,
      message: "user_not_found",
    }

  const topic = await getTopic(slug)

  if (!topic)
    return {
      success: false,
      message: "topic_not_found",
    }

  const data: { [key: string]: string } = {
    content,
    author: author._id,
    topic: topic._id,
  }

  if (replyId) {
    const reply = await Replies.findOne({ _id: replyId })

    if (!reply) return { success: false, message: "reply_not_found" }
    else data.parentReply = reply._id
  }

  const reply = await Replies.create(data)

  if (!reply)
    return {
      success: false,
      message: "something_went_wrong",
    }

  if (!replyId) {
    topic.replies += 1
    await topic.save()
  }

  return {
    success: true,
    message: "reply_created_successfully",
    data: {
      id: reply._id.toString(),
      content: reply.content,
      author: reply.author.toString(),
      createdAt: reply.createdAt,
    },
  }
}
