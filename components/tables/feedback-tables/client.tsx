"use client";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import { columns } from "./columns";
import { format } from "date-fns";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const FeedbackClient = () => {
  const { data, mutate, error } = useSWR("/api/feedback/get", fetcher);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Feedbacks (${
            data?.feedbacks?.length > 0 ? data.feedbacks.length : "0"
          })`}
          description="Manage feedbacks from users"
        />
      </div>
      <Separator />
      {!error && data?.feedbacks && (
        <DataTable
          searchKey="name"
          columns={columns}
          data={data?.feedbacks?.map((item: any) => {
            return {
              id: item._id,
              name: item.name,
              email: item.email,
              subject: item.subject,
              message: item.message,
              date: format(new Date(item.createdAt), "hh:mm LLL dd, y"),
              reply: item.reply,
              mutate,
            };
          })}
        />
      )}
    </>
  );
};
