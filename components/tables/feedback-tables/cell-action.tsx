"use client";

import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Feedback } from "@/constants/data";
import axios from "axios";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";
import { FeedbackDetailModal } from "./detail-modal";

interface CellActionProps {
  data: Feedback;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { toast } = useToast();

  const onDeleteConfirm = async () => {
    setLoading(true);

    try {
      const res = await axios.delete(`/api/feedback/delete`, {
        data: { id: data.id },
      });
      if (res.status === 200) {
        setOpenDelete(false);
        toast({
          title: "Success",
          description: "Feedback deleted successfully",
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

  return (
    <>
      <AlertModal
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={onDeleteConfirm}
        loading={loading}
      />
      <div className="flex gap-2">
        <FeedbackDetailModal feedback={data}>
          <Button variant="ghost" size="icon">
            <IoOpenOutline className="size-4" />
          </Button>
        </FeedbackDetailModal>
        <Button
          variant="ghost"
          className="text-red-500 hover:text-red-400"
          onClick={() => setOpenDelete(true)}
          size="icon"
        >
          <FaRegTrashCan className="size-4" />
        </Button>
      </div>
    </>
  );
};
