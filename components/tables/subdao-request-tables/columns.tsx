"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SubdaoRequest } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<SubdaoRequest>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          EMAIL
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "location",
    header: "LOCATION",
    cell: ({ row }) => (
      <div className="line-clamp-1 w-40">{row.original.location}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "PHONE",
    cell: ({ row }) => (
      <div className="line-clamp-1 w-40">{row.original.phone}</div>
    ),
  },
  // {
  //   accessorKey: "bio",
  //   header: "INTRODUCTION",
  //   cell: ({ row }) => (
  //     <div className="line-clamp-1 w-40">{row.original.bio}</div>
  //   ),
  // },
  {
    accessorKey: "subdaoLocation",
    header: "SUBDAO LOCATION",
    cell: ({ row }) => (
      <div className="line-clamp-1 w-40">{row.original.subdaoLocation}</div>
    ),
  },
  {
    accessorKey: "deployType",
    header: "DEPLOY TYPE",
    cell: ({ row }) => (
      <div className="line-clamp-1 w-40">{row.original.deployType}</div>
    ),
  },
  {
    accessorKey: "subdaoSize",
    header: "SUBDAO SIZE",
    cell: ({ row }) => (
      <div className="line-clamp-1 w-40">{row.original.subdaoSize}</div>
    ),
  },
  // {
  //   accessorKey: "helpRequest",
  //   header: "HELP REQUEST",
  //   cell: ({ row }) => (
  //     <div className="line-clamp-1 w-40">{row.original.helpRequest}</div>
  //   ),
  // },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DATE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="whitespace-nowrap">{row.original.date}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
    enableHiding: false,
  },
];
