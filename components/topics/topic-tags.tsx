import { FaTags } from "react-icons/fa6"
import { MdCategory } from "react-icons/md"
import { useTranslations } from "next-intl"

export default function TopicTags({ topic }: { topic: any }) {
  const t = useTranslations("main.forum")

  const filterCategories = (category: string): string => {   
    switch(category) {  
      case "general":  
      case "General":  
        return t("categories.general");  
      case "governance-and-proposals":  
      case "Governance and Proposals":  
        return t("categories.governance-and-proposals");  
      case "ideas-and-suggestions":  
      case "Ideas & Suggestions":  
        return t("categories.ideas-and-suggestions");  
      case "technical-development":  
      case "Technical Development":  
        return t("categories.technical-development");  
      default:  
        return t("categories.all");  
    }  
  }

  const filterTags = ( tag: string ): string => {
    switch(tag) {
      case "introduction":
        return t("tags.introduction")
      case "protocol-upgrade":
        return t("tags.protocol-upgrade")
      case "treasury":
        return t("tags.treasury")
      case "community-guidelines":
        return t("tags.community-guidelines")
      case "market-listing":
        return t("tags.market-listing")
      case "solar-power":
        return t("tags.solar-power")
      case "wind-power":
        return t("tags.wind-power")
      case "kelp-farming":
        return t("tags.kelp-farming")
      default:
        return t("tags.all")
    }
  }

  return (
    <div className="flex gap-2">
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="rounded-full bg-primary-600/20 px-2 py-1 text-xs text-primary-600">
          <MdCategory className="mr-1 inline" />
          {filterCategories(topic.category.name)}
        </div>
        {topic?.tags?.map((tag: any) => (
          <div
            key={tag._id.toString()}
            className="rounded-full bg-primary-600/20 px-2 py-1 text-xs text-primary-600"
          >
            <FaTags className="mr-1 inline" />
            {filterTags(tag.name)}
          </div>
        ))}
      </div>
    </div>
  )
}
