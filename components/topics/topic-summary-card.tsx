import { Card, CardBody, Chip, User } from "@nextui-org/react"
import dayjs from "dayjs"
import { useTranslations } from "next-intl"

export default function TopicSummaryCard({
  topic,
  replies,
}: {
  topic: any
  replies: any
}) {
  const t = useTranslations("main.forum.topic_summary")

  const chipColor = (status: string) => {
    switch (status) {
      case "SUBMISSION_APPROVED":
      case "PUBLISHED":
        return "success"
      case "SUBMISSION_REJECTED":
      case "SUBMISSION_CANCELED":
        return "error"
      case "SUBMISSION":
        return "warning"
      default:
        return "default"
    }
  }

  const chipText = (status: string) => {
    const t = useTranslations("main.forum.topic_status")
    switch (status) {
      case "SUBMISSION_APPROVED":
        return t("approved")
      case "SUBMISSION_REJECTED":
        return t("rejected")
      case "SUBMISSION_CANCELED":
        return t("canceled")
      case "PUBLISHED":
        return t("published")
      case "SUBMISSION":
        return t("submission")
      default:
        return t("draft")
    }
  }

  return (
    <Card shadow="none" className="border">
      <CardBody className="flex flex-row flex-wrap justify-between gap-4 px-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex w-fit flex-col">
            <span className="text-xs uppercase">{t("created")}</span>
            <User
              name={topic?.author?.name || ""}
              description={dayjs(topic?.createdAt || "").format("MMM YYYY")}
              avatarProps={{
                src: topic?.author?.image || "",
                size: "sm",
              }}
            />
          </div>
          {replies && replies.length > 0 && (
            <div className="flex w-fit flex-col">
              <span className="text-xs uppercase">{t("last_reply")}</span>
              <User
                name={replies.slice(-1)[0]?.author?.name || ""}
                description={dayjs(
                  replies.slice(-1)[0]?.createdAt || ""
                ).format("MMM YYYY")}
                avatarProps={{
                  src: replies.slice(-1)[0]?.author?.image || "",
                  size: "sm",
                }}
              />
            </div>
          )}
        </div>
        <div className="mx-auto flex w-fit flex-col items-center">
          <span className="text-xs uppercase">{t("status")}</span>
          <Chip
            color={chipColor(topic?.status) as any}
            variant="dot"
            className="my-auto"
          >
            {chipText(topic?.status).toUpperCase()}
          </Chip>
        </div>
        <div className="flex w-full justify-between gap-10 sm:mx-auto sm:w-auto">
          <div className="flex w-fit flex-col items-center">
            <span className="text-xs uppercase">{t("views")}</span>
            <span className="my-auto">{topic?.views}</span>
          </div>
          <div className="flex w-fit flex-col items-center">
            <span className="text-xs uppercase">{t("replies")}</span>
            <span className="my-auto">{topic?.replies}</span>
          </div>
          <div className="flex w-fit flex-col items-center">
            <span className="text-xs uppercase">{t("likes")}</span>
            <span className="my-auto">{topic?.likes}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
