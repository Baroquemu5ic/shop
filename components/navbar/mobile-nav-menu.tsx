"use client";

import Link from "next/link";
import React from "react";
import { Drawer } from "vaul";

import CloseIcon from "../icons/close";
import SocialMediaIcons from "./social-media";
import { Location } from "../location";

import ContentJson from "@/content.json";
import { ContactBanner } from "../contact-banner";

export function MobileNavMenu() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <HamburgerMenuIcon />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="z-[9999] fixed inset-0 bg-black/40" />
        <Drawer.Content className="z-[99999] text-slate-50 bg-gray-800/90 py-4 flex flex-col rounded-t-[10px] h-full w-[100%] mt-24 fixed bottom-0 right-0">
          <Drawer.Close className="ml-6 mt-4">
            <CloseIcon width={24} height={24} />
          </Drawer.Close>

          <div className="flex flex-col justify-between gap-8 pr-8">
            <div className="flex flex-col">
              {ContentJson.navbar.navLinks.map((navLink) => {
                return (
                  <MobileNavLink
                    key={`mob-navlink-${navLink.href}`}
                    title={navLink.title}
                    href={navLink.href}
                  />
                );
              })}
            </div>

            <ContactBanner className="justify-end" />

            <SocialMediaIcons />

            <div className="flex justify-end">
              <Location className="text-xs" />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function HamburgerMenuIcon() {
  return (
    <div className="space-y-2 opacity-85 cursor-pointer hover:opacity-100">
      <div className="w-8 h-[2px] bg-slate-200"></div>
      <div className="w-8 h-[2px] bg-slate-200"></div>
      <div className="w-8 h-[2px] bg-slate-200"></div>
    </div>
  );
}

type MobileNavLinkProps = {
  href: string;
  title: string;
};

function MobileNavLink({ href, title }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className="pt-2 text-end uppercase text-lg font-light hover:font-medium hover:underline hover:decoration-[#DE7F11] hover:underline-offset-8 ease-in"
    >
      {title}
    </Link>
  );
}
