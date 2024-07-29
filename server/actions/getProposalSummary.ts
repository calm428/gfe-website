"use server"

import dbConnect from "../dbConnect"
import proposalModel from "../model/proposal.model"
import topicModel from "../model/topic.model"

export default async function getProposalSummary(topicId: string) {
  try {
    if (!topicId)
      return { success: false, message: "invalid_params", summary: "" }

    await dbConnect()

    const proposal = await proposalModel.findOne({ topic: topicId })

    if (!proposal)
      return { success: false, message: "proposal_not_found", summary: "" }

    return {
      success: true,
      id: proposal._id.toString(),
      summary: proposal.summary,
    }
  } catch (error) {
    console.log(error)
    return { success: false, message: "internal_server_error", summary: "" }
  }
}
