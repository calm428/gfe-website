import { ProposalStatusType } from "@/types"
import { Chip } from "@nextui-org/react"
import { useTranslations } from "next-intl"

export default function StatusChip({ status }: { status: ProposalStatusType }) {
  const t = useTranslations("main.platform.dao")

  const getStatusColor = (status: ProposalStatusType) => {
    switch (status) {
      case "PENDING":
        return { 
          color: "default", 
          className: "rounded-sm",
          status_locale: t("pending")
        }
      case "ACTIVE":
        return {
          color: "primary",
          className: "rounded-sm bg-primary/20 text-primary",
          status_locale: t("active")
        }
      case "CANCELED":
        return {
          color: "danger",
          className: "rounded-sm bg-danger/20 text-danger",
          status_locale: t("canceled")
        }
      case "DEFEATED":
        return {
          color: "danger",
          className: "rounded-sm bg-danger/20 text-danger",
          status_locale: t("defeated")
        }
      case "SUCCEEDED":
        return {
          color: "success",
          className: "rounded-sm bg-success/20 text-success",
          status_locale: t("succeeded")
        }
      case "QUEUED":
        return {
          color: "primary",
          className: "rounded-sm bg-primary/20 text-primary",
          status_locale: t("queued")
        }
      case "EXPIRED":
        return {
          color: "warning",
          className: "rounded-sm bg-warning/20 text-primary",
          status_locale: t("expired")
        }
      case "EXECUTED":
        return {
          color: "success",
          className: "rounded-sm bg-success/20 text-success",
          status_locale: t("executed")
        }
      default:
        return { color: "default", className: "rounded-sm" }
    }
  }

  return (
    <Chip
      color={getStatusColor(status).color as any}
      size="sm"
      radius="none"
      className={getStatusColor(status).className}
      classNames={{
        content: "font-semibold",
      }}
    >
      {getStatusColor(status).status_locale}
    </Chip>
  )
}
