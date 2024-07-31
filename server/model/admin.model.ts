import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
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
    avatar: String,
    role: {
      type: String,
      enum: ["ADMIN", "MODERATOR"],
    },
    password: String,
  },
  { timestamps: true },
);

export default mongoose.models?.Admin || mongoose.model("Admin", adminSchema);
