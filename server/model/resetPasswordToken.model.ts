import mongoose from "mongoose"

const ResetPasswordTokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models?.ResetPasswordToken ||
  mongoose.model("ResetPasswordToken", ResetPasswordTokenSchema)
