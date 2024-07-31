"use client";

import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@/constants/data";
import axios from "axios";
import { RefreshCcwDot } from "lucide-react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

interface CellActionProps {
  data: User;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openReset, setOpenReset] = useState<boolean>(false);
  const { toast } = useToast();

  const onDeleteConfirm = async () => {
    setLoading(true);

    try {
      const res = await axios.post(`/api/users/delete`, { id: data.id });
      if (res.status === 200) {
        setOpenDelete(false);
        toast({
          title: "Success",
          description: "User deleted successfully",
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

  const onResetConfirm = async () => {
    try {
      const res = await axios.post(`/api/users/reset-password`, {
        id: data.id,
      });
      if (res.status === 200) {
        setOpenReset(false);
        toast({
          title: "Success",
          description: "Password reset successfully",
        });
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
  };

  return (
    <>
      <AlertModal
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={onDeleteConfirm}
        loading={loading}
      />
      <AlertModal
        isOpen={openReset}
        onClose={() => setOpenReset(false)}
        onConfirm={onResetConfirm}
        loading={loading}
      />
      <Button variant="ghost" onClick={() => setOpenReset(true)} size="icon">
        <RefreshCcwDot className="size-4" />
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
