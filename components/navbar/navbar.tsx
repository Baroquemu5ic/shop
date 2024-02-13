import Link from "next/link";
import BaroqueLogo from "../icons/logo";

import { MobileNavMenu } from "./mobile-nav-menu";

import ContentJson from "@/content.json";
import SocialMediaIcons from "./social-media";
import { MusicIcon } from "../music-icon";

export function Navbar() {
  return (
    <header className="z-50 fixed top-0 left-0 right-0 py-6 px-6 md:px-12 flex justify-between shadow backdrop-blur-lg hover:bg-gray-900/60 hover:ease-in">
      <Link
        href="/"
        className="flex items-center hover:opacity-80 ease-in group"
        title={ContentJson.navbar.logoHeader}
      >
        <BaroqueLogo
          width={40}
          height={40}
          className="group-hover:rotate-45 group-hover:scale-150 -mt-3 ease-in duration-150"
        />
        <div className="absolute hidden group-hover:block group-hover:animate-pulse group-hover:duration-100">
          <MusicIcon
            width={16}
            height={16}
            className="absolute left-[30px] -top-[25px]"
          />
          <MusicIcon
            width={16}
            height={16}
            className="absolute left-[46px] -top-[30px]"
          />
        </div>
        <div className="text-2xl uppercase text-[#DE7F11] font-extrabold">
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
