import mongoose from "mongoose"

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models?.Tags || mongoose.model("Tags", tagSchema)
