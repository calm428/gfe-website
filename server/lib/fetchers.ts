"use server"

import { unstable_cache } from "next/cache"

import dbConnect from "../dbConnect"
import proposalModel from "../model/proposal.model"
import proposalVoteModel from "../model/proposalVote.model"
import topicModel from "../model/topic.model"
import userModel from "../model/user.model"

export async function getProposal(slug: string) {
  return await unstable_cache(
    async () => {
      try {
        await dbConnect()

        const topic = await topicModel.findOne({ slug })

        const proposalDoc = await proposalModel
          .findOne({ topic: topic?._id })
          .populate({
            path: "topic",
            select: "title content status",
            populate: {
              path: "author",
              model: userModel,
              select: "name image",
            },
          })
          .exec()

        if (!proposalDoc) throw Error("proposal not found")

        const proposal = proposalDoc.toObject()

        const voteFor = await proposalVoteModel.countDocuments({
          proposalId: proposal.proposalId,
          type: 1,
        })
        const voteAgainst = await proposalVoteModel.countDocuments({
          proposalId: proposal.proposalId,
          type: 2,
        })
        const voteAbstain = await proposalVoteModel.countDocuments({
          proposalId: proposal.proposalId,
          type: 0,
        })

        proposal.votes = {
          vFor: voteFor,
          vAgainst: voteAgainst,
          vAbstain: voteAbstain,
        }

        return {
          proposal,
        }
      } catch (error) {
        console.log(error)

        return {
          error: "internal_server_error",
        }
      }
    },
    [`${slug}-metadata`],
    {
      revalidate: 900,
      tags: [`${slug}-metadata`],
    }
  )()
}
