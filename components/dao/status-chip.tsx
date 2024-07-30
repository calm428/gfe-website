import { ProposalStatusType } from "@/types"
import { Chip } from "@nextui-org/react"

// export type ProposalStatusType =
//   | "PENDING"
//   | "ACTIVE"
//   | "CANCELED"
//   | "DEFEATED"
//   | "SUCCEEDED"
//   | "QUEUED"
//   | "EXPIRED"
//   | "EXECUTED"

export default function StatusChip({ status }: { status: ProposalStatusType }) {
  const getStatusColor = (status: ProposalStatusType) => {
    switch (status) {
      case "PENDING":
        return { color: "default", className: "rounded-sm" }
      case "ACTIVE":
        return {
          color: "primary",
          className: "rounded-sm bg-primary/20 text-primary",
        }
      case "CANCELED":
        return {
          color: "danger",
          className: "rounded-sm bg-danger/20 text-danger",
        }
      case "DEFEATED":
        return {
          color: "danger",
          className: "rounded-sm bg-danger/20 text-danger",
        }
      case "SUCCEEDED":
        return {
          color: "success",
          className: "rounded-sm bg-success/20 text-success",
        }
      case "QUEUED":
        return {
          color: "primary",
          className: "rounded-sm bg-primary/20 text-primary",
        }
      case "EXPIRED":
        return {
          color: "warning",
          className: "rounded-sm bg-warning/20 text-primary",
        }
      case "EXECUTED":
        return {
          color: "success",
          className: "rounded-sm bg-success/20 text-success",
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
      {status}
    </Chip>
  )
}
