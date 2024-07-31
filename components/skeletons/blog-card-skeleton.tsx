import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogCardSkeleton() {
  return (
    <Card className="my-2">
      <CardContent className="flex gap-3 mt-6">
        <Skeleton className="relative w-[150px] h-[150px] min-w-[150px] min-h-[150px] overflow-hidden hidden sm:flex md:hidden lg:flex" />
        <div className="flex flex-col justify-between gap-2 w-full">
          <div>
            <div className="flex gap-3 items-center">
              <Skeleton className="rounded-full w-12 h-12 border-secondary-foreground" />
              <Skeleton className="w-20 h-5" />
              <Skeleton className="ml-auto w-32 h-8 flex gap-2" />
            </div>
            <div className="pl-12">
              <Skeleton className="w-48 h-5" />
              <Skeleton className="w-full max-w-2xl h-4 my-1" />
              <Skeleton className="w-full max-w-xl h-4 my-1" />
            </div>
          </div>
          <Skeleton className="mt-auto w-20 h-5 space-x-2" />
        </div>
      </CardContent>
    </Card>
  );
}
