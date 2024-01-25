import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baroque Music Home | Lessons, Jams in Babusapalya, Kalyan Nagar, Banagalore",
  description: "Baroque Music - a place for music lessons, jams for kids, adults in Babusapalya, Kalyan Nagar, Banagalore ",
  keywords: [
    "music lessons bangalore",
    "kids lessons bangalore",
    "music instruments bangalore",
    "music jams bangalore"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />
        
        <main className="flex flex-col w-full z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
