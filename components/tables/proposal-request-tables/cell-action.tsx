"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { ProposalRequest } from "@/constants/data";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoBan, IoOpenOutline } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ProposalRequestDetailModal } from "./detail-modal";

interface CellActionProps {
  data: ProposalRequest;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openDetailModal, setOpenDetailModal] = useState<boolean>(false);
  const { toast } = useToast();

  const approveProposal = async () => {
    try {
      const res = await axios.patch(`/api/proposal-request/patch`, {
        id: data.id,
        status: "SUBMISSION_APPROVED",
      });

      if (res.status === 200) {
        toast({
          title: "Success",
          description: "Proposal has been approved successfully!",
        });

        data.mutate && data.mutate();
      } else {
        toast({
          title: "Error",
          variant: "destructive",
          description: res.data.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  const rejectProposal = async () => {
    try {
      const res = await axios.patch(`/api/proposal-request/patch`, {
        id: data.id,
        status: "SUBMISSION_REJECTED",
      });

      if (res.status === 200) {
        toast({
          title: "Success",
          description: "Proposal has been rejected successfully!",
        });

        data.mutate && data.mutate();
      } else {
        toast({
          title: "Error",
          variant: "destructive",
          description: res.data.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  const handleLinkCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);

    toast({
      title: "Success",
      description: "Video Link copied to clipboard",
    });
  };

  return (
    <>
      <ProposalRequestDetailModal
        data={data}
        open={openDetailModal}
        onClose={setOpenDetailModal}
      />
      {/* <AlertModal
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={onDeleteConfirm}
        loading={loading}
      />
      <div className="flex gap-2">
        <SubDAORequestDetailModal subdaoRequest={data}>
          <Button variant="ghost" size="icon">
            <IoOpenOutline className="size-4" />
          </Button>
        </SubDAORequestDetailModal>
        <Button
          variant="ghost"
          className="text-red-500 hover:text-red-400"
          onClick={() => setOpenDelete(true)}
          size="icon"
        >
          <FaRegTrashCan className="size-4" />
        </Button>
      </div> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <HiOutlineDotsHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mr-10">
          {(data.status === "SUBMISSION" || data.status === "REJECTED") && (
            <DropdownMenuItem onClick={() => approveProposal()}>
              <FiCheckCircle className="mr-2 size-4" />
              <span>Approve Proposal</span>
            </DropdownMenuItem>
          )}
          {(data.status === "SUBMISSION" || data.status === "APPROVED") && (
            <DropdownMenuItem onClick={() => rejectProposal()}>
              <IoBan className="mr-2 size-4" />
              <span>Reject Proposal</span>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => setOpenDetailModal(true)}>
            <MdOutlineRemoveRedEye className="mr-2 size-4" />
            <span>View details</span>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={data.link} target="_blank">
              <IoOpenOutline className="mr-2 size-4" />
              <span>Go to forum</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLinkCopy(data.link)}>
            <LuLink className="mr-2 size-4" />
            <span>Copy forum link</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
