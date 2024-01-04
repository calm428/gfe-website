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
      title: "How It Works",
      href: "/how-it-works",
    },
    {
      title: "Company",
      href: "/company",
    },
    {
      title: "Blogs and News",
      href: "/blogs-and-news",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerLinks: [
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "Blogs && News",
      href: "/blog-and-news",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  contact: {
    phone: "+44 687 120 967 2",
    email: "info@sunbelt.com",
    address: "83 McDonald Road, City of Edinburgh, Alba / Scotland, EH7 4NQ, United Kingdom",
  },
}
