import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from "../file-upload";
import { useState } from "react";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { useSession } from "next-auth/react";

export function AvatarUpdateModal({ children }: { children: React.ReactNode }) {
  const session = useSession();
  console.log(session);
  const [open, setOpen] = useState(false);
  const [imgURLs, setImgURLs] = useState<any[]>([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/profile/update", {
        avatar: imgURLs[0].fileUrl,
      });

      if (res.status === 200) {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully",
        });

        session.update();
        setOpen(false);
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FileUpload
          value={imgURLs}
          onChange={setImgURLs}
          onRemove={setImgURLs}
        />
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Update avatar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
