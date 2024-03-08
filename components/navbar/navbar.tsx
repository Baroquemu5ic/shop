import Link from "next/link";

import BaroqueLogo from "../icons/logo";

import { MobileNavMenu } from "./mobile-nav-menu";

import ContentJson from "@/content.json";
import SocialMediaIcons from "./social-media";

import { ContactBanner } from "../contact-banner";
import { Announcement } from "../announcement";

export function Navbar() {
  return (
    <header className="z-50 fixed top-0 left-0 right-0 py-6 px-6 md:px-12 flex flex-col gap-4 bg-gray-900/80 shadow backdrop-blur-lg hover:bg-gray-900/60 hover:ease-in">
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

          <div className="text-2xl text-[#DE7F11] font-extrabold xl:self-end pr-8 lg:pr-0">
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

          <Announcement />
        </div>

        <div role="menu" className="lg:hidden flex mt-2">
          <MobileNavMenu />
        </div>
      </div>

      <ContactBanner />
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
      className="uppercase text-lg font-light hover:font-medium hover:underline hover:decoration-[#DE7F11] hover:underline-offset-8 hover:scale-105 ease-in"
    >
      {title}
    </Link>
  );
}
