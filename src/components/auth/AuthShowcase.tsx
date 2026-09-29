import { courses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { Shape } from "@/components/ui/Shape";
import { HappyStudentsCard } from "@/components/ui/StatCards";

type AuthShowcaseProps = {
  /** Vertical offset of the lime ring; the login design places it lower than register. */
  ringTop?: number;
};

/** Decorative course-card collage shown beside the auth forms on large screens. */
export function AuthShowcase({ ringTop = 24 }: AuthShowcaseProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-[75px] hidden h-[561px] w-[417px] lg:block xl:h-[660px] xl:w-[490px]"
    >
      <div className="absolute left-0 top-0 h-[660px] w-[490px] origin-top-left scale-[.85] xl:scale-100">
        <CourseCard course={courses[1]} className="absolute left-[2px] top-[198px] w-[367px]" />
        <CourseCard course={courses[2]} className="absolute left-[114px] top-[108px] w-[367px]" />
        <Shape
          kind="torus"
          color="lime"
          rotate={-30}
          className="left-[9px] w-[180px]"
          style={{ top: ringTop }}
          float
        />
        <Shape kind="pyramid" color="lime" rotate={-15} className="left-[20px] top-[522px] w-[135px]" />
        <HappyStudentsCard tone="lime" className="absolute left-[229px] top-[546px] w-[257px]" />
        <Shape kind="spring-2" color="white" rotate={80} className="left-[382px] top-[470px] w-[117px]" />
      </div>
    </div>
  );
}
