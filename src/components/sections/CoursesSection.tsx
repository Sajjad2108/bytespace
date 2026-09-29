import Link from "next/link";
import { courses, topics } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoursesSection() {
  return (
    <section id="courses" className="container-page scroll-mt-6 pt-16 lg:pt-20">
      <SectionHeading
        title={
          <>
            Discover Your Passion,
            <br /> Build Your Skills
          </>
        }
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      {/* Rows break exactly as in the design on desktop and wrap freely on smaller screens */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-x-[18px] lg:gap-y-5">
        {topics.map((row, rowIndex) => (
          <div key={rowIndex} className="contents lg:flex lg:w-full lg:justify-center lg:gap-[18px]">
            {row.map((topic) => (
              <button
                key={topic}
                type="button"
                aria-pressed={topic === "Featured"}
                className={`h-9 rounded-full px-4 text-sm text-ink transition-colors sm:h-[42px] sm:px-5 sm:text-base ${
                  topic === "Featured" ? "bg-lime" : "bg-soft hover:bg-line"
                }`}
              >
                {topic}
              </button>
            ))}
            {rowIndex === topics.length - 1 && (
              <Link
                href="/#courses"
                className="flex h-9 items-center px-2 text-sm text-primary sm:h-[42px] sm:text-base"
              >
                + More
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  );
}
