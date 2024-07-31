import mongoose from "mongoose";

const subdaoRequestSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    subdaoLocation: {
      type: String,
      required: true,
    },
    deployType: {
      type: String,
      required: true,
    },
    subdaoSize: {
      type: String,
      required: true,
    },
    helpRequest: {
      type: String,
      required: true,
    },
    discord: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.models?.SubdaoRequest ||
  mongoose.model("SubdaoRequest", subdaoRequestSchema);
