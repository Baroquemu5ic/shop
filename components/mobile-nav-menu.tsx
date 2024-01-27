"use client"

import Link from "next/link"
import React from "react"
import CloseIcon from "./icons/close"

import ContentJson from "@/content.json"

export function MobileNavMenu() {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="w-8 h-8 transition ease-in-out">
            {open ? (<MobileNavMenuLinks onClose={() => setOpen(false)} />) : null} 
            {open ? null : (<HamburgerMenuIcon onClickHandler={() => setOpen(true) } />)} 
        </div>
    )
}

interface HamburgerMenuIconProps {
    onClickHandler: () => void
}

function HamburgerMenuIcon({ onClickHandler }: HamburgerMenuIconProps) {
    return (
        <div className="space-y-2 opacity-85 cursor-pointer hover:opacity-100" onClick={onClickHandler}>
            <div className="w-8 h-[2px] bg-slate-200"></div>
            <div className="w-8 h-[2px] bg-slate-200"></div>
            <div className="w-8 h-[2px] bg-slate-200"></div>
        </div>
    )
}


interface MobileNavMenuProps {
    onClose: () => void
}

function MobileNavMenuLinks({ onClose } : MobileNavMenuProps) {
    return (
        <div className="" onClick={onClose}>
            <CloseIcon className="opacity-85 cursor-pointer hover:opacity-100" width={32} height={32} color="white" onClick={onClose} />

            <nav className="mt-[24px] flex-col space-y-4 flex absolute left-0 right-0 w-full h-screen backdrop-blur-lg bg-slate-700/80 text-slate-50 py-4">
            {ContentJson.navbar.navLinks.map((navLink) => {
                    return (
                        <MobileNavLink
                            key={`mob-navlink-${navLink.href}`}
                            title={navLink.title}
                            href={navLink.href}
                        />
                    )
                })}
            </nav>
        </div>
    )
}


type MobileNavLinkProps = {
    href: string;
    title: string;
  }
  
  function MobileNavLink({ href, title } : MobileNavLinkProps) {
      return (
          <Link
              href={href}
              className="pt-2 pr-8 text-end uppercase text-lg font-light hover:font-medium hover:underline hover:decoration-[#DE7F11] hover:underline-offset-8 ease-in"
          >
              {title}
          </Link>
      )
  }
  