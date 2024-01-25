import Link from "next/link";
import BaroqueLogo from './icons/logo'
import { MobileNavMenu } from "./mobile-nav-menu";

export function Navbar() {
    return (
        <header className="z-50 fixed top-0 left-0 right-0 py-6 px-6 md:px-12 flex justify-between shadow backdrop-blur-lg">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 ease-in" title="Baroque Music">
                <BaroqueLogo width={40} height={40} />
                <span className="text-xl uppercase text-[#DE7F11] font-extrabold">Baroque Music</span>
            </Link>
            

            <nav className="hidden text-slate-50 lg:flex items-center justify-end space-x-8 z-50">
                <NavLink title="Services" href="/services" />
                <NavLink title="Contact" href="/contact" />
                <NavLink title="About" href="/about" />
                <NavLink title="Blog" href="/blog" />
            </nav>

            <div role="menu" className="lg:hidden flex mt-2">
                <MobileNavMenu />
            </div>

        </header>
    )
}

type NavLinkProps = {
  href: string;
  title: string;
}

function NavLink({ href, title } : NavLinkProps) {
    return (
        <Link
            href={href}
            className="uppercase text-lg font-light hover:font-medium hover:underline hover:decoration-[#DE7F11] hover:underline-offset-8 hover:scale-105 ease-in"
        >
            {title}
        </Link>
    )
}

