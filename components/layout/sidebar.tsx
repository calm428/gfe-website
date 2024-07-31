import { DashboardNav } from "@/components/dashboard-nav";
import { authOptions } from "@/lib/auth-options";
import { cn } from "@/lib/utils";
import dbConnect from "@/server/dbConnect";
import Admin from "@/server/model/admin.model";
import { NavItem } from "@/types";
import { getServerSession } from "next-auth";

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

export default async function Sidebar() {
  let navItems: NavItem[] = (await getNavItems()) as NavItem[];

  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 md:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
