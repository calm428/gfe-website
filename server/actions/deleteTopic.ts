"use server"

import topicModel from "@/server/model/topic.model"
import { getServerSession } from "next-auth"

import dbConnect from "../dbConnect"
import { authOptions } from "../lib/authOptions"
import userModel from "../model/user.model"

export default async function deleteTopic(slug: string) {
  try {
    if (!slug)
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

    const author = await userModel.findOne({ email: session?.user?.email })

    if (!author)
      return {
        success: false,
        message: "user_not_found",
      }

    const topic = await topicModel.findOne({ slug })

    if (!topic)
      return {
        success: false,
        message: "topic_not_found",
      }

    if (author._id.toString() !== topic.author.toString())
      return {
        success: false,
        message: "unauthorized",
      }

    await topicModel.deleteOne({ slug })

    return {
      success: true,
    }
  } catch (error) {
    console.log(error)

    return {
      success: false,
      message: "internal_server_error",
    }
  }
}
