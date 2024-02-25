import Link from "next/link";

import BaroqueLogo from "../icons/logo";
import PhoneIcon from "../icons/phone";
import WhatsAppIcon from "../icons/whatsapp";

import { MobileNavMenu } from "./mobile-nav-menu";

import ContentJson from "@/content.json";
import SocialMediaIcons from "./social-media";
import { MusicIcon } from "../music-icon";

export function Navbar() {
  return (
    <header className="z-50 fixed top-0 left-0 right-0 py-6 px-6 md:px-12 flex flex-col gap-4 bg-gray-900/80 shadow backdrop-blur-lg hover:bg-gray-900/60 hover:ease-in">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 ease-in group"
          title={ContentJson.navbar.logoHeader}
        >
          <BaroqueLogo width={50} height={50} className="-ml-[10px]" />

          <div className="text-2xl text-[#DE7F11] font-extrabold xl:self-end">
            {ContentJson.navbar.logoHeader}
          </div>
        </Link>

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

        <div role="menu" className="lg:hidden flex mt-2">
          <MobileNavMenu />
        </div>
      </div>

      <p className="w-full flex pl-[35px] lg:pl-[40px] gap-2 items-center text-xl font-light text-white group">
        <PhoneIcon width={24} height={24} className="animate-pulse" />
        <WhatsAppIcon width={24} height={24} className="animate-pulse" />
        <span>+91 888 464 8080</span>
      </p>
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
