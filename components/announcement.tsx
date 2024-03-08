"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export function Announcement() {
  const pathname = usePathname();

  if (pathname === "/register") return null;

  return (
    <section className="fixed right-2 bottom-2 z-[999999] p-2 rounded-l-2xl">
      <Link
        href="/register"
        className="text-lg sm:text-xl lg:text-2xl uppercase text-brand-orange animate-pulse ease-in-out hover:animate-none hover:underline hover:underline-offset-[8px]"
      >
        Register Now
      </Link>
    </section>
  );
}
