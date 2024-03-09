import Image from "next/image";
import ContentJson from "@/content.json";

export default function MusicProductionPage() {
  return (
    <div className="flex w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
        <h2 className="text-4xl text-slate-200">
          {ContentJson.home.serviceCards[2].title}
        </h2>

        <Image
          src={ContentJson.home.serviceCards[2].imgUrl}
          alt={ContentJson.home.serviceCards[2].title}
          className=""
          width={450}
          height={200}
          priority
        />

        <p className="text-xl my-4 mx-8 lg:mx-12">
          {ContentJson.home.serviceCards[2].description}
        </p>

        <h2 className="text-xl uppercase underline underline-offset-8 decoration-brand-orange">
          Courses in Music Production
        </h2>

        <div className="mt-[60px] flex flex-col">
          {ContentJson.courses.list[2].highlights.map((highlight, index) => {
            return (
              <p
                key={`highlight-${index}`}
                className="text-lg lg:text-xl my-4 mx-8 lg:mx-12"
              >
                {highlight}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
