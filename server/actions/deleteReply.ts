"use server"

import { getServerSession } from "next-auth"

import dbConnect from "../dbConnect"
import { authOptions } from "../lib/authOptions"
import replyModel from "../model/reply.model"
import userModel from "../model/user.model"

export default async function deleteReply(id: string) {
  // TODO: Implement delete reply
  try {
    if (!id) {
      return {
        success: false,
        message: "invalid_params",
      }
    }

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

    const reply = await replyModel.findById(id)

    if (!reply) {
      return {
        success: false,
        message: "reply_not_found",
      }
    }

    if (reply.author.toString() !== author._id.toString()) {
      return {
        success: false,
        message: "unauthorized",
      }
    }

    await replyModel.findByIdAndDelete(id)

    return {
      success: true,
      message: "reply_deleted",
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: "internal_server_error",
    }
  }
}
