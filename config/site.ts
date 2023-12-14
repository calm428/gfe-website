export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "SUNBELT Miners",
      href: "/miners",
    },
    {
      title: "How It Works",
      href: "/how-it-works",
    },
    {
      title: "Company",
      href: "/company",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
