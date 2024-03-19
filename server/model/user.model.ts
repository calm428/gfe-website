import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    image: String,

    password: String,
  },
  { timestamps: true }
)

export default mongoose.models?.User || mongoose.model("User", userSchema)
