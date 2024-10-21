import { useTranslations } from "next-intl"

const TopicNotFound = () => {
    const t = useTranslations("main.forum")
    return (
        <p className="flex text-center text-2xl text-red-500 items-center justify-center w-[fill-available]">
            {t("topic_not_found")}
        </p>
    )
}

export default TopicNotFound