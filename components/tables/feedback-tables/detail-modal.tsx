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
import { Feedback } from "@/constants/data";
import { Textarea } from "@/components/ui/textarea";
import { RiReplyFill } from "react-icons/ri";
// RCE CSS
import "react-chat-elements/dist/main.css";
// MessageBox component
import { MessageBox } from "react-chat-elements";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function FeedbackDetailModal({
  children,
  feedback,
}: {
  children: React.ReactNode;
  feedback: Feedback;
}) {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleReply = async () => {
    if (!message) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Please enter a message",
      });

      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(`/api/feedback/reply`, {
        id: feedback.id,
        message,
      });
      if (res.status === 200) {
        toast({
          title: "Success",
          description: "Reply sent successfully",
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

    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Feedback from {feedback.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(100vh_-_14rem)] w-full rounded-md">
          {/* @ts-ignore */}
          <MessageBox
            id={feedback.id}
            position={"left"}
            type={"text"}
            title={feedback.subject}
            text={feedback.message}
            date={new Date(feedback.date)}
            className="w-3/4"
          />
          {feedback.reply &&
            feedback.reply.map((item: any, index: number) => {
              return (
                // @ts-ignore
                <MessageBox
                  key={index}
                  id={feedback.id}
                  position={"right"}
                  type={"text"}
                  text={item.message}
                  date={item.date}
                  className=" ml-auto w-3/4"
                />
              );
            })}
        </ScrollArea>

        <div>
          <Textarea
            placeholder="Type your message here."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            rows={2}
          />
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={() => handleReply()}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <RiReplyFill className="mr-2 size-4" />
            )}
            Reply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
