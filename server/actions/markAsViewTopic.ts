import dbConnect from "../dbConnect"
import topicModel from "../model/topic.model"

export default async function markAsViewTopic(slug: string) {
  try {
    if (!slug) return { success: false, message: "invalid_params" }

    await dbConnect()

    const topic = await topicModel.findOne({ slug })
    if (!topic) return { success: false, message: "topic_not_found" }

    await topicModel.updateOne({ _id: topic._id }, { $inc: { views: 1 } })

    return { success: true }
  } catch (error) {
    console.log(error)

    return { success: false, message: "internal_server_error" }
  }
}
