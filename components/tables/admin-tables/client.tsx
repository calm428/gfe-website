"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import { columns } from "./columns";
import { AdminAddModal } from "@/components/modal/admin-add-modal";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const UserClient = () => {
  const { data, error, mutate } = useSWR("/api/admin/all", fetcher);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Administrators (${
            data?.users?.length > 0 ? data.users.length : "0"
          })`}
          description="Manage administrators"
        />
        <AdminAddModal mutate={mutate} />
      </div>
      <Separator />
      {!error && data?.users && (
        <DataTable
          searchKey="name"
          columns={columns}
          data={data?.users?.map((item: any) => {
            return {
              id: item._id,
              name: item.name,
              email: item.email,
              role: "MODERATOR",
              verified: item.verified,
              status: "ACTIVE",
              mutate,
            };
          })}
        />
      )}
    </>
  );
};
