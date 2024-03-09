import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "../lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Baroque Academy of Performing Arts & Production | Babusapalya, Kalyan Nagar, Banagalore",
  description:
    "Baroque Academy of Performing Arts & Production in Babusapalya, Kalyan Nagar, Banagalore ",
  keywords: [
    "music lessons bangalore",
    "music production",
    "kids lessons bangalore",
    "music instruments bangalore",
    "performing arts bangalore",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />

        <main className="w-full mt-[220px] lg:mt-[180px] flex flex-col z-10">
          {children}
          <Analytics />
        </main>

        <Footer />

        <Toaster richColors />
      </body>
    </html>
  );
}
