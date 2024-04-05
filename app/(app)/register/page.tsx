import type { Metadata } from "next";
import ContentJson from "@/content.json";
import { RegisterForm } from "@/components/register-form";
import { GoogleMapsEmbed } from "@/components/google-maps-embed";

const { seo } = ContentJson;

const pageTitle =
  "Register | Baroque Academy of Performing Arts & Production  | Babusapalya, Kalyan Nagar, Bangalore";

export const metadata: Metadata = {
  title: pageTitle,
  description: seo.description,
  keywords: seo.keywords,
};

export default function RegisterPage() {
  return (
    <div className="flex w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
        <h2 className="text-4xl text-slate-200">
          {ContentJson.register.pageHeader}
        </h2>

        <div className="w-full lg:w-3/5 min-h-[300px] lg:min-h-[400px] mt-4 mb-12">
          <GoogleMapsEmbed />
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}
