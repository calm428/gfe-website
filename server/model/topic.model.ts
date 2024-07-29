import mongoose from "mongoose"

const topicSchema = new mongoose.Schema(
  {
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topics",
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tags",
      },
    ],
    status: {
      type: String,
      enum: [
        "DRAFT",
        "SUBMISSION",
        "SUBMISSION_APPROVED",
        "SUBMISSION_REJECTED",
        "SUBMISSION_CANCELED",
        "PENDING",
        "ACTIVE",
        "CANCELED",
        "DEFEATED",
        "SUCCEEDED",
        "QUEUED",
        "EXPIRED",
        "EXECUTED",
      ],
      default: "DRAFT",
    },
    replies: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

export default mongoose.models?.Topics || mongoose.model("Topics", topicSchema)
