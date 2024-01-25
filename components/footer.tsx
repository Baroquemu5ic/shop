import Link from "next/link"
import InstagramIcon from './icons/instagram'
import LocationIcon from './icons/location'

export function Footer() {
    return (
        <footer className="w-full border-t-[0.5px] border-slate-600 mt-12 px-6 md:px-12 pt-16 pb-8 flex">
            <nav className="flex flex-col lg:flex-row items-center align-middle justify-between text-sm w-full">
                <a className="text-[#DE7F11] flex items-center" href="https://maps.app.goo.gl/pPZJrBUcc5Fj4Qxc8" target="_blank" rel="noopener noreferrer" title="Our Address">
                    <p className="flex text-center opacity-80">
                        <LocationIcon width={24} height={24} color="#DE7F11" />
                        <span className="tracking-tight">SVS Windgates, 13th Cross Street, Horamavu Agara, Babausapalya near Kalyan Nagar, Bangalore - 560043</span>
                    </p>
                </a>

                <div className="flex items-center space-x-4 text-slate-400 mt-4 lg:mt-0">
                    <Link href="" className="hover:opacity-65">About</Link>
                    <Link href="" className="hover:opacity-65">Contact</Link>
                    <Link href="" className="hover:opacity-65">Careers</Link>
                    <Link href="" className="hover:opacity-65" title="Baroque Music Instagram"><InstagramIcon width={24} height={24} /></Link>
                </div>

            </nav>
        </footer>
    )
}