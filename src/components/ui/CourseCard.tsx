import Image from "next/image";
import type { Course } from "@/data/courses";
import { AvatarGroup } from "./AvatarGroup";
import { LevelIcon, StarIcon } from "./Icons";

type CourseCardProps = {
  course: Course;
  className?: string;
  priority?: boolean;
};

export function CourseCard({ course, className = "", priority = false }: CourseCardProps) {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article
      className={`group flex min-w-0 flex-col rounded-[20px] border border-line bg-white p-4 transition-shadow hover:shadow-card ${className}`}
    >
      <div className="relative aspect-[339/193] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute inset-x-2 bottom-2 flex justify-between gap-1.5">
          {meta.map((item) => (
            <li
              key={item}
              className="truncate rounded-full border border-white/40 bg-white/25 px-2.5 py-1 text-[11px] text-white backdrop-blur-md sm:px-3 sm:text-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="min-w-0 truncate font-display text-lg font-semibold text-ink sm:text-xl">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-lg text-muted">
          {course.rating}
          <StarIcon className="h-4 w-4 text-[#c9cbd0]" />
        </span>
      </div>
      <p className="text-xs text-muted">
        by <span className="text-primary">{course.author}</span>
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-soft px-3 text-xs text-ink">
          <LevelIcon className="h-4 w-4" />
          {course.level}
        </span>
        <AvatarGroup count={4} more={`${course.learners}+`} />
      </div>

      <p className="mt-4 flex items-baseline gap-0.5">
        <span className="font-display text-xl font-bold text-primary">${course.price}</span>
        <span className="text-xs text-muted">/lifetime</span>
      </p>
    </article>
  );
}
