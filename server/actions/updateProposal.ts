"use server"

import { getServerSession } from "next-auth"

import dbConnect from "../dbConnect"
import { authOptions } from "../lib/authOptions"
import proposalModel from "../model/proposal.model"
import userModel from "../model/user.model"

export default async function updateProposal(id: string, data: any) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return {
        success: false,
        message: "unauthorized",
      }
    }

    await dbConnect()

    const user = await userModel.findOne({ email: session?.user?.email })

    if (!user) {
      return {
        success: false,
        message: "user_not_found",
      }
    }

    const proposal = await proposalModel
      .findById(id)
      .populate({ path: "topic", select: "author" })

    if (!proposal) {
      return {
        success: false,
        message: "proposal_not_found",
      }
    }

    if (proposal.topic.author._id.toString() !== user._id.toString()) {
      return {
        success: false,
        message: "unauthorized",
      }
    }

    await proposalModel.findByIdAndUpdate(id, data)

    return {
      success: true,
    }
  } catch (error) {
    console.log(error)

    return {
      success: false,
    }
  }
}
