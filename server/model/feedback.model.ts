import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    reply: [
      {
        message: String,
        date: Date,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.models?.Feedback ||
  mongoose.model("Feedback", feedbackSchema);
