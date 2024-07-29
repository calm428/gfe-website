import { FaTags } from "react-icons/fa6"
import { MdCategory } from "react-icons/md"

export default function TopicTags({ topic }: { topic: any }) {
  return (
    <div className="flex gap-2">
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="rounded-full bg-primary-600/20 px-2 py-1 text-xs text-primary-600">
          <MdCategory className="mr-1 inline" />
          {topic.category.name}
        </div>
        {topic?.tags?.map((tag: any) => (
          <div
            key={tag._id.toString()}
            className="rounded-full bg-primary-600/20 px-2 py-1 text-xs text-primary-600"
          >
            <FaTags className="mr-1 inline" />
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  )
}
