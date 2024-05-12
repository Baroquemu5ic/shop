import Link from "next/link";

import BaroqueLogo from "@/components/icons/logo";
import ABRSMLogo from "@/components/icons/abrsm";
import NewTab from "@/components/icons/new-tab";

import { MobileNavMenu } from "./mobile-nav-menu";

import ContentJson from "@/content.json";
import SocialMediaIcons from "./social-media";

import { ContactBanner } from "../contact-banner";
import { Announcement } from "../announcement";

export function Navbar() {
  return (
    <header className="z-50 fixed top-0 left-0 right-0 py-6 px-6 md:px-8 flex flex-col gap-4 bg-gray-900/80 shadow backdrop-blur-lg hover:bg-gray-900/60 hover:ease-in">
      <div className="flex justify-between items-center z-40">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 ease-in group"
          title={ContentJson.navbar.logoHeader}
        >
          <BaroqueLogo
            width={50}
            height={50}
            className="-ml-[10px] flex-shrink-0"
          />

          <div className="text-xl uppercase font-light text-[#DE7F11] xl:self-center pr-8 lg:pr-0">
            {ContentJson.navbar.logoHeader}
          </div>
        </Link>

        <div>
          <nav className="hidden text-slate-50 lg:flex items-center justify-end space-x-8 z-50">
            {ContentJson.navbar.navLinks.map((navLink) => {
              return (
                <NavLink
                  key={`navlink-${navLink.href}`}
                  title={navLink.title}
                  href={navLink.href}
                />
              );
            })}

            <SocialMediaIcons />
          </nav>
        </div>

        <div role="menu" className="lg:hidden flex mt-2">
          <MobileNavMenu />
        </div>
      </div>

      <div className="flex flex-row items-end gap-4 justify-between lg:items-center">
        <a
          href="https://www.abrsm.org/en-gb"
          target="_blank"
          className="flex flex-col gap-1 pr-3 py-2 leading-3 justify-between items-center border border-brand-orange/50 relative"
        >
          <ABRSMLogo width={90} height={14} />
          <span className="text-xs text-brand-orange">affiliated</span>
          <NewTab
            width={8}
            height={8}
            color="#DE7F11"
            className="absolute right-2 top-2 animate-pulse"
          />
        </a>
        <div className="flex flex-col lg:flex-row gap-4 items-end lg:items-center">
          <ContactBanner />
          <Announcement />
        </div>
      </div>
    </header>
  );
}

type NavLinkProps = {
  href: string;
  title: string;
};

function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="uppercase text-sm font-light hover:font-medium hover:underline hover:decoration-[#DE7F11] hover:underline-offset-8 hover:scale-105 ease-in"
    >
      {title}
    </Link>
  );
}
