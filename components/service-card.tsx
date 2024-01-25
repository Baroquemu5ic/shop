"use client"

import Image from "next/image"
import Link from "next/link"


interface ServiceCardProps {
    title: string;
    href: string;
    description: string;
    imgUrl: string;
}   

export function ServiceCard({ title, href, description, imgUrl } : ServiceCardProps) {
    return (
        <div className="flex flex-col p-4 bg-white rounded-2xl w-4/5 lg:w-[350px] min-h-[250px] overflow-hidden">
            <div className="grow-0 overflow-hidden border">
                <Image
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={300}
                    height={200}
                    priority
                />
            </div>
    
            <div className="grow p-4 flex flex-col items-center gap-y-2">
                <h3 className="text-lg font-bold mb-2 text-slate-700">{title}</h3>
                <p className="text-slate-800 text-sm">{description}</p>
                <Link href={href} className="rounded-md px-4 py-2 bg-blue-600 text-center hover:opacity-85">
                    Learn More
                </Link>
            </div>
        </div>
    )
}