import type { Metadata } from "next";
import { GoogleMapsEmbed } from "@/components/google-maps-embed";
import ContentJson from "@/content.json";

const { seo } = ContentJson;

const pageTitle =
  "About Us | Baroque Academy of Performing Arts & Production | Babusapalya, Kalyan Nagar, Bangalore";

export const metadata: Metadata = {
  title: pageTitle,
  description: seo.description,
  keywords: seo.keywords,
};

export default function AboutPage() {
  return (
    <div className="flex w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
        <h2 className="text-4xl text-slate-200">
          {ContentJson.about.pageHeader}
        </h2>

        {ContentJson.home.introductionText.map((introTextFragment, idx) => {
          return (
            <p
              className="text-xl my-4 text-center mx-4 lg:mx-12"
              key={`intro-text-frag-${idx}`}
            >
              {introTextFragment}
            </p>
          );
        })}

        <div className="flex flex-col space-y-6 mx-8 pt-12 lg:mx-12 w-4/5 md:w-3/5 h-[500px]">
          <h3 className="text-3xl text-slate-200 text-center">
            {ContentJson.about.addressHeader}
          </h3>
          <GoogleMapsEmbed />
        </div>
      </div>
    </div>
  );
}
