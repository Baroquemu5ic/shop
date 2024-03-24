"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import ContentJson from "@/content.json";

export function Announcement() {
  const pathname = usePathname();

  if (pathname === "/register") return null;

  return (
    <section className="z-[999999] rounded-l-2xl">
      <Link
        href="/register"
        className="text-lg sm:text-xl lg:text-2xl uppercase flex text-white animate-pulse ease-in-out hover:animate-none border-brand-orange hover:text-brand-orange border rounded-md py-2 px-4"
      >
        {ContentJson.register.pageHeader}
      </Link>
    </section>
  );
}
