"use client";

import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Booking } from "@/constants/data";
import axios from "axios";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

interface CellActionProps {
  data: Booking;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { toast } = useToast();

  const onDeleteConfirm = async () => {
    setLoading(true);

    try {
      const res = await axios.post(`/api/booking/delete`, { id: data.id });
      if (res.status === 200) {
        setOpenDelete(false);
        toast({
          title: "Success",
          description: "Booking deleted successfully",
        });

        data?.mutate && data.mutate();
      } else {
        toast({
          title: "Error",
          variant: "destructive",
          description: res.data.message,
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }

    setLoading(false);
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
      <AlertModal
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={onDeleteConfirm}
        loading={loading}
      />
      <Button
        variant="ghost"
        onClick={() => handleLinkCopy(data.link)}
        size="icon"
      >
        <LuLink className="size-4" />
      </Button>
      <Button
        variant="ghost"
        className="text-red-500 hover:text-red-400"
        onClick={() => setOpenDelete(true)}
        size="icon"
      >
        <FaRegTrashCan className="size-4" />
      </Button>
    </>
  );
};
