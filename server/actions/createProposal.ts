"use server"

import { getServerSession } from "next-auth"

import dbConnect from "../dbConnect"
import { authOptions } from "../lib/authOptions"
import sendmail from "../lib/sendmail"
import proposalModel from "../model/proposal.model"
import topicModel from "../model/topic.model"

export default async function createProposal(
  topic: string,
  summary: string,
  actions: any
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return {
        success: false,
        message: "unauthorized",
      }
    }

    await dbConnect()

    if (!topic || !summary || !actions) {
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

    const proposal = await proposalModel.create({
      topic: _topic._id,
      summary,
      actions,
    })

    _topic.status = "SUBMISSION"

    await _topic.save()

    sendmail(_topic.author.email, "PROPOSAL_SUBMISSION", {
      name: _topic.author.name,
      title: _topic.title,
      link: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/topics/${_topic.slug}`,
    })

    return {
      success: true,
      message: "proposal_created",
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: "internal_server_error",
    }
  }
}
