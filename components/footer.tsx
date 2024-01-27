import Link from "next/link"
import InstagramIcon from './icons/instagram'
import LocationIcon from './icons/location'

import ContentJson from "@/content.json"

export function Footer() {
    return (
        <footer className="w-full border-t-[0.5px] border-slate-600 mt-12 px-6 md:px-12 pt-12 pb-8 flex">
            <nav className="flex flex-col lg:flex-row items-center align-middle justify-between text-sm w-full">
                <a className="text-[#DE7F11] flex items-center" href="https://maps.app.goo.gl/pPZJrBUcc5Fj4Qxc8" target="_blank" rel="noopener noreferrer" title="Our Address">
                    <p className="flex text-center opacity-80">
                        <LocationIcon width={24} height={24} color="#DE7F11" />
                        <span className="tracking-tight">{ContentJson.footer.address}</span>
                    </p>
                </a>

                <div className="flex items-center space-x-4 text-slate-400 mt-4 lg:mt-0">
                    {ContentJson.footer.footerLinks.map((footerLink) => {
                        return !footerLink.isIcon ? (
                            <Link
                                key={`footer-link-${footerLink.href}`}
                                href={footerLink.href}
                                className="hover:opacity-65"
                                title={footerLink.title}
                            >
                                {footerLink.title}
                            </Link> 
                        ) : (
                            <Link
                                key={`footer-link-${footerLink.href}`}
                                href={footerLink.href}
                                className="hover:opacity-65"
                                title={footerLink.title}
                            >
                                <InstagramIcon width={24} height={24} />
                            </Link> 
                        )
                    })}
                </div>

            </nav>
        </footer>
    )
}