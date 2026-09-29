import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { SearchIcon } from "@/components/ui/Icons";
import { Shape } from "@/components/ui/Shape";
import { HappyStudentsCard, LearningProgressCard, TopicCard } from "@/components/ui/StatCards";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      {/* Decorative shapes (positions follow the 1440px artboard) */}
      <Shape kind="spring" color="lime" rotate={-20} className="-left-6 top-[256px] hidden lg:block lg:w-[210px]" float />
      <Shape kind="spring-2" color="white" rotate={60} className="left-[14.6%] top-[480px] hidden w-[117px] lg:block" />
      <Shape kind="torus" color="white" rotate={-25} className="bottom-[60px] left-[4.6%] hidden w-[150px] md:block lg:w-[235px]" />
      <Shape kind="cylinder" color="lime" rotate={-30} className="-right-10 top-[240px] hidden lg:block lg:w-[190px]" float />
      <Shape kind="pyramid" color="white" rotate={15} className="left-[78.3%] top-[463px] hidden w-[126px] lg:block" />
      <Shape kind="spring-2" color="white" rotate={-10} className="bottom-[110px] left-[82.7%] hidden w-[130px] md:block lg:w-[200px]" />

      <Navbar />

      <div className="container-page relative z-10 pt-10 text-center lg:pt-[68px]">
        <h1 className="mx-auto max-w-[900px] font-display text-[34px] font-semibold leading-[1.25] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.33]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[820px] text-base text-white/85 sm:text-lg lg:mt-9">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        <form
          role="search"
          action="/#courses"
          className="mx-auto mt-8 flex max-w-[576px] items-center gap-2 sm:gap-4 lg:mt-14"
        >
          <label className="relative flex-1">
            <span className="sr-only">Search courses</span>
            <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="h-[50px] w-full rounded-full bg-white pl-12 pr-5 text-base text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-lime"
            />
          </label>
          <Button type="submit" className="h-[46px] px-7">
            Search
          </Button>
        </form>
      </div>

      {/* Visual stage: a fixed 800px artboard scaled down on small screens */}
      <div className="relative z-10 mt-1 h-[240px] sm:h-[360px] md:h-[430px] lg:h-[505px]">
        <div className="absolute left-1/2 top-0 h-[505px] w-[800px] origin-top -translate-x-1/2 scale-[.47] sm:scale-[.71] md:scale-[.85] lg:scale-100">
          <div className="absolute left-1/2 top-[45px] h-[1114px] w-[1114px] -translate-x-1/2 rounded-full bg-lime" />
          <Image
            src="/images/hero-student.png"
            alt="Smiling student with headphones holding a laptop"
            width={516}
            height={483}
            priority
            className="absolute left-[188px] top-0 w-[505px]"
          />
          <TopicCard className="absolute left-[85px] top-[121px] w-[205px]" />
          <LearningProgressCard className="absolute left-[522px] top-[137px] w-[230px]" />
          <HappyStudentsCard className="absolute left-[9px] top-[322px] w-[254px]" />
        </div>
      </div>
    </section>
  );
}
