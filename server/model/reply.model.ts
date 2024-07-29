import mongoose from "mongoose"

const replySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    topic: {
      // Linking back to the top-level topic
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topics",
      required: true,
    },
    parentReply: {
      // Adding a reference to enable replies to replies (nested replies)
      type: mongoose.Schema.Types.ObjectId,
      ref: "Replies",
      default: null, // This means it's a direct reply to a topic if null
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

// To avoid issues in hot-reloading environments, check if the model exists first
export default mongoose.models?.Replies ||
  mongoose.model("Replies", replySchema)
