"use client";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import { columns } from "./columns";
import { format } from "date-fns";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const BookingClient = () => {
  const { data, mutate, error } = useSWR("/api/booking/get", fetcher);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Booking (${
            data?.booking?.length > 0 ? data.booking.length : "0"
          })`}
          description="Manage bookings"
        />
      </div>
      <Separator />
      {!error && data?.booking && (
        <DataTable
          searchKey="name"
          columns={columns}
          data={data?.booking?.map((item: any) => {
            return {
              id: item._id,
              name: item.name,
              email: item.email,
              start: format(new Date(item.start), "hh:mm LLL dd, y"),
              end: format(new Date(item.end), "hh:mm LLL dd, y"),
              status: item.status.split("_")[1],
              note: item.note,
              link: item.link,
              mutate,
            };
          })}
        />
      )}
    </>
  );
};
