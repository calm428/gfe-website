"use client";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import { columns } from "./columns";
import { format } from "date-fns";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const statusText = (status: string) => {
  switch (status) {
    case "SUBMISSION":
      return "SUBMISSION";
    case "SUBMISSION_CANCELED":
      return "CANCELED";
    case "SUBMISSION_REJECTED":
      return "REJECTED";
    case "SUBMISSION_APPROVED":
      return "APPROVED";
    default:
      return "SUBMISSION";
  }
};

export const ProposalRequestClient = () => {
  const { data, mutate, error } = useSWR("/api/proposal-request/get", fetcher);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`SubDAO Requests (${
            data?.proposals?.length > 0 ? data.proposals.length : "0"
          })`}
          description="Manage SubDAO Requests from users"
        />
      </div>
      <Separator />
      {!error && data?.proposals && (
        <DataTable
          searchKey="title"
          columns={columns}
          data={data?.proposals?.map((item: any) => {
            return {
              id: item._id,
              name: item.topic.author.name,
              email: item.topic.author.email,
              title: item.topic.title,
              summary: item.summary,
              content: item.topic.content,
              actions: item.actions,
              status: statusText(item.topic.status),
              link: `https://forum.gfe.foundation/topics/${item.topic.slug}`,
              date: format(new Date(item.createdAt), "hh:mm LLL dd, y"),
              mutate,
            };
          })}
        />
      )}
    </>
  );
};
