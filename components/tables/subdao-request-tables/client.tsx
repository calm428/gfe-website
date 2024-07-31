"use client";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import { columns } from "./columns";
import { format } from "date-fns";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const SubDAORequestClient = () => {
  const { data, mutate, error } = useSWR("/api/subdao-request/get", fetcher);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`SubDAO Requests (${
            data?.subDAORequests?.length > 0 ? data.subDAORequests.length : "0"
          })`}
          description="Manage SubDAO Requests from users"
        />
      </div>
      <Separator />
      {!error && data?.subDAORequests && (
        <DataTable
          searchKey="name"
          columns={columns}
          data={data?.subDAORequests?.map((item: any) => {
            return {
              id: item._id,
              name: item.name,
              email: item.email,
              location: item.location,
              phone: item.phone,
              bio: item.bio,
              subdaoLocation: item.subdaoLocation,
              deployType: item.deployType,
              subdaoSize: item.subdaoSize,
              helpRequest: item.helpRequest,
              discord: item.discord,
              linkedin: item.linkedin,
              date: format(new Date(item.createdAt), "hh:mm LLL dd, y"),
              mutate,
            };
          })}
        />
      )}
    </>
  );
};
