import Image from "next/image";
import type { ReactNode } from "react";
import { courses } from "@/data/courses";
import { creatorPerks, stats } from "@/data/site";
import { CourseCard } from "@/components/ui/CourseCard";
import { CheckCircleIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shape } from "@/components/ui/Shape";
import { HappyStudentsCard, LearningProgressCard } from "@/components/ui/StatCards";

const background = {
  backgroundImage: [
    "radial-gradient(circle at 22% 6%, rgb(212 251 32 / 0.35), transparent 28%)",
    "radial-gradient(circle at 0% 92%, rgb(0 59 226 / 0.14), transparent 32%)",
    "radial-gradient(circle at 100% 58%, rgb(0 59 226 / 0.12), transparent 30%)",
  ].join(","),
};

/** Wraps a fixed-size artboard and scales it down on phones. */
function Stage({ children, size }: { children: ReactNode; size: "growth" | "creator" }) {
  const box =
    size === "growth"
      ? "h-[322px] w-[336px] sm:h-[555px] sm:w-[580px]"
      : "h-[286px] w-[325px] sm:h-[492px] sm:w-[560px]";
  const inner = size === "growth" ? "h-[555px] w-[580px]" : "h-[492px] w-[560px]";

  return (
    <div className={`relative mx-auto ${box}`}>
      <div className={`absolute left-0 top-0 origin-top-left scale-[.58] sm:scale-100 ${inner}`}>
        {children}
      </div>
    </div>
  );
}

function RevenueCard() {
  return (
    <div className="absolute left-0 top-[9px] w-[221px] rounded-2xl bg-primary p-3 text-white shadow-float">
      <p className="text-sm font-medium">Total Revenue</p>
      <p className="text-[10px] text-white/70">July 1-23</p>
      <p className="mt-1 font-display text-xl font-semibold">$120.29</p>
      <div className="mt-2 h-1.5 rounded-full bg-white/30">
        <div className="h-full w-3/4 rounded-full bg-lime" />
      </div>
    </div>
  );
}

function YearToDateCard() {
  return (
    <div className="absolute left-0 top-[159px] w-[135px] rounded-2xl bg-primary p-3 text-white shadow-float">
      <p className="text-sm font-medium">Year to Date</p>
      <p className="text-[10px] text-white/70">2023</p>
      <p className="mt-1 font-display text-xl font-semibold">$1,200.38</p>
      <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold text-ink">
        +10%
      </span>
    </div>
  );
}

export function GrowthSection() {
  return (
    <section className="overflow-hidden bg-[#f7f8fb] py-20 lg:py-[120px]" style={background}>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-6">
        <div>
          <SectionHeading
            align="left"
            title={
              <>
                Your Path to Professional <br className="hidden sm:block" />
                Growth Starts Here!
              </>
            }
          />
          <p className="mt-6 max-w-[480px] text-base leading-relaxed text-muted sm:text-lg">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you
            need.
          </p>
          <dl className="mt-8 flex gap-10 sm:mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-base text-muted">{stat.label}</dt>
                <dd className="font-display text-[32px] font-semibold leading-tight text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:justify-self-end lg:translate-x-4">
          <Stage size="growth">
            <CourseCard course={courses[0]} className="absolute left-0 top-0 w-[367px]" />
            <div className="absolute bottom-6 left-[60px] h-16 w-[520px] rounded-[50%] bg-[#1a2040]/25 blur-2xl" />
            <Image
              src="/images/hero-student.png"
              alt="Student learning online with a laptop"
              width={516}
              height={483}
              className="absolute left-[-6px] top-[7px] w-[583px]"
            />
            <Shape kind="spring-2" color="lime" rotate={15} className="left-[430px] top-[70px] w-[160px]" />
            <LearningProgressCard className="absolute left-[341px] top-[209px] w-[234px]" />
          </Stage>
        </div>
      </div>

      <div
        id="creators"
        className="container-page mt-20 grid scroll-mt-10 items-center gap-12 lg:mt-[110px] lg:grid-cols-2 lg:gap-6"
      >
        <div className="order-2 lg:order-1 lg:justify-self-start">
          <Stage size="creator">
            <RevenueCard />
            <YearToDateCard />
            <div className="absolute inset-x-0 top-0 h-[492px] overflow-hidden">
              <Image
                src="/images/creator-woman.png"
                alt="Course creator with headphones holding a tablet"
                width={500}
                height={500}
                className="absolute left-[-102px] top-[-40px] w-[740px] max-w-none"
              />
            </div>
            <Shape kind="spring-2" color="lime" rotate={15} className="left-[335px] top-[105px] w-[150px]" />
            <HappyStudentsCard className="absolute left-[284px] top-[376px] w-[256px]" />
          </Stage>
        </div>

        <div className="order-1 lg:order-2 lg:pl-2">
          <SectionHeading
            align="left"
            title={
              <>
                Create &amp; Manage <br className="hidden sm:block" />
                Courses Easily.
              </>
            }
          />
          <p className="mt-6 max-w-[540px] text-base leading-relaxed text-muted sm:text-lg">
            <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or
            entities in the creation, publication, and administration of educational courses.
          </p>
          <ul className="mt-8 space-y-4">
            {creatorPerks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-base text-ink sm:text-lg">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-primary" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
