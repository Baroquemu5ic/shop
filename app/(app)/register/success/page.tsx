import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContentJson from "@/content.json";

const { seo } = ContentJson;

const pageTitle =
  "Registration Success | Baroque Academy of Performing Arts & Production  | Babusapalya, Kalyan Nagar, Bangalore";

export const metadata: Metadata = {
  title: pageTitle,
  description: seo.description,
  keywords: seo.keywords,
};

export default function RegisterSuccessPage() {
  return (
    <div className="flex w-full max-w-[1440px] mx-auto">
      <div className="mt-12 flex flex-col items-center py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
        <h2 className="text-2xl lg:text-4xl text-center text-slate-200">
          {ContentJson.registerSuccess.pageHeader}
        </h2>

        <div className="mt-4 w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <svg
            className="flex-shrink-0"
            fill="green"
            width="40px"
            height="40px"
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M58.3945,32.1563,42.9961,50.625l-5.3906-6.4629a5.995,5.995,0,1,0-9.211,7.6758l9.9961,12a5.9914,5.9914,0,0,0,9.211.0059l20.0039-24a5.9988,5.9988,0,1,0-9.211-7.6875Z" />
              <path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z" />
            </g>
          </svg>

          <h3 className="text-lg lg:text-2xl text-center text-slate-400">
            {ContentJson.registerSuccess.description}
          </h3>
        </div>

        <Link
          href={"/"}
          className="bg-blue-600 text-slate-100 rounded-lg px-8 py-4"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
