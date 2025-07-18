import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HyperSwap - Professional Car Wash Services",
  description: "The best car wash with full range of services: hand wash, mobile wash, classic wash and car detailing.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Navigation />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  )
}
