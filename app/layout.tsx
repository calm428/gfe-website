import App from "@/provider/provider"
import SessionProviders from "@/provider/session-provider"

import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { getServerSession } from "next-auth"
import { Toaster } from "react-hot-toast"

import { siteConfig } from "@/config/site"
import { authOptions } from "@/lib/authOptions"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Web3ModalProvider } from "@/context/Web3Modal"
import ContextProvider from "@/providers/Context-provider"
import { NextUIProviders } from "@/providers/nextui-provider"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GFE",
    "GFE Foundation",
    "Green Fungible Energy",
    "Green Energy",
    "Bitcoin Mining",
    "Miner Hosting",
    "NFT",
  ],
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  },
  manifest: "/site.webmanifest",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions)

  return (
    <App>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <SessionProviders session={session}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
            >
              <NextUIProviders>
                <Web3ModalProvider>
                  <ForumContextProvider>
                    <Toaster />
                    <div className="relative flex min-h-screen flex-col">
                      <div className="flex-1">{children}</div>
                    </div>
                    <TailwindIndicator />
                  </ForumContextProvider>
                </Web3ModalProvider>
              </NextUIProviders>
            </ThemeProvider>
          </SessionProviders>
        </body>
      </html>
    </App>
  )
}
