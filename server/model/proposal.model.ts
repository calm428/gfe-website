import mongoose from "mongoose"

const proposalSchema = new mongoose.Schema(
  {
    proposalId: String,
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topics",
      unique: true,
    },
    summary: {
      type: String,
      required: true,
    },
    actions: {
      type: [
        {
          type: {
            type: String,
            enum: ["WITHDRAW", "MINT"],
            required: true,
          },
          recipient: {
            type: String,
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
        },
      ],
      required: true,
    },
    voteStartDate: Date,
    voteEndDate: Date,
    queueDate: Date,
    executeDate: Date,
    voteStartBH: Number,
    voteEndBH: Number,
    publishedAt: Date,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export default mongoose.models?.Proposals ||
  mongoose.model("Proposals", proposalSchema)
