import { ServiceCard } from "@/components/service-card"

export default function Home() {
  return (
    <div className="flex w-full">

      <Hero />
      
    </div>
  )
}

function Hero() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-row w-full h-screen bg-[url('../public/images/mainbkg.avif')] bg-center bg-cover items-center justify-center">
        <HeroHeader />
      </div>

      <IntroSection />

    </div>
  )
}

function HeroHeader() {
  return (
    <div className="w-5/6 lg:w-3/5 p-8 lg:p-24 backdrop-grayscale-0 bg-slate-700/40 rounded-2xl flex flex-col items-center space-y-4 text-center">
      <h1 className="text-5xl lg:text-8xl text-slate-100">Baroque Music</h1>
      <p className="text-xl lg:text-2xl text-slate-200">where your music finds harmony</p>
    </div>
  )
}


const ServiceCardsData = [
  {
    title: "Music Lessons",
    href: "/music-lessons",
    description: "Some text content that explains the service briefly",
    imgUrl: "/images/service-lesson.avif"
  },
  {
    title: "Music Jams",
    href: "/music-jams",
    description: "Some text content that explains the service briefly",
    imgUrl: "/images/service-jam.avif"
  },
]



function IntroSection() {
  return (
    <div className="flex flex-col py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-8">
      <p className="text-xl my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum sint possimus ipsa nihil quisquam non? Quibusdam, deleniti corporis. Et ea aperiam vel voluptatum quia quasi optio saepe, numquam quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum sint possimus ipsa nihil quisquam non? Quibusdam, deleniti corporis. Et ea aperiam vel voluptatum quia quasi optio saepe, numquam quod.</p>


      <div className="flex flex-wrap justify-center space-x-0 gap-y-6 lg:space-x-8 lg:gap-y-8 w-full mt-4 lg:mt-0">
        {ServiceCardsData.map((service) => (
            <ServiceCard
              key={service.href}
              imgUrl={service.imgUrl}
              title={service.title}
              href={service.href}
              description={service.description}
            />
          )
        )}
      </div>
    </div>
  )
}



