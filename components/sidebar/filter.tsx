import { ICategory, ITag } from "@/types"
import { useTranslations } from "next-intl"

export const filterCategories = ( category: ICategory ): string => {
    const t = useTranslations("main.forum.categories")
    switch(category.slug) {
        case "general":
            return t("general")
        case "governance-and-proposals":
            return t("governance-and-proposals")
        case "ideas-and-suggestions":
            return t("ideas-and-suggestions")
        case "technical-development":
            return t("technical-development")
        default:
            return t("all")
    }
}

export const filterTags = ( tag: ITag ): string => {
    const t = useTranslations("main.forum.tags")
    switch(tag.slug) {
        case "introduction":
            return t("introduction")
        case "protocol-upgrade":
            return t("protocol-upgrade")
        case "treasury":
            return t("treasury")
        case "community-guidelines":
            return t("community-guidelines")
        case "market-listing":
            return t("market-listing")
        case "solar-power":
            return t("solar-power")
        case "wind-power":
            return t("wind-power")
        case "kelp-farming":
            return t("kelp-farming")
        default:
            return t("all")
    }
}