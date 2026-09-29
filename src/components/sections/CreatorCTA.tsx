import { authLinks } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shape } from "@/components/ui/Shape";

export function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-grid py-24 lg:py-[100px]">
      <Shape kind="spring" color="lime" rotate={-25} className="-left-5 -top-3 w-20 sm:w-28 lg:w-[170px]" />
      <Shape kind="spring-2" color="white" rotate={60} className="left-[14.6%] top-9 hidden w-[117px] lg:block" />
      <Shape kind="cone" color="white" rotate={-35} className="-left-3 top-[243px] hidden w-[125px] md:block" />
      <Shape kind="torus" color="lime" rotate={-20} className="-bottom-10 left-[8%] w-24 sm:w-32 lg:w-[190px]" />
      <Shape kind="pyramid" color="lime" rotate={-10} className="left-[76.5%] top-[18px] hidden w-[140px] md:block" />
      <Shape kind="cylinder" color="white" rotate={20} className="-right-8 top-9 w-20 sm:w-32 lg:w-[200px]" />
      <Shape kind="spring" color="lime" rotate={-30} className="-bottom-12 left-[81.5%] hidden w-[170px] md:block" />

      <div className="container-page relative z-10 text-center">
        <SectionHeading
          tone="light"
          className="max-w-[640px]"
          title="Unlock Your Potential as a Creator with ByteSpace"
        />
        <p className="mx-auto mt-6 max-w-[960px] text-base leading-relaxed text-white/85 sm:text-lg">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href={authLinks.joinUs} className="mt-8 px-7">
          Join as Creator
        </ButtonLink>
      </div>
    </section>
  );
}
