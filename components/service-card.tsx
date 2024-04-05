"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  imgUrl: string;
}

export function ServiceCard({
  title,
  href,
  description,
  imgUrl,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col p-4 justify-between bg-white rounded-2xl overflow-hidden">
      <div className="overflow-hidden flex-grow">
        <Image
          src={imgUrl}
          width={160}
          height={90}
          alt={title}
          className="object-cover"
          style={{
            width: "100%",
            height: "auto",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority
        />
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-xl font-bold text-slate-700 text-center">
            {title}
          </h3>
          <p className="text-slate-800 text-sm">{description}</p>
        </div>
      </div>

      <Link
        href={href}
        className="mt-8 rounded-md px-4 py-2 bg-blue-600 text-xl text-center hover:opacity-85 flex-shrink-0"
      >
        Learn More
      </Link>
    </div>
  );
}
