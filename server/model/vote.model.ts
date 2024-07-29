import mongoose from "mongoose"

const voteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    topic: {
      // Linking back to the top-level topic
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topics",
      required: true,
    },
    reply: {
      // Adding a reference to enable replies to replies (nested replies)
      type: mongoose.Schema.Types.ObjectId,
      ref: "Replies",
      default: null, // This means it's a direct reply to a topic if null
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

// To avoid issues in hot-reloading environments, check if the model exists first
export default mongoose.models?.Votes || mongoose.model("Votes", voteSchema)
