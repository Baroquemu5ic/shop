import { ServiceCard } from "@/components/service-card";
import { GoogleMapsEmbed } from "@/components/google-maps-embed";
import ContentJSON from "@/content.json";

export default function Home() {
  return (
    <div className="flex w-full mt-[0px]">
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row w-full max-[375px]:min-h-[calc(100dvh-20px)]  min-h-[calc(100dvh-100px)] lg:min-h-screen bg-[url('../public/images/mainbkg.avif')] bg-center bg-cover items-center justify-center">
        <HeroHeader />
      </div>

      <div className="flex flex-col items-center gap-8 mt-16">
        <h2 className="text-center text-slate-100 text-2xl lg:text-4xl font-medium">
          {ContentJSON.home.addressHeader}
        </h2>
        <div className="w-4/5 min-h-[300px] lg:min-h-[400px]">
          <GoogleMapsEmbed />
        </div>
      </div>

      <IntroSection />
    </div>
  );
}

function HeroHeader() {
  return (
    <div className="w-5/6 lg:w-3/5 p-8 lg:p-20 backdrop-grayscale-0 bg-slate-700/60 rounded-2xl flex flex-col items-center gap-20 lg:gap-8 text-center">
      <h1 className="text-4xl lg:text-6xl text-slate-100">
        {ContentJSON.home.header}
      </h1>
      <p className="text-xl lg:text-2xl font-medium text-slate-200 italic">
        {ContentJSON.home.subtitle[0]}
        <br />
        {ContentJSON.home.subtitle[1]}
      </p>
    </div>
  );
}

const ServiceCardsData = ContentJSON.home.serviceCards;

function IntroSection() {
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto py-12 px-8 lg:py-16 lg:px-12 text-slate-100 gap-8">
      <h2 className="text-center text-2xl lg:text-4xl font-medium">
        {ContentJSON.home.introductionHeader}
      </h2>

      {ContentJSON.home.introductionText.map((introTextFragment, idx) => {
        return (
          <p
            className="text-xl my-4 text-center lg:mx-12"
            key={`intro-text-frag-${idx}`}
          >
            {introTextFragment}
          </p>
        );
      })}

      <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {ServiceCardsData.map((service) => (
          <ServiceCard
            key={service.href}
            imgUrl={service.imgUrl}
            title={service.title}
            href={service.href}
            description={service.description}
            fees={service.fees}
          />
        ))}
      </div>
    </div>
  );
}
