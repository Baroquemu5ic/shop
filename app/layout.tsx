import "./globals.css";

import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

import { cn } from "../lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

import ContentJSON from "@/content.json";

const { seo } = ContentJSON;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
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
      <GoogleAnalytics gaId="G-NZN2Q28BN4" />
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
