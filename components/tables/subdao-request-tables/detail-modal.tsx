import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubdaoRequest } from "@/constants/data";

export function SubDAORequestDetailModal({
  children,
  subdaoRequest,
}: {
  children: React.ReactNode;
  subdaoRequest: SubdaoRequest;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>SubDAO Request from {subdaoRequest.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <div>
            <span className="text-gray-500 text-sm">What is your name?</span>
            <p>{subdaoRequest.name}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              What is your mail address?
            </span>
            <p>{subdaoRequest.email}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              Where are you based in?
            </span>
            <p>{subdaoRequest.location}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              What is your phone number
            </span>
            <p>{subdaoRequest.phone}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              What describes you best?
            </span>
            <p>{subdaoRequest.bio}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              In which city or field do you want start or lead a SubDAO?
            </span>
            <p>{subdaoRequest.subdaoLocation}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              Are you going to deploy facility or only open a forum?
            </span>
            <p>{subdaoRequest.deployType}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              What is the current or expected size of SubDAO you are planning?
            </span>
            <p>{subdaoRequest.subdaoSize}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              What kind of help will you need with this DAO?
            </span>
            <p>{subdaoRequest.helpRequest}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              Please share your discord ID
            </span>
            <p>{subdaoRequest.discord}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">
              Please share your Linkedin profile
            </span>
            <p>{subdaoRequest.linkedin}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
