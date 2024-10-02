import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import proposalModel from "@/server/model/proposal.model"
import proposalVoteModel from "@/server/model/proposalVote.model"
import topicModel from "@/server/model/topic.model"
import userModel from "@/server/model/user.model"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  
  try {
    await dbConnect()

    const skip = Number(searchParams.get("skip") || 0)
    const limit = Number(searchParams.get("limit") || 10)

    const proposals = await proposalModel
      .find({ proposalId: { $ne: null } }) // find proposals that proposalId is not null
      .skip(skip)
      .limit(limit)
      .populate({
        path: "topic",
        model: topicModel,
        select: "title slug content status",
        populate: {
          path: "author",
          model: userModel,
          select: "name image",
        },
      })
      .exec()

    for (let i = 0; i < proposals.length; i++) {
      const voteFor = await proposalVoteModel
        .aggregate([
          {
            $match: {
              proposalId: proposals[i].proposalId,
              type: 1, // Match documents with type === 1
            },
          },
          {
            $group: {
              _id: null, // Grouping without specifying a field, so it aggregates all
              totalVotingPower: { $sum: "$votingPower" }, // Sum up the votingPower
            },
          },
        ])
        .then((res) => res[0]?.totalVotingPower || 0)

      const voteAgainst = await proposalVoteModel
        .aggregate([
          {
            $match: {
              proposalId: proposals[i].proposalId,
              type: 2, // Match documents with type === 2
            },
          },
          {
            $group: {
              _id: null, // Grouping without specifying a field, so it aggregates all
              totalVotingPower: { $sum: "$votingPower" }, // Sum up the votingPower
            },
          },
        ])
        .then((res) => res[0]?.totalVotingPower || 0)
      const totalVotes = await proposalVoteModel
        .aggregate([
          {
            $match: {
              proposalId: proposals[i].proposalId,
            },
          },
          {
            $group: {
              _id: null, // Grouping without specifying a field, so it aggregates all
              totalVotingPower: { $sum: "$votingPower" }, // Sum up the votingPower
            },
          },
        ])
        .then((res) => res[0]?.totalVotingPower || 0)

      const voteAddresses = await proposalVoteModel.distinct("address", {
        proposalId: proposals[i].proposalId,
      })

      proposals[i] = proposals[i].toObject()

      proposals[i]["votes"] = {
        voteFor,
        voteAgainst,
        totalVotes,
        voteAddresses: voteAddresses.length,
      }
    }

    console.log(proposals)

    const total = await proposalModel.countDocuments({})
    const next =
      skip + limit < total
        ? `/api/proposals/get?skip=${skip + limit}&limit=${limit}`
        : null

    return NextResponse.json({ proposals, next })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { error: "internal_server_error" },
      { status: 500 }
    )
  }
}
