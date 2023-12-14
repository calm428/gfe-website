import { JetBrains_Mono as FontMono, Inter as FontSans, Montserrat as FontMont } from "next/font/google"

export const fontMont = FontMont({
  subsets: ["latin"],
  variable: "--font-mont",
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
