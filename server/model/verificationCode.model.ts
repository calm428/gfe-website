import mongoose from "mongoose"

const VerificationCodeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    resendAttempts: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

export default mongoose.models?.VerificationCode ||
  mongoose.model("VerificationCode", VerificationCodeSchema)
