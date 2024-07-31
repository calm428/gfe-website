"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getInitials } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Edit2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AvatarUpdateModal } from "../modal/avatar-update-modal";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  newpassword: z.string().optional(),
});

export function ProfileForm() {
  const session = useSession();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: session?.data?.user?.email || "",
      name: session?.data?.user?.name || "",
      password: "",
      newpassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/profile/update", data);

      if (res.status === 200) {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully",
        });
        session.update();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } catch (error: AxiosError | any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.response?.data?.message,
      });
    }
  };

  return (
    <div className="w-full max-w-md">
      <Avatar className="w-32 h-32 relative group">
        <AvatarImage
          src={session?.data?.user?.image || ""}
          alt={session?.data?.user?.name || ""}
        />
        <AvatarFallback>
          {getInitials(session?.data?.user?.name || "")}
        </AvatarFallback>
        <AvatarUpdateModal>
          <div className="absolute w-full h-full top-0 left-0 bg-secondary-foreground/30 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100">
            <Edit2 className="h-6 w-6" />
          </div>
        </AvatarUpdateModal>
      </Avatar>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-end !mt-4">
            <Button type="submit">Update</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
