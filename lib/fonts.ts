import {
  Goldman as FontGoldman,
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Montserrat,
} from "next/font/google"
import localFont from "next/font/local"

export const fontMont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["400", "500", "600", "700", "800"],
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontGoldman = FontGoldman({
  subsets: ["latin"],
  variable: "--font-goldman",
  weight: ["400", "700"],
})

export const fontMonumentExtended = localFont({
  src: "./fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument",
})
