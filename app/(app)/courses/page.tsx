import type { Metadata } from "next";
import Image from "next/image";
import ContentJson from "@/content.json";

const { seo } = ContentJson;

const pageTitle =
  "Courses | Baroque Academy of Performing Arts & Production  | Babusapalya, Kalyan Nagar, Bangalore";

export const metadata: Metadata = {
  title: pageTitle,
  description: seo.description,
  keywords: seo.keywords,
};

export default function CoursesPage() {
  const courses = ContentJson.courses.list;

  return (
    <div className="flex w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center py-12 px-4 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
        <h2 className="text-4xl text-slate-200">
          {ContentJson.courses.pageHeader}
        </h2>

        <div className="w-full mt-8">
          {courses.map((course, idx) => {
            return (
              <div
                key={`course-key-${idx}`}
                className="lg:mb-12 flex flex-col justify-center"
              >
                {idx !== 0 ? (
                  <div className="border-b border-gray-500/40 mt-8 mb-16"></div>
                ) : null}
                <div
                  key={course.id}
                  className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-0"
                >
                  <div className="flex flex-col basis-full items-center lg:items-start lg:basis-1/3">
                    <h2 className="text-xl text-brand-orange mb-4">
                      {course.title}
                    </h2>

                    <Image
                      src={`/images/${course.id}.avif`}
                      alt="Not Found"
                      className="object-cover w-full"
                      width={450}
                      height={200}
                      priority
                    />
                  </div>

                  <ul className="flex flex-col lg:flex-grow lg:basis-2/3 lg:mt-8">
                    {course.highlights.map((highlight, index) => {
                      return (
                        <li
                          key={`${course.id}-${index}`}
                          className="text-lg lg:text-xl my-2 mx-8 lg:mx-12 list-disc"
                        >
                          {highlight}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
