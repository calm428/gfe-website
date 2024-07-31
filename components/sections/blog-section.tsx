"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenCheck, History } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import useSWR from "swr";
import BlogCard from "../blog-card";
import { GrDocumentStore } from "react-icons/gr";
import BlogCardSkeleton from "../skeletons/blog-card-skeleton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface BlogSectionProps {
  category: string;
}

export default function BlogSection({ category }: BlogSectionProps) {
  const { data, error, mutate } = useSWR(
    `/api/blogs/me?category=${category}`,
    fetcher,
  );

  return (
    <ScrollArea className="h-[calc(100vh_-_14rem)] w-full rounded-md">
      {!error ? (
        data && data.blogs.length > 0 ? (
          data.blogs.map((item: any) => (
            <BlogCard key={item.id} {...item} mutate={mutate} />
          ))
        ) : data && data.blogs.length === 0 ? (
          <div className="w-full text-center h-32 flex flex-col justify-center items-center rounded-xl bg-muted text-muted-foreground">
            <GrDocumentStore className="w-8 h-8" />
            No results found
          </div>
        ) : (
          <BlogCardSkeleton />
        )
      ) : (
        <></>
      )}
    </ScrollArea>
  );
}
