import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { authOptions } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import dbConnect from "@/server/dbConnect";
import Admin from "@/server/model/admin.model";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { NavItem } from "@/types";

const getNavItems = async () => {
  const session = await getServerSession(authOptions);

  await dbConnect();

  const admin = await Admin.findOne({ email: session?.user?.email });

  if (admin.role === "ADMIN") {
    return [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
        label: "Dashboard",
      },
      {
        title: "Blogs & News",
        href: "/dashboard/blogs-and-news",
        icon: "blogs_and_news",
        label: "blogs-and-news",
      },
      {
        title: "Bookings",
        href: "/dashboard/bookings",
        icon: "booking",
        label: "booking",
      },
      {
        title: "Feedbacks",
        href: "/dashboard/feedbacks",
        icon: "feedback",
        label: "feedbacks",
      },
      {
        title: "SubDAO Requests",
        href: "/dashboard/subdao-requests",
        icon: "subdao",
        label: "subdao requests",
      },
      {
        title: "Proposal Requests",
        href: "/dashboard/proposal-requests",
        icon: "proposal",
        label: "proposal requests",
      },
      {
        title: "Users",
        href: "/dashboard/user",
        icon: "user",
        label: "user",
      },
      {
        title: "Administrators",
        href: "/dashboard/admin",
        icon: "admin",
        label: "admin",
      },
      {
        title: "My Profile",
        href: "/dashboard/profile",
        icon: "profile",
        label: "profile",
      },
      {
        title: "Kanban",
        href: "/dashboard/kanban",
        icon: "kanban",
        label: "kanban",
      },
    ];
  } else {
    return [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
        label: "Dashboard",
      },
      {
        title: "Blogs & News",
        href: "/dashboard/blogs-and-news",
        icon: "blogs_and_news",
        label: "blogs-and-news",
      },
      {
        title: "My Profile",
        href: "/dashboard/profile",
        icon: "profile",
        label: "profile",
      },
      {
        title: "Kanban",
        href: "/dashboard/kanban",
        icon: "kanban",
        label: "kanban",
      },
    ];
  }
};
export default async function Header() {
  const navItems = (await getNavItems()) as NavItem[];

  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden md:block">
          <Link href={"/dashboard"} target="_blank">
            <Image
              src="/logo.svg"
              alt="logo"
              width={188}
              height={60}
              className="w-28 h-auto"
            />
          </Link>
        </div>
        <div className={cn("block md:!hidden")}>
          <MobileSidebar navItems={navItems} />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
