import Image from "next/image";
import ContentJson from "@/content.json";

export default function CoursesPage() {
  const courses = ContentJson.courses.list;

  return (
    <div className="flex w-full pt-[200px] lg:pt-[120px]">
      <div className="flex flex-col items-center py-12 px-8 lg:py-16 lg:px-12 text-slate-100 space-y-12 w-full min-h-screen">
        <h2 className="text-4xl text-slate-200">
          {ContentJson.courses.pageHeader}
        </h2>

        <div className="w-full mt-8">
          {courses.map((course, idx) => {
            return (
              <>
                <div
                  key={course.id}
                  className="flex flex-col lg:flex-row lg:items-baseline"
                >
                  <h2 className="text-xl text-brand-orange flex lg:justify-end  lg:w-[35%]">
                    {course.title}
                  </h2>
                  <div className="flex flex-col lg:flex-grow lg:justify-start lg:w-[65%] lg:pr-[120px]">
                    {course.highlights.map((highlight, index) => {
                      return (
                        <p
                          key={`${course.id}-${index}`}
                          className="text-lg lg:text-xl my-4 mx-8 lg:mx-12"
                        >
                          {highlight}
                        </p>
                      );
                    })}
                  </div>
                </div>

                <div className="last-of-type:hidden border-t border-gray-800 my-8 lg:mx-[120px]"></div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
