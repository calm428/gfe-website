import mongoose from "mongoose";

const blogNewsEventSchema = new mongoose.Schema(
  {
    previewImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["BLOG", "NEWS", "EVENT"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models?.BlogNewsEvent ||
  mongoose.model("BlogNewsEvent", blogNewsEventSchema);
