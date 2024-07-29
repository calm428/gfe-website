"use server"

import { getServerSession } from "next-auth"

import dbConnect from "../dbConnect"
import { authOptions } from "../lib/authOptions"
import topicModel from "../model/topic.model"
import userModel from "../model/user.model"

export default async function cancelProposalSubmission(topic: string) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return {
        success: false,
        message: "unauthorized",
      }
    }

    await dbConnect()

    const author = await userModel.findOne({ email: session?.user?.email })

    if (!author) {
      return {
        success: false,
        message: "user_not_found",
      }
    }

    if (!topic) {
      return {
        success: false,
        message: "invalid_params",
      }
    }

    const _topic = await topicModel
      .findById(topic)
      .populate("author", "email name")

    if (!_topic) {
      return {
        success: false,
        message: "topic_not_found",
      }
    }

    if (_topic.author._id.toString() !== author._id.toString()) {
      return {
        success: false,
        message: "unauthorized",
      }
    }

    _topic.status = "SUBMISSION_CANCELED"

    await _topic.save()

    return {
      success: true,
      message: "proposal_canceled",
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: "internal_server_error",
    }
  }
}
