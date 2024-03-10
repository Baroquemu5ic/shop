"use client";

import Link from "next/link";
import React from "react";
import { Drawer } from "vaul";

import CloseIcon from "../icons/close";
import SocialMediaIcons from "./social-media";
import { Location } from "../location";

import ContentJson from "@/content.json";
import { ContactBanner } from "../contact-banner";
import Image from "next/image";
import YoutubeIcon from "../icons/youtube";
import InstagramIcon from "../icons/svg/InstagramIcon.svg";

export function MobileNavMenu() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <HamburgerMenuIcon />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="z-[9999] fixed inset-0 bg-black/40" />
        <Drawer.Content className="z-[99999] text-slate-50 bg-gray-800/90 py-4 flex flex-col rounded-t-[10px] h-[100dvh] w-[100%] mt-24 fixed bottom-0 right-0">
          <Drawer.Close className="ml-6 mt-4" id="close-mobile-nav-button">
            <CloseIcon width={24} height={24} />
          </Drawer.Close>

          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col items-center mt-8 gap-4">
              <ContactBanner className="justify-center pl-0" />
              <Location className="text-xs justify-center" />
            </div>

            <div>
              <div>
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

              <div className="flex justify-center mt-8 gap-12">
                <a
                  href="https://www.youtube.com/@BaroqueMu5ic"
                  target="_blank"
                  title="Youtube"
                  className="px-6 cursor-pointer hover:scale-105 ease-in"
                >
                  <YoutubeIcon className="size-[48px]" />
                </a>
                <a
                  href="https://www.instagram.com/baroquemusic.in/"
                  target="_blank"
                  title="Instagram"
                  className="px-6 cursor-pointer hover:scale-105 ease-in"
                >
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    className="size-[48px]"
                  />
                </a>
              </div>
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
      onClick={(e) => {
        // setTimeout(() => {
        const closebtn = document.getElementById("close-mobile-nav-button");
        if (closebtn && typeof closebtn?.click === "function") {
          closebtn?.click();
        }
        // }, 1);
      }}
      className="block text-center py-4 uppercase text-lg font-light hover:font-medium hover:underline hover:decoration-[#DE7F11] hover:underline-offset-8 ease-in"
    >
      {title}
    </Link>
  );
}
