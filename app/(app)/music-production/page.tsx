import Image from "next/image";
import ContentJson from "@/content.json";

export default function MusicProductionPage() {
  return (
    <div className="flex w-full pt-[200px] lg:pt-[120px]">
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
      </div>
    </div>
  );
}
