import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ProposalRequest } from "@/constants/data";
import { Dispatch, SetStateAction } from "react";

export function ProposalRequestDetailModal({
  data,
  open,
  onClose,
}: {
  data: ProposalRequest;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Proposal Request from {data.name}</DialogTitle>
        </DialogHeader>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          <div>
            <p className="text-md font-semibold">Title</p>
            <p className="text-sm">{data.title}</p>
          </div>
          <div>
            <p className="text-md font-semibold">Summary</p>
            <p className="text-sm">{data.summary}</p>
          </div>
          <div>
            <p className="text-md font-semibold">Content</p>
            <div
              className="prose max-h-[25vh] overflow-auto rounded-medium bg-default-100 px-3 py-2 text-sm"
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            />
          </div>
          {data.actions.length > 0 && (
            <div>
              <p className="text-md font-semibold">Actions</p>
              <>
                {data.actions.map((action: any, index: number) => (
                  <Card key={index} className="mx-auto w-full max-w-3xl border">
                    <CardHeader className="!p-2">
                      <div className="flex flex-col">
                        <p className="text-md font-medium">Withdraw assets</p>
                      </div>
                    </CardHeader>
                    <Separator />
                    <CardContent className="!p-2">
                      <div className="flex justify-between">
                        <p className="line-clamp-1 gap-4">{action.recipient}</p>
                        <p className="whitespace-nowrap">{action.amount} GFE</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
