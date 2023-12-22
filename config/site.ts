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
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerLinks: [
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
      title: "Investors",
      href: "/investors",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@sunbelt.com",
    address: "1254 Cherry Blossom Road, Springfield, IL 63201, United States",
  }
}
