"use server"

import { getServerSession } from "next-auth"

import dbConnect from "../dbConnect"
import { authOptions } from "../lib/authOptions"
import topicModel from "../model/topic.model"
import userModel from "../model/user.model"
import voteModel from "../model/vote.model"

// * this function is to mark as like
// * when user click like button, it will create a new like record
// * if there is already a like record, it will delete it
export default async function markAsLike(slug: string, replyId?: string) {
  try {
    if (!slug) return { success: false, message: "invalid_params" }

    const session = await getServerSession(authOptions)
    if (!session) return { success: false, message: "unauthorized" }

    await dbConnect()

    const user = await userModel.findOne({ email: session?.user?.email })
    if (!user) return { success: false, message: "user_not_found" }

    const topic = await topicModel.findOne({ slug })
    if (!topic) return { success: false, message: "topic_not_found" }

    const like = await voteModel.findOne({
      user: user._id,
      topic: topic._id,
      reply: replyId,
      type: "like",
    })

    if (like) {
      await voteModel.deleteOne({ _id: like._id })

      const likes = await voteModel
        .find({
          topic: topic._id,
          reply: replyId,
          type: "like",
        })
        .countDocuments()

      return { success: true, message: "unlike_success", likes }
    } else {
      await voteModel.create({
        user: user._id,
        topic: topic._id,
        reply: replyId,
        type: "like",
      })

      const likes = await voteModel
        .find({
          topic: topic._id,
          reply: replyId,
          type: "like",
        })
        .countDocuments()

      return { success: true, message: "like_success", likes }
    }
  } catch (error) {
    console.log(error)

    return {
      success: false,
      message: "internal_server_error",
    }
  }
}
