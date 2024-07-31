import { NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import proposalModel from "@/server/model/proposal.model"
import proposalVoteModel from "@/server/model/proposalVote.model"
import topicModel from "@/server/model/topic.model"

export async function POST(req: Request) {
  const { events } = await req.json()

  if (!events || !events.length) {
    console.log("events not found")
    return NextResponse.json({ message: "events_not_found" }, { status: 400 })
  }

  try {
    await dbConnect()

    const { matchReasons } = events[0]

    const { signature, params } = matchReasons.find(
      (mr: any) => mr.type === "event"
    )

    if (signature.match(/^ProposalCreated/)) {
      const { proposalId, voteStart, voteEnd, description } = params

      const parsedDescription = JSON.parse(description)

      const proposal = await proposalModel.findById(parsedDescription.id)

      if (!proposal) {
        console.log("proposal not found")
        return NextResponse.json(
          { message: "proposal_not_found" },
          { status: 400 }
        )
      }

      proposal.proposalId = proposalId
      proposal.voteStartBH = Number(voteStart)
      proposal.voteEndBH = Number(voteEnd)
      proposal.publishedAt = new Date()

      await proposal.save()

      const topic = await topicModel.findById(proposal.topic)
      topic.status = "PENDING"

      await topic.save()
    } else if (signature.match(/^VoteCast/)) {
      const { voter, proposalId, support, weight } = params

      const proposal = await proposalModel.findOne({
        proposalId,
      })

      if (!proposal) {
        console.log("proposal not found")
        return NextResponse.json(
          { message: "proposal_not_found" },
          { status: 400 }
        )
      }

      const vote = await proposalVoteModel.create({
        address: voter,
        proposalId,
        type: support,
        votingPower: Number(weight) / 1e18,
      })

      if (!vote) {
        console.log("vote not created")
        return NextResponse.json(
          { message: "vote_not_created" },
          { status: 400 }
        )
      }
    }

    return NextResponse.json({ message: "success" }, { status: 200 })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { message: "internal_server_error" },
      { status: 500 }
    )
  }
}
