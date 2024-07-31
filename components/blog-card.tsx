import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenCheck, Eye, History, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { getInitials } from "@/lib/utils";
import Link from "next/link";
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
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";
import "react-quill/dist/quill.bubble.css";
import { AlertModal } from "./modal/alert-modal";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

export type BlogCardPropsType = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  category: string;
  previewImage: string;
  link: string;
  author: {
    avatar: string;
    name: string;
  };
  createdAt: string;
  mutate: () => void;
};

export default function BlogCard(item: BlogCardPropsType) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      const res = await fetch("/api/blogs/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item._id,
          category: item.category,
        }),
      });

      if (res.ok) {
        const data = await res.json();

        if (data.success) {
          toast({
            title: "Success",
            description: "Blog deleted successfully",
          });

          item.mutate();
        } else {
          toast({
            title: "Error",
            variant: "destructive",
            description: data.message,
          });
        }
      } else {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Something went wrong",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Something went wrong",
      });
    }

    setIsConfirming(false);
  };

  return (
    <>
      <AlertModal
        isOpen={isConfirming}
        onConfirm={handleDelete}
        loading={false}
        onClose={() => setIsConfirming(false)}
      />
      <Card className="my-2">
        <CardContent className="flex gap-3 mt-6">
          <div className="relative w-[150px] h-[150px] min-w-[150px] min-h-[150px] overflow-hidden hidden sm:flex md:hidden lg:flex">
            <Image
              fill
              className="object-cover"
              alt="Image"
              src={item.previewImage}
            />
          </div>
          <div className="flex flex-col justify-between gap-2 w-full">
            <div>
              <div className="flex gap-3 items-center">
                <Avatar>
                  <AvatarImage
                    src={item.author.avatar}
                    alt={item.author.name}
                  />
                  <AvatarFallback>
                    {getInitials(item.author.name)}
                  </AvatarFallback>
                </Avatar>
                <div>{item.author.name}</div>
                <div className="ml-auto flex gap-2">
                  <Button
                    className="rounded-full border-secondary-foreground"
                    size="icon"
                    variant="outline"
                    onClick={() => !isOpen && setIsOpen(true)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    className="rounded-full border-secondary-foreground"
                    size="icon"
                    variant="outline"
                    asChild
                  >
                    <Link href={`/edit/${item._id}`}>
                      <Pencil className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    className="rounded-full border-secondary-foreground z-30"
                    size="icon"
                    variant="outline"
                    onClick={() => setIsConfirming(true)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="pl-12">
                <div className="text-2xl line-clamp-1 font-semibold">
                  {item.title}
                </div>
                <div className="line-clamp-2">{item.subtitle}</div>
              </div>
            </div>
            <div className="mt-auto space-x-2">
              <Badge>
                <History className="w-4 h-4 mr-1" />
                {formatDistanceToNow(new Date(item.createdAt))} ago
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DialogContent className="sm:max-w-[90%] h-[90vh] block">
          <ScrollArea className="h-full">
            <div className="relative w-auto h-[200px]">
              <Image
                src={item.previewImage}
                alt="preview image"
                layout="fill"
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="text-2xl font-semibold mt-4">{item.title}</div>
            <div className="text-lg">{item.subtitle}</div>
            <ReactQuill theme="bubble" value={item.content} readOnly />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
