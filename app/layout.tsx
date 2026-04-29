import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import  Footer  from "@/components/Footer";
import TextSlider from "@/components/TextSlider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "GlobalHire - Overseas Jobs & Workforce Solutions",
  description:
    "Enterprise-grade manpower, visa, and international recruitment platform connecting global talent with trusted employers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="
          min-h-screen flex flex-col
          bg-[#E8EDF2] text-[#0B1220]
          font-sans
          selection:bg-[#0B1220] selection:text-white
        "
      >

        {/* GLOBAL BACKGROUND LAYER (SUBTLE STRUCTURE DEPTH) */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#E8EDF2]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        {/* NAVBAR */}
        <Navbar />
        <TextSlider/>
        {/* MAIN CONTENT */}
        <main className="flex-1 ">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}