"use server"

import dbConnect from "@/server/dbConnect"
import Replies from "@/server/model/reply.model"
import User from "@/server/model/user.model"
import { getServerSession } from "next-auth"

import { authOptions } from "../lib/authOptions"

export default async function editReply(id: string, content: string) {
  try {
    if (!id || !content)
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

    const reply = await Replies.findById(id)

    if (!reply) return { success: false, message: "reply_not_found" }

    if (author._id.toString() !== reply.author.toString())
      return {
        success: false,
        message: "unauthorized",
      }

    reply.content = content

    await reply.save()

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
