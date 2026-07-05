import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://garyyang.in"),
  title: "Gary Yang | Portfolio",
  description:
    "Gary Yang (Fu-Chun Yang) — Applied Mathematics student at UC Santa Cruz. Data science, AI research, and full-stack development. Published at ICML 2025 Workshop.",
  openGraph: {
    title: "Gary Yang | Portfolio",
    description:
      "Applied Mathematics @ UC Santa Cruz — data science, AI research, and full-stack development.",
    type: "website",
    images: ["/IMG_5214.JPG"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
