import mongoose from "mongoose"

const proposalVoteSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    proposalId: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      enum: [0, 1, 2],
      required: true,
    },
    votingPower: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

// To avoid issues in hot-reloading environments, check if the model exists first
export default mongoose.models?.ProposalVotes ||
  mongoose.model("ProposalVotes", proposalVoteSchema)
